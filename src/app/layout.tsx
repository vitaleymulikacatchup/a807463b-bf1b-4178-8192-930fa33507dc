import type { Metadata } from "next";
import { Inter_Tight, Montserrat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PulseCloud SaaS",
  description: "Deliver a clean, conversion-focused single-page landing for a SaaS product with clear value, pricing widgets, and FAQ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}