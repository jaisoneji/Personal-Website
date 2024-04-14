import "./globals.css";

export const metadata = {
  title: "Jai Soneji | UI Developer",
  description: "Jai Soneji is a passionate frontend developer with a creative flair and a knack for crafting captivating digital experiences. He is currently working as UI Developer at media.net",
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
    </html>
  );
}
