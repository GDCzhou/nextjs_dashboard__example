import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request}) {
      const nextUrl = request.nextUrl
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        const url = new URL('/dashboard', nextUrl);
        return Response.redirect(url);
      }
      return true;
    },
    
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;


