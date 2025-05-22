import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Logo } from "../components/icons/logo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-giest-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Sam Vargas - SH:24 Tech Test - May 2025",
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
        className={`${dmSans.variable} ${montserrat.variable} font-sans antialiased`}
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
