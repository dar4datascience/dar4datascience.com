import { TOOLS, callTool, ToolNotFoundError } from "./mcp-tools";

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "dar4datascience", version: "1.0.0" };

type JsonRpcId = string | number | null;

function result(id: JsonRpcId, res: unknown) {
  return { jsonrpc: "2.0", id, result: res };
}

function error(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0", id, error: { code, message } };
}

function handleSingle(req: unknown): object | null {
  if (
    typeof req !== "object" ||
    req === null ||
    (req as Record<string, unknown>).jsonrpc !== "2.0" ||
    typeof (req as Record<string, unknown>).method !== "string"
  ) {
    return error(null, -32600, "Invalid Request");
  }
  const { id = null, method, params } = req as {
    id?: JsonRpcId;
    method: string;
    params?: Record<string, unknown>;
  };

  switch (method) {
    case "initialize":
      return result(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
        instructions:
          "Tools expose the verified professional profile of Daniel Amieva Rodriguez.",
      });
    case "notifications/initialized":
      return null;
    case "ping":
      return result(id, {});
    case "tools/list":
      return result(id, { tools: TOOLS });
    case "tools/call": {
      const toolName = params?.name;
      if (typeof toolName !== "string") {
        return error(id, -32602, "tools/call requires params.name");
      }
      try {
        const out = callTool(
          toolName,
          params?.arguments as Record<string, unknown> | undefined,
        );
        return result(id, {
          content: [
            { type: "text", text: JSON.stringify(out, null, 2) },
          ],
          isError: false,
        });
      } catch (e) {
        if (e instanceof ToolNotFoundError) {
          return error(id, -32602, e.message);
        }
        return error(
          id,
          -32603,
          e instanceof Error ? e.message : "Internal error",
        );
      }
    }
    default:
      return error(id, -32601, `Method not found: ${method}`);
  }
}

/** Pure JSON-RPC handler. Returns response object/array, or null for notifications-only input. */
export function handleJsonRpc(body: unknown): object | object[] | null {
  if (Array.isArray(body)) {
    const responses = body
      .map(handleSingle)
      .filter((r): r is object => r !== null);
    return responses;
  }
  return handleSingle(body);
}
