// src/app/layout.tsx - Update to include global nav
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalNav from "@/components/GlobalNav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas | The Complete Backend Platform",
  description: "Build production-ready applications with PostgreSQL database, authentication, storage, and edge functions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-100 antialiased`}>
       
        {children}
     
      </body>
    </html>
  );
}