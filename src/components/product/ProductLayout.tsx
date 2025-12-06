// src/components/product/ProductLayout.tsx
"use client";

import { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface ProductLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export default function ProductLayout({ children, title, subtitle, icon }: ProductLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Breadcrumb */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/product" className="hover:text-white transition-colors">
              Product
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">{title}</span>
          </div>
        </div>
      </div>
      
      {children}
    </div>
  );
}