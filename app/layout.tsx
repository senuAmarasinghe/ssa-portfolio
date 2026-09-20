import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono, Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import Preloader from "@/components/preloader";
import CustomCursor from "@/components/cursor";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${hankenGrotesk.variable} ${redound.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
        <CustomCursor />
        <noscript>
          <style>{`.preloader{display:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
