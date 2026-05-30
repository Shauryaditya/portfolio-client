import type { Metadata } from "next";
import { Lobster, Noto_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Social Media Specialist | Portfolio",
  description: "I Turn Content Into Conversions. Senior Social Media Specialist Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${notoSans.variable} ${lobster.variable} font-sans`}>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

