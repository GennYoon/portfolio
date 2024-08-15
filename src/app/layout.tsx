import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";

import GoogleAnalytics from "@/components/widget/google-analytics";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "GennYoon Portfolio",
  description: "GennYoon의 Portfolio를 보시고 연락해주보세요.",
  keywords: ["React", "Next.js", "Supabase", "GennYoon", "Portfolio"],
  authors: {
    name: "GennYoon",
    url: "https://github.com/GennYoon",
  },
  openGraph: {
    type: "website",
    url: "https://portfolio.gennyoon.net",
    title: "GennYoon Portfolio",
    description: "GennYoon의 Portfolio를 보시고 연락해보세요.",
    images: {
      url: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/meta-image.png",
      width: 1200,
      height: 630,
    },
    siteName: "GennYoon Portfolio",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "GennYoon Portfolio",
    description: "GennYoon의 Portfolio를 보시고 연락해보세요.",
    images: {
      url: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/meta-image.png",
      width: 1200,
      height: 630,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {process.env.NEXT_PUBLIC_GA_ID ? <GoogleAnalytics /> : <div>GA 환경변수 필요</div>}
        {children}
      </body>
    </html>
  );
}