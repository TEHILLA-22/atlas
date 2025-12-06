"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen,
  GitMerge,
  Layout,
  GitPullRequest,
  MessageSquare,
  Users,
  HelpCircle,
  Code,
  Github,
  Award,
  Briefcase,
  Calendar,
  ExternalLink,
  ChevronRight,
  Search,
  Terminal,
  Database,
  Zap,
  Shield,
  Globe,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  FileText,
  Video,
  Podcast,
  Mail,
  Star,
  GitBranch,
  Cpu,
  Radio
} from 'lucide-react';

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'docs' | 'tools' | 'community' | 'careers'>('all');

  const categories = [
    {
      id: 'docs',
      name: 'Documentation',
      description: 'Complete guides and API references',
      color: 'from-blue-500 to-cyan-500',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'tools',
      name: 'Tools & SDKs',
      description: 'Libraries, CLI, and integrations',
      color: 'from-purple-500 to-pink-500',
      icon: <Terminal className="w-5 h-5" />
    },
    {
      id: 'community',
      name: 'Community',
      description: 'Connect with other developers',
      color: 'from-green-500 to-emerald-500',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'careers',
      name: 'Careers',
      description: 'Join our team',
      color: 'from-orange-500 to-yellow-500',
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const documentation = [
    {
      title: 'Getting Started',
      description: 'Quick start guide for new developers',
      icon: <Sparkles className="w-5 h-5" />,
      links: [
        { name: 'Quickstart Guide', href: '/developers/docs/quickstart', new: false },
        { name: 'Installation', href: '/developers/docs/installation', new: false },
        { name: 'First Project', href: '/developers/docs/first-project', new: false },
        { name: 'Migration Guide', href: '/developers/docs/migration', new: false }
      ]
    },
    {
      title: 'Core Concepts',
      description: 'Learn the fundamentals',
      icon: <BookOpen className="w-5 h-5" />,
      links: [
        { name: 'Database', href: '/develoers/docs/database', new: false },
        { name: 'Authentication', href: '/developers/docs/auth', new: false },
        { name: 'Storage', href: '/developers/docs/storage', new: false },
        { name: 'Edge Functions', href: '/developers/docs/functions', new: false },
        { name: 'Realtime', href: '/developers/docs/realtime', new: false },
        { name: 'Vector Database', href: '/developers/docs/vector', new: false }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation',
      icon: <Code className="w-5 h-5" />,
      links: [
        { name: 'REST API', href: '/developers/docs/api', new: false },
        { name: 'JavaScript SDK', href: '/developers/docs/reference/javascript', new: false },
        { name: 'TypeScript Types', href: '/developers/docs/reference/typescript', new: false },
        { name: 'CLI Reference', href: '/developers/docs/reference/cli', new: false },
        { name: 'Webhooks', href: '/developers/docs/reference/webhooks', new: false },
        { name: 'GraphQL API', href: '/docs/reference/graphql', new: true }
      ]
    }
  ];

  const integrations = [
    {
      category: 'Frontend Frameworks',
      items: [
        { name: 'Next.js', description: 'Official integration with App Router', icon: '⚡', featured: true },
        { name: 'React', description: 'Hooks and components', icon: '⚛️' },
        { name: 'Vue', description: 'Composables and plugins', icon: '🟢' },
        { name: 'Svelte', description: 'Stores and actions', icon: '✨' },
        { name: 'Angular', description: 'Services and directives', icon: '🅰️' },
        { name: 'SolidJS', description: 'Reactive primitives', icon: '🔶' }
      ]
    },
    {
      category: 'Mobile & Desktop',
      items: [
        { name: 'React Native', description: 'Mobile apps for iOS/Android', icon: '📱', featured: true },
        { name: 'Flutter', description: 'Cross-platform mobile', icon: '🦋' },
        { name: 'Electron', description: 'Desktop applications', icon: '💻' },
        { name: 'Tauri', description: 'Lightweight desktop apps', icon: '🚀' },
        { name: 'Ionic', description: 'Hybrid mobile apps', icon: '📲' }
      ]
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'Vercel', description: 'Deployment platform', icon: '▲', featured: true },
        { name: 'Netlify', description: 'Static site hosting', icon: '🌐' },
        { name: 'GitHub Actions', description: 'CI/CD workflows', icon: '🤖' },
        { name: 'Docker', description: 'Containerization', icon: '🐳' },
        { name: 'VS Code', description: 'Editor extension', icon: '💜' },
        { name: 'JetBrains', description: 'IDE plugins', icon: '🧠' }
      ]
    }
  ];

  const resources = [
    {
      title: 'Supabase UI',
      description: 'Component library and design system',
      icon: <Layout className="w-5 h-5" />,
      href: '/ui',
      featured: true
    },
    {
      title: 'Changelog',
      description: 'Latest updates and releases',
      icon: <GitPullRequest className="w-5 h-5" />,
      href: '/changelog',
      featured: true
    },
    {
      title: 'GitHub Discussions',
      description: 'Community support and discussions',
      icon: <MessageSquare className="w-5 h-5" />,
      href: 'https://github.com/atlas/discussions',
      external: true
    },
    {
      title: 'Open Source',
      description: 'Contribute to our open source projects',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/atlas',
      external: true
    },
    {
      title: 'Become a Partner',
      description: 'Join our partner program',
      icon: <Award className="w-5 h-5" />,
      href: '/partners',
      featured: true
    },
    {
      title: 'Events & Webinars',
      description: 'Live sessions and workshops',
      icon: <Calendar className="w-5 h-5" />,
      href: '/events',
      featured: true
    },
    {
      title: 'Blog',
      description: 'Tutorials and technical articles',
      icon: <FileText className="w-5 h-5" />,
      href: '/blog'
    },
    {
      title: 'YouTube',
      description: 'Video tutorials and demos',
      icon: <Video className="w-5 h-5" />,
      href: 'https://youtube.com/atlas',
      external: true
    },
    {
      title: 'Podcast',
      description: 'Developer interviews and stories',
      icon: <Podcast className="w-5 h-5" />,
      href: '/podcast'
    },
    {
      title: 'Newsletter',
      description: 'Weekly developer updates',
      icon: <Mail className="w-5 h-5" />,
      href: '/newsletter'
    }
  ];

  const support = [
    {
      title: 'Support Center',
      description: 'Get help from our team',
      icon: <HelpCircle className="w-5 h-5" />,
      href: '/support',
      level: 'All plans'
    },
    {
      title: 'Community Forum',
      description: 'Ask questions and share solutions',
      icon: <Users className="w-5 h-5" />,
      href: '/community',
      level: 'Free'
    },
    {
      title: 'Priority Support',
      description: 'Fast response times for paid plans',
      icon: <Zap className="w-5 h-5" />,
      href: '/support/pro',
      level: 'Pro+'
    },
    {
      title: 'Enterprise Support',
      description: 'Dedicated engineering support',
      icon: <Shield className="w-5 h-5" />,
      href: '/support/enterprise',
      level: 'Enterprise'
    }
  ];

  const careers = [
    {
      title: 'Engineering',
      count: 12,
      roles: ['Senior Backend Engineer', 'DevOps Engineer', 'Frontend Engineer', 'Database Engineer']
    },
    {
      title: 'Product & Design',
      count: 6,
      roles: ['Product Manager', 'UX Designer', 'Developer Advocate', 'Technical Writer']
    },
    {
      title: 'Business',
      count: 8,
      roles: ['Sales Engineer', 'Account Executive', 'Partnerships Manager', 'Marketing Specialist']
    }
  ];

  const filteredResources = resources.filter(resource => 
    activeCategory === 'all' || 
    (activeCategory === 'docs' && resource.title.includes('Docs')) ||
    (activeCategory === 'tools' && ['Supabase UI', 'Changelog'].includes(resource.title)) ||
    (activeCategory === 'community' && ['GitHub Discussions', 'Open Source', 'Events & Webinars'].includes(resource.title)) ||
    (activeCategory === 'careers' && resource.title === 'Become a Partner')
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-green-900/20 border border-green-700/30 mb-6">
              <Code className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-300">Developer Resources</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Everything for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                developers
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Documentation, tools, SDKs, and community resources to build amazing applications with Atlas.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="search"
                  placeholder="Search documentation, API references, tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2
                           focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <kbd className="px-2 py-1 text-xs text-gray-400 bg-gray-900 rounded border border-gray-800">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                }`}
              >
                All Resources
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {category.icon}
                    <span>{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Documentation
              </h2>
              <p className="text-xl text-gray-300">
                Complete guides and API references for all Atlas products.
              </p>
            </div>
            <Link
              href="/docs"
              className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium"
            >
              <span>View all documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documentation.map((section, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                                flex items-center justify-center text-green-400">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-900/50 group"
                      >
                        <div className="flex items-center space-x-2">
                          <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {link.name}
                          </span>
                        </div>
                        {link.new && (
                          <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-xs rounded-full">
                            New
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Integrations & SDKs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Official libraries and integrations for your favorite frameworks and tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        item.featured ? 'bg-gradient-to-r from-green-900/20 to-emerald-900/10 border border-green-800/30' : 'bg-gray-900/50'
                      }`}
                    >
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                      {item.featured && (
                        <Star className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/integrations"
              className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300"
            >
              <GitMerge className="w-4 h-4" />
              <span>Explore all integrations</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Resources
              </h2>
              <p className="text-xl text-gray-300">
                Tools, community, and support resources for developers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                target={resource.external ? '_blank' : undefined}
                rel={resource.external ? 'noopener noreferrer' : undefined}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                                flex items-center justify-center text-green-400">
                    {resource.icon}
                  </div>
                  {resource.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                
                <div className="flex items-center text-green-400 text-sm font-medium">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get help when you need it. Choose the support option that's right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((option, index) => (
              <Link
                key={index}
                href={option.href}
                className="group bg-gray-900/30 border border-gray-800 rounded-2xl p-6
                         hover:border-green-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                              flex items-center justify-center text-green-400 mb-4">
                  {option.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{option.level}</span>
                  <ArrowRight className="w-4 h-4 text-green-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-900/20 border border-orange-700/30 mb-6">
                <Briefcase className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">Careers</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Join our team
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  build the future
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                We're building the next generation of developer tools. Join us in making developers' lives better.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">Rapid Growth</h4>
                    <p className="text-gray-400">Join a fast-growing company with huge impact</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">Remote First</h4>
                    <p className="text-gray-400">Work from anywhere in the world</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">Cutting Edge</h4>
                    <p className="text-gray-400">Work with modern tech and best practices</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/careers"
                  className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 font-medium"
                >
                  <span>View all open positions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              {careers.map((department, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{department.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-400 text-sm rounded-full">
                      {department.count} roles
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {department.roles.map((role, roleIndex) => (
                      <div
                        key={roleIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors group"
                      >
                        <span className="text-gray-300 group-hover:text-white">{role}</span>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-orange-400" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to build amazing things?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start building with Atlas today. Join thousands of developers creating the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl
                         hover:from-green-700 hover:to-emerald-600 transition-all duration-300
                         shadow-xl shadow-green-500/30 hover:shadow-green-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Read Documentation</span>
              </Link>
              
              <Link
                href="/community"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free tier available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Community support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}