"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Database, 
  Shield, 
  HardDrive, 
  Zap, 
  Radio, 
  Cpu,
  Globe,
  Server,
  Lock,
  GitBranch,
  Code,
  Terminal,
  BarChart3,
  Eye,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  GitPullRequest,
  Cpu as CpuIcon,
  Cloud,
  Users,
  FileCode,
  MessageSquare,
  ExternalLink,
  PlayCircle,
  Download,
  Star,
  Award
} from 'lucide-react';

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const mainProducts = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      description: "Fully managed PostgreSQL with realtime, backups, and monitoring",
      features: ["Realtime subscriptions", "Row-level security", "Point-in-time recovery", "Auto-scaling"],
      href: "/product/database",
      color: "from-blue-500 to-cyan-500",
      stats: ["<1ms latency", "99.99% uptime", "Unlimited connections"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentication",
      description: "Complete user management with social login, MFA, and enterprise SSO",
      features: ["Passwordless login", "Multi-factor auth", "Enterprise SAML", "User analytics"],
      href: "/product/auth",
      color: "from-green-500 to-emerald-500",
      stats: ["SOC2 compliant", "Zero-trust model", "GDPR ready"]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Storage",
      description: "Global object storage with image optimization and CDN",
      features: ["Image transformations", "Global CDN", "Access controls", "Versioning"],
      href: "/product/storage",
      color: "from-purple-500 to-pink-500",
      stats: ["30+ edge locations", "∞ scalability", "99.999999999% durability"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Edge Functions",
      description: "Serverless functions deployed globally with sub-50ms cold starts",
      features: ["TypeScript native", "30+ regions", "Database integrations", "Cron jobs"],
      href: "/product/functions",
      color: "from-yellow-500 to-orange-500",
      stats: ["<50ms cold start", "Auto-scaling", "Zero-config"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Realtime",
      description: "WebSocket-based realtime subscriptions and presence",
      features: ["Database changes", "Presence channels", "Broadcast messages", "Rate limiting"],
      href: "/product/realtime",
      color: "from-pink-500 to-rose-500",
      stats: ["<100ms latency", "10M+ connections", "99.9% reliability"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Vector Database",
      description: "AI-ready with pgvector for embeddings and semantic search",
      features: ["pgvector native", "Semantic search", "AI embeddings", "Hybrid search"],
      href: "/product/vector",
      color: "from-indigo-500 to-blue-500",
      stats: ["16k dimensions", "FAISS indexing", "Cosine similarity"]
    }
  ];

  const platformFeatures = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Database Branching",
      description: "Branch your database like your code. Perfect for testing and CI/CD.",
      highlight: true
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Deployment",
      description: "Deploy to 30+ regions worldwide with automatic routing.",
      highlight: true
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "High Availability",
      description: "Automatic failover with multi-zone replication and backups.",
      highlight: false
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC2 Type II, HIPAA, GDPR compliant with audit logging.",
      highlight: false
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Built-in monitoring, logging, and performance insights.",
      highlight: false
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript SDK",
      description: "Fully typed client libraries for the best developer experience.",
      highlight: false
    }
  ];

  const useCases = [
    {
      category: "Startups",
      examples: ["MVP development", "Rapid prototyping", "User authentication", "Real-time features"]
    },
    {
      category: "Enterprise",
      examples: ["Microservices backend", "Internal tools", "Customer portals", "Data analytics"]
    },
    {
      category: "AI/ML",
      examples: ["Vector search", "Semantic similarity", "Recommendation engines", "Chat applications"]
    },
    {
      category: "E-commerce",
      examples: ["Product catalogs", "User sessions", "Real-time inventory", "Order management"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">All-in-one backend platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything you need to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                build production apps
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              A complete suite of backend services that work seamlessly together. 
              From database to authentication, storage to edge functions — we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/auth/signup"
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
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-300 font-semibold">Services</div>
              <div className="text-sm text-gray-400">Integrated platform</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">30+</div>
              <div className="text-blue-300 font-semibold">Regions</div>
              <div className="text-sm text-gray-400">Global deployment</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">99.99%</div>
              <div className="text-blue-300 font-semibold">Uptime SLA</div>
              <div className="text-sm text-gray-400">Enterprise reliability</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">∞</div>
              <div className="text-blue-300 font-semibold">Scalability</div>
              <div className="text-sm text-gray-400">No limits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete backend
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                in one platform
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service is designed to work seamlessly with others, giving you a unified development experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 
                         hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10
                         flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-4`}>
                  {product.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{product.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-300 font-medium mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.stats.map((stat, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-800/50 text-xs text-gray-300 rounded">
                        {stat}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      href={product.href}
                      className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="text-gray-400 hover:text-white">
                      <Star className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform capabilities
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                that make the difference
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond individual services, our platform provides powerful capabilities that accelerate development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gray-900/30 backdrop-blur-sm border rounded-2xl p-6 
                         transition-all duration-300 ${feature.highlight ? 'border-blue-500/30 bg-gradient-to-br from-blue-900/10 to-transparent' : 'border-gray-800'}
                         hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4
                              ${feature.highlight ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                {feature.highlight && (
                  <div className="mt-4 pt-4 border-t border-blue-500/20">
                    <span className="text-xs text-blue-400 font-medium">PLATFORM EXCLUSIVE</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                every use case
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, AI applications to e-commerce — Atlas scales with your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{useCase.category}</h3>
                <ul className="space-y-3">
                  {useCase.examples.map((example, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {example}
                    </li>
                  ))}
                </ul>
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
              Seamless integrations
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                with your favorite tools
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Vercel", color: "text-black", bg: "bg-white" },
              { name: "Next.js", color: "text-white", bg: "bg-black" },
              { name: "React", color: "text-cyan-400", bg: "bg-gray-900" },
              { name: "TypeScript", color: "text-blue-600", bg: "bg-white" },
              { name: "GitHub", color: "text-white", bg: "bg-gray-900" },
              { name: "VSCode", color: "text-blue-500", bg: "bg-gray-900" },
              { name: "Stripe", color: "text-white", bg: "bg-purple-600" },
              { name: "Auth0", color: "text-white", bg: "bg-orange-500" },
              { name: "AWS", color: "text-orange-400", bg: "bg-gray-900" },
              { name: "GCP", color: "text-white", bg: "bg-blue-600" },
              { name: "Docker", color: "text-blue-500", bg: "bg-gray-900" },
              { name: "Kubernetes", color: "text-blue-400", bg: "bg-gray-900" },
            ].map((tool, index) => (
              <div
                key={index}
                className={`${tool.bg} border border-gray-800 rounded-xl p-6 flex items-center justify-center 
                           hover:scale-105 transition-transform duration-300`}
              >
                <span className={`font-bold ${tool.color}`}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to accelerate your development?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who build faster with Atlas. Everything you need in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                         shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <span>Start Free Forever</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href="#contact"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contact Sales</span>
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free tier includes 10,000 MAUs</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 support available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}