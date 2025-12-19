'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  ChevronDown,
  LogOut,
  Settings,
  User,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);

  const user = {
    name: "Tehilla",
    avatar: "/avatar.png",
    email: "tehilla@example.com"
  };

  const navItems = [
    { label: 'Projects', href: '/dashboard/' },
    { label: 'Domain Registration', href: '/dashboard/domains' },
    { label: 'Team', href: '/dashboard/team' },
    { label: 'Billing', href: '/dashboard/billing' },
    { label: 'Usage', href: '/dashboard/usage' },
    { label: 'Integrations', href: '/dashboard/integrations' },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      {/* Fixed Top Navbar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-2xl border-b border-white/8 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          
          {/* Left: Logo + Mobile Menu */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/5 rounded-xl transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/dashboard" className="text-2xl font-bold tracking-tight text-white">
              Atlas
            </Link>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search projects, domains, functions..."
                className="w-full pl-12 pr-5 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-blue-500/50 transition"
              />
            </div>
          </div>

          {/* Right: Notifications + User */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2.5 hover:bg-white/5 rounded-xl transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
                className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl transition"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : user.name[0]}
                </div>
                <span className="hidden md:block font-medium text-white">{user.name}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${avatarMenuOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {avatarMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-3 w-64 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-5 border-b border-white/8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 space-y-1">
                      <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
                        onClick={() => setAvatarMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        <span className="text-sm">Account Settings</span>
                      </Link>
                      <Link
                        href="/dashboard/domains"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition"
                        onClick={() => setAvatarMenuOpen(false)}
                      >
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">Domain Registration</span>
                      </Link>
                      <div className="border-t border-white/8 my-2" />
                      <Link
                        href="/auth/logout"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 transition"
                        onClick={() => setAvatarMenuOpen(false)}
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm">Sign Out</span>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-xl z-40 pt-8 px-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="space-y-6" onClick={(e) => e.stopPropagation()}>
              {/* Logo */}
              <Link href="/dashboard" className="block text-2xl font-bold">
                Atlas
              </Link>

              {/* Nav Links */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block py-3 px-4 rounded-lg transition ${
                      isActive(item.href)
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Settings */}
                <Link
                  href="/dashboard/settings"
                  className={`block py-3 px-4 rounded-lg transition ${
                    isActive('/dashboard/settings')
                      ? 'bg-white/10 text-white font-medium'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>

                {/* Sign Out */}
                <Link
                  href="/auth/logout"
                  className="block py-3 px-4 rounded-lg text-red-400 hover:bg-red-500/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Out
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
