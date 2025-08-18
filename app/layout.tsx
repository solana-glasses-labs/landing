import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Solana Glasses",
  description:
    "SolanaGlasses are next-gen AI-powered smart glasses built for Solana users. Scan QR codes, make on-chain payments, and interact with crypto using just your voice. Lightweight, fast, and fully integrated with the Solana blockchain.",
  applicationName: "Solana Glasses",
  keywords: ["Solana", "Glasses", "Eyewear", "Blockchain", "NFT", "Web3"],
  authors: [{ name: "Solana Glasses Team", url: "https://solanaglasses.com" }],
  creator: "Solana Glasses",
  publisher: "Solana Glasses",
  metadataBase: new URL("https://solanaglasses.com"),
  alternates: {
    canonical: "https://solanaglasses.com",
  },
  openGraph: {
    title: "Solana Glasses",
    description:
      "SolanaGlasses are next-gen AI-powered smart glasses built for Solana users. Scan QR codes, make on-chain payments, and interact with crypto using just your voice. Lightweight, fast, and fully integrated with the Solana blockchain.",
    url: "https://solanaglasses.com",
    siteName: "Solana Glasses",
    images: [
      {
        url: "https://solanaglasses.com/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Solana Glasses Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Glasses",
    description:
      "SolanaGlasses are next-gen AI-powered smart glasses built for Solana users.",
    site: "@solanaglasses",
    creator: "@solanaglasses",
    images: ["https://solanaglasses.com/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://solanaglasses.com" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solana Glasses" />
        <meta
          property="og:description"
          content="SolanaGlasses are next-gen AI-powered smart glasses built for Solana users."
        />
        <meta property="og:url" content="https://solanaglasses.com" />
        <meta property="og:image" content="/android-chrome-512x512.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solana Glasses" />
        <meta
          name="twitter:description"
          content="SolanaGlasses are next-gen AI-powered smart glasses built for Solana users."
        />
        <meta name="twitter:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:site" content="@solanaglasses" />
        <meta name="twitter:creator" content="@solanaglasses" />

        {/* Social Links */}
        <meta name="discord" content="https://discord.gg/gRYzqpTgjj" />
        <meta name="telegram" content="https://t.me/solanaglasses" />
      </head>
      <body>
        {children}
        <Toaster position="top-right" theme="dark" richColors />
      </body>
    </html>
  );
}
