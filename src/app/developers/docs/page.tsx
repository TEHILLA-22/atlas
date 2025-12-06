// src/app/developers/docs/page.tsx - Documentation Hub
"use client";

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Filter,
  Zap,
  Database,
  Shield,
  HardDrive,
  Radio,
  Cpu,
  Terminal,
  Code,
  ChevronRight,
  ExternalLink,
  Star,
  TrendingUp,
  Clock,
  Users,
  Download,
  Copy,
  PlayCircle
} from 'lucide-react';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Docs', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-4 h-4" /> },
    { id: 'database', name: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'auth', name: 'Authentication', icon: <Shield className="w-4 h-4" /> },
    { id: 'storage', name: 'Storage', icon: <HardDrive className="w-4 h-4" /> },
    { id: 'functions', name: 'Edge Functions', icon: <Terminal className="w-4 h-4" /> },
    { id: 'realtime', name: 'Realtime', icon: <Radio className="w-4 h-4" /> },
    { id: 'vector', name: 'Vector', icon: <Cpu className="w-4 h-4" /> },
  ];

  const popularGuides = [
    {
      title: 'Quickstart Guide',
      description: 'Build your first Atlas application in 5 minutes',
      category: 'getting-started',
      time: '5 min read',
      level: 'Beginner',
      href: '/docs/quickstart'
    },
    {
      title: 'Database Setup',
      description: 'Complete guide to setting up your PostgreSQL database',
      category: 'database',
      time: '10 min read',
      level: 'Beginner',
      href: '/docs/database/setup'
    },
    {
      title: 'Authentication Guide',
      description: 'Implement user authentication with multiple providers',
      category: 'auth',
      time: '15 min read',
      level: 'Intermediate',
      href: '/docs/auth/guide'
    },
    {
      title: 'Edge Functions Tutorial',
      description: 'Build and deploy serverless functions',
      category: 'functions',
      time: '20 min read',
      level: 'Intermediate',
      href: '/docs/functions/tutorial'
    }
  ];

  const apiReference = [
    {
      title: 'JavaScript SDK',
      description: 'Complete reference for the JavaScript/TypeScript SDK',
      icon: <Code className="w-5 h-5" />,
      href: '/docs/reference/javascript'
    },
    {
      title: 'REST API',
      description: 'HTTP API reference for all endpoints',
      icon: <Terminal className="w-5 h-5" />,
      href: '/docs/api'
    },
    {
      title: 'CLI Reference',
      description: 'Command line interface documentation',
      icon: <Terminal className="w-5 h-5" />,
      href: '/docs/reference/cli'
    },
    {
      title: 'GraphQL API',
      description: 'Auto-generated GraphQL API documentation',
      icon: <Code className="w-5 h-5" />,
      href: '/docs/reference/graphql'
    }
  ];

  const tutorials = [
    {
      title: 'Build a Todo App',
      description: 'Full-stack application with React and Atlas',
      category: 'tutorial',
      video: true,
      href: '/docs/tutorials/todo-app'
    },
    {
      title: 'Real-time Chat',
      description: 'Build a chat application with WebSockets',
      category: 'tutorial',
      video: true,
      href: '/docs/tutorials/chat-app'
    },
    {
      title: 'E-commerce Platform',
      description: 'Complete e-commerce solution with payments',
      category: 'tutorial',
      video: false,
      href: '/docs/tutorials/ecommerce'
    },
    {
      title: 'AI Chatbot',
      description: 'Build an AI chatbot with vector search',
      category: 'tutorial',
      video: true,
      href: '/docs/tutorials/ai-chatbot'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Complete guides, API references, and tutorials for building with Atlas.
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2
                           focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Guides</h2>
            <Link href="/docs/guides" className="text-blue-400 hover:text-blue-300">
              View all guides →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="group bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-400 text-sm rounded-full">
                    {guide.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{guide.time}</span>
                    <span>•</span>
                    <span>{guide.level}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">
                  {guide.title}
                </h3>
                <p className="text-gray-400 mb-4">{guide.description}</p>
                
                <div className="flex items-center text-blue-400">
                  <span className="text-sm font-medium">Read guide</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">API Reference</h2>
            <p className="text-xl text-gray-300">Complete technical documentation for all APIs and SDKs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiReference.map((api, index) => (
              <Link
                key={index}
                href={api.href}
                className="group bg-gray-900/30 border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 mx-auto mb-4">
                  {api.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{api.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{api.description}</p>
                
                <div className="flex items-center justify-center text-purple-400 text-sm">
                  <span>View reference</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Step-by-Step Tutorials</h2>
            <p className="text-xl text-gray-300">Build real applications with our guided tutorials.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                href={tutorial.href}
                className="group bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full">
                    Tutorial
                  </span>
                  {tutorial.video && (
                    <div className="flex items-center text-green-400">
                      <PlayCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">Video</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{tutorial.description}</p>
                
                <div className="flex items-center text-green-400 text-sm">
                  <span>Start tutorial</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">Need help?</h3>
            <p className="text-gray-300 mb-6">Our community and support team are here to help you succeed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600"
              >
                Ask the Community
              </Link>
              <Link
                href="/support"
                className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-900/50"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}