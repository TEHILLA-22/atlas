// app/dashboard/[project]/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ChevronLeft, 
  Database, 
  Zap, 
  HardDrive, 
  Radio, 
  Cpu, 
  Shield, 
  Settings, 
  Play, 
  Pause, 
  Trash2, 
  Edit3, 
  Copy, 
  Download, 
  Upload, 
  Plus, 
  Search, 
  Bell, 
  ChevronDown,
  Activity,
  Server,
  BarChart3,
  Users
} from 'lucide-react';

export default function ProjectDashboard() {
  const params = useParams();
  const projectId = params.project as string;
  const projectName = projectId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Mock project data - replace with real API
  const project = {
    id: projectId,
    name: projectName,
    region: "iad1",
    status: "active",
    database: { size: "1.2 GB", connections: 45 },
    functions: { active: 8, executions: 234 },
    storage: { used: "2.4 GB", files: 156 },
    realtime: { connections: 23, messages: 1.2 }
  };

  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const projectNav = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'functions', label: 'Functions', icon: Zap },
    { id: 'storage', label: 'Storage', icon: HardDrive },
    { id: 'realtime', label: 'Realtime', icon: Radio },
    { id: 'vector', label: 'Vector', icon: Cpu },
    { id: 'auth', label: 'Auth', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const functions = [
    { name: 'api/users', language: 'typescript', status: 'active', lastDeploy: '2m ago', executions: 45 },
    { name: 'api/payments', language: 'python', status: 'active', lastDeploy: '5h ago', executions: 23 },
    { name: 'webhooks/stripe', language: 'typescript', status: 'paused', lastDeploy: '1d ago', executions: 0 },
  ];

  const tables = [
    { name: 'users', rows: 1_234, size: '45 MB', lastModified: '2m ago' },
    { name: 'posts', rows: 456, size: '12 MB', lastModified: '1h ago' },
    { name: 'orders', rows: 89, size: '3.2 MB', lastModified: '3h ago' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="p-2 hover:bg-white/5 rounded-lg transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h1 className="text-lg font-semibold truncate max-w-xs">{project.name}</h1>
                <p className="text-sm text-gray-400">{project.region}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search functions, tables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white/30 w-64 transition"
              />
            </div>

            <button className="p-2 hover:bg-white/5 rounded-lg transition">
              <Bell className="w-5 h-5" />
            </button>

            <div className="relative group">
              <button className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg transition">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AR</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl">
                  <div className="p-2">
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">Settings</Link>
                    <Link href="/auth/logout" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-red-400">Sign out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)] pt-16">
        {/* Project Sidebar */}
        <aside className="w-64 bg-black/50 backdrop-blur-xl border-r border-white/5 flex-shrink-0">
          <div className="p-4 border-b border-white/5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-400">PROJECT</h2>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-white/5 rounded transition">
                  <Edit3 className="w-3 h-3" />
                </button>
                <button className="p-1.5 hover:bg-white/5 rounded transition">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
            <h1 className="text-xl font-semibold mt-1 truncate">{project.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">{project.status}</span>
              <span className="text-xs text-gray-500">{project.region}</span>
            </div>
          </div>

          <nav className="p-2 space-y-1">
            {projectNav.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm ${
                  activeTab === item.id
                    ? 'bg-white/10 text-white border border-white/20 font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="p-6">
              <div className="max-w-7xl mx-auto space-y-6">
                {/* Project Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Database', value: `${project.database.size}`, metric: project.database.connections, icon: Database, href: '/database' },
                    { label: 'Functions', value: project.functions.active, metric: project.functions.executions, icon: Zap, href: '/functions' },
                    { label: 'Storage', value: `${project.storage.used}`, metric: project.storage.files, icon: HardDrive, href: '/storage' },
                    { label: 'Realtime', value: `${project.realtime.connections}k`, metric: project.realtime.messages, icon: Radio, href: '/realtime' },
                  ].map((stat, i) => (
                    <Link key={stat.label} href={`${stat.href}`} className="group">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <stat.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition" />
                          <span className="text-sm text-gray-400">{stat.metric}</span>
                        </div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Recent Functions */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    Recent Functions
                    <Link href="/functions" className="text-blue-400 hover:text-blue-300 text-sm">View all</Link>
                  </h3>
                  <div className="space-y-2">
                    {functions.map((func) => (
                      <div key={func.name} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            func.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            ●
                          </div>
                          <div>
                            <div className="font-medium truncate max-w-md">{func.name}</div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span className={`px-2 py-1 rounded-full bg-gray-800 text-xs capitalize`}>{func.language}</span>
                              <span>{func.lastDeploy}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{func.executions} execs</span>
                          <div className="flex gap-1">
                            {func.status === 'paused' ? (
                              <button className="p-1.5 hover:bg-green-500/20 rounded transition">
                                <Play className="w-4 h-4 text-green-400" />
                              </button>
                            ) : (
                              <button className="p-1.5 hover:bg-yellow-500/20 rounded transition">
                                <Pause className="w-4 h-4 text-yellow-400" />
                              </button>
                            )}
                            <button className="p-1.5 hover:bg-white/10 rounded transition">
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Tables */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    Database Tables
                    <Link href="/database" className="text-blue-400 hover:text-blue-300 text-sm">Open SQL Editor</Link>
                  </h3>
                  <div className="space-y-2">
                    {tables.map((table) => (
                      <Link key={table.name} href="/database" className="block">
                        <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition">
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <div>
                              <div className="font-medium">{table.name}</div>
                              <div className="text-sm text-gray-400">{table.rows.toLocaleString()} rows</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">{table.size}</div>
                            <div className="text-xs text-gray-500">{table.lastModified}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Database Tab */}
          {activeTab === 'database' && (
            <div className="p-6">
              <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Database</h2>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition">
                      <Plus className="w-4 h-4" />
                      New Table
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-xl transition">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400">{project.database.size}</div>
                      <div className="text-sm text-gray-400">Storage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">{project.database.connections}</div>
                      <div className="text-sm text-gray-400">Active Connections</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">12</div>
                      <div className="text-sm text-gray-400">Tables</div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 text-sm font-medium text-gray-300">Table</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-300">Rows</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-300">Size</th>
                          <th className="text-left py-3 text-sm font-medium text-gray-300">Last Modified</th>
                          <th className="text-right py-3 text-sm font-medium text-gray-300">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tables.map((table) => (
                          <tr key={table.name} className="border-b border-white/5 hover:bg-white/5 transition">
                            <td className="py-3">
                              <div className="font-medium">{table.name}</div>
                            </td>
                            <td className="py-3 text-sm text-gray-400">{table.rows.toLocaleString()}</td>
                            <td className="py-3 text-sm text-gray-400">{table.size}</td>
                            <td className="py-3 text-sm text-gray-400">{table.lastModified}</td>
                            <td className="py-3">
                              <div className="flex items-center gap-2">
                                <button className="p-1.5 hover:bg-white/10 rounded transition">
                                  <Edit3 className="w-3 h-3" />
                                </button>
                                <button className="p-1.5 hover:bg-white/10 rounded transition">
                                  <Server className="w-3 h-3" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Functions Tab */}
          {activeTab === 'functions' && (
            <div className="p-6">
              <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Edge Functions</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                    <Plus className="w-4 h-4" />
                    New Function
                  </button>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Function</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Language</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Executions</th>
                        <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Last Deploy</th>
                        <th className="text-right py-4 px-6 text-sm font-medium text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {functions.map((func) => (
                        <tr key={func.name} className="border-b border-white/5 hover:bg-white/5 transition">
                          <td className="py-4 px-6">
                            <div className="font-medium truncate max-w-xs">{func.name}</div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="px-2 py-1 bg-gray-800 rounded-full text-xs capitalize">{func.language}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              func.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {func.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-400">{func.executions}</td>
                          <td className="py-4 px-6 text-sm text-gray-400">{func.lastDeploy}</td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              {func.status === 'paused' ? (
                                <button className="p-1.5 hover:bg-green-500/20 rounded transition">
                                  <Play className="w-4 h-4 text-green-400" />
                                </button>
                              ) : (
                                <button className="p-1.5 hover:bg-yellow-500/20 rounded transition">
                                  <Pause className="w-4 h-4 text-yellow-400" />
                                </button>
                              )}
                              <button className="p-1.5 hover:bg-white/10 rounded transition">
                                <Copy className="w-4 h-4" />
                              </button>
                              <button className="p-1.5 hover:bg-white/10 rounded transition">
                                <Edit3 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}