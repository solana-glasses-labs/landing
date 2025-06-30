import type { Metadata } from "next";
import "./globals.css";

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
        url: "https://solanaglasses.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Solana Glasses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Glasses",
    description:
      "SolanaGlasses are next-gen AI-powered smart glasses built for Solana users. Scan QR codes, make on-chain payments, and interact with crypto using just your voice. Lightweight, fast, and fully integrated with the Solana blockchain.",
    site: "@solanaglasses",
    creator: "@solanaglasses",
    images: ["https://solanaglasses.com/logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  other: {
    discord: "https://discord.gg/gRYzqpTgjj",
    telegram: "https://t.me/solanaglasses",
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

        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solana Glasses" />
        <meta
          property="og:description"
          content="SolanaGlasses are next-gen AI-powered smart glasses built for Solana users. Scan QR codes, make on-chain payments, and interact with crypto using just your voice. Lightweight, fast, and fully integrated with the Solana blockchain."
        />
        <meta property="og:url" content="https://solanaglasses.com" />
        <meta
          property="og:image"
          content="https://solanaglasses.com/logo.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solana Glasses" />
        <meta
          name="twitter:description"
          content="SolanaGlasses are next-gen AI-powered smart glasses built for Solana users. Scan QR codes, make on-chain payments, and interact with crypto using just your voice. Lightweight, fast, and fully integrated with the Solana blockchain."
        />
        <meta
          name="twitter:image"
          content="https://solanaglasses.com/logo.png"
        />
        <meta name="twitter:site" content="@solanaglasses" />
        <meta name="twitter:creator" content="@solanaglasses" />
        {/* Discord */}
        <meta name="discord" content="https://discord.gg/gRYzqpTgjj" />
        {/* Telegram */}
        <meta name="telegram" content="https://t.me/solanaglasses" />
      </head>
      <body>{children}</body>
    </html>
  );
}
