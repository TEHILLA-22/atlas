"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Database, 
  Shield, 
  HardDrive, 
  Zap, 
  Radio, 
  Globe,
  Server,
  Users,
  Lock,
  Cpu,
  Code,
  Terminal,
  BookOpen,
  MessageSquare,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Rocket,
  Sparkles,
  Cloud,
  ShieldCheck,
  Zap as Lightning,
  GitBranch,
  Eye
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    {
      title: 'Database',
      description: 'Fully managed Postgres with realtime',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      href: '/product/database'
    },
    {
      title: 'Authentication',
      description: 'User management out of the box',
      icon: <Shield className="w-5 h-5 text-green-400" />,
      href: '/product/authentication'
    },
    {
      title: 'Storage',
      description: 'Store and serve any type of digital content',
      icon: <HardDrive className="w-5 h-5 text-purple-400" />,
      href: '/product/storage'
    },
    {
      title: 'Edge Functions',
      description: 'Deploy serverless functions globally',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      href: '/product/functions'
    },
    {
      title: 'Realtime',
      description: 'Listen to database changes in realtime',
      icon: <Radio className="w-5 h-5 text-pink-400" />,
      href: '/product/realtime'
    },
    {
      title: 'Vector Database',
      description: 'AI-ready with pgvector support',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      href: '/product/vector'
    }
  ];

  const developmentItems = [
    {
      title: 'Documentation',
      description: 'Complete API references and guides',
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      href: '#docs'
    },
    {
      title: 'Examples',
      description: 'Production-ready starter kits',
      icon: <Code className="w-5 h-5 text-green-400" />,
      href: '#examples'
    },
    {
      title: 'CLI',
      description: 'Command line interface',
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      href: '#cli'
    },
    {
      title: 'API Status',
      description: 'Service status and incidents',
      icon: <Server className="w-5 h-5 text-yellow-400" />,
      href: '#status'
    },
    {
      title: 'Community',
      description: 'Join our developer community',
      icon: <Users className="w-5 h-5 text-pink-400" />,
      href: '#community'
    },
    {
      title: 'Support',
      description: 'Get help from our team',
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      href: '#support'
    }
  ];

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "PostgreSQL Database",
      description: "Every project is a full Postgres database, the world's most trusted relational database.",
      highlights: ["100% portable", "Realtime enabled", "Row-level security"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Built-in Auth",
      description: "Add user sign-ups and logins, securing your data with Row Level Security.",
      highlights: ["Social login", "Passwordless", "Enterprise SSO"]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Object Storage",
      description: "Store, organize, and serve large files. Any media, including videos and images.",
      highlights: ["Global CDN", "Image transformations", "Access controls"]
    },
    {
      icon: <Lightning className="w-8 h-8" />,
      title: "Edge Functions",
      description: "Write custom code without deploying or scaling servers. Globally distributed.",
      highlights: ["TypeScript", "Sub-50ms cold starts", "30+ regions"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Realtime",
      description: "Listen to your PostgreSQL database in realtime via websockets.",
      highlights: ["WebSocket API", "Presence channels", "Broadcast messages"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Database Branching",
      description: "Branch your database like your code. Perfect for testing and CI/CD.",
      highlights: ["Instant cloning", "Zero downtime", "Merge conflicts"]
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
    { value: "<50ms", label: "Edge latency", description: "Global deployment" },
    { value: "30+", label: "Regions", description: "Worldwide coverage" },
    { value: "50,000+", label: "Developers", description: "Trusted by teams" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 overflow-x-hidden">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse delay-500"></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 rounded-lg"></div>
                <span className="text-xl font-bold text-white">Atlas</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Product Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                  <a href="/product">Product</a>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {productItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="group/item p-3 rounded-lg hover:bg-gray-900/50 transition-colors"
                        >
                          <div className="flex items-start space-x-3">
                            {item.icon}
                            <div>
                              <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Development Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2">
                  <span>Development</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-6">
                    <div className="space-y-2">
                      {developmentItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="group/item p-3 rounded-lg hover:bg-gray-900/50 transition-colors flex items-start space-x-3"
                        >
                          {item.icon}
                          <div>
                            <div className="text-white font-medium group-hover/item:text-blue-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-sm text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Links */}
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#enterprise" className="text-gray-300 hover:text-white transition-colors">
                Enterprise
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/auth/login" 
                className="text-gray-300 hover:text-white transition-colors hidden md:block"
              >
                Sign In
              </Link>
              <Link 
                href="/auth/signup"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-lg 
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                         shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
                         flex items-center space-x-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Start Free</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {/* Mobile Product */}
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Product</div>
                <div className="space-y-1">
                  {productItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-900/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <div>
                        <div className="text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Development */}
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Development</div>
                <div className="space-y-1">
                  {developmentItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-900/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon}
                      <div>
                        <div className="text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Simple Mobile Links */}
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
                Pricing
              </a>
              <a href="#enterprise" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg">
                Enterprise
              </a>
              
              <div className="pt-4 border-t border-gray-800">
                <Link 
                  href="/auth/login" 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900/50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Animated badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-8 animate-pulse">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">Trusted by 50,000+ developers</span>
              </div>
              
              {/* Main headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                The platform for
                <span className="block mt-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                    production-ready apps
                  </span>
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Build faster with a complete backend. Get Postgres database, authentication, storage, and edge functions in one platform.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link 
                  href="/signup"
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                           hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                           shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                           text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Start your project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#demo"
                  className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl text-lg font-semibold
                           hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                           hover:text-white"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>View demo</span>
                  </span>
                </Link>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-blue-300 font-semibold">{metric.label}</div>
                    <div className="text-sm text-gray-400 mt-1">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Everything you need to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  build and scale
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We handle the infrastructure so you can focus on building features that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 
                           hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                                flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-blue-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Build in minutes,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    not weeks
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  With our SDKs and straightforward APIs, you can go from zero to production in record time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">TypeScript SDK</h4>
                      <p className="text-gray-400 text-sm">Fully typed for the best developer experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">CLI & Local Development</h4>
                      <p className="text-gray-400 text-sm">Develop locally and deploy with one command</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Auto-generated APIs</h4>
                      <p className="text-gray-400 text-sm">Instant REST and GraphQL APIs from your database</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code Block */}
              <div className="bg-black/50 border border-gray-800 rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">server.ts</div>
                </div>
                <div className="p-6">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    {`// Initialize Atlas client
import { createClient } from '@atlas/supabase-js'

const atlas = createClient(
  process.env.ATLAS_URL,
  process.env.ATLAS_ANON_KEY
)

// Real-time subscription
const channel = atlas
  .channel('todos')
  .on(
    'postgres_changes',
    { event: '*', schema: 'public' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()

// Edge Function example
export default async function handler(req) {
  const { data: user } = await atlas.auth.getUser()
  
  if (!user) {
    return new Response('Unauthorized', { status: 401 })
  }
  
  const { data } = await atlas
    .from('todos')
    .select('*')
    .eq('user_id', user.id)
  
  return new Response(JSON.stringify(data))
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to build the future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who trust Atlas with their production infrastructure.
                Get started in seconds with our generous free tier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/auth/signup"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                           hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                           shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                           text-lg font-semibold"
                >
                  Start Building Free
                </Link>
                <Link 
                  href="#enterprise"
                  className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl text-lg font-semibold
                           hover:bg-gray-900/50 hover:border-gray-600 transition-colors"
                >
                  Talk to Sales
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                No credit card required • Free tier includes 10,000 monthly active users • 500MB database
              </p>
            </div>
          </div>
        </section>
      </main>

        </div>
  );
}