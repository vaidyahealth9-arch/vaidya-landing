import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaidya Health",
  description: "Reimagining Digital Health for a Connected Tomorrow - Enable streamlined, interoperable care through secure data exchange and unified digital workflows",
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png', sizes: '16x16' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '48x48' },
      { url: '/logo.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
