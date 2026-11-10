import { siteUrl } from "../lib/content";

// /sitemap.xml: the list of pages we ask Google to read. This site has one page.
export default function sitemap() {
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
