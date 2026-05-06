/**
 * Utility to submit URLs to IndexNow
 * Documentation: https://www.indexnow.org/documentation
 */

export async function submitToIndexNow(urls: string[]) {
  const host = process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "");
  const key = process.env.INDEX_NOW_KEY;

  if (!host || !key) {
    console.error(
      "IndexNow Error: Missing NEXT_PUBLIC_SITE_URL or INDEX_NOW_KEY",
    );
    return { success: false, error: "Missing environment variables" };
  }

  const payload = {
    host,
    key,
    keyLocation: `https://${host}/index-now-key.txt`,
    urlList: urls,
  };

  try {
    // Submit to IndexNow (Bing/Yandex etc.)
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(
      `status: ${response.status} response body: ${JSON.stringify(response.body)}`,
    );

    if (response.status === 200 || response.status === 202) {
      return { success: true };
    } else {
      const errorText = await response.text();
      console.error(`IndexNow API Error (${response.status}):`, errorText);
      return { success: false, error: `API responded with ${response.status}` };
    }
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
