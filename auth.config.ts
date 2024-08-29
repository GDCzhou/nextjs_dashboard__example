import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log({nextUrl});
      
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnLogin = nextUrl.pathname.startsWith('/login')
      const isHome = nextUrl.pathname.endsWith('/')
      console.log({p :nextUrl.pathname,isLoggedIn,isOnDashboard,isOnLogin,});
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        // return Response.redirect(new URL('/',nextUrl ))
      } else if (isLoggedIn && !isHome) {
        // console.log(auth);
        console.log('重定向到dashboard');
        
        
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
