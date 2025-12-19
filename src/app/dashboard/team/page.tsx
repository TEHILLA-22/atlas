'use client';

import { useState } from 'react';
import { 
  UserPlus, Mail, Shield, ShieldCheck, 
  MoreHorizontal, Search, X, Check,
  User, ShieldAlert, Filter, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TeamManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const team = [
    { id: 1, name: 'Alex Rivera', email: 'alex@atlas.io', role: 'Owner', status: 'active', avatar: 'AR' },
    { id: 2, name: 'Sarah Chen', email: 'sarah.c@atlas.io', role: 'Maintainer', status: 'active', avatar: 'SC' },
    { id: 3, name: 'Michael Ogunleye', email: 'mike@atlas.io', role: 'Developer', status: 'active', avatar: 'MO' },
    { id: 4, name: 'Jessica Miller', email: 'jess@gmail.com', role: 'Developer', status: 'pending', avatar: 'JM' },
  ];

  const filteredTeam = team.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed]">
      <div className="lg:ml-2 max-w-[1200px] mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <ShieldCheck className="w-4 h-4" /> Organization
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">Team Members</h1>
            <p className="text-[#666] text-sm max-w-md">
              Manage your team members and their account permissions. Members can access all projects within this organization.
            </p>
          </div>
          
          <button 
            onClick={() => setIsInviteOpen(true)}
            className="flex items-center gap-2 bg-white text-black hover:bg-slate-200 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-white/5"
          >
            <UserPlus className="w-4 h-4" />
            Invite Member
          </button>
        </div>

        {/* Filters & Search */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444] group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0c0c] border border-[#1a1a1a] rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 text-[#666] hover:text-white px-4 py-2 text-sm font-medium border border-[#1a1a1a] rounded-xl hover:bg-[#111] transition-all">
            <Filter className="w-4 h-4" />
            Filter
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Members List */}
        <div className="border border-[#1a1a1a] bg-[#0c0c0c] rounded-[2rem] overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1a1a1a] bg-[#080808]">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[#444]">Member</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[#444]">Role</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[#444]">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-[#444] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a1a1a]">
              {filteredTeam.map((member) => (
                <motion.tr 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  key={member.id} className="group hover:bg-white/[0.01] transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                        {member.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{member.name}</p>
                        <p className="text-xs text-[#555] font-mono">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {member.role === 'Owner' ? (
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      ) : (
                        <Shield className="w-3.5 h-3.5 text-[#444]" />
                      )}
                      <span className="text-xs font-medium text-[#888]">{member.role}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      member.status === 'active' 
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                      : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                    }`}>
                      <div className={`w-1 h-1 rounded-full ${member.status === 'active' ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
                      {member.status}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-[#444] hover:text-white transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Invite Modal Overlay */}
        <AnimatePresence>
          {isInviteOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsInviteOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-lg bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2.5rem] p-10 shadow-3xl"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Invite a teammate</h2>
                  <p className="text-[#666] text-sm font-medium">Any registered Atlas user can be invited via their email address.</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#444] ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444]" />
                      <input 
                        type="email" 
                        placeholder="colleague@company.com" 
                        className="w-full bg-black border border-[#1a1a1a] rounded-xl pl-12 pr-4 py-4 focus:border-blue-500/50 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#444] ml-1">Assign Role</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 text-left transition-all">
                        <p className="text-sm font-bold text-blue-400">Developer</p>
                        <p className="text-[10px] text-blue-400/60 mt-1">Read & Write access to projects.</p>
                      </button>
                      <button className="p-4 rounded-xl border border-[#1a1a1a] hover:border-[#333] text-left transition-all">
                        <p className="text-sm font-bold text-white">Maintainer</p>
                        <p className="text-[10px] text-[#444] mt-1">Manage infrastructure & billing.</p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex gap-3">
                  <button 
                    onClick={() => setIsInviteOpen(false)}
                    className="flex-1 py-4 text-sm font-bold text-[#666] hover:text-white transition-all"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                    Send Invitation
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}