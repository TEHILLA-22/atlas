// src/app/product/functions/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Globe,
  Code,
  Terminal,
  Server,
  Clock,
  Cpu,
  Network,
  GitBranch,
  Layers,
  Shield,
  BarChart3,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Award,
  Copy,
  ExternalLink,
  Eye,
  Filter,
  GitPullRequest,
  Cloud,
  Database,
  HardDrive,
  Radio,
  Users,
  TrendingUp
} from 'lucide-react';

export default function FunctionsPage() {
  const [activeExample, setActiveExample] = useState('basic');

  const capabilities = [
    { metric: "Cold Start", value: "<50ms", description: "Average cold start time" },
    { metric: "Regions", value: "30+", description: "Global deployment" },
    { metric: "Uptime", value: "99.99%", description: "SLA guarantee" },
    { metric: "Concurrency", value: "1,000+", description: "Per function limit" },
    { metric: "Memory", value: "10GB", description: "Max per function" },
    { metric: "Timeout", value: "900s", description: "15 minutes max" }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Deployment",
      description: "Deploy to 30+ regions worldwide, automatically routed to nearest users",
      details: ["Automatic geo-routing", "Zero-config deployment", "Multi-region failover"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Zero Cold Starts",
      description: "Sub-50ms cold starts with intelligent warming and concurrency",
      details: ["Intelligent warming", "Instant scale-to-zero", "Predictive execution"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript Native",
      description: "First-class TypeScript support with type-safe environment variables",
      details: ["Auto-generated types", "Type-safe config", "Editor integration"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Integration",
      description: "Direct connection to your PostgreSQL database with connection pooling",
      details: ["Connection pooling", "Auto-retry logic", "Transaction support"]
    }
  ];

  const useCases = [
    {
      title: "API Endpoints",
      description: "Build REST, GraphQL, or tRPC APIs with automatic routing",
      example: "User APIs, payment processing, webhooks"
    },
    {
      title: "Background Jobs",
      description: "Run scheduled tasks and long-running background processes",
      example: "Email sending, report generation, data sync"
    },
    {
      title: "Webhook Handlers",
      description: "Process webhooks from Stripe, GitHub, Slack, and more",
      example: "Payment notifications, CI/CD pipelines, chat integrations"
    },
    {
      title: "Real-time Processing",
      description: "Process real-time data streams and WebSocket connections",
      example: "Chat applications, live analytics, IoT data"
    }
  ];

  const codeExamples = {
    basic: {
      title: "Basic HTTP Handler",
      description: "Simple HTTP handler with TypeScript and environment variables",
      code: `// functions/api/users.ts
import { serve } from '@atlas/functions'

interface User {
  id: string
  email: string
  name: string
}

const handler = serve(async (req: Request) => {
  // Access environment variables
  const apiKey = Deno.env.get('API_KEY')
  
  // Parse request
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('id')
  
  // Connect to database
  const { data: user } = await atlas
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()
  
  // Return JSON response
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' }
  })
})

export default handler`
    },
    scheduled: {
      title: "Scheduled Function",
      description: "Cron job that runs on a schedule for background processing",
      code: `// functions/scheduled/cleanup.ts
import { cron } from '@atlas/functions'

// Run every day at 2 AM UTC
export default cron('0 2 * * *', async () => {
  console.log('Starting daily cleanup...')
  
  // Delete old sessions
  const { error } = await atlas
    .from('sessions')
    .delete()
    .lt('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())
  
  if (error) {
    console.error('Cleanup failed:', error)
    throw error
  }
  
  console.log('Cleanup completed successfully')
  return { success: true }
})`
    },
    webhook: {
      title: "Webhook Handler",
      description: "Process webhooks with signature verification",
      code: `// functions/webhooks/stripe.ts
import { serve } from '@atlas/functions'
import Stripe from 'stripe'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2023-10-16'
})

const handler = serve(async (req: Request) => {
  // Verify webhook signature
  const signature = req.headers.get('stripe-signature')
  const body = await req.text()
  
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    return new Response('Invalid signature', { status: 400 })
  }
  
  // Handle different event types
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      await processSuccessfulPayment(paymentIntent)
      break
      
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription
      await updateSubscription(subscription)
      break
  }
  
  return new Response('Webhook processed', { status: 200 })
})

async function processSuccessfulPayment(payment: Stripe.PaymentIntent) {
  // Update database with payment info
  await atlas
    .from('payments')
    .insert({
      stripe_id: payment.id,
      amount: payment.amount,
      user_id: payment.metadata.user_id,
      status: 'succeeded'
    })
}

export default handler`
    },
    realtime: {
      title: "Real-time Processing",
      description: "Process real-time data with WebSocket connections",
      code: `// functions/realtime/processor.ts
import { serve } from '@atlas/functions'

const handler = serve(async (req: Request) => {
  // Upgrade to WebSocket connection
  if (req.headers.get('upgrade') === 'websocket') {
    const { socket, response } = Deno.upgradeWebSocket(req)
    
    socket.onopen = () => {
      console.log('WebSocket connection established')
    }
    
    socket.onmessage = async (event) => {
      const data = JSON.parse(event.data)
      
      switch (data.type) {
        case 'message':
          // Broadcast to other clients
          await broadcastMessage(data)
          break
          
        case 'presence':
          // Update user presence
          await updatePresence(data.userId, data.status)
          break
      }
    }
    
    socket.onclose = () => {
      console.log('WebSocket connection closed')
    }
    
    return response
  }
  
  return new Response('WebSocket endpoint', { status: 200 })
})

async function broadcastMessage(message: any) {
  // Send to all connected clients in a room
  await atlas.realtime
    .channel(\`room:\${message.roomId}\`)
    .send({
      type: 'broadcast',
      event: 'message',
      payload: message
    })
}

export default handler`
    }
  };

  const integrations = [
    { name: "TypeScript", description: "First-class support" },
    { name: "Deno", description: "Built on Deno runtime" },
    { name: "PostgreSQL", description: "Direct database access" },
    { name: "Redis", description: "KV storage integration" },
    { name: "OpenTelemetry", description: "Distributed tracing" },
    { name: "Prometheus", description: "Metrics export" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-yellow-900/20 border border-yellow-700/30 mb-6">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-yellow-300">Edge Functions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Serverless functions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500">
                  at the edge
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Deploy TypeScript functions globally with sub-50ms cold starts. 
                Built on Deno with direct database access and auto-scaling.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/auth/signup"
                  className="group bg-gradient-to-r from-yellow-600 to-orange-500 text-white px-8 py-3 rounded-xl
                           hover:from-yellow-700 hover:to-orange-600 transition-all duration-300
                           shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50
                           font-semibold flex items-center space-x-2"
                >
                  <span>Deploy Your First Function</span>
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
                  <span>Sub-50ms cold starts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Global deployment in 30+ regions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Direct PostgreSQL access</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Performance Specs</h3>
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

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Atlas Edge Functions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                are different
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for performance and developer experience from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 
                              flex items-center justify-center text-yellow-400 mb-4`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-world examples
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                you can use today
              </span>
            </h2>
          </div>

          {/* Example Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.keys(codeExamples).map((key) => {
                const example = codeExamples[key as keyof typeof codeExamples];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveExample(key)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeExample === key
                        ? 'bg-gradient-to-r from-yellow-600 to-orange-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                    }`}
                  >
                    {example.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Example */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {Object.entries(codeExamples)
                .filter(([key]) => key === activeExample)
                .map(([key, example]) => (
                  <div key={key}>
                    <h3 className="text-2xl font-bold text-white mb-4">{example.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{example.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">Average execution: 50-200ms</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Cpu className="w-4 h-4 mr-2" />
                        <span className="text-sm">Memory: 128MB - 10GB configurable</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Network className="w-4 h-4 mr-2" />
                        <span className="text-sm">Deployed globally to 30+ regions</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Code Block */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-gray-900/50 border-b border-gray-800 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">TypeScript</div>
                </div>
                <button
                  onClick={() => {
                    const code = codeExamples[activeExample as keyof typeof codeExamples].code;
                    navigator.clipboard.writeText(code);
                  }}
                  className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center space-x-1"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
              </div>
              <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                {codeExamples[activeExample as keyof typeof codeExamples].code}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                modern applications
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-yellow-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 
                              flex items-center justify-center text-yellow-400 mb-4">
                  {index === 0 ? <Server className="w-6 h-6" /> :
                   index === 1 ? <Clock className="w-6 h-6" /> :
                   index === 2 ? <Network className="w-6 h-6" /> :
                   <Radio className="w-6 h-6" />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-sm text-gray-300 font-medium">Examples:</div>
                  <div className="text-sm text-gray-400">{useCase.example}</div>
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
              Built with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                modern technology
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center 
                         hover:border-yellow-500/50 transition-colors group"
              >
                <div className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {integration.name}
                </div>
                <div className="text-sm text-gray-400">{integration.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/docs/functions"
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-medium"
            >
              <span>Explore Functions Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Performance comparison
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                vs other platforms
              </span>
            </h2>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-medium">Platform</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Cold Start</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Global Regions</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Direct DB Access</th>
                    <th className="text-left p-6 text-gray-400 font-medium">TypeScript</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Pricing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white">Atlas Edge Functions</div>
                          <div className="text-sm text-gray-400">Our platform</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="text-green-400 font-bold">&lt;50ms</div>
                      <div className="text-sm text-gray-400">With warming</div>
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">30+</div>
                      <div className="text-sm text-gray-400">Auto-routing</div>
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">$0.20/million</div>
                      <div className="text-sm text-gray-400">First 1M free</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white">AWS Lambda</div>
                          <div className="text-sm text-gray-400">Amazon</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="text-yellow-400 font-bold">100-1000ms</div>
                      <div className="text-sm text-gray-400">Variable</div>
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">30+</div>
                      <div className="text-sm text-gray-400">Manual setup</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">—</div>
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">Complex</div>
                      <div className="text-sm text-gray-400">Requests + duration</div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-800 hover:bg-gray-900/50">
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white">Vercel Functions</div>
                          <div className="text-sm text-gray-400">Vercel</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="text-yellow-400 font-bold">150-500ms</div>
                      <div className="text-sm text-gray-400">No warming</div>
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">20+</div>
                      <div className="text-sm text-gray-400">Limited regions</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">—</div>
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">Bundled</div>
                      <div className="text-sm text-gray-400">With hosting</div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-900/50">
                    <td className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-bold text-white">Cloudflare Workers</div>
                          <div className="text-sm text-gray-400">Cloudflare</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="text-green-400 font-bold">&lt;5ms</div>
                      <div className="text-sm text-gray-400">No cold starts</div>
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">300+</div>
                      <div className="text-sm text-gray-400">Everywhere</div>
                    </td>
                    <td className="p-6">
                      <div className="text-gray-400">—</div>
                    </td>
                    <td className="p-6">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="p-6">
                      <div className="text-white font-bold">$0.15/million</div>
                      <div className="text-sm text-gray-400">No database</div>
                    </td>
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
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Deploy your first function in seconds
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the fastest edge functions with direct database access and global deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white px-8 py-4 rounded-xl
                         hover:from-yellow-700 hover:to-orange-600 transition-all duration-300
                         shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>Start Free with 1M Invocations</span>
              </Link>
              
              <Link
                href="/docs/functions"
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
                <span>1M free invocations/month</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Direct PostgreSQL access</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Global deployment included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}