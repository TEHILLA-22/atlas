'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Activity,
  Database,
  Table,
  Code,
  Zap,
  HardDrive,
  Radio,
  Cpu,
  Shield,
  Lock,
  Settings,
  CreditCard,
  Users,
  BarChart3,
  LifeBuoy,
  Server,
} from 'lucide-react';

export default function ProjectSidebar() {
  const pathname = usePathname();
  const projectSlug = pathname.split('/')[3]; 

  const isActive = (href: string) => {
    const fullPath = `/dashboard/project/${projectSlug}/${href}`;
    return pathname === fullPath || (href === '' && pathname === `/dashboard/project/${projectSlug}`);
  };

  const navGroups = [
    {
      title: 'Overview',
      items: [
        { label: 'Dashboard', icon: Activity, href: '' },
      ],
    },
    {
      title: 'Database',
      items: [
        { label: 'Table Editor', icon: Table, href: 'database/table-editor' },
        { label: 'SQL Editor', icon: Code, href: 'database/sql-editor' },
        { label: 'Connections', icon: Server, href: 'database/connections' },
        { label: 'Backups', icon: Database, href: 'database/backups' },
      ],
    },
    {
      title: 'Core Services',
      items: [
        { label: 'Edge Functions', icon: Zap, href: 'functions' },
        { label: 'Storage', icon: HardDrive, href: 'storage' },
        { label: 'Realtime', icon: Radio, href: 'realtime' },
        { label: 'Vector Engine', icon: Cpu, href: 'vector' },
      ],
    },
    {
      title: 'Security & Access',
      items: [
        { label: 'Authentication', icon: Shield, href: 'auth' },
        { label: 'API Keys', icon: Lock, href: 'api-keys' },
      ],
    },
    {
      title: 'Observability',
      items: [
        { label: 'Logs', icon: LifeBuoy, href: 'logs' },
        { label: 'Analytics', icon: BarChart3, href: 'analytics' },
        { label: 'Performance', icon: Activity, href: 'performance' },
      ],
    },
    {
      title: 'Project Settings',
      items: [
        { label: 'General', icon: Settings, href: 'settings' },
        { label: 'Billing', icon: CreditCard, href: 'billing' },
        { label: 'Team', icon: Users, href: 'team' },
      ],
    },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-72 bg-black/70 backdrop-blur-2xl border-r border-white/10 overflow-y-auto hidden lg:block">
      <div className="p-6 space-y-10">
        {/* Project Info Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">Production</span>
          </div>
          <h2 className="text-2xl font-bold truncate">
            {projectSlug?.replace(/-/g, ' ')}
          </h2>
          <p className="text-sm text-gray-500 mt-1">PostgreSQL • MySQL</p>
        </div>

        {/* Navigation */}
        {navGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-1">
              {group.title}
            </h3>
            <nav className="space-y-1.5">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={`/dashboard/project/${projectSlug}/${item.href}`}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      active
                        ? 'bg-white/12 text-white font-medium border border-white/20 shadow-lg shadow-blue-500/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{item.label}</span>

                    {/* Active indicator */}
                    {active && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-blue-500 rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}

        {/* Bottom Help */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            href="/support"
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition"
          >
            <LifeBuoy className="w-5 h-5" />
            <span className="text-sm">Help & Support</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}