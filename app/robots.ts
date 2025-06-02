import type { MetadataRoute } from "next"

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.inboxathletics.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}