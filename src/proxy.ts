import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  if (req.headers.get("host")?.startsWith("www.")) {
    const url = req.nextUrl.clone();
    url.host = url.host.replace(/^www\./, "");
    url.port = "";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}
