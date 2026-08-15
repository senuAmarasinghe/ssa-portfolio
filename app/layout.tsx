import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Anton, Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import SideNav from "@/components/side-nav";
import Preloader from "@/components/preloader";

const redound = localFont({
  src: "./fonts/redound-regular.ttf",
  variable: "--font-redound",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-caslon",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senuthi Amarasinghe - Frontend Engineer",
  description: "Experienced Frontend Engineer specialized in modern web technologies, translating complex designs into responsive, scalable, and dynamic digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${libreCaslonText.variable} ${hankenGrotesk.variable} ${redound.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <SideNav />
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
