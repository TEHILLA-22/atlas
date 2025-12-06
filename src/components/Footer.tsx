// src/components/Footer.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Rocket, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MessageSquare,
  Mail,
  Globe,
  Zap,
  Database,
  Shield,
  HardDrive,
  Radio,
  Cpu,
  ArrowUp,
  Sparkles,
  Star,
  Satellite,
  Orbit,
  Cloud,
  Terminal,
  BookOpen,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    { name: 'Database', icon: <Database className="w-4 h-4" />, href: '/product/database' },
    { name: 'Authentication', icon: <Shield className="w-4 h-4" />, href: '/product/authentication' },
    { name: 'Storage', icon: <HardDrive className="w-4 h-4" />, href: '/product/storage' },
    { name: 'Edge Functions', icon: <Zap className="w-4 h-4" />, href: '/product/functions' },
    { name: 'Realtime', icon: <Radio className="w-4 h-4" />, href: '/product/realtime' },
    { name: 'Vector Database', icon: <Cpu className="w-4 h-4" />, href: '/product/vector' },
  ];

  const resources = [
    { name: 'Documentation', icon: <BookOpen className="w-4 h-4" />, href: '/docs' },
    { name: 'Examples', icon: <Terminal className="w-4 h-4" />, href: '/examples' },
    { name: 'CLI Reference', icon: <Terminal className="w-4 h-4" />, href: '/cli' },
    { name: 'API Status', icon: <Globe className="w-4 h-4" />, href: '/status' },
    { name: 'Community', icon: <Users className="w-4 h-4" />, href: '/community' },
    { name: 'Support', icon: <MessageSquare className="w-4 h-4" />, href: '/support' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Brand', href: '/brand' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'DPA', href: '/dpa' },
  ];

  const social = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/atlas' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/atlas' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/atlas' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/atlas' },
  ];

  // Generate random stars for cosmic effect
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 5,
  }));

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-black border-t border-gray-900/50 overflow-hidden">
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebula effect */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-[100px]"></div>
        
        {/* Shooting stars */}
        <div className="absolute inset-0">
          {stars.map(star => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animation: `twinkle 3s ease-in-out ${star.delay}s infinite`
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 
                   text-white flex items-center justify-center shadow-2xl shadow-blue-500/30
                   hover:from-blue-600 hover:to-cyan-600 transition-all duration-300
                   animate-bounce-slow border border-blue-400/30"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 rounded-lg"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-white">Atlas</span>
                    <div className="flex items-center space-x-1 mt-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span className="text-sm text-gray-400">Cosmic Backend Platform</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 max-w-md">
                  Build production-ready applications with our complete backend platform. 
                  From database to AI, we handle the infrastructure so you can focus on building.
                </p>

                {/* Newsletter Signup */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Satellite className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-gray-300">Join our cosmic newsletter</span>
                  </div>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-l-lg
                               text-white placeholder-gray-500 focus:outline-none focus:ring-2
                               focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                                     rounded-r-lg hover:from-blue-700 hover:to-cyan-600 transition-all">
                      <Rocket className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <div className="flex items-center space-x-4">
                    {social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-900/50 rounded-lg"
                      >
                        {item.icon}
                        <span className="sr-only">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Products */}
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    <div className="flex items-center space-x-2">
                      <Orbit className="w-4 h-4 text-blue-400" />
                      <span>Products</span>
                    </div>
                  </h3>
                  <ul className="space-y-3">
                    {products.map((product) => (
                      <li key={product.name}>
                        <Link
                          href={product.href}
                          className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            {product.icon}
                          </div>
                          <span>{product.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-green-400" />
                      <span>Resources</span>
                    </div>
                  </h3>
                  <ul className="space-y-3">
                    {resources.map((resource) => (
                      <li key={resource.name}>
                        <Link
                          href={resource.href}
                          className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors group"
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            {resource.icon}
                          </div>
                          <span>{resource.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4 text-purple-400" />
                      <span>Company</span>
                    </div>
                  </h3>
                  <ul className="space-y-3">
                    {company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-yellow-400" />
                      <span>Legal</span>
                    </div>
                  </h3>
                  <ul className="space-y-3">
                    {legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 pt-8 border-t border-gray-900">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">SOC2 Type II</div>
                      <div className="text-xs text-gray-400">Certified</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">30+ Regions</div>
                      <div className="text-xs text-gray-400">Global Coverage</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">99.99% Uptime</div>
                      <div className="text-xs text-gray-400">SLA Guarantee</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">50,000+ Devs</div>
                      <div className="text-xs text-gray-400">Trusted By</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>© {currentYear} Atlas Cloud Platform. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Made with</span>
                <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="hidden md:inline">somewhere in the cosmos</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/status" className="hover:text-white transition-colors">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>All Systems Operational</span>
                  </span>
                </Link>
                
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-gray-500">•</span>
                  <Link href="/changelog" className="hover:text-white transition-colors">
                    Changelog
                  </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-2">
                  <span className="text-gray-500">•</span>
                  <Link href="/sitemap" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated orbiting element */}
      <div className="absolute bottom-20 right-20 w-64 h-64">
        <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 right-32 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full animate-float delay-2000"></div>
    </footer>
  );
}