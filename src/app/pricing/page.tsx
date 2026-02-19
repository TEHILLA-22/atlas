// src/app/pricing/page.tsx
"use client";

import React, { useState } from 'react';
import GlobalNav from '@/components/GlobalNav';
import Link from 'next/link';
import { 
  CheckCircle,
  XCircle,
  HelpCircle,
  Zap,
  Users,
  Database,
  HardDrive,
  Shield,
  Globe,
  Server,
  TrendingUp,
  Rocket,
  Sparkles,
  Award,
  Calculator,
  MessageSquare,
  ArrowRight,
  CreditCard,
  Clock,
  BarChart3,
  Lock,
  GitBranch,
  Cpu,
  Radio,
  Terminal,
  BookOpen,
  Star,
  ShieldCheck
} from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [activePlan, setActivePlan] = useState<'free' | 'pro' | 'team' | 'enterprise'>('pro');
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      description: 'For side projects and prototypes',
      price: {
        monthly: '$0',
        annual: '$0',
      },
      cta: 'Get Started Free',
      ctaVariant: 'outline' as const,
      popular: false,
      features: [
        { text: '10,000 monthly active users', included: true },
        { text: '500MB database', included: true },
        { text: '1GB file storage', included: true },
        { text: '500 concurrent realtime connections', included: true },
        { text: '50,000 edge function invocations', included: true },
        { text: 'Community support', included: true },
        { text: 'Email/password auth', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Social login (3 providers)', included: false },
        { text: 'Custom domains', included: false },
        { text: 'Scheduled backups', included: false },
        { text: 'Priority support', included: false },
      ],
      color: 'from-gray-500 to-gray-700',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For production applications and startups',
      price: {
        monthly: '$25',
        annual: '$240',
      },
      cta: 'Start Pro Trial',
      ctaVariant: 'primary' as const,
      popular: true,
      features: [
        { text: '100,000 monthly active users', included: true },
        { text: '8GB database', included: true },
        { text: '100GB file storage', included: true },
        { text: '1,000 concurrent realtime connections', included: true },
        { text: '1M edge function invocations', included: true },
        { text: 'Priority email support', included: true },
        { text: 'All authentication methods', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Social login (10+ providers)', included: true },
        { text: 'Custom domains', included: true },
        { text: 'Scheduled backups', included: true },
        { text: 'Team collaboration', included: true },
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 'team',
      name: 'Team',
      description: 'For scaling teams and businesses',
      price: {
        monthly: '$99',
        annual: '$950',
      },
      cta: 'Contact Sales',
      ctaVariant: 'secondary' as const,
      popular: false,
      features: [
        { text: '500,000 monthly active users', included: true },
        { text: '50GB database', included: true },
        { text: '500GB file storage', included: true },
        { text: '5,000 concurrent realtime connections', included: true },
        { text: '5M edge function invocations', included: true },
        { text: 'Priority chat support', included: true },
        { text: 'SSO/SAML authentication', included: true },
        { text: 'Custom analytics dashboards', included: true },
        { text: 'Unlimited social providers', included: true },
        { text: 'Multiple custom domains', included: true },
        { text: 'Point-in-time recovery', included: true },
        { text: 'Advanced team permissions', included: true },
      ],
      color: 'from-purple-500 to-pink-500',
      icon: <Users className="w-6 h-6" />
    },
  ];

  const enterprisePlan = {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For mission-critical applications at scale',
    features: [
      { icon: <Server className="w-5 h-5" />, text: 'Unlimited monthly active users' },
      { icon: <Database className="w-5 h-5" />, text: 'Custom database storage' },
      { icon: <HardDrive className="w-5 h-5" />, text: 'Unlimited file storage' },
      { icon: <Radio className="w-5 h-5" />, text: 'Unlimited realtime connections' },
      { icon: <Zap className="w-5 h-5" />, text: 'Unlimited edge functions' },
      { icon: <ShieldCheck className="w-5 h-5" />, text: 'SOC2 Type II, HIPAA, GDPR' },
      { icon: <Globe className="w-5 h-5" />, text: 'Dedicated infrastructure' },
      { icon: <GitBranch className="w-5 h-5" />, text: 'Database branching' },
      { icon: <Lock className="w-5 h-5" />, text: 'Custom security compliance' },
      { icon: <BarChart3 className="w-5 h-5" />, text: 'Advanced monitoring & alerts' },
      { icon: <Terminal className="w-5 h-5" />, text: 'Dedicated engineering support' },
      { icon: <Award className="w-5 h-5" />, text: 'Custom training & onboarding' },
    ]
  };

  const featuresComparison = [
    {
      category: 'Database',
      features: [
        { name: 'PostgreSQL Database', all: true },
        { name: 'Realtime Subscriptions', all: true },
        { name: 'Row Level Security', free: true, pro: true, team: true },
        { name: 'Point-in-Time Recovery', free: false, pro: true, team: true },
        { name: 'Database Branching', free: false, pro: false, team: true },
        { name: 'Read Replicas', free: false, pro: false, team: true },
      ]
    },
    {
      category: 'Authentication',
      features: [
        { name: 'Email/Password Auth', all: true },
        { name: 'Social Login Providers', free: '3', pro: '10+', team: 'Unlimited' },
        { name: 'Multi-factor Auth', free: false, pro: true, team: true },
        { name: 'Magic Links', free: true, pro: true, team: true },
        { name: 'Enterprise SSO/SAML', free: false, pro: false, team: true },
        { name: 'Custom SMTP', free: false, pro: true, team: true },
      ]
    },
    {
      category: 'Storage',
      features: [
        { name: 'Object Storage', all: true },
        { name: 'Image Transformations', all: true },
        { name: 'Global CDN', all: true },
        { name: 'Access Controls', free: true, pro: true, team: true },
        { name: 'Versioning', free: false, pro: true, team: true },
        { name: 'Custom CORS', free: false, pro: true, team: true },
      ]
    },
    {
      category: 'Edge Functions',
      features: [
        { name: 'TypeScript Runtime', all: true },
        { name: 'Global Deployment', all: true },
        { name: 'Sub-50ms Cold Starts', all: true },
        { name: 'Scheduled Functions', free: false, pro: true, team: true },
        { name: 'Increased Timeout', free: '10s', pro: '60s', team: '900s' },
        { name: 'Increased Memory', free: '128MB', pro: '1GB', team: '10GB' },
      ]
    },
    {
      category: 'Support & Tools',
      features: [
        { name: 'Community Support', all: true },
        { name: 'Email Support', free: false, pro: true, team: true },
        { name: 'Chat Support', free: false, pro: false, team: true },
        { name: 'Phone Support', free: false, pro: false, team: true },
        { name: 'Dedicated Slack', free: false, pro: false, team: true },
        { name: 'Custom SLA', free: '99.9%', pro: '99.95%', team: '99.99%' },
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I switch plans at any time?',
      answer: 'Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we\'ll prorate any differences.'
    },
    {
      question: 'Do you offer discounts for startups?',
      answer: 'Yes! We offer special discounts for Y Combinator, Techstars, and other accelerator programs. Contact our sales team for details.'
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: 'All paid plans come with a 14-day free trial. No credit card required to start. You can upgrade to a paid plan at any time.'
    },
    {
      question: 'How is pricing calculated?',
      answer: 'We charge based on usage. Your monthly bill includes database storage, file storage, bandwidth, and active users. See our pricing calculator for details.'
    },
    {
      question: 'Do you offer custom plans for education or nonprofits?',
      answer: 'Absolutely! We offer special pricing for educational institutions and registered nonprofits. Contact our team for more information.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you before you reach your limits. You can upgrade your plan or pay for overages. We never shut off your service without warning.'
    }
  ];

  const calculateSavings = () => {
    const proMonthly = 25 * 12;
    const proAnnual = 240;
    return proMonthly - proAnnual;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
        <GlobalNav />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-6">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Simple, transparent pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                every stage
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises.
              Everything you need to build and scale production applications.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex rounded-xl bg-gray-900/50 p-1 border border-gray-800 mb-12">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all relative ${
                  billingPeriod === 'annual'
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual billing
                <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-gray-900/30 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 transform -translate-y-2'
                    : 'border-gray-800 hover:border-gray-700'
                } ${activePlan === plan.id ? 'ring-2 ring-blue-500/50' : ''}`}
                onClick={() => setActivePlan(plan.id as any)}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center text-white`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">
                      {billingPeriod === 'monthly' ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {billingPeriod === 'annual' && plan.id === 'pro' && (
                    <div className="text-green-400 text-sm mb-4">
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                      Save ${calculateSavings()} annually
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.slice(0, 8).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.id === 'team' ? '/contact' : '/auth/signup'}
                  className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all ${
                    plan.ctaVariant === 'primary'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600'
                      : plan.ctaVariant === 'secondary'
                      ? 'border border-blue-500 text-blue-400 hover:bg-blue-900/20'
                      : 'border border-gray-700 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compare all features
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                in detail
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly what's included in each plan. All plans include our core platform features.
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-medium">Feature</th>
                    <th className="text-left p-6 text-gray-400 font-medium text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-400">Free</span>
                        <span className="text-white font-bold text-lg">$0</span>
                      </div>
                    </th>
                    <th className="text-left p-6 text-gray-400 font-medium text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-400">Pro</span>
                        <span className="text-white font-bold text-lg">$25</span>
                        <span className="text-green-400 text-xs">Most popular</span>
                      </div>
                    </th>
                    <th className="text-left p-6 text-gray-400 font-medium text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-400">Team</span>
                        <span className="text-white font-bold text-lg">$99</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featuresComparison.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      <tr className="bg-gray-900/50">
                        <td colSpan={4} className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="font-semibold text-white">{category.category}</span>
                          </div>
                        </td>
                      </tr>
                      {category.features.map((feature, featIndex) => (
                        <tr 
                          key={featIndex} 
                          className={`border-b border-gray-800 hover:bg-gray-900/50 ${
                            hoveredFeature === `${catIndex}-${featIndex}` ? 'bg-gray-900/50' : ''
                          }`}
                          onMouseEnter={() => setHoveredFeature(`${catIndex}-${featIndex}`)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <td className="p-6 font-medium text-white">
                            {feature.name}
                            {hoveredFeature === `${catIndex}-${featIndex}` && (
                              <div className="mt-1 text-xs text-gray-400">
                                Hover for details
                              </div>
                            )}
                          </td>
                          
                          <td className="p-6 text-center">
                            {feature.all ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.free === true ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.free === false ? (
                              <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                            ) : (
                              <span className="text-gray-300">{feature.free}</span>
                            )}
                          </td>
                          
                          <td className="p-6 text-center">
                            {feature.all ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.pro === true ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.pro === false ? (
                              <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                            ) : (
                              <span className="text-gray-300">{feature.pro}</span>
                            )}
                          </td>
                          
                          <td className="p-6 text-center">
                            {feature.all ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.team === true ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : feature.team === false ? (
                              <XCircle className="w-5 h-5 text-gray-600 mx-auto" />
                            ) : (
                              <span className="text-gray-300">{feature.team}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-700/30 mb-6">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">Enterprise</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Custom solutions for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                  enterprise teams
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Need more than our standard plans? Our enterprise offering provides custom infrastructure, 
                dedicated support, and compliance for mission-critical applications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Server className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">Dedicated Infrastructure</h4>
                    <p className="text-gray-400">Isolated resources for maximum performance and security</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">Custom Compliance</h4>
                    <p className="text-gray-400">SOC2, HIPAA, GDPR, and other regulatory requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Terminal className="w-5 h-5 text-purple-400 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium">24/7 Engineering Support</h4>
                    <p className="text-gray-400">Dedicated team with 15-minute response time SLA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="/enterprise"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-medium"
                >
                  <span>Learn about enterprise features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/30 to-purple-900/10 border border-gray-800 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Enterprise Plan</h3>
                <p className="text-gray-400 mt-2">Custom pricing based on your needs</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {enterprisePlan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 p-3 rounded-lg bg-gray-900/50">
                    <div className="text-purple-400 mt-0.5">
                      {feature.icon}
                    </div>
                    <span className="text-sm text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full text-center border border-purple-500 text-purple-400 px-6 py-3 rounded-xl font-semibold hover:bg-purple-900/20 transition-colors"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                  <HelpCircle className="w-5 h-5 text-gray-500 ml-4 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/support"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Need more help? Contact our support team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Atlas for their production applications.
              Start free, no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl
                         hover:from-blue-700 hover:to-cyan-600 transition-all duration-300
                         shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Free Forever</span>
              </Link>
              
              <Link
                href="/contact"
                className="border border-gray-700 text-gray-300 px-8 py-4 rounded-xl font-semibold
                         hover:bg-gray-900/50 hover:border-gray-600 transition-colors
                         hover:text-white flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Contact Sales</span>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial on all plans</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

} 
