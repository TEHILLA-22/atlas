'use client';

import { useState } from 'react';
import { 
  BarChart3, Database, Globe, Users, Zap, 
  Info, ExternalLink, ShieldAlert, Cpu, 
  ArrowUpRight, Clock, HardDrive 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function UsagePage() {
  const [billingPeriod] = useState('20 Nov 2025 - 20 Dec 2025');

  const stats = [
    { label: 'Database Size', used: '0.027', limit: '0.5', unit: 'GB', percent: 5 },
    { label: 'Egress', used: '0', limit: '5', unit: 'GB', percent: 0.5 },
    { label: 'Monthly Active Users', used: '0', limit: '50k', unit: 'MAU', percent: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <div className="lg:ml-2 max-w-[1200px] mx-auto px-6 py-12">
        
        {/* Top Header: Billing Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-[#1a1a1a] pb-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
              <Zap className="w-3 h-3 fill-emerald-500" /> Active Infrastructure
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">Usage Summary</h1>
            <p className="text-[#666] text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" /> Current Cycle: <span className="text-[#999]">{billingPeriod}</span>
            </p>
          </div>

          <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-2xl p-5 flex items-center gap-6 shadow-2xl">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#444] mb-1">Current Plan</p>
              <p className="text-xl font-bold text-white">Free Plan</p>
            </div>
            <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* Real-time Quota Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
              key={stat.label} 
              className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-[1.5rem] p-6 group hover:border-[#333] transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-[#666] uppercase tracking-wider">{stat.label}</span>
                <Info className="w-4 h-4 text-[#333] cursor-help" />
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-2xl font-mono font-bold text-white">{stat.used}</span>
                <span className="text-sm text-[#444]">/ {stat.limit} {stat.unit}</span>
              </div>
              <div className="h-1.5 w-full bg-[#111] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: `${stat.percent}%` }}
                  className={`h-full rounded-full ${stat.percent > 80 ? 'bg-orange-500' : 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Breakdown Sections */}
        <div className="space-y-12">
          
          {/* Egress Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#1a1a1a] pb-4">
              <Globe className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold">Network Egress</h2>
              <span className="text-[10px] bg-[#1a1a1a] px-2 py-0.5 rounded text-[#666] font-mono">Real-time</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-4">
                <p className="text-sm text-[#666] leading-relaxed">
                  Contains all outgoing traffic including Database, API, and Edge Functions. 
                  Billing is based on uncached egress.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-xs text-blue-500 flex items-center gap-1 hover:underline"><ExternalLink className="w-3 h-3" /> How egress is calculated</a>
                  <a href="#" className="text-xs text-blue-500 flex items-center gap-1 hover:underline"><ExternalLink className="w-3 h-3" /> Optimization guide</a>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2rem] p-8">
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="text-[10px] font-black uppercase text-[#444] mb-2">Included</p>
                    <p className="text-lg font-mono font-bold">5.00 GB</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-[#444] mb-2">Used</p>
                    <p className="text-lg font-mono font-bold text-emerald-500">0.00 GB</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-[#444] mb-2">Overage</p>
                    <p className="text-lg font-mono font-bold">0.00 GB</p>
                  </div>
                </div>
                {/* Placeholder for Daily Chart */}
                <div className="h-32 w-full bg-[#111] rounded-xl flex items-end justify-between px-6 pb-2 border border-[#1a1a1a]/50">
                   {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
                     <div key={i} className="w-8 bg-blue-600/20 border-t border-blue-500/40 rounded-t-sm" style={{ height: `${h}%` }} />
                   ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-[#444] font-mono">
                  <span>03 Dec</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </section>

          {/* Database Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#1a1a1a] pb-4">
              <Database className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold">Database & Storage</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2rem] p-8 relative overflow-hidden group">
                <HardDrive className="absolute -right-4 -top-4 w-24 h-24 text-white/[0.02] rotate-12" />
                <h4 className="text-sm font-bold mb-6 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Database Size</h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-3xl font-mono font-bold italic">25.33<span className="text-sm font-normal text-[#444] ml-1">MB</span></span>
                    <button className="text-[10px] font-black uppercase text-blue-500 hover:text-blue-400">Manage Storage</button>
                  </div>
                  <div className="h-2 w-full bg-[#111] rounded-full">
                    <div className="h-full w-[5%] bg-emerald-500 rounded-full" />
                  </div>
                  <p className="text-xs text-[#555]">Your project "joenise" is using 5% of its allocated Postgres storage.</p>
                </div>
              </div>

              {/* Locked Feature Card */}
              <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShieldAlert className="w-10 h-10 text-[#222] mb-4" />
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight">Image Transformations</h4>
                <p className="text-sm text-[#444] max-w-[200px] mb-6">Optimized edge image delivery for production apps.</p>
                <button className="bg-[#111] border border-[#1e1e1e] text-[#ededed] px-6 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#1a1a1a] transition-all">
                  Upgrade Plan <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Global Warning Footer */}
        <div className="mt-20 p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">Usage Refresh Policy</p>
            <p className="text-xs text-[#666] mt-1 leading-relaxed">
              Statistics are calculated across all active projects within the "Atlas-Prod" organization. 
              Data refreshes every 60 minutes. Usage exceeding free limits may result in temporary read-only modes until the next billing cycle.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}