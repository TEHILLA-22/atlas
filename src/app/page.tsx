'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronDown, Menu, X, Zap, ArrowRight, Globe, Code, TrendingUp } from 'lucide-react';
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
    { title: 'Database', desc: 'Fully managed Postgres with realtime', href: '/product/database' },
    { title: 'Authentication', desc: 'User management out of the box', href: '/product/authentication' },
    { title: 'Storage', desc: 'Store and serve any type of digital content', href: '/product/storage' },
    { title: 'Edge Functions', desc: 'Deploy serverless functions globally', href: '/product/functions' },
    { title: 'Realtime', desc: 'Listen to database changes in realtime', href: '/product/realtime' },
    { title: 'Vector Database', desc: 'AI-ready with pgvector support', href: '/product/vector' },
  ];

  const devItems = [
    { title: 'Documentation', desc: 'Complete API references and guides', href: '/docs' },
    { title: 'Examples', desc: 'Production-ready starter kits', href: '/examples' },
    { title: 'CLI', desc: 'Command line interface', href: '/cli' },
    { title: 'Status', desc: 'Real-time service status', href: 'https://status.atlas.dev' },
    { title: 'Community', desc: 'Join thousands of developers', href: '/community' },
    { title: 'Support', desc: 'Get help from our team', href: '/support' },
  ];

  const metrics = [
    { val: '7m → 40s', label: 'Build times' },
    { val: '95%', label: 'Page load reduction' },
    { val: '24x', label: 'Faster builds' },
    { val: '50k+', label: 'Developers' },
  ];

  const sections = [
    { title: 'AI Apps', desc: 'Enrich any product or feature with the latest models and tools.', icon: <Zap className="w-12 h-12" />, tools: ['Fluid', 'AI SDK', 'AI Gateway', 'Workflow', 'Sandbox', 'BotID'], href: '/ai' },
    { title: 'Web Apps', desc: 'Ship beautiful interfaces that don’t compromise speed or functionality.', icon: <Code className="w-12 h-12" />, tools: ['Next.js', 'React', 'Svelte', 'Nuxt'], href: '#' },
    { title: 'Composable Commerce', desc: 'Increase conversion with fast, branded storefronts.', icon: <TrendingUp className="w-12 h-12" />, tools: ['Shopify', 'Stripe', 'Medusa'], href: '#' },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Subtle Parallax Background */}
        <motion.div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50" style={{ y: yBackground }} />

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight">Atlas</Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-12">
              {/* Product Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-gray-300 transition">
                  <span className="font-medium">Product</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-5">
                        {productItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200"
                          >
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-400 font-bold text-lg">{item.title[0]}</span>
                            </div>
                            <div>
                              <div className="font-semibold text-white group-hover/item:text-blue-400 transition">
                                {item.title}
                              </div>
                              <p className="text-sm text-gray-400 mt-1 leading-tight">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Development Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white hover:text-gray-300 transition">
                  <span className="font-medium">Development</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 mt-5 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
                  >
                    <div className="p-6 space-y-1">
                      {devItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-medium">{item.title[0]}</span>
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-blue-400 transition">
                              {item.title}
                            </div>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <Link href="/pricing" className="text-white hover:text-gray-300 transition font-medium">Pricing</Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link href="/auth/login" className="hidden md:block text-white hover:text-gray-300 transition">Sign in</Link>
              <Link href="/auth/signup" className="hidden sm:flex items-center bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Start Free
              </Link>

              {/* Mobile Hamburger */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Only Atlas + Hamburger visible in nav */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden overflow-hidden fixed inset-x-0 top-16 z-40"
        >
          <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8 space-y-8">
            <div>
              <div className="text-gray-400 text-sm font-medium mb-4">Product</div>
              {productItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -30 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link href={item.href} className="block py-3 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="text-gray-400 text-sm font-medium mb-4">Development</div>
              {devItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -30 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Link href={item.href} className="block py-3 text-white hover:text-gray-300 transition" onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link href="/auth/login" className="block text-white hover:text-gray-300 transition text-center" onClick={() => setIsMenuOpen(false)}>
                Sign in
              </Link>
              <Link href="/auth/signup" className="block bg-white text-black px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition" onClick={() => setIsMenuOpen(false)}>
                Start Free
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Hero - Mobile-Optimized Typography */}
        <section className="relative pt-32 pb-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Build and deploy on the<br />
              <span className="text-white">AI Cloud.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Atlas provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/templates" className="bg-white text-black px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-3 group text-lg">
                Get started with templates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link href="/ai" className="border border-white/20 text-white px-10 py-5 rounded-lg font-semibold hover:bg-white/5 transition flex items-center justify-center gap-3 text-lg">
                <Zap className="w-5 h-5" />
                Deploy AI Apps
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold">{m.val}</div>
                  <div className="text-sm text-gray-400 mt-2">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subtle Globe */}
          <motion.div
            className="absolute bottom-10 right-0 opacity-5 hidden md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="w-64 h-64" />
          </motion.div>
        </section>

        {/* Rest of your sections (unchanged, perfectly responsive) */}
        {/* Framework-defined infrastructure */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Framework-defined infrastructure</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From code to infrastructure in one git push. Atlas deeply understands your app to provision the right resources and optimize for high-performance apps.
            </p>

            <div className="mt-20 grid md:grid-cols-3 gap-8">
              {sections.map((sec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {sec.icon}
                    <h3 className="text-2xl font-semibold">{sec.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{sec.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sec.tools.map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Snippet */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-black/50 border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-400">app/api/chat/route.ts</span>
              </div>
              <pre className="p-8 text-sm overflow-x-auto">
                <code className="text-gray-300">
{`import { streamText } from 'ai';
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

        {/* Final CTA */}
        <section className="py-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto border border-white/10 rounded-3xl p-16 backdrop-blur-sm"
          >
            <h2 className="text-5xl font-bold mb-6">Your product, delivered.</h2>
            <p className="text-xl text-gray-300 mb-10">
              Security, speed, and AI included — so you can focus on your user.
            </p>
            <Link href="/auth/signup" className="inline-block bg-white text-black px-12 py-5 rounded-xl text-xl font-semibold hover:bg-gray-100 transition">
              Start Building
            </Link>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}