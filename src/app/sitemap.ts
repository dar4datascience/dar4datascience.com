import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/experience", "/skills", "/projects", "/services", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
    }),
  );
}
