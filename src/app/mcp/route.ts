import { NextRequest, NextResponse } from "next/server";
import { handleJsonRpc } from "@/lib/mcp-rpc";
import { TOOLS } from "@/lib/mcp-tools";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "content-type, mcp-session-id, mcp-protocol-version",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export function GET() {
  return NextResponse.json(
    {
      name: "dar4datascience",
      version: "1.0.0",
      protocol: "mcp",
      transport: "streamable-http",
      endpoint: "/mcp",
      tools: TOOLS.map((t) => t.name),
    },
    { headers: CORS },
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      },
      { status: 400, headers: CORS },
    );
  }

  const isNotificationOnly =
    !Array.isArray(body) &&
    typeof body === "object" &&
    body !== null &&
    (body as { method?: string }).method === "notifications/initialized";

  const response = handleJsonRpc(body);

  if (response === null || isNotificationOnly) {
    return new NextResponse(null, { status: 202, headers: CORS });
  }
  return NextResponse.json(response, { headers: CORS });
}
