// src/app/product/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProductNav from "@/components/product/ProductNav";
import FooterProduct from "@/components/Footer";
import "./product-styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas Product | Complete Backend Platform",
  description: "Explore Atlas products - Database, Authentication, Storage, Edge Functions, Realtime, and Vector Database",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-[#0a0a0a] text-gray-100`}>
      <ProductNav />
      <main className="min-h-screen">
        {children}
      </main>
      <FooterProduct />
    </div>
  );
}