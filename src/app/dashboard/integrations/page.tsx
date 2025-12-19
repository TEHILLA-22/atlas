'use client';

import { useState } from 'react';
import { 
  Github, 
  Zap, 
  Plus, 
  CheckCircle2, 
  GitBranch, 
  RefreshCcw, 
  ExternalLink,
  Layers,
  Activity,
  ArrowRight,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntegrationsNexus() {
  const [connectedApps, setConnectedApps] = useState(['github']);

  const integrations = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <Github className="w-8 h-8" />,
      description: 'Connect repositories to automate your database migrations and edge function deployments.',
      capabilities: ['Repo Syncing', 'Branch Preview', 'PR Activity'],
      status: 'Connected',
      color: 'white'
    },
    {
      id: 'vercel',
      name: 'Vercel',
      icon: (
        <svg viewBox="0 0 76 65" className="w-8 h-8 fill-white">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
      ),
      description: 'Keep your environment variables in sync across Vercel teams and Atlas clusters automatically.',
      capabilities: ['Env Var Sync', 'Deploy Previews', 'Multi-project Link'],
      status: 'Not Connected',
      color: 'white'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <div className="lg:ml-2 max-w-[1200px] mx-auto px-6 py-12">
        
        {/* Header Section */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
          >
            <Layers className="w-4 h-4" /> System Nexus
          </motion.div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">Integrations</h1>
          <p className="text-[#666] text-lg max-w-2xl leading-relaxed">
            Supercharge your workflow by connecting Atlas to the tools you already use. 
            Automate deployments, sync variables, and monitor health across your entire stack.
          </p>
        </header>

        <div className="space-y-8">
          {integrations.map((app, idx) => {
            const isConnected = connectedApps.includes(app.id);
            
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={app.id}
                className={`relative group overflow-hidden border rounded-[2.5rem] bg-[#0c0c0c] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5
                  ${isConnected ? 'border-blue-500/20' : 'border-[#1a1a1a] hover:border-[#333]'}`}
              >
                {/* Decorative Connection Line (Visible on Hover/Connect) */}
                <div className={`absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-blue-500/5 to-transparent transition-opacity duration-700 ${isConnected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                <div className="relative z-10 p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Brand & Identity */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center border transition-all duration-500 
                      ${isConnected ? 'bg-blue-600 border-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.3)]' : 'bg-[#111] border-[#1e1e1e] group-hover:border-[#444]'}`}>
                      {app.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        {app.name}
                        {isConnected && <CheckCircle2 className="w-5 h-5 text-blue-400" />}
                      </h2>
                      <p className="text-[#555] text-sm font-medium mt-2 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  {/* Feature Capabilities */}
                  <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333] mb-2">Capabilities</p>
                    {app.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-3 text-sm font-medium text-[#888]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                        {cap}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-3 flex flex-col gap-3">
                    {isConnected ? (
                      <>
                        <button className="w-full bg-[#1a1a1a] hover:bg-[#222] text-white py-4 rounded-2xl font-bold text-sm transition-all border border-[#333] flex items-center justify-center gap-2">
                          <RefreshCcw className="w-4 h-4" /> Manage Connection
                        </button>
                        <button className="text-xs text-[#444] hover:text-red-500 font-bold transition-colors">
                          Disconnect Integration
                        </button>
                      </>
                    ) : (
                      <button className="w-full bg-white text-black hover:bg-slate-200 py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5">
                        Install Integration <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Status Bar (Connected State only) */}
                <AnimatePresence>
                  {isConnected && (
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: 'auto' }}
                      className="bg-[#080808] border-t border-blue-500/10 px-10 py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                          <Activity className="w-3 h-3 animate-pulse" /> Live Monitoring
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-[#444] uppercase tracking-widest">
                          <GitBranch className="w-3 h-3" /> Branch: <span className="text-[#888]">Main</span>
                        </div>
                      </div>
                      <a href="#" className="text-[10px] font-bold text-[#444] hover:text-white transition-colors flex items-center gap-1">
                        View Logs <ExternalLink className="w-3 h-3" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Education Card */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-b from-[#0c0c0c] to-transparent border border-[#1a1a1a] text-center"
        >
          <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
            <Monitor className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">How does the Atlas Nexus work?</h3>
          <p className="text-[#666] max-w-xl mx-auto mb-8 leading-relaxed">
            Atlas acts as the central brain for your infrastructure. When you connect GitHub or Vercel, we 
            deploy a specialized Agent that watches for changes and pushes updates across your global 
            edge network in less than 300ms.
          </p>
          <button className="text-blue-500 font-bold hover:underline flex items-center gap-2 mx-auto">
            Read the Documentation <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </div>
  );
}