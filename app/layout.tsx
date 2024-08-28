import '@/app/ui/global.css'
// import type { Metadata } from 'next';



// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Dashboard for the best team in the world',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// }

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
