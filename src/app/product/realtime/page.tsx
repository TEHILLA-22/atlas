// src/app/product/realtime/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Radio, 
  Zap,
  Users,
  Globe,
  Network,
  MessageSquare,
  Shield,
  BarChart3,
  Bell,
  Eye,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MessageSquare as Chat,
  Award,
  Activity,
  TrendingUp,
  Cloud,
  Server,
  Cpu,
  GitBranch,
  Layers
} from 'lucide-react';

export default function RealtimePage() {
  const [activeUseCase, setActiveUseCase] = useState('collaboration');

  const capabilities = [
    { metric: "Latency", value: "<100ms", description: "P95 round-trip time" },
    { metric: "Connections", value: "1M+", description: "Concurrent per project" },
    { metric: "Uptime", value: "99.95%", description: "WebSocket SLA" },
    { metric: "Throughput", value: "100K msg/s", description: "Messages per second" },
    { metric: "Regions", value: "30+", description: "Global edge network" },
    { metric: "Scaling", value: "Auto", description: "Zero-config scaling" }
  ];

  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "WebSocket-Based",
      description: "Native WebSocket connections with automatic fallback to HTTP streaming",
      benefits: [
        "Bidirectional real-time communication",
        "Automatic reconnection with backoff",
        "Connection state management",
        "Binary message support"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Presence & State",
      description: "Track user presence and shared state across all connected clients",
      benefits: [
        "Real-time user presence tracking",
        "Shared state synchronization",
        "Typing indicators",
        "Online/offline status"
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Deployed to 30+ regions with automatic geo-routing and failover",
      benefits: [
        "Low-latency global distribution",
        "Automatic region failover",
        "Edge computing integration",
        "DDoS protection"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Built-in security with authentication, authorization, and encryption",
      benefits: [
        "End-to-end encryption",
        "Rate limiting per connection",
        "IP allowlisting",
        "Audit logging"
      ]
    }
  ];

  const useCases = [
    {
      id: 'collaboration',
      title: "Collaboration Tools",
      description: "Build real-time collaborative applications with live editing and presence",
      examples: [
        "Google Docs-style live editing",
        "Figma-like design collaboration",
        "Team project management boards",
        "Multiplayer whiteboards"
      ],
      icon: <Users className="w-8 h-8" />,
      metrics: [
        { label: "Typing latency", value: "<50ms" },
        { label: "Cursors sync", value: "10ms" },
        { label: "Presence updates", value: "Real-time" }
      ]
    },
    {
      id: 'notifications',
      title: "Live Notifications",
      description: "Deliver instant notifications and alerts to millions of users",
      examples: [
        "Social media activity feeds",
        "Trading platform alerts",
        "System monitoring dashboards",
        "Customer support notifications"
      ],
      icon: <Bell className="w-8 h-8" />,
      metrics: [
        { label: "Delivery time", value: "<100ms" },
        { label: "Scale", value: "1M+/sec" },
        { label: "Reliability", value: "99.95%" }
      ]
    },
    {
      id: 'gaming',
      title: "Multiplayer Gaming",
      description: "Power real-time multiplayer games with low-latency synchronization",
      examples: [
        "Real-time strategy games",
        "Multiplayer puzzle games",
        "Casual mobile gaming",
        "Live trivia and quizzes"
      ],
      icon: <Activity className="w-8 h-8" />,
      metrics: [
        { label: "Game state sync", value: "60Hz" },
        { label: "Latency", value: "<50ms" },
        { label: "Players/room", value: "100+" }
      ]
    },
    {
      id: 'dashboard',
      title: "Live Dashboards",
      description: "Create real-time monitoring and analytics dashboards",
      examples: [
        "Financial trading dashboards",
        "System monitoring consoles",
        "Live sports analytics",
        "Social media trends"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      metrics: [
        { label: "Data refresh", value: "Real-time" },
        { label: "Updates/sec", value: "10K+" },
        { label: "Visual latency", value: "<100ms" }
      ]
    }
  ];

  const integrationFeatures = [
    {
      title: "Database Changes",
      description: "Subscribe to PostgreSQL database changes in real-time",
      icon: <Server className="w-6 h-6" />,
      details: [
        "Row-level change subscriptions",
        "Filter by table, operation, or column",
        "Transaction-aware updates",
        "Conflict resolution"
      ]
    },
    {
      title: "Presence Channels",
      description: "Track user presence and shared state in real-time channels",
      icon: <Eye className="w-6 h-6" />,
      details: [
        "Channel membership tracking",
        "User metadata synchronization",
        "Join/leave events",
        "Heartbeat monitoring"
      ]
    },
    {
      title: "Broadcast Messages",
      description: "Send messages to all clients or specific groups",
      icon: <MessageSquare className="w-6 h-6" />,
      details: [
        "One-to-many broadcasting",
        "Selective channel messaging",
        "Message persistence",
        "Delivery acknowledgments"
      ]
    },
    {
      title: "Scalability",
      description: "Scale to millions of concurrent connections seamlessly",
      icon: <TrendingUp className="w-6 h-6" />,
      details: [
        "Automatic horizontal scaling",
        "Zero-downtime deployments",
        "Connection load balancing",
        "Resource optimization"
      ]
    }
  ];

  const enterpriseFeatures = [
    {
      title: "SLA Guarantee",
      value: "99.95%",
      description: "WebSocket connection uptime",
      details: "Enterprise-grade reliability with automatic failover"
    },
    {
      title: "Security Compliance",
      value: "SOC2 Type II",
      description: "Industry certifications",
      details: "Regular security audits and pentesting"
    },
    {
      title: "Global Latency",
      value: "<100ms",
      description: "P95 round-trip time",
      details: "30+ edge locations worldwide"
    },
    {
      title: "Support",
      value: "24/7",
      description: "Enterprise support",
      details: "Dedicated engineering team"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-900/20 border border-pink-700/30 mb-6">
                <Radio className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-pink-300">Realtime Subscriptions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Real-time communication
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-pink-500">
                  at any scale
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Build interactive applications with WebSocket connections, presence tracking, 
                and real-time data synchronization. Scale to millions of concurrent users.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/auth/signup"
                  className="group bg-gradient-to-r from-pink-600 to-rose-500 text-white px-8 py-3 rounded-xl
                           hover:from-pink-700 hover:to-rose-600 transition-all duration-300
                           shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50
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
                  <span>View Live Demo</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1M+ concurrent connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>&lt;100ms global latency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>99.95% uptime SLA</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-4">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Performance Metrics</h3>
                </div>
                
                <div className="space-y-4">
                  {capabilities.map((cap, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800/50">
                      <div>
                        <div className="text-sm text-gray-400">{cap.metric}</div>
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

      {/* Core Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-grade real-time
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build production-ready real-time applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-pink-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                              flex items-center justify-center text-pink-400 mb-4`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-world applications
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                powered by real-time
              </span>
            </h2>
          </div>

          {/* Use Case Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeUseCase === useCase.id
                      ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {useCase.icon}
                    <span>{useCase.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Use Case */}
          {useCases
            .filter(useCase => useCase.id === activeUseCase)
            .map((useCase) => (
              <div key={useCase.id} className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-xl text-gray-300">{useCase.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Example Applications:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-900/50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mx-auto mb-4">
                      {useCase.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">Architecture Benefits</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Low Latency</div>
                        <div className="text-sm text-gray-400">Optimized network routing ensures minimal delay</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Horizontal Scaling</div>
                        <div className="text-sm text-gray-400">Automatically scales to handle traffic spikes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Enterprise Security</div>
                        <div className="text-sm text-gray-400">Built-in DDoS protection and encryption</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">Global Distribution</div>
                        <div className="text-sm text-gray-400">30+ edge locations for worldwide coverage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Seamless integration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                with your stack
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-pink-500/50 transition-colors"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 
                              flex items-center justify-center text-pink-400 mb-4`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-300">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-ready platform
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                for mission-critical apps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/30 to-gray-900/10 border border-gray-800 rounded-2xl p-6
                         hover:border-pink-500/50 transition-colors text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{feature.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{feature.title}</div>
                <div className="text-sm text-pink-400 mb-3">{feature.description}</div>
                <div className="text-sm text-gray-400">{feature.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why choose Atlas Realtime
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                over alternatives
              </span>
            </h2>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-medium">Feature</th>
                    <th className="text-left p-6 text-gray-400 font-medium">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                          <Radio className="w-3 h-3 text-white" />
                        </div>
                        <span>Atlas Realtime</span>
                      </div>
                    </th>
                    <th className="text-left p-6 text-gray-400 font-medium">Pusher</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Ably</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Socket.io</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6 font-medium text-white">Database Integration</td>
                    <td className="p-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-white">Native PostgreSQL</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-400">Third-party only</td>
                    <td className="p-6 text-gray-400">Third-party only</td>
                    <td className="p-6 text-gray-400">Manual setup</td>
                  </tr>
                  
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6 font-medium text-white">Global Latency</td>
                    <td className="p-6">
                      <div className="text-white font-bold">&lt;100ms</div>
                      <div className="text-sm text-gray-400">30+ edge locations</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">100-200ms</div>
                      <div className="text-sm text-gray-400">Limited regions</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">50-150ms</div>
                      <div className="text-sm text-gray-400">15 regions</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">Varies</div>
                      <div className="text-sm text-gray-400">Self-managed</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6 font-medium text-white">Max Connections</td>
                    <td className="p-6">
                      <div className="text-white font-bold">1M+</div>
                      <div className="text-sm text-gray-400">Per project</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">200K</div>
                      <div className="text-sm text-gray-400">Enterprise plan</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">500K</div>
                      <div className="text-sm text-gray-400">Enterprise plan</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">Limited by server</div>
                      <div className="text-sm text-gray-400">Self-managed</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6 font-medium text-white">Pricing Model</td>
                    <td className="p-6">
                      <div className="text-white font-bold">Predictable</div>
                      <div className="text-sm text-gray-400">Per active connection</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">Messages + connections</div>
                      <div className="text-sm text-gray-400">Complex pricing</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">Messages + connections</div>
                      <div className="text-sm text-gray-400">Complex pricing</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">Infrastructure cost</div>
                      <div className="text-sm text-gray-400">Self-managed</div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-900/50">
                    <td className="p-6 font-medium text-white">Security Compliance</td>
                    <td className="p-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-white">SOC2, GDPR, HIPAA</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6 text-gray-400">Self-managed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-900/20 to-rose-900/20 border border-pink-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-6">
              <Radio className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Build the future of real-time
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building interactive applications with Atlas Realtime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-8 py-4 rounded-xl
                         hover:from-pink-700 hover:to-rose-600 transition-all duration-300
                         shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Radio className="w-5 h-5" />
                <span>Start Free with 500 Concurrent Connections</span>
              </Link>
              
              <Link
                href="/docs/realtime"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read Documentation</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>500 free concurrent connections</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>99.95% uptime SLA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Global edge deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}