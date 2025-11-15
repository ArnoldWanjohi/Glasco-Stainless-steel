import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Glasco Stainless & Aluminum | Premium Stainless & Glass Solutions in Nairobi",
  description: "Premium stainless steel and glass solutions including railings, staircases, windows, and custom projects in Nairobi. Quality craftsmanship and professional installation.",
  keywords: ["stainless steel railings Nairobi", "glass balconies Kenya", "aluminum windows and doors", "staircase design Nairobi", "glass installations Kenya"],
  authors: [{ name: "Glasco Stainless & Aluminum" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://glascostainless.com",
    title: "Glasco Stainless & Aluminum",
    description: "Premium stainless steel and glass solutions in Nairobi, Kenya",
    siteName: "Glasco Stainless & Aluminum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glasco Stainless & Aluminum",
    description: "Premium stainless steel and glass solutions in Nairobi, Kenya",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#0f172a',
};

import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
