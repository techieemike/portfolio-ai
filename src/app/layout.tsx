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
  title: "Abikale Michael Raymond — Full Stack AI Engineer",
  description:
    "Full Stack AI Engineer and Founder of TheBigFish Lab. Building intelligent systems across the full stack — from LLMs and computer vision to production-grade APIs, data pipelines, and autonomous agents.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Abikale Michael Raymond — Full Stack AI Engineer",
    description:
      "Building intelligent systems across the full stack — LLMs, computer vision, data pipelines, autonomous agents.",
    type: "website",
    url: "/",
    siteName: "Abikale Michael Raymond",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abikale Michael Raymond — Full Stack AI Engineer",
    description:
      "Building intelligent systems across the full stack — LLMs, computer vision, data pipelines, autonomous agents.",
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
