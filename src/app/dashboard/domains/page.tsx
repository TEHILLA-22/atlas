'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, Globe, CheckCircle, ShoppingCart, Plus, Trash2, 
  CreditCard, Shield, Zap, Loader2, ChevronRight, Clock, Star 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfessionalDomainSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  const tldPricing: Record<string, number> = {
    '.com': 12.99, '.io': 49.99, '.app': 16.99, '.dev': 14.99,
    '.co': 29.99, '.ai': 89.99, '.xyz': 11.99, '.net': 14.99,
  };

  const popularTLDs = ['.com', '.io', '.ai', '.app', '.dev', '.co'];

  const searchDomains = async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    await new Promise(r => setTimeout(r, 1200));

    const base = searchQuery.trim().toLowerCase().split('.')[0];
    const mockResults = popularTLDs.map(tld => ({
      domain: `${base}${tld}`,
      tld,
      available: Math.random() > 0.4,
      price: tldPricing[tld],
      years: 1,
    }));

    setResults(mockResults);
    setSearching(false);
  };

  const addToCart = (item: any) => {
    if (cart.find(i => i.domain === item.domain)) return;
    setCart([...cart, { ...item, years: 1 }]);
  };

  const updateYears = (domain: string, years: number) => {
    setCart(cart.map(item => 
      item.domain === domain ? { ...item, years: Math.max(1, Math.min(10, years)) } : item
    ));
  };

  const removeFromCart = (domain: string) => {
    setCart(cart.filter(item => item.domain !== domain));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.years), 0);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    localStorage.setItem('atlas_cart', JSON.stringify({ items: cart, total: totalPrice }));
    await new Promise(r => setTimeout(r, 800));
    router.push('/dashboard/domains/checkout');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-blue-500/30">
      <div className="lg:ml-4 pt-16 px-6 lg:px-12">
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto pt-12 pb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star className="w-3 h-3 fill-current" /> Premium Registrar
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Secure your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">digital identity.</span>
          </h1>
          
          {/* Advanced Search Bar */}
          <div className="max-w-4xl mx-auto relative mt-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-[1.8rem] p-2 shadow-2xl">
                <Search className="ml-6 w-6 h-6 text-slate-500" />
                <input
                  type="text"
                  placeholder="Find the perfect domain name..."
                  className="w-full bg-transparent px-6 py-4 text-xl focus:outline-none text-white placeholder:text-slate-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && searchDomains()}
                />
                <button
                  onClick={searchDomains}
                  disabled={searching}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  {searching ? <Loader2 className="animate-spin" /> : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Results */}
        <div className="max-w-6xl mx-auto pb-32">
          <div className="grid grid-cols-1 gap-4">
            <AnimatePresence mode="popLayout">
              {results.map((item, idx) => (
                <motion.div
                  key={item.domain}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-3xl border transition-all ${
                    item.available 
                    ? 'bg-white/[0.02] border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04]' 
                    : 'bg-transparent border-white/5 opacity-50'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl ${item.available ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-500'}`}>
                      <Globe className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{item.domain}</h3>
                      <p className="text-sm font-medium text-slate-500">
                        {item.available ? 'Available for immediate registration' : 'Currently unavailable'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mt-4 md:mt-0">
                    <div className="text-right">
                      <p className="text-2xl font-mono font-bold text-white">${item.price}</p>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">First Year</p>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      disabled={!item.available || cart.some(i => i.domain === item.domain)}
                      className={`px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all ${
                        cart.some(i => i.domain === item.domain)
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : item.available ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      {cart.some(i => i.domain === item.domain) ? <CheckCircle className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      {cart.some(i => i.domain === item.domain) ? 'Added' : 'Claim'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Refactored Cart Overlay */}
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0A0A0A] border-l border-white/10 shadow-[ -20px_0_50px_rgba(0,0,0,0.5)] z-[100] flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Review Order</h2>
                </div>
                <button onClick={() => setCart([])} className="text-slate-500 hover:text-white text-sm font-medium">Clear All</button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.map((item) => (
                  <div key={item.domain} className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-bold text-white">{item.domain}</span>
                      <button onClick={() => removeFromCart(item.domain)} className="text-slate-600 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-black/40 p-2 rounded-xl border border-white/5">
                      <div className="flex items-center gap-3 ml-2">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-medium">Registration:</span>
                      </div>
                      <select 
                        value={item.years}
                        onChange={(e) => updateYears(item.domain, parseInt(e.target.value))}
                        className="bg-transparent text-blue-400 font-bold focus:outline-none cursor-pointer p-1"
                      >
                        {[1, 2, 3, 5, 10].map(y => (
                          <option key={y} value={y} className="bg-[#0A0A0A]">{y} {y === 1 ? 'Year' : 'Years'}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center px-1 pt-2">
                      <span className="text-slate-500 text-sm">Real-time total:</span>
                      <span className="text-xl font-mono font-bold text-white">${(item.price * item.years).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-[#0D0D0D] border-t border-white/10 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-400 text-sm">
                    <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Privacy Protection</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-white text-2xl font-extrabold pt-4 border-t border-white/5">
                    <span>Total Due</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20"
                >
                  {isCheckingOut ? <Loader2 className="animate-spin" /> : <><CreditCard className="w-6 h-6" /> Secure Checkout</>}
                </button>
                
                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                   <Shield className="w-3 h-3" /> Encrypted 256-bit SSL Connection
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );

}
