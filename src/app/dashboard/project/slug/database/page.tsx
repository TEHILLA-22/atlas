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
  Server,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  Bell
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectOverview() {
  const { slug } = useParams();
  const projectName = slug?.toString().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'My Project';

  // Real-time stats (in prod: fetched via SSE or tRPC)
  const stats = {
    database: { requests: 1.2, unit: 'k', trend: '+12%' },
    auth: { requests: 892, unit: '', trend: '+5%' },
    storage: { requests: 45, unit: '', trend: '-2%' },
    realtime: { requests: 234, unit: '', trend: '+18%' },
    functions: { executions: 892, unit: '', trend: '+31%' },
  };

  const quickLinks = [
    { name: 'Database', icon: Database, href: 'database', color: 'from-blue-500 to-cyan-500' },
    { name: 'Auth', icon: Shield, href: 'auth', color: 'from-emerald-500 to-teal-500' },
    { name: 'Storage', icon: HardDrive, href: 'storage', color: 'from-purple-500 to-pink-500' },
    { name: 'Realtime', icon: Radio, href: 'realtime', color: 'from-orange-500 to-red-500' },
    { name: 'Functions', icon: Zap, href: 'functions', color: 'from-yellow-500 to-amber-500' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header - Same as before */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-400 hover:text-white transition">
              ← Projects
            </Link>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <h1 className="text-xl font-bold">{projectName}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Production • iad1
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:border-white/20 transition">
              Connect
            </button>
            <button className="p-2 hover:bg-white/5 rounded-lg transition">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="pt-20 px-6 lg:px-10 lg:ml-4">
        <div className="max-w-7xl mx-auto py-8">

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            {quickLinks.map((service) => (
              <Link 
                key={service.name}
                href={service.href}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <service.icon className="w-8 h-8 mb-4 text-gray-400 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold mb-1">
                    {stats[service.href as keyof typeof stats]?.requests || 0}
                    <span className="text-sm font-normal text-gray-400 ml-1">
                      {stats[service.href as keyof typeof stats]?.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`font-medium ${stats[service.href as keyof typeof stats]?.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stats[service.href as keyof typeof stats]?.trend}
                    </span>
                    <TrendingUp className="w-4 h-4 text-gray-500" />
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{service.name}</p>
                </div>

                <ArrowRight className="absolute bottom-4 right-4 w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          {/* Live Activity Feed */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Recent Activity */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Live Activity
              </h2>
              <div className="space-y-3">
                {[
                  { user: 'api-key-123', action: 'SELECT', target: 'users', time: '2s ago', icon: Database },
                  { user: 'client-app', action: 'INSERT', target: 'posts', time: '8s ago', icon: Database },
                  { user: 'edge-function', action: 'EXEC', target: '/api/stripe', time: '12s ago', icon: Zap },
                  { user: 'realtime-client', action: 'SUBSCRIBE', target: 'chat:messages', time: '15s ago', icon: Radio },
                ].map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      <event.icon  className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <code className="text-sm font-mono text-blue-400">{event.user}</code>
                      <span className="text-gray-400 mx-2"> • </span>
                      <span className="text-sm">{event.action}</span>
                      <span className="text-gray-500"> → </span>
                      <code className="text-sm font-mono">{event.target}</code>
                    </div>
                    <span className="text-xs text-gray-500">{event.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Quick Stats */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Project Health</h2>
              <div className="space-y-4">
                {[
                  { label: 'Database Size', value: '2.4 GB', change: '+120 MB', good: true },
                  { label: 'Active Connections', value: '45', change: '+8', good: true },
                  { label: 'Function Errors', value: '0', change: '−3', good: true },
                  { label: 'Realtime Clients', value: '234', change: '+56', good: true },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-gray-400">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-semibold">{item.value}</span>
                      <span className={`text-sm ${item.good ? 'text-green-400' : 'text-red-400'}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-xl">
                <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
                <p className="font-medium">All systems operational</p>
                <p className="text-sm text-gray-400 mt-1">99.99% uptime this month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}