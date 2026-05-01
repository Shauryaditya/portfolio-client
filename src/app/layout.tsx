import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className={`dark ${inter.variable} font-sans`}>
      <body className="bg-background text-foreground antialiased min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

