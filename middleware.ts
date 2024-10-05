import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest){
    const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET})

    if(!token){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Verification of rules for certains routes

    if(request.nextUrl.pathname.startsWith('/admin') && token.role !== 'admin'){
        return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/admin/:path*'],
}