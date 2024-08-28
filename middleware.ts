import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};


// nKI22wWPEFcDI2Xpj47nJo2h
// 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
// fgdkgpqJb5t11YE4TUPB9Blh
