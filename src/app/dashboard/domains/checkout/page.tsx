// app/dashboard/domains/checkout/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, CreditCard, ShieldCheck, Lock, 
  Globe, Zap, ChevronRight, ShoppingBag, Search,
  User, Mail, Calendar, Hash
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DomainCheckout() {
  const router = useRouter();
  const [cartData, setCartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    cardNumber: '', expiry: '', cvv: ''
  });

  useEffect(() => {
    const savedCart = localStorage.getItem('atlas_cart');
    if (savedCart) setCartData(JSON.parse(savedCart));
    setLoading(false);
  }, []);

  const subtotal = cartData?.items?.reduce((acc: number, item: any) => acc + (item.price * item.years), 0) || 0;
  const icannFee = (cartData?.items?.length || 0) * 0.18;
  const tax = subtotal * 0.07;
  const grandTotal = subtotal + icannFee + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Basic auto-formatting for card number (groups of 4)
    if (name === 'cardNumber') {
      const formatted = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiry') {
      const formatted = value.replace(/\D/g, '').replace(/(.{2})/, '$1/').slice(0, 5);
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCompleteOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    await new Promise(r => setTimeout(r, 3000));
    localStorage.removeItem('atlas_cart');
    router.push('/dashboard/domains/success');
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <div className="lg:ml-4 pt-20 px-6 lg:px-12 pb-20">
        
        {/* Navigation */}
        <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium cursor-pointer">Back</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 font-mono">Secure Server Active</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!cartData || cartData.items.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto text-center mt-20">
                <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <ShoppingBag className="w-10 h-10 text-slate-500" />
                </div>
                <h2 className="text-3xl font-bold">Your cart is empty</h2>
                <button onClick={() => router.push('/dashboard/domains')} className="mt-6 bg-blue-600 px-8 py-3 rounded-xl font-bold">Return to Search</button>
            </motion.div>
          ) : (
            <form onSubmit={handleCompleteOrder} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Details & Payment */}
              <div className="lg:col-span-7 space-y-12">
                
                {/* 1. Customer Information */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">1</div>
                    <h2 className="text-2xl font-bold">Customer Information</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">First Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="Joseph" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Last Name</label>
                      <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Tehilla" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500/50 focus:outline-none transition-all" />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="info@cofoundr.name.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:border-blue-500/50 focus:outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. Payment Details */}
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">2</div>
                    <h2 className="text-2xl font-bold">Payment Method</h2>
                  </div>
                  
                  <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-400">Credit or Debit Card</span>
                        <div className="flex items-center gap-3 opacity-80">
                            {/* SVG Logos for Visa/Mastercard */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 filter brightness-0 invert" alt="Visa" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                        </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Card Number</label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input required name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} type="text" placeholder="0000 0000 0000 0000" className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 font-mono text-lg focus:border-blue-500/50 focus:outline-none transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Expiry Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required name="expiry" value={formData.expiry} onChange={handleInputChange} type="text" placeholder="MM/YY" className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 font-mono focus:border-blue-500/50 focus:outline-none transition-all" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">CVV</label>
                          <div className="relative">
                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input required name="cvv" value={formData.cvv} onChange={handleInputChange} type="password" placeholder="***" maxLength={3} className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 font-mono focus:border-blue-500/50 focus:outline-none transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Lock className="w-3 h-3 text-slate-500" />
                            <span className="text-[10px] text-slate-500 font-medium">Your payment data is never stored on our servers.</span>
                        </div>
                        <div className="flex items-center gap-2 grayscale brightness-200">
                             <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Powered by</span>
                             <span className="text-blue-500 font-black text-xs">PAYSTACK</span>
                        </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-6">
                  <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                    <h3 className="text-xl font-bold mb-8">Order Summary</h3>
                    
                    <div className="space-y-4 max-h-48 overflow-y-auto mb-8 pr-2 custom-scrollbar">
                      {cartData.items.map((item: any) => (
                        <div key={item.domain} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                          <div>
                            <p className="font-bold text-sm">{item.domain}</p>
                            <p className="text-[10px] text-slate-500">{item.years} Yr Registration</p>
                          </div>
                          <span className="font-mono text-sm">${(item.price * item.years).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      <div className="flex justify-between text-slate-400 text-sm">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-sm">
                        <span>ICANN Fees</span>
                        <span>${icannFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-white text-2xl font-bold pt-4">
                        <span>Total Due</span>
                        <span className="font-mono tracking-tighter text-blue-400">${grandTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={processing}
                      className="w-full mt-8 bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all relative overflow-hidden group shadow-2xl shadow-blue-600/20"
                    >
                      {processing ? <Zap className="animate-spin w-6 h-6" /> : `Pay $${grandTotal.toFixed(2)}`}
                    </button>
                  </div>

                  {/* Pro Trust Box */}
                  <div className="bg-blue-500/5 border border-blue-500/10 rounded-3xl p-6">
                    <div className="flex gap-4">
                        <ShieldCheck className="w-8 h-8 text-blue-500" />
                        <div>
                            <p className="text-sm font-bold">100% Money Back Guarantee</p>
                            <p className="text-xs text-slate-500 mt-1">If your domain is not registered within 24 hours, we provide a full refund.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}