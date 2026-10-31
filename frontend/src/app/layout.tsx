import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rhema Chapel | The Home of the Blessed People",
    template: "%s | Rhema Chapel",
  },
  description:
    "Welcome to Rhema Chapel, the home of the blessed people. A place to belong, grow in faith, encounter God's Word and become all He has called you to be.",
  applicationName: "Rhema Chapel",
  icons: {
    icon: "/rhemalogo.png",
    shortcut: "/rhemalogo.png",
    apple: "/rhemalogo.png",
  },
  openGraph: {
    title: "Rhema Chapel | The Home of the Blessed People",
    description: "One family. One faith. One home. Welcome to Rhema Chapel.",
    siteName: "Rhema Chapel",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhema Chapel | The Home of the Blessed People",
    description: "Welcome to Rhema Chapel, the home of the blessed people.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#FFF9EF] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


