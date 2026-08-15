import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { hospitalConfig } from "@/config/hospital";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: hospitalConfig.seo.defaultTitle,
  description: hospitalConfig.seo.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <LenisProvider>
          <Header />
          <div className="flex-1 pt-24 pb-20 lg:pb-0">
            {children}
          </div>
          <Footer />
          <MobileActionBar />
        </LenisProvider>
      </body>
    </html>
  );
}
