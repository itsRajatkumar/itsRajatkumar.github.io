import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/index-now";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, slug, urls: providedUrls } = body;

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://rajatkumar.tech";
    let urlsToIndex: string[] = [];

    if (providedUrls && Array.isArray(providedUrls)) {
      urlsToIndex = providedUrls.map((url) =>
        url.startsWith("http") ? url : `${siteUrl}${url}`,
      );
    } else if (type || slug) {
      // Map Sanity types to URLs
      switch (type) {
        case "post":
          urlsToIndex.push(`${siteUrl}/blog/${slug}`);
          break;
        case "category":
          urlsToIndex.push(`${siteUrl}/blog/category/${slug}`);
          break;
        case "author":
          urlsToIndex.push(`${siteUrl}/blog/author/${slug}`);
          break;
        case "project":
          urlsToIndex.push(`${siteUrl}/projects/${slug}`);
          break;
        case "siteSettings":
          // Site settings affect multiple pages
          urlsToIndex.push(
            `${siteUrl}/`,
            `${siteUrl}/about`,
            `${siteUrl}/contact`,
            `${siteUrl}/experience`,
            `${siteUrl}/projects`,
            `${siteUrl}/blog`,
          );
          break;
        case "skill":
          urlsToIndex.push(`${siteUrl}/`, `${siteUrl}/about`);
          break;
        case "experience":
          urlsToIndex.push(`${siteUrl}/`, `${siteUrl}/experience`);
          break;
        default:
          return NextResponse.json(
            { error: "Unsupported document type" },
            { status: 400 },
          );
      }
    } else {
      return NextResponse.json(
        { error: "Missing type and slug or urls" },
        { status: 400 },
      );
    }

    const result = await submitToIndexNow(urlsToIndex);

    if (result.success) {
      return NextResponse.json({ success: true, indexedUrls: urlsToIndex });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error("IndexNow API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
