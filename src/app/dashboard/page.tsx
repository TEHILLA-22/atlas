// src/app/dashboard/page.tsx - Main Dashboard Layout
"use client";

import { useState, useEffect } from 'react';
import { 
  Database, 
  Shield, 
  HardDrive, 
  Zap, 
  Radio, 
  Settings,
  Bell,
  Search,
  TrendingUp,
  Activity,
  Server,
  Users,
  Globe,
  Lock,
  Cpu,
  Network,
  Battery,
  Eye,
  EyeOff,
  Plus,
  Filter,
  Download,
  Share2,
  MoreVertical,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  BarChart3,
  LineChart,
  PieChart,
  Database as DatabaseIcon
} from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  name: string;
  status: 'active' | 'warning' | 'error';
  region: string;
  databaseSize: string;
  activeUsers: number;
  lastDeployed: string;
  performance: number;
}

interface Metric {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

interface Resource {
  type: 'database' | 'auth' | 'storage' | 'functions' | 'realtime';
  name: string;
  usage: number;
  limit: number;
  status: 'healthy' | 'warning' | 'critical';
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'prod-001',
      name: 'production-app',
      status: 'active',
      region: 'us-east-1',
      databaseSize: '2.4 GB',
      activeUsers: 12450,
      lastDeployed: '2 hours ago',
      performance: 98
    },
    {
      id: 'staging-001',
      name: 'staging-app',
      status: 'warning',
      region: 'eu-west-1',
      databaseSize: '1.1 GB',
      activeUsers: 125,
      lastDeployed: '1 day ago',
      performance: 87
    },
    {
      id: 'dev-001',
      name: 'development-app',
      status: 'active',
      region: 'ap-southeast-1',
      databaseSize: '450 MB',
      activeUsers: 8,
      lastDeployed: '3 days ago',
      performance: 99
    }
  ]);

  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: 'Total Requests',
      value: '1.2M',
      change: 12.5,
      icon: <Activity className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Active Users',
      value: '12.4K',
      change: 8.2,
      icon: <Users className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'API Latency',
      value: '42ms',
      change: -3.1,
      icon: <Zap className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Uptime',
      value: '99.99%',
      change: 0.1,
      icon: <Server className="w-5 h-5" />,
      color: 'from-orange-500 to-yellow-500'
    }
  ]);

  const [resources, setResources] = useState<Resource[]>([
    { type: 'database', name: 'PostgreSQL Cluster', usage: 65, limit: 100, status: 'healthy' },
    { type: 'auth', name: 'Authentication Service', usage: 23, limit: 100, status: 'healthy' },
    { type: 'storage', name: 'Object Storage', usage: 42, limit: 100, status: 'healthy' },
    { type: 'functions', name: 'Edge Functions', usage: 18, limit: 100, status: 'healthy' },
    { type: 'realtime', name: 'WebSocket Connections', usage: 89, limit: 100, status: 'warning' }
  ]);

  const [performanceData, setPerformanceData] = useState<number[]>([65, 75, 80, 78, 82, 85, 90, 88, 92, 95, 98, 96]);
  const [timeRange, setTimeRange] = useState('24h');
  const [showInsights, setShowInsights] = useState(true);

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Top Navigation */}
      <div className="border-b border-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <span className="text-gray-400">Workspace:</span>
                <span className="text-white font-medium">Atlas Technologies</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
                <span className="text-blue-400">production-app</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search resources, logs, docs..."
                  className="pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg w-64
                           text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2
                           focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-white">admin@atlas.dev</p>
                  <p className="text-xs text-gray-400">Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 border-r border-gray-800 min-h-[calc(100vh-73px)]">
          <div className="p-4">
            <Link
              href="/dashboard/projects/create"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                       px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600
                       transition-all flex items-center justify-center space-x-2 mb-6"
            >
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </Link>
            
            <nav className="space-y-1">
              {[
                { icon: <Database className="w-5 h-5" />, label: 'Database', href: '#database', count: 3, active: true },
                { icon: <Shield className="w-5 h-5" />, label: 'Authentication', href: '#auth', count: 12 },
                { icon: <HardDrive className="w-5 h-5" />, label: 'Storage', href: '#storage', count: 245 },
                { icon: <Zap className="w-5 h-5" />, label: 'Edge Functions', href: '#functions', count: 8 },
                { icon: <Radio className="w-5 h-5" />, label: 'Realtime', href: '#realtime', count: 1245 },
                { icon: <Globe className="w-5 h-5" />, label: 'Networking', href: '#networking' },
                { icon: <Lock className="w-5 h-5" />, label: 'Security', href: '#security' },
                { icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics', href: '#analytics' },
                { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '#settings' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium
                            ${item.active 
                              ? 'bg-gray-900 text-blue-300' 
                              : 'text-gray-400 hover:text-blue-300 hover:bg-gray-900'
                            } transition-colors`}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="px-2 py-1 text-xs bg-gray-800 rounded-full">
                      {item.count}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            
            <div className="mt-8 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
              <h4 className="text-sm font-semibold text-white mb-2">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                  Deploy Edge Function
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                  Create API Key
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                  View API Docs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Welcome & Insights */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Welcome back, Admin</h2>
                <p className="text-gray-400">Here's what's happening with your projects</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowInsights(!showInsights)}
                  className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
                >
                  {showInsights ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
                <button className="px-4 py-2 text-sm bg-gray-800 rounded-lg hover:bg-gray-700">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {showInsights && (
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-white font-medium">Performance Insight</p>
                    <p className="text-gray-300 text-sm">
                      Your database response time improved by 24% after yesterday's optimization.
                      Consider implementing connection pooling for further gains.
                    </p>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center text-white`}>
                    {metric.icon}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`text-sm ${metric.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change >= 0 ? '+' : ''}{metric.change}%
                  </span>
                  <span className="text-gray-400 text-sm ml-2">from last week</span>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Chart */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Performance Trends</h3>
                <p className="text-gray-400 text-sm">API Response Time (ms) over time</p>
              </div>
              <div className="flex space-x-2">
                {['1h', '24h', '7d', '30d'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1.5 text-sm rounded-lg ${
                      timeRange === range
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-64">
              {/* Chart visualization - In production, use Recharts or Chart.js */}
              <div className="flex items-end h-48 space-x-1">
                {performanceData.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                    style={{ height: `${value}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                {['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'].map((time) => (
                  <span key={time}>{time}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects & Resources */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Projects Table */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Your Projects</h3>
                  <Link
                    href="/dashboard/projects"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    View All →
                  </Link>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-4 text-gray-400 text-sm font-medium">Project</th>
                      <th className="text-left p-4 text-gray-400 text-sm font-medium">Status</th>
                      <th className="text-left p-4 text-gray-400 text-sm font-medium">Region</th>
                      <th className="text-left p-4 text-gray-400 text-sm font-medium">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id} className="border-b border-gray-800 hover:bg-gray-900/50">
                        <td className="p-4">
                          <div>
                            <p className="text-white font-medium">{project.name}</p>
                            <p className="text-gray-400 text-sm">{project.id}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-2 ${
                              project.status === 'active' ? 'bg-green-500' :
                              project.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                            <span className="text-sm capitalize">{project.status}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center text-sm">
                            <Globe className="w-4 h-4 text-gray-400 mr-2" />
                            {project.region}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-800 rounded-full h-2">
                              <div 
                                className="h-full rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                                style={{ width: `${project.performance}%` }}
                              />
                            </div>
                            <span className="ml-3 text-sm font-medium">{project.performance}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t border-gray-800">
                <button className="w-full flex items-center justify-center space-x-2 text-gray-400 hover:text-white py-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Project</span>
                </button>
              </div>
            </div>

            {/* Resource Usage */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Resource Usage</h3>
                  <div className="text-sm text-gray-400">Next reset: 2 days</div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {resources.map((resource) => (
                  <div key={resource.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          resource.status === 'healthy' ? 'bg-green-500' :
                          resource.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="text-white font-medium">{resource.name}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {resource.usage}% of {resource.limit}%
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-gray-800 rounded-full h-2">
                        <div 
                          className={`h-full rounded-full ${
                            resource.type === 'database' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                            resource.type === 'auth' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                            resource.type === 'storage' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            resource.type === 'functions' ? 'bg-gradient-to-r from-orange-500 to-yellow-500' :
                            'bg-gradient-to-r from-red-500 to-pink-500'
                          }`}
                          style={{ width: `${resource.usage}%` }}
                        />
                      </div>
                      
                      {resource.status === 'warning' && (
                        <button className="text-yellow-500 hover:text-yellow-400 text-sm">
                          Upgrade →
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-800 bg-gradient-to-r from-gray-900/50 to-black/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Need more resources?</p>
                    <p className="text-gray-400 text-sm">Upgrade to Pro for higher limits</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            </div>
            
            <div className="divide-y divide-gray-800">
              {[
                { action: 'Database migration completed', time: '2 minutes ago', status: 'success' },
                { action: 'Edge function deployed', time: '15 minutes ago', status: 'success' },
                { action: 'Authentication rate limit warning', time: '1 hour ago', status: 'warning' },
                { action: 'Backup created successfully', time: '3 hours ago', status: 'success' },
                { action: 'New user signed up', time: '5 hours ago', status: 'info' }
              ].map((activity, index) => (
                <div key={index} className="p-4 flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.status === 'success' ? 'bg-green-500/20 text-green-400' :
                    activity.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {activity.status === 'success' ? <CheckCircle className="w-4 h-4" /> :
                     activity.status === 'warning' ? <AlertCircle className="w-4 h-4" /> :
                     <Clock className="w-4 h-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{activity.action}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}