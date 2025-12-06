// src/app/product/vector/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu,
  Brain,
  Search,
  Layers,
  Zap,
  Shield,
  Globe,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Award,
  Users,
  BarChart3,
  Code,
  Terminal,
  MessageSquare,
  GitBranch,
  Network,
  Server,
  Eye,
  Filter
} from 'lucide-react';

export default function VectorPage() {
  const [activeFeature, setActiveFeature] = useState('semantic');

  const capabilities = [
    { metric: "Dimensions", value: "16,384", description: "Maximum vector dimensions" },
    { metric: "Latency", value: "<10ms", description: "P95 query response time" },
    { metric: "Vectors", value: "1B+", description: "Per collection limit" },
    { metric: "Recall", value: "99.9%", description: "Search accuracy" },
    { metric: "Regions", value: "30+", description: "Global deployment" },
    { metric: "Uptime", value: "99.99%", description: "SLA guarantee" }
  ];

  const features = [
    {
      id: 'semantic',
      icon: <Search className="w-6 h-6" />,
      title: "Semantic Search",
      description: "Find meaningfully similar content using vector embeddings",
      benefits: [
        "Natural language understanding",
        "Cross-modal search (text-to-image, image-to-text)",
        "Multilingual support",
        "Context-aware results"
      ],
      useCases: [
        "Intelligent search engines",
        "Content recommendation",
        "Document retrieval",
        "Product discovery"
      ]
    },
    {
      id: 'recommendation',
      icon: <Brain className="w-6 h-6" />,
      title: "Recommendation Engines",
      description: "Build personalized recommendation systems at scale",
      benefits: [
        "Real-time personalization",
        "Collaborative filtering",
        "Content-based recommendations",
        "A/B testing integration"
      ],
      useCases: [
        "E-commerce recommendations",
        "Content streaming platforms",
        "Social media feeds",
        "Learning platforms"
      ]
    },
    {
      id: 'rag',
      icon: <Layers className="w-6 h-6" />,
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation for accurate AI responses",
      benefits: [
        "Ground LLM responses in your data",
        "Reduce hallucinations",
        "Cite sources automatically",
        "Update knowledge in real-time"
      ],
      useCases: [
        "AI chatbots with context",
        "Enterprise knowledge bases",
        "Customer support automation",
        "Research assistants"
      ]
    },
    {
      id: 'anomaly',
      icon: <Eye className="w-6 h-6" />,
      title: "Anomaly Detection",
      description: "Identify unusual patterns and outliers in high-dimensional data",
      benefits: [
        "Real-time anomaly detection",
        "Automated alerting",
        "Historical analysis",
        "Pattern recognition"
      ],
      useCases: [
        "Fraud detection",
        "System monitoring",
        "Quality control",
        "Security threat detection"
      ]
    }
  ];

  const technicalFeatures = [
    {
      title: "pgvector Integration",
      description: "Native PostgreSQL extension with full SQL support",
      icon: <Database className="w-5 h-5" />,
      details: [
        "Full SQL query capabilities",
        "ACID compliance",
        "Point-in-time recovery",
        "Row-level security"
      ]
    },
    {
      title: "High Performance",
      description: "Optimized indexing and query execution",
      icon: <Zap className="w-5 h-5" />,
      details: [
        "IVFFlat and HNSW indexing",
        "GPU acceleration support",
        "Parallel query execution",
        "Memory-optimized storage"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Built-in security and compliance features",
      icon: <Shield className="w-5 h-5" />,
      details: [
        "Encryption at rest and in transit",
        "SOC2 Type II compliance",
        "GDPR and HIPAA ready",
        "Audit logging"
      ]
    },
    {
      title: "Global Scale",
      description: "Deploy and scale across multiple regions",
      icon: <Globe className="w-5 h-5" />,
      details: [
        "30+ global regions",
        "Automatic sharding",
        "Cross-region replication",
        "Low-latency queries"
      ]
    }
  ];

  const integrations = [
    {
      category: "AI/ML Frameworks",
      tools: [
        { name: "OpenAI", description: "Embeddings API integration" },
        { name: "Hugging Face", description: "Transformer models" },
        { name: "Cohere", description: "Embedding models" },
        { name: "PyTorch", description: "Custom model training" }
      ]
    },
    {
      category: "Development Tools",
      tools: [
        { name: "LangChain", description: "LLM framework integration" },
        { name: "LlamaIndex", description: "Data framework" },
        { name: "Python SDK", description: "Full-featured client" },
        { name: "TypeScript SDK", description: "Web integration" }
      ]
    },
    {
      category: "Monitoring & Analytics",
      tools: [
        { name: "Prometheus", description: "Metrics export" },
        { name: "Grafana", description: "Dashboard integration" },
        { name: "OpenTelemetry", description: "Distributed tracing" },
        { name: "Datadog", description: "Performance monitoring" }
      ]
    }
  ];

  const comparisonData = [
    {
      feature: "PostgreSQL Integration",
      atlas: { value: "Native", highlight: true },
      pinecone: { value: "External", note: "Separate service required" },
      weaviate: { value: "Custom", note: "GraphQL only" },
      chroma: { value: "Limited", note: "No SQL support" }
    },
    {
      feature: "Maximum Dimensions",
      atlas: { value: "16,384", highlight: true },
      pinecone: { value: "20,000" },
      weaviate: { value: "65,536" },
      chroma: { value: "2,048" }
    },
    {
      feature: "Query Latency (P95)",
      atlas: { value: "<10ms", highlight: true },
      pinecone: { value: "50-100ms" },
      weaviate: { value: "20-50ms" },
      chroma: { value: "100-500ms" }
    },
    {
      feature: "Pricing Model",
      atlas: { value: "Predictable", note: "Per GB storage" },
      pinecone: { value: "Complex", note: "Per pod + operations" },
      weaviate: { value: "Self-hosted", note: "Infrastructure cost" },
      chroma: { value: "Open source", note: "Self-managed" }
    },
    {
      feature: "Global Deployment",
      atlas: { value: "30+ regions", highlight: true },
      pinecone: { value: "10 regions" },
      weaviate: { value: "Self-deployed" },
      chroma: { value: "Self-deployed" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-900/20 border border-indigo-700/30 mb-6">
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300">Vector Database</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-ready database
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-500">
                  with pgvector
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Build AI applications with semantic search, recommendations, and RAG systems.
                Native PostgreSQL extension with full SQL and enterprise features.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/auth/signup"
                  className="group bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-3 rounded-xl
                           hover:from-indigo-700 hover:to-blue-600 transition-all duration-300
                           shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50
                           font-semibold flex items-center space-x-2"
                >
                  <span>Start Building AI Apps</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="#demo"
                  className="group border border-gray-700 text-gray-300 px-8 py-3 rounded-xl font-semibold
                           hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                           hover:text-white flex items-center space-x-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>View AI Demo</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Native PostgreSQL extension</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>16,384 maximum dimensions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>&lt;10ms query latency</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Performance</h3>
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

      {/* AI Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Build production AI applications
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                with confidence
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale AI applications.
            </p>
          </div>

          {/* Feature Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Feature Content */}
          {features
            .filter(f => f.id === activeFeature)
            .map((feature) => (
              <div key={feature.id} className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-xl text-gray-300">{feature.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.useCases.map((useCase, index) => (
                        <div key={index} className="bg-gray-900/50 rounded-lg p-3">
                          <div className="text-sm text-white">{useCase}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">Performance Metrics</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-white font-medium">Query Latency</div>
                        <div className="text-green-400 font-bold">&lt;10ms</div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-white font-medium">Search Accuracy</div>
                        <div className="text-green-400 font-bold">99.9%</div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full" style={{ width: '99%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-white font-medium">Concurrent Queries</div>
                        <div className="text-green-400 font-bold">10K/sec</div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-white font-medium">Uptime SLA</div>
                        <div className="text-green-400 font-bold">99.99%</div>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="text-center">
                      <Link
                        href={`/docs/vector/${feature.id}`}
                        className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium"
                      >
                        <span>Learn more about {feature.title.toLowerCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-grade infrastructure
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                for AI workloads
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-indigo-500/50 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-blue-500/20 
                              flex items-center justify-center text-indigo-400 mb-4`}>
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

      {/* Integrations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Integrated AI ecosystem
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                with your favorite tools
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50">
                      <div>
                        <div className="text-white font-medium">{tool.name}</div>
                        <div className="text-sm text-gray-400">{tool.description}</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why choose Atlas Vector
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
                over specialized solutions
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
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                          <Brain className="w-3 h-3 text-white" />
                        </div>
                        <span>Atlas Vector</span>
                      </div>
                    </th>
                    <th className="text-left p-6 text-gray-400 font-medium">Pinecone</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Weaviate</th>
                    <th className="text-left p-6 text-gray-400 font-medium">Chroma</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={`border-b border-gray-800 hover:bg-gray-900/50 ${
                      index % 2 === 0 ? 'bg-gray-900/10' : ''
                    }`}>
                      <td className="p-6 font-medium text-white">{row.feature}</td>
                      
                      <td className="p-6">
                        <div className={`${row.atlas.highlight ? 'text-green-400' : 'text-white'} font-semibold`}>
                          {row.atlas.value}
                        </div>
                        {row.atlas.note && (
                          <div className="text-sm text-gray-400 mt-1">{row.atlas.note}</div>
                        )}
                      </td>
                      
                      <td className="p-6">
                        <div className="text-gray-300">{row.pinecone.value}</div>
                        {row.pinecone.note && (
                          <div className="text-sm text-gray-500 mt-1">{row.pinecone.note}</div>
                        )}
                      </td>
                      
                      <td className="p-6">
                        <div className="text-gray-300">{row.weaviate.value}</div>
                        {row.weaviate.note && (
                          <div className="text-sm text-gray-500 mt-1">{row.weaviate.note}</div>
                        )}
                      </td>
                      
                      <td className="p-6">
                        <div className="text-gray-400">{row.chroma.value}</div>
                        {row.chroma.note && (
                          <div className="text-sm text-gray-600 mt-1">{row.chroma.note}</div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Build the future of AI
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join forward-thinking teams building intelligent applications with Atlas Vector Database.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-xl
                         hover:from-indigo-700 hover:to-blue-600 transition-all duration-300
                         shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Brain className="w-5 h-5" />
                <span>Start Free with 1GB Vector Storage</span>
              </Link>
              
              <Link
                href="/docs/vector"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read AI Documentation</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>1GB free vector storage</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Native PostgreSQL integration</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>99.99% uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}