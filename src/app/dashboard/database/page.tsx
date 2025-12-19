'use client';
import { useState } from 'react';
import { 
  Database, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  EyeOff,
  Lock,
  Unlock,
  Copy,
  Trash2,
  Edit,
  MoreVertical,
  ChevronRight,
  Table as TableIcon,
  Key,
  Link as LinkIcon,
  Globe,
  Cpu,
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

export default function DatabasePage() {
  const [databases, setDatabases] = useState([
    {
      id: 'db-prod-001',
      name: 'production-db',
      type: 'PostgreSQL 15',
      size: '2.4 GB',
      connections: 124,
      queriesPerSec: 2450,
      status: 'healthy',
      region: 'us-east-1',
      backup: '2 hours ago',
      tables: 24
    },
    {
      id: 'db-staging-001',
      name: 'staging-db',
      type: 'PostgreSQL 15',
      size: '1.1 GB',
      connections: 42,
      queriesPerSec: 890,
      status: 'healthy',
      region: 'eu-west-1',
      backup: '1 day ago',
      tables: 18
    },
    {
      id: 'db-analytics-001',
      name: 'analytics-db',
      type: 'PostgreSQL 15 + TimescaleDB',
      size: '8.7 GB',
      connections: 8,
      queriesPerSec: 120,
      status: 'warning',
      region: 'us-west-2',
      backup: '6 hours ago',
      tables: 12
    }
  ]);

  const [tables, setTables] = useState([
    { name: 'users', rows: 12450, size: '450 MB', indexes: 3, lastAccess: '2 min ago' },
    { name: 'products', rows: 8456, size: '320 MB', indexes: 2, lastAccess: '5 min ago' },
    { name: 'orders', rows: 234567, size: '1.2 GB', indexes: 4, lastAccess: '30 sec ago' },
    { name: 'sessions', rows: 34567, size: '280 MB', indexes: 2, lastAccess: '1 min ago' },
    { name: 'analytics', rows: 1245678, size: '3.4 GB', indexes: 5, lastAccess: '10 min ago' }
  ]);

  const [activeQueries, setActiveQueries] = useState([
    { query: 'SELECT * FROM users WHERE id = $1', duration: '42ms', user: 'api-server', state: 'active' },
    { query: 'INSERT INTO orders (...) VALUES (...)', duration: '18ms', user: 'webhook', state: 'active' },
    { query: 'CREATE INDEX CONCURRENTLY ON products(category)', duration: '2m 34s', user: 'migration', state: 'creating' },
    { query: 'VACUUM ANALYZE sessions', duration: '45s', user: 'maintenance', state: 'vacuuming' }
  ]);

  const [showSQLConsole, setShowSQLConsole] = useState(false);
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;');

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
            <span>Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span>Database</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-400">production-db</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white">Database Management</h1>
              <p className="text-gray-400">PostgreSQL with realtime, backups, and monitoring</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                <Download className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Create Database</span>
              </button>
            </div>
          </div>
        </div>

        {/* Database Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Size', value: '12.2 GB', icon: <Database className="w-5 h-5" />, trend: 12.5 },
            { label: 'Active Connections', value: '174', icon: <LinkIcon className="w-5 h-5" />, trend: 8.2 },
            { label: 'QPS', value: '3,460', icon: <Zap className="w-5 h-5" />, trend: -2.1 },
            { label: 'Cache Hit Rate', value: '99.7%', icon: <Cpu className="w-5 h-5" />, trend: 0.3 }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className={stat.trend >= 0 ? 'text-green-400' : 'text-red-400'}>
                    {stat.trend >= 0 ? '+' : ''}{stat.trend}%
                  </span>
                  <span className="text-gray-400">from last hour</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Database Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {databases.map((db) => (
            <div key={db.id} className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Database className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white">{db.name}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        db.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                        db.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {db.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{db.id} • {db.type}</p>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Region</span>
                    <span className="text-white">{db.region}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Size</span>
                    <span className="text-white">{db.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Connections</span>
                    <span className="text-white">{db.connections} active</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Queries/sec</span>
                    <span className="text-white">{db.queriesPerSec.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-gray-900/50 to-black/30 flex justify-between">
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Open in Browser
                </button>
                <button className="text-gray-400 hover:text-white text-sm">
                  Manage →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tables & SQL Console */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tables */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl">
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">Tables</h3>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                      type="search"
                      placeholder="Search tables..."
                      className="pl-9 pr-4 py-1.5 bg-gray-900 border border-gray-700 rounded-lg 
                               text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2
                               focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-3 py-1.5 border border-gray-700 rounded-lg hover:bg-gray-800">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Table</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Rows</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Size</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Indexes</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Last Access</th>
                  </tr>
                </thead>
                <tbody>
                  {tables.map((table) => (
                    <tr key={table.name} className="border-b border-gray-800 hover:bg-gray-900/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <TableIcon className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-medium">{table.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{table.rows.toLocaleString()}</td>
                      <td className="p-4 text-sm">{table.size}</td>
                      <td className="p-4 text-sm">{table.indexes}</td>
                      <td className="p-4 text-sm text-gray-400">{table.lastAccess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Queries & Console */}
          <div className="space-y-6">
            {/* Active Queries */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">Active Queries</h3>
                  <span className="text-sm text-gray-400">{activeQueries.length} running</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {activeQueries.map((query, index) => (
                  <div key={index} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <code className="text-sm text-gray-300 font-mono flex-1 overflow-x-auto">
                        {query.query}
                      </code>
                      <span className={`px-2 py-1 text-xs rounded-full ml-2 ${
                        query.state === 'active' ? 'bg-blue-500/20 text-blue-400' :
                        query.state === 'creating' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {query.state}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Duration: {query.duration}</span>
                      <span>User: {query.user}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SQL Console */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl">
              <div className="p-6 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">SQL Console</h3>
                  <button
                    onClick={() => setShowSQLConsole(!showSQLConsole)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    {showSQLConsole ? 'Hide Console' : 'Show Console'}
                  </button>
                </div>
              </div>
              
              {showSQLConsole && (
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-gray-300">Query Editor</label>
                      <div className="flex items-center space-x-2">
                        <button className="text-sm text-gray-400 hover:text-white">History</button>
                        <button className="text-sm text-gray-400 hover:text-white">Templates</button>
                      </div>
                    </div>
                    <textarea
                      value={sqlQuery}
                      onChange={(e) => setSqlQuery(e.target.value)}
                      className="w-full h-32 font-mono text-sm bg-gray-900 border border-gray-700 rounded-lg 
                               text-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      spellCheck={false}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <select className="bg-gray-900 border border-gray-700 rounded-lg text-white text-sm px-3 py-1.5">
                        <option>production-db</option>
                        <option>staging-db</option>
                        <option>analytics-db</option>
                      </select>
                      <button className="px-4 py-1.5 bg-gray-800 rounded-lg text-sm hover:bg-gray-700">
                        Explain
                      </button>
                    </div>
                    <button className="px-6 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600">
                      Execute Query
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Database Features */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-5 h-5" />, label: 'Row Level Security', enabled: true },
            { icon: <Globe className="w-5 h-5" />, label: 'Realtime Subscriptions', enabled: true },
            { icon: <Copy className="w-5 h-5" />, label: 'Point-in-Time Recovery', enabled: true },
            { icon: <Lock className="w-5 h-5" />, label: 'Encryption at Rest', enabled: true },
            { icon: <Zap className="w-5 h-5" />, label: 'Connection Pooling', enabled: true },
            { icon: <Database className="w-5 h-5" />, label: 'Logical Replication', enabled: true },
            { icon: <Cpu className="w-5 h-5" />, label: 'Auto-scaling', enabled: false },
            { icon: <AlertTriangle className="w-5 h-5" />, label: 'Anomaly Detection', enabled: false }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    feature.enabled 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <span className="text-white text-sm">{feature.label}</span>
                </div>
                {feature.enabled ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <button className="text-sm text-blue-400 hover:text-blue-300">
                    Enable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}