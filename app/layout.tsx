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
  title: "Mudassar Qayyum — Full Stack Developer",
  description: "Full Stack Developer | React.js | Node.js | React Native | MERN Stack. Showcasing projects in healthcare, e-commerce, and mobile.",
  authors: [{ name: "Mudassar Qayyum", url: "https://mudassar-portfolio.vercel.app" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0f1117] text-[#e6edf3]">{children}</body>
    </html>
  );
}
