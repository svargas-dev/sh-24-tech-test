import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { Logo } from "../components/icons/logo";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-dm-sans",
});

const ambit = localFont({
  src: [
    {
      path: "../assets/fonts/ambit/ambit-500.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-ambit",
});

export const metadata: Metadata = {
  title: "Sam Vargas | SH:24 Tech Test - May 2025",
  description: "Tech test for SH:24 for hiring a new software engineer in May/June 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${ambit.variable} font-dm-sans antialiased`}
      >
            <div className="mx-6">
              <header className="flex justify-center py-8">
                <Logo />
              </header>
              <main className="max-w-xl mx-auto my-4">
                <h1 className="text-3xl text-center font-bold mt-4 mb-8">Sam Vargas: Tech Test</h1>
                {children}
              </main>
            </div>
      </body>
    </html>
  );
}
