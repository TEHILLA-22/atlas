// src/app/product/database/page.tsx - Database Product Detail
"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  Database,
  Zap,
  Shield,
  GitBranch,
  Globe,
  Server,
  Lock,
  BarChart3,
  Code,
  Terminal,
  Eye,
  PlayCircle,
  Download,
  BookOpen,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Cpu,
  GitPullRequest,
  Clock,
  Users,
  TrendingUp,
  Star,
  Award,
  Copy
} from 'lucide-react';

export default function DatabasePage() {
  const [activeExample, setActiveExample] = useState('realtime');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Realtime Subscriptions",
      description: "Listen to database changes in realtime via websockets",
      code: `const channel = atlas
  .channel('todos')
  .on('postgres_changes', 
    { event: '*', schema: 'public' },
    (payload) => console.log('Change!', payload)
  )
  .subscribe()`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Row Level Security",
      description: "Secure your data at the database level with policies",
      code: `-- Enable RLS on users table
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for user access
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);`
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      description: "Branch your database for development and testing",
      code: `# Create a branch for feature development
atlas branch create feature/new-auth

# Switch to the branch
atlas branch switch feature/new-auth

# Merge changes back to main
atlas branch merge feature/new-auth`
    }
  ];

  const capabilities = [
    { name: "Latency", value: "<1ms", description: "Average query response time" },
    { name: "Uptime", value: "99.99%", description: "Enterprise SLA guarantee" },
    { name: "Regions", value: "30+", description: "Global deployment options" },
    { name: "Backups", value: "PITR", description: "Point-in-time recovery" },
    { name: "Replication", value: "Multi-AZ", description: "Automatic failover" },
    { name: "Storage", value: "16TB", description: "Per database limit" }
  ];

  const integrations = [
    { name: "TypeScript", description: "Fully typed client library" },
    { name: "Prisma", description: "ORM integration" },
    { name: "Hasura", description: "GraphQL layer" },
    { name: "Retool", description: "Internal tools" },
    { name: "Metabase", description: "Business intelligence" },
    { name: "Airbyte", description: "Data integration" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-6">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">PostgreSQL Database</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                The database for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  modern applications
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Fully managed PostgreSQL with realtime, backups, and monitoring built-in. 
                Scale from prototype to production with zero downtime.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/signup"
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl
                           hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                           shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                           font-semibold flex items-center space-x-2"
                >
                  <span>Start Building Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="#demo"
                  className="group border border-gray-700 text-gray-300 px-8 py-3 rounded-xl font-semibold
                           hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                           hover:text-white flex items-center space-x-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Free 500MB database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Unlimited connections</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Database Specs</h3>
                </div>
                
                <div className="space-y-4">
                  {capabilities.map((cap, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800/50">
                      <div>
                        <div className="text-sm text-gray-400">{cap.name}</div>
                        <div className="text-xs text-gray-500">{cap.description}</div>
                      </div>
                      <div className="text-lg font-bold text-white">{cap.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful features
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                built for developers
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-gray-900/50 border-b border-gray-800 flex justify-between items-center">
                    <div className="text-sm text-gray-400">Code Example</div>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                    {feature.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Works with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                your favorite tools
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center 
                         hover:border-blue-500/50 transition-colors"
              >
                <div className="text-lg font-bold text-white mb-2">{integration.name}</div>
                <div className="text-sm text-gray-400">{integration.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/docs/database/integrations"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium"
            >
              <span>View all integrations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to build with the best database?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Atlas Database for their production applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                         shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Database className="w-5 h-5" />
                <span>Create Database Free</span>
              </Link>
              
              <Link
                href="/docs"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}