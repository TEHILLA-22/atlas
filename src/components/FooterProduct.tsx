// src/components/FooterLight.tsx - For product pages
"use client";

import Link from 'next/link';
import { Rocket, Github, Twitter, Linkedin, Globe, Shield } from 'lucide-react';

export default function FooterProduct() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Status', href: '/status' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ];

  const social = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/atlas' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/atlas' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/atlas' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded"></div>
            <span className="text-white font-medium">Atlas</span>
            <span className="text-gray-500 text-sm">© {currentYear}</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}