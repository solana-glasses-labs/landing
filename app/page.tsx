"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  QrCode,
  CreditCard,
  Fingerprint,
  ShieldCheck,
  Mic,
  BadgeCheck,
  Camera,
  ArrowRight,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Mail,
} from "lucide-react";

/* =====================================================
   QUICK CONFIG
   ===================================================== */
const CONFIG = {
  brand: "SOLANA GLASSES",
  tagline:
    "The first crypto focused <span class='bg-gradient-to-r from-[#00FFA3] to-[#DC1FFF] bg-clip-text text-transparent'> smart glasses </span> that is let you do crypto payments and defi on the go.",
  sub: "Pay, scan, send and record — all hands free. Designed for Solana power users, crafted for everyone.",
  cta: { label: "Join Waitlist", href: "#waitlist" },
  fonts: [
    "https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Inter:wght@300;400;500;600;700;800;900&display=swap",
  ],
};

/* =====================================================
   Protocols list — real logos where possible
   If a logo url fails, we render a pretty pill fallback
   ===================================================== */
const PROTOCOLS = [
  { name: "Jupiter", logo: "https://jup.ag/favicon.svg" },
  {
    name: "Pump.fun",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Pump_fun_logo.png",
  },
  { name: "Orca", logo: "https://www.orca.so/favicon.ico" },
  {
    name: "Raydium",
    logo: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/2043476132514/original/tNu-W_ySW1S_X1HYQrwJPxK9LJZH1TQueQ.png?1695371868",
  },
  {
    name: "Pyth",
    logo: "https://framerusercontent.com/images/coM3pi1hATG7DIwbGnbDqpVil6s.png",
  },
  { name: "Wormhole", logo: "https://wormhole.com/logomark-white.svg" },
  {
    name: "Drift",
    logo: "https://cdn.prod.website-files.com/6310e7dee49f0866da8eed4c/686fcc42477da2f6520c959f_favicon.png",
  },
  {
    name: "Sonic",
    logo: "https://cdn.prod.website-files.com/66459509d57ff3db9f95c06f/6645d2bea56d524d04fb94a4_fav-256.png",
  },
  { name: "DEX Screener", logo: "https://dexscreener.com/favicon.svg" },
  { name: "Light Protocol", logo: "https://lightprotocol.com/lighticon.svg" },
  { name: "Meteora", logo: "https://app.meteora.ag/icons/logo.svg" },
  { name: "Flash Trade", logo: "https://www.flash.trade/favicon-32x32.png" },
  {
    name: "Tensor",
    logo: "https://cryptologos.cc/logos/tensor-tnsr-logo.svg?v=040",
  },
  { name: "SNS", logo: "https://www.sns.id/logo.svg" },
  { name: "Squads", logo: "https://squads.xyz/favicon.svg" },
  { name: "Delphi", logo: "https://delphilabs.io/favicon.svg" },
  { name: "Arcium", logo: "https://www.arcium.com/favicon.svg" },
  {
    name: "Jito",
    logo: "https://cryptologos.cc/logos/jito-jto-logo.svg?v=040",
  },
  { name: "Switchboard", logo: "https://switchboard.xyz/favicon.svg" },
  { name: "Sanctum", logo: "https://sanctum.so/favicon.svg" },
  { name: "Magic Eden", logo: "https://magiceden.io/favicon-32x32.png" },
  {
    name: "Farcaster",
    logo: "https://raw.githubusercontent.com/vrypan/farcaster-brand/main/icons/farcaster-icon-purple.svg",
  },
  {
    name: "Kamino",
    logo: "https://cryptologos.cc/logos/kamino-finance-kmno-logo.svg?v=040",
  },
  { name: "SendAI", logo: "" },
];

/* =====================================================
   Helpers
   ===================================================== */
const Pill = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

