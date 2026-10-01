import { test } from "node:test";
import assert from "node:assert/strict";
import {
  getExperience,
  getFaq,
  scoreJobFit,
} from "./mcp-tools";
import { handleJsonRpc } from "./mcp-rpc";

test("get_experience filters by company (case-insensitive substring)", () => {
  const all = getExperience() as { roles: unknown[] };
  assert.ok(all.roles.length >= 5);
  const rack = getExperience({ company: "rackspace" }) as {
    roles: { company: string }[];
  };
  assert.equal(rack.roles.length, 1);
  assert.equal(rack.roles[0].company, "Rackspace Technology");
  const none = getExperience({ company: "nonexistent-co" }) as {
    roles: unknown[];
  };
  assert.equal(none.roles.length, 0);
});

test("get_faq ranks 'Who is…' first for query 'who is daniel'", () => {
  const res = getFaq({ query: "who is daniel" }) as {
    faq: { question: string }[];
  };
  assert.ok(res.faq.length > 0);
  assert.ok(res.faq.length <= 3);
  assert.match(res.faq[0].question, /^Who is/);
});

test("score_job_fit matches confirmed skills and does not fabricate Java", () => {
  const res = scoreJobFit({
    job_description:
      "Looking for an engineer with BigQuery, Airflow, Java, and PySpark experience.",
  }) as { matched: string[] };
  const lower = res.matched.map((m) => m.toLowerCase());
  assert.ok(lower.some((m) => m.includes("bigquery")));
  assert.ok(lower.some((m) => m.includes("airflow")));
  assert.ok(lower.some((m) => m.includes("pyspark")));
  assert.ok(!lower.includes("java"));
  assert.ok(!lower.includes("javascript"));
});

test("score_job_fit does not substring-match inside words", () => {
  const res = scoreJobFit({
    job_description: "archive the same bash script",
  }) as { matched: string[] };
  assert.ok(!res.matched.includes("Hive"));
  assert.ok(!res.matched.includes("SAM"));
  // "Bash" IS a confirmed skill, so a standalone "bash" legitimately matches.
  assert.deepEqual(res.matched, ["Bash"]);
});

test("score_job_fit respects word boundaries for SQL vs NoSQL", () => {
  const noSql = scoreJobFit({ job_description: "NoSQL only" }) as {
    matched: string[];
  };
  assert.ok(!noSql.matched.includes("SQL"));
  const sqlServer = scoreJobFit({ job_description: "SQL Server" }) as {
    matched: string[];
  };
  assert.ok(sqlServer.matched.includes("SQL"));
});

test("score_job_fit expands parenthetical skills", () => {
  const res = scoreJobFit({
    job_description: "ThoughtSpot NLQ dashboards",
  }) as { matched: string[] };
  assert.ok(res.matched.includes("ThoughtSpot"));
  assert.ok(res.matched.includes("NLQ"));
});

test("score_job_fit never emits bare Snowflake", () => {
  const res = scoreJobFit({
    job_description: "Snowflake data warehouse",
  }) as { matched: string[] };
  assert.ok(!res.matched.some((m) => /snowflake/i.test(m)));
  const schema = scoreJobFit({
    job_description: "snowflake schema modeling",
  }) as { matched: string[] };
  assert.ok(schema.matched.includes("snowflake schema"));
});

test("JSON-RPC initialize", () => {
  const res = handleJsonRpc({
    jsonrpc: "2.0",
    id: 1,
    method: "initialize",
  }) as { result: { protocolVersion: string; serverInfo: { name: string } } };
  assert.equal(res.result.protocolVersion, "2025-06-18");
  assert.equal(res.result.serverInfo.name, "dar4datascience");
});

test("JSON-RPC tools/list returns 7 tools", () => {
  const res = handleJsonRpc({
    jsonrpc: "2.0",
    id: 2,
    method: "tools/list",
  }) as { result: { tools: { name: string }[] } };
  assert.equal(res.result.tools.length, 7);
});

test("JSON-RPC tools/call get_profile", () => {
  const res = handleJsonRpc({
    jsonrpc: "2.0",
    id: 3,
    method: "tools/call",
    params: { name: "get_profile", arguments: {} },
  }) as {
    result: { content: { type: string; text: string }[]; isError: boolean };
  };
  assert.equal(res.result.isError, false);
  const parsed = JSON.parse(res.result.content[0].text);
  assert.equal(parsed.name, "Daniel Amieva Rodriguez");
});

test("JSON-RPC unknown method returns -32601", () => {
  const res = handleJsonRpc({
    jsonrpc: "2.0",
    id: 4,
    method: "no/such",
  }) as { error: { code: number } };
  assert.equal(res.error.code, -32601);
});
