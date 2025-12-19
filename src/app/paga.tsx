'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Zap, Eye, ArrowRight, Globe, Code, Play, Users, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 100], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    { title: 'Database', desc: 'Fully managed Postgres with realtime', icon: '🗄️', href: '/product/database' },
    { title: 'Authentication', desc: 'User management out of the box', icon: '🔐', href: '/product/authentication' },
    { title: 'Storage', desc: 'Store and serve any type of digital content', icon: '💾', href: '/product/storage' },
    { title: 'Edge Functions', desc: 'Deploy serverless functions globally', icon: '⚡', href: '/product/functions' },
    { title: 'Realtime', desc: 'Listen to database changes in realtime', icon: '🔄', href: '/product/realtime' },
    { title: 'Vector Database', desc: 'AI-ready with pgvector support', icon: '🧠', href: '/product/vector' },
  ];

  const devItems = [
    { title: 'Documentation', desc: 'Complete API references and guides', icon: '📚', href: '/docs' },
    { title: 'Examples', desc: 'Production-ready starter kits', icon: '💻', href: '/examples' },
    { title: 'CLI', desc: 'Command line interface', icon: '⌨️', href: '/cli' },
    { title: 'Status', desc: 'Real-time service status', icon: '📊', href: 'https://status.atlas.dev' },
    { title: 'Community', desc: 'Join thousands of developers', icon: '👥', href: '/community' },
    { title: 'Support', desc: 'Get help from our team', icon: '💬', href: '/support' },
  ];

  const metrics = [
    { val: '7m → 40s', label: 'Build times' },
    { val: '95%', label: 'Page load reduction' },
    { val: '24x', label: 'Faster builds' },
    { val: '50k+', label: 'Developers' },
  ];

  const sections = [
    { 
      title: 'AI Apps', 
      desc: 'Enrich any product or feature with the latest models and tools.', 
      icon: <Zap className="w-12 h-12" />, 
      tools: ['Fluid', 'AI SDK', 'AI Gateway', 'Workflow', 'Sandbox', 'BotID'],
      href: '/ai'
    },
    { 
      title: 'Web Apps', 
      desc: 'Ship beautiful interfaces that don’t compromise speed or functionality.', 
      icon: <Code className="w-12 h-12" />, 
      tools: ['Next.js', 'React', 'Svelte', 'Nuxt'],
      href: '#'
    },
    { 
      title: 'Composable Commerce', 
      desc: 'Increase conversion with fast, branded storefronts.', 
      icon: <TrendingUp className="w-12 h-12" />, 
      tools: ['Shopify', 'Stripe', 'Medusa'],
      href: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle Background Parallax */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"
        style={{ y: yBackground }}
      />
      
      {/* Navigation - Minimal Black/White */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Atlas</Link>

          <div className="hidden lg:flex items-center space-x-10">
            {/* Product Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition">
                <span>Product</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-2 gap-4"
              >
                {productItems.map((item) => (
                  <Link key={item.title} href={item.href} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Development Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-gray-300 transition">
                <span>Development</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-3"
              >
                {devItems.map((item) => (
                  <Link key={item.title} href={item.href} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            <Link href="/pricing" className="text-white hover:text-gray-300 transition">Pricing</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="hidden md:block text-white hover:text-gray-300 transition">Sign in</Link>
            <Link href="/signup" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center space-x-2">
              Start Free
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4">
            {/* Simplified mobile dropdowns */}
            <div>
              <span className="text-gray-400 font-medium">Product</span>
              {productItems.map((item) => (
                <Link key={item.title} href={item.href} className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div>
              <span className="text-gray-400 font-medium">Development</span>
              {devItems.map((item) => (
                <Link key={item.title} href={item.href} className="block py-2 text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero - Vercel Style */}
      <section className="pt-32 pb-24 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build and deploy on the <br />
            <span className="text-white">AI Cloud.</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Atlas provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/templates" className="bg-white text-black px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-3 group">
              Get started with templates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/ai" className="border border-white/20 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/5 transition flex items-center justify-center gap-3">
              <Zap className="w-5 h-5" />
              Deploy AI Apps
            </Link>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 border border-white/10 rounded-xl"
              >
                <div className="text-2xl font-bold text-white">{m.val}</div>
                <div className="text-sm text-gray-400">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtle Globe Animation for Attentive Users */}
        <motion.div 
          className="absolute bottom-0 right-0 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ scale: useTransform(scrollY, [0, 1000], [0.5, 1]) }}
        >
          <Globe className="w-48 h-48" />
        </motion.div>
      </section>

      {/* Features Sections - Minimal, Info-Focused */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Framework-defined infrastructure
          </motion.h2>

          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-20">
            From code to infrastructure in one git push. Atlas deeply understands your app to provision the right resources and optimize for high-performance apps.
          </p>

          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((sec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  {sec.icon}
                  <Link href={sec.href} className="text-white font-semibold hover:text-gray-300 transition">{sec.title}</Link>
                </div>
                <p className="text-gray-300 mb-6">{sec.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sec.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section - Subtle Animation */}
      <section className="py-24 px-6 bg-white/2">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-black/50 border border-white/10 rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">app/api/chat/route.ts</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code>{`import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse();
}`}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Clean and Direct */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto border border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Your product, delivered.</h2>
          <p className="text-xl text-gray-300 mb-10">Security, speed, and AI included, so you can focus on your user.</p>
          <Link href="/signup" className="bg-white text-black px-12 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Start Building
          </Link>
        </motion.div>
      </section>
    </div>
  );
}