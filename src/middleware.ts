// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token');

    // Check if the user is accessing the /admin route
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!token) {
            // If no token is found, redirect to /login
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Allow the request to proceed
    return NextResponse.next();
}
export const config = {
    matcher: ['/admin/:path*'],
};
