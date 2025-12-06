// src/app/page.tsx
import Link from "next/link";
import { ArrowRight, Zap, Shield, Database, HardDrive, Radio, Cloud, Rocket, CheckCircle, Users, Globe, Server, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "PostgreSQL Database",
      description: "Fully-managed Postgres with realtime subscriptions, row-level security, and automatic backups. Scale from hobby to enterprise with zero downtime.",
      highlights: ["Instant setup", "Realtime subscriptions", "Point-in-time recovery"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Authentication",
      description: "Built-in user management with OAuth, magic links, and passwordless login. SOC2 compliant with enterprise-grade security.",
      highlights: ["Social login", "Passwordless", "Multi-factor auth"]
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Storage",
      description: "Unlimited object storage with global CDN. Optimized images, videos, and files with automatic optimization and transformation.",
      highlights: ["Global CDN", "Image optimization", "Access controls"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Edge Functions",
      description: "Serverless functions deployed globally to 30+ regions. Execute code closer to your users with sub-50ms cold starts.",
      highlights: ["Global deployment", "Sub-50ms cold start", "TypeScript support"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Realtime",
      description: "WebSocket connections for realtime updates across clients. Broadcast messages to millions of connected devices simultaneously.",
      highlights: ["WebSocket-based", "Presence channels", "Broadcast messaging"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Vector Database",
      description: "Native vector embeddings with pgvector. Build AI applications with semantic search and similarity matching.",
      highlights: ["pgvector native", "Semantic search", "AI embeddings"]
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
    { value: "<50ms", label: "Edge latency", description: "Global deployment" },
    { value: "30+", label: "Regions", description: "Worldwide coverage" },
    { value: "∞", label: "Scalability", description: "No limits on growth" }
  ];

  const companies = [
    { name: "Vercel", description: "Powering Next.js deployments" },
    { name: "Shopify", description: "E-commerce backend" },
    { name: "Discord", description: "Realtime messaging" },
    { name: "Linear", description: "Project management" },
    { name: "Cal.com", description: "Scheduling platform" },
    { name: "Plausible", description: "Analytics infrastructure" }
  ];

  return (
    <div className="min-h-screen bg-black text-blue-300">
      {/* Cosmic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
        
        {/* Star field */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
<nav className="relative border-b border-gray-800/50 backdrop-blur-lg bg-black/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 rounded-lg animate-gradient-xy" />
        <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Atlas
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-300 hover:text-white transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
          Pricing
        </a>
        <a href="#enterprise" className="text-gray-300 hover:text-white transition-colors">
          Enterprise
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </a>
        <a href="#docs" className="text-gray-300 hover:text-white transition-colors">
          Documentation
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <Link 
          href="/auth/login" 
          className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Sign In
        </Link>
        <Link 
          href="/auth/signup"
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg 
                   hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                   shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
                   flex items-center space-x-2"
        >
          <span>Start Building</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <main className="relative">
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-8">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Trusted by 50,000+ developers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Cloud Platform for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-gradient">
                Production Applications
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and scale production applications. 
              Get Postgres database, authentication, storage, and edge functions in a single platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/auth/signup"
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                         shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                         text-lg font-semibold flex items-center justify-center space-x-2"
              >
                <span>Start Free Forever</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/auth/login"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl text-lg font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white"
              >
                View Live Demo
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-blue-300 font-semibold">{metric.label}</div>
                  <div className="text-sm text-gray-400 mt-1">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Everything you need to build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  World-class applications
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

        {/* Trusted By Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 text-gray-400 mb-2">
                <Users className="w-5 h-5" />
                <span>TRUSTED BY INDUSTRY LEADERS</span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Powering the next generation of applications
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 text-center
                           hover:border-blue-500/30 transition-colors group"
                >
                  <div className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {company.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {company.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* Pricing Section */}
<section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/30">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">
        Simple, transparent pricing
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Scale with your needs
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Start free, scale as you grow. No hidden fees, no surprises.
      </p>
    </div>

    {/* Pricing Toggle */}
    <div className="flex justify-center mb-12">
      <div className="inline-flex rounded-xl bg-gray-900/50 p-1 border border-gray-800">
        <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-semibold">
          Monthly billing
        </button>
        <button className="px-6 py-3 rounded-lg text-gray-400 hover:text-white text-sm font-semibold">
          Annual billing (Save 20%)
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Free Plan */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">$0</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <p className="text-gray-400 mt-2">Perfect for side projects and prototypes</p>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "10,000 monthly active users",
            "500MB database",
            "1GB file storage",
            "50,000 edge function invocations",
            "5 concurrent realtime connections",
            "Community support",
            "Basic analytics",
            "Email/password auth"
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/auth/signup"
          className="block w-full text-center border border-gray-700 text-white px-6 py-3 rounded-lg
                   hover:bg-gray-800/50 hover:border-gray-600 transition-colors font-semibold"
        >
          Get Started Free
        </Link>
      </div>

      {/* Pro Plan - Most Popular */}
      <div className="bg-gradient-to-b from-gray-900/50 to-blue-900/20 border-2 border-blue-500/30 rounded-2xl p-8 relative transform hover:-translate-y-1 transition-transform">
        <div className="absolute top-0 right-6 -translate-y-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">$25</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          <p className="text-gray-300 mt-2">For production applications and startups</p>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "100,000 monthly active users",
            "8GB database",
            "100GB file storage",
            "1M edge function invocations",
            "100 concurrent realtime connections",
            "Priority support",
            "Advanced analytics",
            "Social auth + SAML",
            "Custom domains",
            "Team collaboration",
            "Scheduled backups",
            "Performance monitoring"
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-white">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/auth/signup?plan=pro"
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                   px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all font-semibold"
        >
          Start Pro Trial
        </Link>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">Custom</span>
          </div>
          <p className="text-gray-400 mt-2">For mission-critical applications</p>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "Unlimited monthly active users",
            "Custom database storage",
            "Unlimited file storage",
            "Unlimited edge functions",
            "Unlimited realtime connections",
            "24/7 dedicated support",
            "Enterprise SLA (99.99%)",
            "SSO & SAML integration",
            "Custom compliance (SOC2, HIPAA)",
            "Dedicated infrastructure",
            "Custom regions deployment",
            "Security audit & pentesting",
            "Dedicated account manager",
            "Training & onboarding"
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300">
              <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="#enterprise"
          className="block w-full text-center border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-lg
                   hover:bg-cyan-900/20 hover:border-cyan-400 transition-colors font-semibold"
        >
          Contact Sales
        </Link>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="mt-20 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h3>
      <div className="space-y-4">
        {[
          {
            question: "Can I switch plans at any time?",
            answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
          },
          {
            question: "Do you offer discounts for startups?",
            answer: "Yes! We offer special discounts for Y Combinator, Techstars, and other accelerator programs. Contact sales for details."
          },
          {
            question: "Is there a free trial for paid plans?",
            answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
          },
          {
            question: "How is pricing calculated?",
            answer: "We charge based on usage. Your monthly bill includes database storage, file storage, bandwidth, and active users. See our pricing calculator for details."
          },
          {
            question: "Do you offer custom plans for education or nonprofits?",
            answer: "Absolutely! We offer special pricing for educational institutions and registered nonprofits. Contact our team for more information."
          }
        ].map((faq, i) => (
          <div key={i} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
            <p className="text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Enterprise Section */}
<section id="enterprise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-6">
          <Shield className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-300">Enterprise Grade</span>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          Built for the world's most demanding applications
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Trusted by Fortune 500 companies and startups alike. Our enterprise platform provides the security, compliance, and scalability required for mission-critical applications.
        </p>
        
        <div className="space-y-6">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Enterprise Security",
              description: "SOC2 Type II, HIPAA, GDPR compliant. Regular security audits and pentesting."
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Global Infrastructure",
              description: "Deploy in 30+ regions worldwide with dedicated infrastructure options."
            },
            {
              icon: <Server className="w-6 h-6" />,
              title: "24/7 Support",
              description: "Dedicated engineering support with 15-minute response time SLA."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Custom Solutions",
              description: "Tailored architecture and migration support for complex deployments."
            }
          ].map((feature, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-2">Talk to our enterprise team</h3>
        <p className="text-gray-400 mb-6">Get a custom quote and dedicated support for your organization.</p>
        
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">First name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent"
                placeholder="cofoundr"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Last name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent"
                placeholder="Chronicles"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Work email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
              placeholder="cofoundre@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
              placeholder="Cofoundre Inc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Company size</label>
            <select
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">What are you looking to build?</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project, current infrastructure, and specific requirements..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-400">
              I agree to the{" "}
              <a href="#privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </a>{" "}
              and consent to being contacted.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                     py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 
                     transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Request Enterprise
          </button>

          <p className="text-center text-sm text-gray-500">
            Typically respond within 2 hours during business days
          </p>
        </form>
      </div>
    </div>

    {/* Enterprise Logos */}
    <div className="mt-20">
      <h4 className="text-center text-gray-400 text-sm font-semibold tracking-wider mb-8">
        TRUSTED BY ENTERPRISE TEAMS
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          { name: "Microsoft", desc: "Azure integration" },
          { name: "IBM", desc: "Cloud services" },
          { name: "Salesforce", desc: "CRM platform" },
          { name: "Airbnb", desc: "Booking system" },
          { name: "Uber", desc: "Real-time tracking" },
          { name: "Netflix", desc: "Streaming services" }
        ].map((company, i) => (
          <div key={i} className="text-center">
            <div className="text-xl font-bold text-white mb-1">{company.name}</div>
            <div className="text-xs text-gray-500">{company.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h2 className="text-4xl font-bold text-white mb-6">Get in touch</h2>
        <p className="text-xl text-gray-300 mb-8">
          Have questions? Our team is here to help you build amazing applications.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">General inquiries</h4>
              <a href="mailto:hello@atlas.dev" className="text-blue-400 hover:text-blue-300">
                hello@atlas.dev
              </a>
              <p className="text-gray-400 text-sm mt-1">Typically respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Sales & support</h4>
              <a href="tel:+18885551234" className="text-blue-400 hover:text-blue-300">
                +1 (888) 555-1234
              </a>
              <p className="text-gray-400 text-sm mt-1">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Office locations</h4>
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-gray-300">New York, NY</p>
              <p className="text-gray-300">London, UK</p>
              <p className="text-gray-400 text-sm mt-1">Remote team across 12 countries</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">Support hours</h4>
              <p className="text-gray-300">Community: 24/7 forums</p>
              <p className="text-gray-300">Pro: 12-hour response</p>
              <p className="text-gray-300">Enterprise: 15-minute SLA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Form */}
      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <select
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a topic</option>
              <option value="sales">Sales inquiry</option>
              <option value="support">Technical support</option>
              <option value="billing">Billing question</option>
              <option value="partnership">Partnership opportunity</option>
              <option value="press">Press/media inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-transparent"
              placeholder="How can we help you today?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                     py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 
                     transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12">
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to build the future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join 50,000+ developers who trust Atlas with their production infrastructure.
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

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg" />
                <span className="text-xl font-bold text-white">Atlas</span>
              </div>
              <p className="text-gray-400">
                The complete backend platform for building production applications at scale.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#status" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Atlas Cloud Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}