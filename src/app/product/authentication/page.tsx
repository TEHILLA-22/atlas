// src/app/product/authentication/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  Users, 
  Key, 
  Fingerprint,
  Smartphone,
  Mail,
  Globe,
  Server,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Code,
  Zap,
  BarChart3,
  GitBranch,
  ExternalLink,
  Copy,
  Terminal,
  MessageSquare,
  Award,
  Eye
} from 'lucide-react';

export default function AuthenticationPage() {
  const [activeTab, setActiveTab] = useState('features');

  const authMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email & Password",
      description: "Traditional email/password authentication with secure password hashing",
      features: ["Password reset flows", "Email verification", "Rate limiting", "Security headers"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Passwordless",
      description: "Magic links and one-time codes sent via email or SMS",
      features: ["Magic links", "OTP codes", "No passwords", "Higher security"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Social Login",
      description: "OAuth with Google, GitHub, Apple, and 50+ other providers",
      features: ["50+ providers", "Custom OAuth", "Auto profile sync", "Token management"]
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Enterprise SSO",
      description: "SAML 2.0 and OIDC for enterprise single sign-on",
      features: ["SAML 2.0", "OIDC", "SCIM provisioning", "Just-in-time provisioning"]
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Multi-factor",
      description: "Two-factor authentication with TOTP, SMS, and security keys",
      features: ["TOTP authenticators", "SMS codes", "WebAuthn", "Backup codes"]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Machine-to-Machine",
      description: "Service accounts and API keys for server-to-server communication",
      features: ["JWT tokens", "API keys", "Service accounts", "Token rotation"]
    }
  ];

  const securityFeatures = [
    {
      title: "Row Level Security",
      description: "Secure data access at the database level based on user identity",
      code: `-- Secure table with RLS
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  data jsonb
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);`
    },
    {
      title: "Rate Limiting",
      description: "Protect against brute force attacks with intelligent rate limiting",
      code: `// Configure rate limits
const rateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many attempts, please try again later'
});

// Apply to login endpoint
app.post('/auth/login', rateLimiter, async (req, res) => {
  // Authentication logic
});`
    },
    {
      title: "Session Management",
      description: "Secure session handling with refresh tokens and automatic rotation",
      code: `// Create secure session
const { data: { session }, error } = await atlas.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'secure-password'
});

// Auto-refresh tokens
atlas.auth.onAuthStateChange((event, session) => {
  if (event === 'TOKEN_REFRESHED') {
    console.log('Token refreshed automatically');
  }
});`
    }
  ];

  const capabilities = [
    { metric: "Auth Requests", value: "10M/day", description: "Per project limit" },
    { metric: "Response Time", value: "<50ms", description: "P95 latency" },
    { metric: "Uptime", value: "99.99%", description: "SLA guarantee" },
    { metric: "Regions", value: "30+", description: "Global deployment" },
    { metric: "Compliance", value: "SOC2 Type II", description: "Security certified" },
    { metric: "Users", value: "Unlimited", description: "No user limits" }
  ];

  const integrations = [
    { name: "Next.js", description: "Official Auth.js integration" },
    { name: "React", description: "React hooks and components" },
    { name: "Vue", description: "Vue composables" },
    { name: "Svelte", description: "Svelte stores" },
    { name: "Mobile", description: "React Native & Flutter" },
    { name: "CLI", description: "Command line tools" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-green-900/20 border border-green-700/30 mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Authentication</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Secure authentication
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                  for every application
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                Complete user management with social login, MFA, and enterprise SSO. 
                Built with security and developer experience in mind.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/signup"
                  className="group bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-xl
                           hover:from-green-700 hover:to-emerald-600 transition-all duration-300
                           shadow-xl shadow-green-500/30 hover:shadow-green-500/50
                           font-semibold flex items-center space-x-2"
                >
                  <span>Get Started Free</span>
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
                  <span>SOC2 Type II compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>GDPR & CCPA ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Zero-trust security</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full">
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Security Specs</h3>
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

      {/* Authentication Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple auth methods
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                for every use case
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple email/password to enterprise SSO, we support every authentication method your app needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6
                         hover:border-green-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 
                              flex items-center justify-center text-green-400 mb-4`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                
                <ul className="space-y-2">
                  {method.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-grade security
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                built-in by default
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
                
                <div className="bg-black/50 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-gray-900/50 border-b border-gray-800 flex justify-between items-center">
                    <div className="text-sm text-gray-400">Implementation</div>
                    <button className="text-green-400 hover:text-green-300 text-sm">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                    {feature.code}
                  </pre>
                </div>
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
              Framework integrations
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                for every stack
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center 
                         hover:border-green-500/50 transition-colors group"
              >
                <div className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {integration.name}
                </div>
                <div className="text-sm text-gray-400">{integration.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/docs/auth/integrations"
              className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium"
            >
              <span>Explore all SDKs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Secure your app in minutes
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Atlas Authentication for their production applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl
                         hover:from-green-700 hover:to-emerald-600 transition-all duration-300
                         shadow-xl shadow-green-500/30 hover:shadow-green-500/50
                         font-semibold flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Start Free</span>
              </Link>
              
              <Link
                href="/docs/auth"
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
                <span>10,000 free monthly users</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>SOC2 Type II compliant</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 security monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}