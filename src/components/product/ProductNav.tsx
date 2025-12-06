"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Database, 
  Shield, 
  HardDrive, 
  Zap, 
  Radio, 
  Cpu,
  ChevronDown,
  Menu,
  X,
  ArrowLeft
} from 'lucide-react';

const productItems = [
  {
    name: 'Database',
    href: '/product/database',
    icon: <Database className="w-5 h-5" />,
    description: 'PostgreSQL with realtime',
    color: 'text-blue-400'
  },
  {
    name: 'Authentication',
    href: '/product/authentication',
    icon: <Shield className="w-5 h-5" />,
    description: 'User management & security',
    color: 'text-green-400'
  },
  {
    name: 'Storage',
    href: '/product/storage',
    icon: <HardDrive className="w-5 h-5" />,
    description: 'File storage & CDN',
    color: 'text-purple-400'
  },
  {
    name: 'Edge Functions',
    href: '/product/functions',
    icon: <Zap className="w-5 h-5" />,
    description: 'Serverless functions',
    color: 'text-yellow-400'
  },
  {
    name: 'Realtime',
    href: '/product/realtime',
    icon: <Radio className="w-5 h-5" />,
    description: 'WebSocket subscriptions',
    color: 'text-pink-400'
  },
  {
    name: 'Vector Database',
    href: '/product/vector',
    icon: <Cpu className="w-5 h-5" />,
    description: 'AI & embeddings',
    color: 'text-indigo-400'
  }
];

export default function ProductNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const currentProduct = productItems.find(item => pathname.startsWith(item.href)) || productItems[0];

  return (
    <>

      <div className="hidden lg:block border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center space-x-4">
              <Link 
                href="/product" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">All Products</span>
              </Link>
              
              <div className="h-6 w-px bg-gray-800"></div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentProduct.color.replace('text-', 'from-')}/20 to-gray-900/20 flex items-center justify-center ${currentProduct.color}`}>
                  {currentProduct.icon}
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">{currentProduct.name}</h1>
                  <p className="text-sm text-gray-400">{currentProduct.description}</p>
                </div>
              </div>
            </div>

          
            <div className="flex items-center space-x-1">
              {productItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-gray-900'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`${item.color}`}>
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden border-b border-gray-800 bg-black/95 backdrop-blur-sm">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Header */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentProduct.color.replace('text-', 'from-')}/20 to-gray-900/20 flex items-center justify-center ${currentProduct.color}`}>
                  {currentProduct.icon}
                </div>
                <div>
                  <h1 className="text-sm font-bold text-white">{currentProduct.name}</h1>
                  <p className="text-xs text-gray-400">{currentProduct.description}</p>
                </div>
              </div>
            </div>

            <Link 
              href="/product" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              All Products
            </Link>
          </div>

        
          {isMobileMenuOpen && (
            <div className="pb-4">
              <div className="grid grid-cols-2 gap-2">
                {productItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`p-3 rounded-lg border transition-colors ${
                        isActive
                          ? 'border-blue-500/50 bg-gray-900'
                          : 'border-gray-800 bg-gray-900/50 hover:bg-gray-900'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`${item.color}`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}