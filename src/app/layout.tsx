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
  title: "TheBigFish Lab — Full Stack AI Engineering",
  description:
    "TheBigFish Lab builds AI-powered SaaS platforms across fintech, healthcare, logistics, and industrial domains. From LLMs and computer vision to production-grade APIs and autonomous agents.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "TheBigFish Lab — Full Stack AI Engineering",
    description:
      "AI-powered SaaS platforms across fintech, healthcare, logistics, and industrial domains.",
    type: "website",
    url: "/",
    siteName: "TheBigFish Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheBigFish Lab — Full Stack AI Engineering",
    description:
      "AI-powered SaaS platforms across fintech, healthcare, logistics, and industrial domains.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