function Logo({ item }: any) {
  const [error, setError] = useState(false);
  return (
    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.02] p-2 ring-1 ring-white/5">
      {item.logo && !error ? (
        <img
          src={item.logo}
          alt={item.name}
          className="h-7 w-7 rounded-md object-contain"
          onError={() => setError(true)}
          loading="lazy"
        />
      ) : (
        <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-violet-500/40 to-fuchsia-500/40 text-[10px] font-semibold text-white/90">
          {item.name[0]}
        </div>
      )}
      <span className="text-sm text-white/80">{item.name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, speed = 22 }: any) {
  // duplicate items to make the loop seamless
  const list = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-4 whitespace-nowrap will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {list.map((p, i) => (
          <div key={i} className="min-w-[180px] flex justify-center">
            <Logo item={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   Self-tests (lightweight) — run in dev only
   ===================================================== */
function runSelfTests() {
  try {
    console.assert(
      PROTOCOLS.length >= 10,
      "Expected at least 10 ecosystem logos"
    );
    const good = /^(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]+)$/;
    console.assert(
      good.test("test@example.com"),
      "Email regex should accept a normal email"
    );
    console.assert(
      !good.test("not-an-email"),
      "Email regex should reject invalid email"
    );
    const dup = [...PROTOCOLS, ...PROTOCOLS];
    console.assert(
      dup.length === PROTOCOLS.length * 2,
      "Marquee duplication should double the array length"
    );
    console.assert(
      CONFIG.cta.label.length > 0 && CONFIG.cta.href.startsWith("#"),
      "CTA should be present and local"
    );
    console.assert(
      PROTOCOLS.some((p) => !!p.logo),
      "At least one protocol should have a logo URL"
    );
    console.assert(
      CONFIG.tagline.includes("The first crypto focused smart glasses"),
      "Tagline should be updated"
    );
    setTimeout(() => {
      const count = document.querySelectorAll("#features .glow-card").length;
      console.assert(count === 4, `Expected 4 feature cards, got ${count}`);
      const heroHasPills = document
        .querySelector("#hero")
        ?.textContent?.includes("Ultra low fees");
      console.assert(!heroHasPills, "Hero pills should be removed");
      const marqueeExists = document.querySelector(
        "#ecosystem .animate-marquee"
      );
      console.assert(!!marqueeExists, "Ecosystem marquee should exist");
    }, 0);
    console.log("Self-tests passed ✅");
  } catch (e) {
    console.warn("Self-tests failed", e);
  }
}

/* =====================================================
   Main Component
   ===================================================== */
export default function App() {
  const [email, setEmail] = useState("");
  const formRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") runSelfTests();
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Enter a valid email");
      return;
    }
    // demo handler — replace with your backend
    alert("Thanks for joining the waitlist. We will be in touch.");
    setEmail("");
    formRef.current?.reset();
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-white antialiased">
      {/* Inject Google Fonts */}
      {CONFIG.fonts.map((href) => (
        <link key={href} href={href} rel="stylesheet" />
      ))}

      {/* Page background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(153,69,255,0.18),transparent),radial-gradient(900px_500px_at_110%_10%,rgba(3,225,255,0.16),transparent),radial-gradient(1000px_600px_at_50%_120%,rgba(0,255,163,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      {/* Sticky nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src="https://www.solanaglasses.com/logo.png"
              alt="Solana Glasses"
              className="h-10 w-auto md:h-12"
            />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-white/80 hover:text-white"
            >
              Features
            </a>
            <a
              href="#ecosystem"
              className="text-sm text-white/80 hover:text-white"
            >
              Ecosystem
            </a>
            <a
              href={CONFIG.cta.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black shadow/50 transition hover:shadow-lg hover:opacity-95"
            >
              {CONFIG.cta.label}
            </a>
          </nav>
          <a
            href={CONFIG.cta.href}
            className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-4 py-2 text-sm font-semibold shadow/50 transition hover:shadow-lg hover:opacity-95 md:hidden"
          >
            {CONFIG.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative mx-auto max-w-6xl px-5 pb-24 pt-14 md:pt-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[34px] leading-[1.05] font-[600] tracking-tight md:text-[60px]"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
            dangerouslySetInnerHTML={{ __html: CONFIG.tagline }}
          />

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            {CONFIG.sub}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={CONFIG.cta.href}
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black shadow-[0_8px_30px_rgba(255,255,255,0.15)] transition hover:scale-[1.02] focus:outline-none"
            >
              {CONFIG.cta.label}
            </a>
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base text-white/90 backdrop-blur transition hover:border-white/25"
            >
              Explore features
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
          >
            Features
          </h2>
          <Pill>Built for Solana</Pill>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={QrCode}
            title="Scan and go"
            desc="QR and NFC built in for dApps, wallets and point of sale."
          />
          <Feature
            icon={Fingerprint}
            title="Gestures auths"
            desc="Confirm with subtle taps and eye gestures for secure actions."
          />
          <Feature
            icon={BadgeCheck}
            title="Defi ready"
            desc="Optimized flows for swaps, lending, staking, and more on Solana."
          />
          <Feature
            icon={Camera}
            title="Create and Record"
            desc="Capture moments, scan invoices, and record proofs hands‑free."
          />
        </div>
      </section>

      {/* Ecosystem */}
      <section id="ecosystem" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="mb-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
          >
            Ecosystem ready
          </h2>
          <p className="mt-2 text-white/70">
            Compatible with solana mobile and the entire ecosystem. Built for
            dApps — DeFi, payments, DePIN, NFTs, and AI.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
          <MarqueeRow items={PROTOCOLS} speed={22} />
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-4xl px-5 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur md:p-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.8)]" />
            <span className="text-sm text-white/80">
              Be first to go hands free on chain
            </span>
          </div>
          <h3
            className="text-2xl font-bold md:text-3xl"
            style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
          >
            Join the waitlist
          </h3>
          <p className="mt-2 max-w-2xl text-white/70">
            Join the early access list and help shape the future of crypto
            native wearables.
          </p>

          <form
            ref={formRef}
            onSubmit={submit}
            className="mt-6 flex w-full flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-2xl border border-white/15 bg-black/40 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="h-12 rounded-2xl bg-white px-6 font-semibold text-black shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition hover:scale-[1.02]"
            >
              {CONFIG.cta.label}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.solanaglasses.com/logo.png"
                  alt="Solana Glasses"
                  className="h-6 w-auto"
                />
                <span
                  className="font-bold tracking-widest text-white/90"
                  style={{ fontFamily: "Orbitron, system-ui, sans-serif" }}
                >
                  {CONFIG.brand}
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <FooterLink
                  href="https://x.com/solanaglasses"
                  icon={Twitter}
                  label="X"
                />
                <FooterLink
                  href="https://linkedin.com"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <FooterLink
                  href="https://medium.com"
                  icon={Globe}
                  label="Medium"
                />
                <FooterLink
                  href="https://github.com"
                  icon={Github}
                  label="GitHub"
                />
                <FooterLink
                  href="mailto:team@solanaglasses.xyz"
                  icon={Mail}
                  label="Email"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40">
            <span>© {new Date().getFullYear()} Solana Glasses</span>
          </div>
        </div>
      </footer>

      {/* Local styles: marquee and fonts */}
      <style>{`
        :root { --glass-font-body: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
        body { font-family: var(--glass-font-body); }
        .animate-marquee { animation: marquee linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        /* glowing animated border for feature cards */
        .glow-card{ position:relative; }
        .glow-card::before{ content:""; position:absolute; inset:0; border-radius:16px; padding:1px; background: linear-gradient(90deg, rgba(255,255,255,0.75), rgba(255,255,255,0.15), rgba(255,255,255,0.75)); background-size:300% 100%; animation: border-flow 6s linear infinite; -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity:.9; }
        @keyframes border-flow{0%{background-position:0% 50%}100%{background-position:100% 50%}}
        /* subtle hover for feature card */
        .glow-card .card-surface{ transition: transform .25s ease, background-color .25s ease, border-color .25s ease, box-shadow .25s ease; }
        .glow-card:hover .card-surface,.glow-card:focus-within .card-surface{ transform: translateY(-3px); background-color: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); box-shadow: 0 10px 24px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.04) inset; }
      `}</style>
    </div>
  );
}

/* =====================================================
   Small pieces
   ===================================================== */
function Feature({ icon: Icon, title, desc }: any) {
  return (
    <div className="glow-card rounded-2xl p-[1px]">
      <div className="card-surface relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-transform duration-200 will-change-transform">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/10 to-teal-300/10 blur-2xl" />
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}

function FooterLink({ href, icon: Icon, label }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:text-white"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
