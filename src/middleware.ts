import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // Check if the user has a valid session token
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session) {
    // Redirect to login if no valid session
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard(.*)",
};
