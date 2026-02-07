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
  title: "Modus Dev Inspire | Architecting Digital Inspiration",
  description:
    "Bespoke mobile and web applications built with SRE-grade reliability and visionary design. Discovery, high-performance engineering, and scale.",
  openGraph: {
    title: "Modus Dev Inspire | Architecting Digital Inspiration",
    description:
      "Bespoke mobile and web applications built with SRE-grade reliability and visionary design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modus Dev Inspire | Architecting Digital Inspiration",
    description:
      "Bespoke mobile and web applications built with SRE-grade reliability and visionary design.",
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
