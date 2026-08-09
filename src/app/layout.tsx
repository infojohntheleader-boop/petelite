import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Petelite | Better Essentials for Happier Pets",
  description:
    "Discover thoughtfully selected pet essentials designed to make everyday life better for pets and easier for their humans.",
  keywords: [
    "pet supplies",
    "pet essentials",
    "dog products",
    "cat products",
    "pet water fountain",
    "dog leash",
    "pet bed",
    "pet toys",
    "Petelite",
  ],
  authors: [{ name: "Petelite" }],
  openGraph: {
    title: "Petelite | Better Essentials for Happier Pets",
    description:
      "Discover thoughtfully selected pet essentials designed to make everyday life better for pets and easier for their humans.",
    url: "https://peteliteshop.com",
    siteName: "Petelite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petelite | Better Essentials for Happier Pets",
    description:
      "Discover thoughtfully selected pet essentials designed to make everyday life better for pets and easier for their humans.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
