// src/components/GlobalNav.tsx - Updated with product dropdown
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Database, 
  Shield, 
  HardDrive, 
  Zap, 
  Radio, 
  Cpu,
  Globe,
  Server,
  Code,
  BookOpen,
  MessageSquare,
  Users,
  Rocket,
  Sparkles
} from 'lucide-react';

export default function GlobalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Product dropdown items
  const productItems = [
    {
      title: 'Database',
      description: 'Fully managed PostgreSQL with realtime',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      href: '/product/database',
      color: 'bg-blue-500/10'
    },
    {
      title: 'Authentication',
      description: 'User management & security',
      icon: <Shield className="w-5 h-5 text-green-400" />,
      href: '/product/authentication',
      color: 'bg-green-500/10'
    },
    {
      title: 'Storage',
      description: 'File storage & global CDN',
      icon: <HardDrive className="w-5 h-5 text-purple-400" />,
      href: '/product/storage',
      color: 'bg-purple-500/10'
    },
    {
      title: 'Edge Functions',
      description: 'Serverless functions at the edge',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      href: '/product/functions',
      color: 'bg-yellow-500/10'
    },
    {
      title: 'Realtime',
      description: 'WebSocket subscriptions',
      icon: <Radio className="w-5 h-5 text-pink-400" />,
      href: '/product/realtime',
      color: 'bg-pink-500/10'
    },
    {
      title: 'Vector Database',
      description: 'AI & embeddings with pgvector',
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      href: '/product/vector',
      color: 'bg-indigo-500/10'
    }
  ];

  // Development dropdown items
  const developmentItems = [
    {
      title: 'Documentation',
      description: 'Complete API references and guides',
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      href: '/docs'
    },
    {
      title: 'Examples',
      description: 'Production-ready starter kits',
      icon: <Code className="w-5 h-5 text-green-400" />,
      href: '/examples'
    },
    {
      title: 'CLI',
      description: 'Command line interface',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      href: '/cli'
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      icon: <Users className="w-5 h-5 text-yellow-400" />,
      href: '/community'
    }
  ];

  const isProductPage = pathname?.startsWith('/product');
  
  // Don't show global nav on product pages (they have their own)
  if (isProductPage) {
    return null;
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Atlas</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('product')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                <span>Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'product' && (
                <div className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl animate-fadeIn">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {productItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="group/item p-3 rounded-lg hover:bg-gray-900/50 transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${item.color}`}>
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Development Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('development')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                <span>Development</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'development' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'development' && (
                <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl animate-fadeIn">
                  <div className="p-6">
                    <div className="space-y-2">
                      {developmentItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="group/item p-3 rounded-lg hover:bg-gray-900/50 transition-colors flex items-start space-x-3"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.icon}
                          <div>
                            <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#enterprise" className="text-gray-300 hover:text-white transition-colors">
              Enterprise
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/login" 
              className="text-gray-300 hover:text-white transition-colors hidden md:block"
            >
              Sign In
            </Link>
            <Link 
              href="/signup"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-lg 
                       hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                       shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
                       flex items-center space-x-2"
            >
              <Rocket className="w-4 h-4" />
              <span>Start Free</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800 animate-slideDown">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {/* Mobile Product */}
            <div className="px-3 py-2">
              <div className="text-gray-400 text-sm font-medium mb-2">Product</div>
              <div className="space-y-1">
                {productItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-900/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="px-3 py-2">
              <div className="text-gray-400 text-sm font-medium mb-2">Development</div>
              <div className="space-y-1">
                {developmentItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-900/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <div>
                      <div className="text-white">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Simple Mobile Links */}
            <Link href="/#features" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
              Features
            </Link>
            <Link href="/#pricing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
              Pricing
            </Link>
            <Link href="/#enterprise" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
              Enterprise
            </Link>
            
            <div className="pt-4 border-t border-gray-800">
              <Link 
                href="/login" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}