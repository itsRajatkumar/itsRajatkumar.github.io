import { NextRequest, NextResponse } from 'next/server';

/**
 * Serves the IndexNow key file at /YOUR_KEY.txt
 * Search engines use this to verify ownership of the domain.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { key: string } }
) {
  const { key } = params;
  const expectedKey = process.env.INDEX_NOW_KEY;

  // The request will be for something like /uuid.txt
  // So we check if the key in the URL matches our internal key
  if (expectedKey && key === expectedKey) {
    return new NextResponse(expectedKey, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return new NextResponse('Not Found', { status: 404 });
}
