// app/dashboard/project/[slug]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  Activity,
  Database,
  Shield,
  HardDrive,
  Radio,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Bell,
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ---------------------------------------------
 * Types
 * ------------------------------------------- */

type ServiceKey =
  | 'database'
  | 'auth'
  | 'storage'
  | 'realtime'
  | 'functions';

type Metric = {
  value: number;
  unit: string;
  trend: `+${number}%` | `-${number}%`;
};

type ServiceLink = {
  key: ServiceKey;
  name: string;
  href: ServiceKey;
  icon: React.ElementType;
  color: string;
};

/* ---------------------------------------------
 * Static Data (MVP)
 * ------------------------------------------- */

const STATS: Record<ServiceKey, Metric> = {
  database: { value: 1.2, unit: 'k', trend: '+12%' },
  auth: { value: 892, unit: '', trend: '+5%' },
  storage: { value: 45, unit: 'GB', trend: '-2%' },
  realtime: { value: 234, unit: '', trend: '+18%' },
  functions: { value: 892, unit: '', trend: '+31%' },
};

const SERVICES: ServiceLink[] = [
  { key: 'database', name: 'Database', href: 'database', icon: Database, color: 'from-blue-500 to-cyan-500' },
  { key: 'auth', name: 'Auth', href: 'auth', icon: Shield, color: 'from-emerald-500 to-teal-500' },
  { key: 'storage', name: 'Storage', href: 'storage', icon: HardDrive, color: 'from-purple-500 to-pink-500' },
  { key: 'realtime', name: 'Realtime', href: 'realtime', icon: Radio, color: 'from-orange-500 to-red-500' },
  { key: 'functions', name: 'Functions', href: 'functions', icon: Zap, color: 'from-yellow-500 to-amber-500' },
];

/* ---------------------------------------------
 * Component
 * ------------------------------------------- */

export default function ProjectOverview() {
  const { slug } = useParams<{ slug: string }>();

  const projectName =
    slug
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase()) ?? 'My Project';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 h-16 bg-black/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
              ← Projects
            </Link>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <h1 className="text-lg font-semibold">{projectName}</h1>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Production • iad1
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-white/20">
              Connect
            </button>
            <button className="p-2 hover:bg-white/5 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="pt-20 px-6 lg:px-10">
        {/* IMPORTANT:
           - no mx-auto
           - content starts near sidebar like Supabase */}
        <div className="max-w-none w-full py-8">

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mb-12">
            {SERVICES.map((service) => {
              const metric = STATS[service.key];

              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition`}
                  />

                  <div className="relative z-10">
                    <service.icon className="w-8 h-8 mb-4 text-gray-400 group-hover:scale-110 transition" />

                    <div className="text-3xl font-bold">
                      {metric.value}
                      <span className="text-sm font-normal text-gray-400 ml-1">
                        {metric.unit}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span
                        className={
                          metric.trend.startsWith('+')
                            ? 'text-green-400'
                            : 'text-red-400'
                        }
                      >
                        {metric.trend}
                      </span>
                      <TrendingUp className="w-4 h-4 text-gray-500" />
                    </div>

                    <p className="text-gray-400 text-sm mt-2">{service.name}</p>
                  </div>

                  <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition" />
                </Link>
              );
            })}
          </div>

          {/* Activity + Health */}
          <div className="grid xl:grid-cols-3 gap-8">
            {/* Activity */}
            <div className="xl:col-span-2">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Live Activity
              </h2>

              <div className="space-y-3">
                {[
                  { user: 'api-key', action: 'SELECT', target: 'users', time: '2s ago', icon: Database },
                  { user: 'client-app', action: 'INSERT', target: 'posts', time: '8s ago', icon: Database },
                  { user: 'edge-fn', action: 'EXEC', target: '/stripe', time: '12s ago', icon: Zap },
                  { user: 'realtime', action: 'SUBSCRIBE', target: 'chat', time: '15s ago', icon: Radio },
                ].map((e, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <e.icon className="w-5 h-5 text-blue-400" />
                    </div>

                    <div className="flex-1 text-sm">
                      <code className="text-blue-400">{e.user}</code>
                      <span className="mx-2 text-gray-500">→</span>
                      <span>{e.action}</span>
                      <span className="mx-2 text-gray-500">on</span>
                      <code>{e.target}</code>
                    </div>

                    <span className="text-xs text-gray-500">{e.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Health */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Project Health</h2>

              <div className="p-5 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
                <p className="font-medium">All systems operational</p>
                <p className="text-sm text-gray-400 mt-1">99.99% uptime</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
