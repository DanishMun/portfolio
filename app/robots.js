import { siteUrl } from "../lib/content";

// /robots.txt: tells search engines they may read every page, and where the sitemap is.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
