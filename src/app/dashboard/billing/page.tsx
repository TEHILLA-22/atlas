'use client';

import { useState } from 'react';
import { 
  CreditCard, 
  Plus, 
  Receipt, 
  Mail, 
  Wallet, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight,
  History,
  Info,
  CheckCircle2,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BillingCenter() {
  const [email, setEmail] = useState('user@atlas.cloud');
  const [activeCards, setActiveCards] = useState([
    { id: 1, brand: 'Visa', last4: '4242', exp: '12/26', isDefault: true },
    { id: 2, brand: 'Mastercard', last4: '8812', exp: '05/25', isDefault: false }
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <div className="lg:ml-2 max-w-[1200px] mx-auto px-6 py-12">
        
        <header className="mb-12 border-b border-[#1a1a1a] pb-10">
          <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Secure Billing
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">Billing & Payments</h1>
          <p className="text-[#666] text-sm">Manage your payment instruments and organization financial settings.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-8 shadow-2xl shadow-blue-900/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <Wallet className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
              <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Available Balance</p>
              <h2 className="text-5xl font-mono font-bold text-white tracking-tighter mb-8">$250.00</h2>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
                  <Plus className="w-4 h-4" /> Add Credit
                </button>
                <p className="text-[10px] text-blue-100/40 leading-relaxed">
                  Credits are automatically applied to your next monthly invoice.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2.5rem] p-10 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Billing Contact</h3>
                <p className="text-sm text-[#666]">Invoices will be sent to this email address.</p>
              </div>
              <Mail className="w-6 h-6 text-[#222]" />
            </div>

            <div className="flex gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-black border border-[#1a1a1a] rounded-xl px-5 py-3 text-sm focus:border-blue-500/50 outline-none transition-all font-mono"
              />
              <button className="bg-[#1a1a1a] hover:bg-[#222] text-white px-8 py-3 rounded-xl font-bold text-sm transition-all border border-[#333]">
                Update
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-blue-500" /> Payment Methods
              </h3>
              <button className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Add New Card
              </button>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {activeCards.map((card) => (
                  <motion.div 
                    layout
                    key={card.id}
                    className="group bg-[#0c0c0c] border border-[#1a1a1a] p-6 rounded-2xl flex items-center justify-between hover:border-[#333] transition-all"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-8 bg-[#111] rounded border border-[#1a1a1a] flex items-center justify-center font-bold text-[8px] uppercase tracking-tighter text-[#444]">
                        {card.brand}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <p className="font-mono font-bold text-white">•••• •••• •••• {card.last4}</p>
                          {card.isDefault && (
                            <span className="text-[9px] bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded-full font-black uppercase">Default</span>
                          )}
                        </div>
                        <p className="text-[10px] text-[#444] mt-1 uppercase font-bold tracking-widest">Expires {card.exp}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!card.isDefault && <button className="text-[10px] font-bold text-[#666] hover:text-white px-3">Set Default</button>}
                      <button className="p-2 text-[#444] hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2rem] overflow-hidden">
              <div className="p-8 border-b border-[#1a1a1a] flex justify-between items-center bg-[#080808]">
                <h3 className="text-lg font-bold text-white flex items-center gap-3">
                  <History className="w-5 h-5 text-blue-500" /> Recent Invoices
                </h3>
                <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#444]" />
                </button>
              </div>
              <div className="divide-y divide-[#1a1a1a]">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 hover:bg-white/[0.01] transition-all cursor-pointer group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-white">Invoice #ATL-00{i}82</span>
                      <span className="text-sm font-mono font-bold text-white">$49.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-[#444] font-bold uppercase tracking-widest italic">Nov {15 + i}, 2025</span>
                      <div className="flex items-center gap-1.5 text-emerald-500">
                        <CheckCircle2 className="w-3 h-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Paid</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-5 text-xs font-bold text-[#444] hover:text-white hover:bg-[#111] transition-all border-t border-[#1a1a1a]">
                View Full Billing History
              </button>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex gap-4">
              <Info className="w-5 h-5 text-orange-500 shrink-0" />
              <p className="text-[11px] text-[#666] leading-relaxed">
                Your next automatic charge of <span className="text-white font-bold">$12.40</span> is scheduled for <span className="text-white font-bold italic">Dec 20, 2025</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}