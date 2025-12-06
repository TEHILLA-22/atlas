// src/app/product/storage/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  HardDrive, 
  Image, 
  Video, 
  FileText, 
  Globe,
  Shield,
  Zap,
  Folder,
  Upload,
  Download,
  Search,
  Copy,
  Trash2,
  Share2,
  Lock,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Code,
  Terminal,
  MessageSquare,
  Award,
  BarChart3,
  Cpu,
  Users,
  Eye,
  Filter,
  Layers
} from 'lucide-react';

export default function StoragePage() {
  const [activeFeature, setActiveFeature] = useState('cdn');

  const storageTypes = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image Storage",
      description: "Store and optimize images with automatic transformations",
      features: ["Auto-format conversion", "Resize & crop", "WebP optimization", "Blurhash generation"],
      useCase: "User avatars, product images, galleries"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Storage",
      description: "Stream videos with adaptive bitrate and thumbnails",
      features: ["Adaptive streaming", "Thumbnail generation", "Video compression", "Streaming ready"],
      useCase: "Course videos, user uploads, streaming"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Storage",
      description: "Secure storage for documents with text extraction",
      features: ["PDF indexing", "Text extraction", "OCR processing", "Version control"],
      useCase: "Contracts, resumes, reports, invoices"
    },
    {
      icon: <Folder className="w-6 h-6" />,
      title: "General Files",
      description: "Any file type with smart organization and search",
      features: ["Smart folders", "Full-text search", "Metadata indexing", "Bulk operations"],
      useCase: "App binaries, archives, backups, datasets"
    }
  ];

  const features = [
    {
      id: 'cdn',
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Files served from 200+ edge locations worldwide",
      details: [
        "Automatic cache invalidation",
        "HTTP/3 support",
        "Brotli compression",
        "TLS 1.3 encryption"
      ],
      code: `// Upload file with CDN optimization
const { data, error } = await atlas.storage
  .from('avatars')
  .upload('user-123.jpg', file, {
    cacheControl: '3600',
    contentType: 'image/jpeg',
    upsert: true
  })

// Get optimized CDN URL
const url = atlas.storage
  .from('avatars')
  .getPublicUrl('user-123.jpg', {
    transform: {
      width: 400,
      height: 400,
      format: 'webp'
    }
  })`
    },
    {
      id: 'security',
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Access",
      description: "Fine-grained permissions and encryption",
      details: [
        "Bucket-level permissions",
        "Signed URLs with expiry",
        "Encryption at rest",
        "Access logs"
      ],
      code: `// Create signed URL (expires in 1 hour)
const { data: { signedUrl } } = await atlas.storage
  .from('private-bucket')
  .createSignedUrl('document.pdf', 3600)

// Row Level Security integration
const { data: files } = await atlas
  .from('user_files')
  .select('*')
  .eq('user_id', auth.user().id)

// Each file has storage_path securely mapped`
    },
    {
      id: 'transform',
      icon: <Zap className="w-6 h-6" />,
      title: "On-the-fly Transformations",
      description: "Transform images and videos without storing duplicates",
      details: [
        "Image resizing & cropping",
        "Format conversion",
        "Quality optimization",
        "Watermarking"
      ],
      code: `// Get transformed image URL
const optimizedUrl = atlas.storage
  .from('products')
  .getPublicUrl('product-image.jpg', {
    transform: {
      width: 800,
      height: 600,
      quality: 85,
      format: 'webp',
      resize: 'cover'
    }
  })

// Apply multiple transformations
const avatarUrl = atlas.storage
  .from('avatars')
  .getPublicUrl('user.jpg', {
    transform: {
      width: 150,
      height: 150,
      format: 'webp',
      blur: 10, // Optional blur effect
      radius: 20 // Rounded corners
    }
  })`
    }
  ];

  const capabilities = [
    { metric: "Storage", value: "Unlimited", description: "Scale as you grow" },
    { metric: "CDN Locations", value: "200+", description: "Global edge network" },
    { metric: "Uptime", value: "99.99%", description: "SLA guarantee" },
    { metric: "Durability", value: "99.999999999%", description: "11 nines" },
    { metric: "File Size", value: "5TB", description: "Per file limit" },
    { metric: "Transfer", value: "Unlimited", description: "No egress fees" }
  ];

  const integrations = [
    { name: "Next.js", description: "Image optimization component" },
    { name: "React", description: "File upload hooks" },
    { name: "Mobile", description: "React Native SDK" },
    { name: "CLI", description: "Batch upload tools" },
    { name: "Webhooks", description: "File processing events" },
    { name: "AWS S3", description: "Compatible API" }
  ];

  const useCases = [
    {
      title: "User Uploads",
      description: "Allow users to upload profile pictures, documents, and media",
      example: "Social media platforms, SaaS applications"
    },
    {
      title: "E-commerce",
      description: "Store product images with automatic optimization",
      example: "Online stores, marketplaces"
    },
    {
      title: "Media Streaming",
      description: "Stream videos with adaptive bitrate and thumbnails",
      example: "Video platforms, e-learning"
    },
    {
      title: "Backup & Archive",
      description: "Secure long-term storage for backups and archives",
      example: "Business data, compliance storage"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-700/30 mb-6">
                <HardDrive className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Object Storage</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Global file storage
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-500">
                  with built-in CDN
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Store and serve any type of digital content with automatic optimization, 
                global CDN delivery, and enterprise-grade security.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/auth/signup"
                  className="group bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl
                           hover:from-purple-700 hover:to-pink-600 transition-all duration-300
                           shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50
                           font-semibold flex items-center space-x-2"
                >
                  <span>Start Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="#demo"
                  className="group border border-gray-700 text-gray-300 px-8 py-3 rounded-xl font-semibold
                           hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                           hover:text-white flex items-center space-x-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  <span>View Demo</span>
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Unlimited storage scaling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No egress fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>200+ CDN locations</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Storage Specs</h3>
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

      {/* Storage Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Optimized for every
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                file type
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized storage and processing for images, videos, documents, and general files.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storageTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                              flex items-center justify-center text-purple-400 mb-4`}>
                  {type.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 mb-4">{type.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-300 font-medium mb-2">Features:</div>
                  <ul className="space-y-1">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-sm text-gray-300 font-medium">Use case:</div>
                  <div className="text-sm text-gray-400">{type.useCase}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful features
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                for modern applications
              </span>
            </h2>
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
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
          <div className="grid lg:grid-cols-2 gap-12">
            {features
              .filter(f => f.id === activeFeature)
              .map((feature) => (
                <div key={feature.id} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-xl text-gray-300 mb-6">{feature.description}</p>
                    
                    <ul className="space-y-3">
                      {feature.details.map((detail, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            
            {/* Code Example */}
            {features
              .filter(f => f.id === activeFeature)
              .map((feature) => (
                <div key={feature.id} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 bg-gray-900/50 border-b border-gray-800 flex justify-between items-center">
                    <div className="text-sm text-gray-400">Implementation Example</div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                    {feature.code}
                  </pre>
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
              Perfect for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                real-world applications
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-purple-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                              flex items-center justify-center text-purple-400 mb-4">
                  {index === 0 ? <Upload className="w-6 h-6" /> :
                   index === 1 ? <Image className="w-6 h-6" /> :
                   index === 2 ? <Video className="w-6 h-6" /> :
                   <Folder className="w-6 h-6" />}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-sm text-gray-300 font-medium">Example:</div>
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
              Easy integrations
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                with your stack
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center 
                         hover:border-purple-500/50 transition-colors group"
              >
                <div className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {integration.name}
                </div>
                <div className="text-sm text-gray-400">{integration.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/docs/storage"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium"
            >
              <span>Explore Storage Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
              <HardDrive className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to store and serve at scale?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using Atlas Storage for their production file needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl
                         hover:from-purple-700 hover:to-pink-600 transition-all duration-300
                         shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <HardDrive className="w-5 h-5" />
                <span>Start Free with 1GB Storage</span>
              </Link>
              
              <Link
                href="/docs/storage"
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
                <span>1GB free storage</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No egress fees</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>200+ CDN locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}