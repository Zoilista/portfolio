import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Görkem Altun — Mathematics & Computer Science | Simulation & Systems",
  description:
    "Deterministic vehicle dynamics, neural network architectures, and computational systems modeled, simulated, and measured.",
  openGraph: {
    title: "Görkem Altun — Mathematics & Computer Science | Simulation & Systems",
    description:
      "Deterministic vehicle dynamics, neural network architectures, and computational systems modeled, simulated, and measured.",
    type: "website",
    locale: "en_US",
    siteName: "Görkem Altun Portfolio",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
