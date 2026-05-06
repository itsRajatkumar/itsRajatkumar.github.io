import { NextResponse } from 'next/server';

/**
 * Serves the IndexNow key for search engine verification.
 * By using this custom path and specifying it as 'keyLocation' in our requests,
 * we avoid using complex dynamic routes at the root level.
 */
export async function GET() {
  const key = process.env.INDEX_NOW_KEY;

  if (!key) {
    return new NextResponse('IndexNow Key not configured', { status: 500 });
  }

  return new NextResponse(key, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
