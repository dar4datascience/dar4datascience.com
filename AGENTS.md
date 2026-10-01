# AGENTS.md — dar4datascience.com

Personal website for Daniel Amieva Rodriguez. Next.js (App Router, TypeScript, Tailwind v4) deployed to Cloudflare Workers via OpenNext.

## Environment

Node.js is installed user-level via fnm (no system node/npm). Activate it in every shell:

```bash
export PATH="$HOME/.local/share/fnm:$PATH" && eval "$(fnm env --shell bash)" && fnm use lts-latest
```

(Currently Node v24.21.0 / npm 11.19.0. If the fnm env line fails, the node binaries are also symlinked into `~/.local/bin`.)

## Facts

`src/data/profile.ts` is the **single source of truth** for every factual claim on the site. Do not add claims that are not in it. It must stay in sync with `~/Documents/Curriculum-Vitae/.devin/skills/cv-tailoring/candidate-facts.md`.

## Scripts

- `npm run dev` — Next.js dev server
- `npm run build` — Next.js build (runs `prebuild` first, regenerating `public/llms.txt` + `public/llms-full.txt` from `profile.ts`)
- `npm test` — unit tests (`tsx --test`, Node's `node:test` runner)
- `npm run lint` — ESLint
- `npm run preview` — `opennextjs-cloudflare build && opennextjs-cloudflare preview` (local workerd)
- `npm run deploy` — `opennextjs-cloudflare build && opennextjs-cloudflare deploy`
- `npm run cf-typegen` — regenerate `env.d.ts` Cloudflare bindings types
- `npx tsx scripts/gen-llms-txt.ts` — manually regenerate llms.txt files

## Architecture notes

- All pages are server components, fully static. Facts always come from `@/data/profile`.
- `src/lib/schema.ts` builds the JSON-LD graph; `src/components/JsonLd.tsx` renders it.
- `src/app/mcp/route.ts` is a dependency-free MCP JSON-RPC endpoint (tools in `src/lib/mcp-tools.ts`, RPC plumbing in `src/lib/mcp-rpc.ts`).
- No CSP header — Cloudflare's WebMCP pack injects a bridge script.
- Deploy config: `wrangler.jsonc` (worker name `dar4datascience-com`, custom domains dar4datascience.com + www).
