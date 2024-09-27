import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  metadataBase: new URL('https://jaisoneji.vercel.app'),
  title: "Jai Soneji | Frontend Developer",
  description: "Jai Soneji is a passionate frontend developer with a creative flair and a knack for crafting captivating digital experiences.",
  keywords: ['Jai Soneji UI Developer', 'jai soneji frontend', 'jai soneji vesit','jai soneji frontend developer','software developer','next.js', 'javascript','Indian Developer','jai soneji media.net','experienced frontend developer'],
  openGraph: {
    title: 'Jai Soneji | Frontend Developer',
    description: "Jai Soneji is a passionate frontend developer with a creative flair and a knack for crafting captivating digital experiences.",
    images: 'https://jaisoneji.vercel.app/images/favicon.png'
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: "khRByGtGipP5s5OyEtNSsIh7TqV5AcFvS08Cedgj5J4"
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins bg-primary">{children}</body>
      <GoogleTagManager gtmId="GTM-WX2RLRRV" />
    </html>
  );
}
