import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname: targetRoute } = request.nextUrl;

  // a method to log since console logging is 🙅🏼
  // open dev tools network tab, select the row with route
  const response = NextResponse.next({
    headers: {
      'x-fastnear-log-targetRoute': targetRoute,
    },
  });

  return response;
}

// See: https://nextjs.org/docs/app/api-reference/file-conventions/middleware#config-object-optional
// Follows regex in the sense that you:
// Use * for "no segment or segment"
// Use + for "has to have segment"
export const config = {
  matcher: [
    '/dashboard/:path+',
    '/pricing/:path+'
  ]
}
