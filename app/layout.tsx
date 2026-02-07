import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/SkipLink";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Modus Design Inspire | Architecting Digital Inspiration",
  description:
    "Bespoke digital products powered by multi-cloud infrastructure, enterprise AI, and workflow automation—delivered with SRE-grade reliability. Discovery, high-performance engineering, and scale.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Modus Design Inspire | Architecting Digital Inspiration",
    description:
      "Bespoke digital products powered by multi-cloud infrastructure, enterprise AI, and workflow automation—delivered with SRE-grade reliability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modus Design Inspire | Architecting Digital Inspiration",
    description:
      "Bespoke digital products powered by multi-cloud infrastructure, enterprise AI, and workflow automation—delivered with SRE-grade reliability.",
  },
  metadataBase: new URL("https://modusdevinspire.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <SkipLink />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
