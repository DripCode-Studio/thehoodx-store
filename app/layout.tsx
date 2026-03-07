import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The-Hoodx | Street Royalty",
    template: "%s | The-Hoodx",
  },
  description:
    "The-Hoodx — a streetwear clothing brand built on authenticity, culture, and style. Shop the latest drops.",
  keywords: [
    "The-Hoodx",
    "streetwear",
    "clothing brand",
    "street royalty",
    "urban fashion",
  ],
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "The-Hoodx | Street Royalty",
    description:
      "A streetwear clothing brand built on authenticity, culture, and style.",
    siteName: "The-Hoodx",
    images: [{ url: "/logo-thehoodx.png", alt: "The-Hoodx Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The-Hoodx | Street Royalty",
    description:
      "A streetwear clothing brand built on authenticity, culture, and style.",
    images: ["/logo-thehoodx.png"],
  },
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
