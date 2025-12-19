// app/dashboard/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DashboardNavbar from '@/components/DashboardNavbar';
import {
  Plus,
  Globe,
  Users,
  CreditCard,
  BarChart3,
  Puzzle,
  Settings,
  ExternalLink,
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Projects', icon: ExternalLink, href: '/dashboard' },
    { label: 'Domains', icon: Globe, href: '/dashboard/domains' },
    { label: 'Team', icon: Users, href: '/dashboard/team' },
    { label: 'Billing', icon: CreditCard, href: '/dashboard/billing' },
    { label: 'Usage', icon: BarChart3, href: '/dashboard/usage' },
    { label: 'Integrations', icon: Puzzle, href: '/dashboard/integrations' },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-72 bg-black/60 backdrop-blur-2xl border-r border-white/10 hidden lg:block">
        <div className="p-6 flex flex-col h-full">
          {/* CTA */}
          <Link
            href="/dashboard/project/new"
            className="mb-10 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition"
          >
            <Plus className="w-4 h-4" />
            New Project
          </Link>

          {/* Navigation */}
          <nav className="space-y-1 flex-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 transition ${
                      active ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'
                    }`}
                  />
                  <span className="flex-1">{item.label}</span>

                  {/* Subtle active dot */}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="pt-6 border-t border-white/10">
            <Link
              href="/dashboard/settings"
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                isActive('/dashboard/settings')
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 lg:ml-72 min-h-screen">
        <DashboardNavbar />
        {children}
      </main>
    </div>
  );
}
