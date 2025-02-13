import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Yusuf Akçay",
  description:
    "Yusuf Akçay – Front-end developer passionate about crafting pixel-perfect user interfaces with React, Next.js, and TypeScript. This is my portfolio showcasing high-performance, responsive web experiences.",
  icons: "/logo.png",
};

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
