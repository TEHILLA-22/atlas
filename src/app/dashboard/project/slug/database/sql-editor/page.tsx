'use client';

import { useState, useEffect } from 'react';
import { 
  Play, Save, Database, History, 
  ChevronRight, Terminal, Copy, 
  Trash2, Share2, Search, Zap, 
  FileCode, Table as TableIcon, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SQLEditor() {
  const [query, setQuery] = useState(`-- Welcome to Atlas Forge
-- Write your SQL query here and run it against your Rust-backed engine.

SELECT 
  users.id, 
  users.email, 
  orders.total 
FROM users 
JOIN orders ON users.id = orders.user_id 
WHERE orders.status = 'completed'
LIMIT 10;`);

  const [isExecuting, setIsExecuting] = useState(false);
  const [activeTab, setActiveTab] = useState('Query 1');

  // Mock Data for the Result Console
  const results = [
    { id: 1, email: 'lex@atlas.cloud', total: '$450.00' },
    { id: 2, email: 'sarah@atlas.cloud', total: '$1,200.00' },
    { id: 3, email: 'mike@atlas.cloud', total: '$89.99' },
  ];

  const handleExecute = () => {
    setIsExecuting(true);
    // Master chief!! This is where you will eventually call your Rust API
    setTimeout(() => setIsExecuting(false), 800);
  };

  return (
    <div className="h-screen bg-[#050505] text-[#ededed] flex flex-col overflow-hidden">
      
      {/* Tool Bar */}
      <div className="h-14 border-b border-[#1a1a1a] bg-[#080808] flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#111] border border-[#1a1a1a] rounded-md px-3 py-1">
            <Database className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#666]">Production_DB</span>
          </div>
          <div className="h-4 w-[1px] bg-[#1a1a1a]" />
          <div className="flex gap-1">
            {['Query 1', 'Query 2'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${activeTab === tab ? 'bg-[#1a1a1a] text-white' : 'text-[#444] hover:text-[#888]'}`}
              >
                {tab}.sql
              </button>
            ))}
            <button className="p-1.5 text-[#444] hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-[#666] hover:text-white text-xs font-bold transition-all px-3 py-1.5">
            <Save className="w-4 h-4" /> Save
          </button>
          <button className="flex items-center gap-2 text-[#666] hover:text-white text-xs font-bold transition-all px-3 py-1.5">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button 
            onClick={handleExecute}
            disabled={isExecuting}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-lg font-bold text-xs transition-all shadow-lg shadow-blue-600/20"
          >
            {isExecuting ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
            Run Query
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar: Snippets & History */}
        <aside className="w-64 border-r border-[#1a1a1a] bg-[#050505] flex flex-col">
          <div className="p-4 space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#444] mb-4">Snippet Library</p>
              <div className="space-y-1">
                {['Get All Users', 'Monthly Revenue', 'Audit Logs'].map(item => (
                  <button key={item} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111] text-xs text-[#888] hover:text-white transition-all text-left group">
                    <FileCode className="w-3.5 h-3.5 group-hover:text-blue-500" /> {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#444] mb-4">Query History</p>
              <div className="space-y-1">
                <div className="px-3 py-2 text-[10px] text-[#444] italic">Today</div>
                <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#111] text-xs text-[#666] transition-all text-left group">
                  <span className="truncate">SELECT * FROM products...</span>
                  <History className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Editor & Console */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          
          {/* Editor Area (Monaco Placeholder) */}
          <div className="flex-1 bg-[#080808] p-6 overflow-auto">
            <textarea
              spellCheck="false"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-full bg-transparent font-mono text-sm leading-relaxed text-blue-100/80 outline-none resize-none"
              style={{ caretColor: '#2563eb' }}
            />
          </div>

          {/* Results Console */}
          <motion.div 
            initial={{ height: 300 }}
            className="h-[400px] border-t border-[#1a1a1a] bg-[#050505] flex flex-col shadow-2xl"
          >
            <div className="h-10 border-b border-[#1a1a1a] px-6 flex items-center justify-between bg-[#080808]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" /> Console
                </div>
                <div className="text-[10px] font-bold text-[#444] uppercase tracking-widest flex items-center gap-4">
                  <span>Results: <span className="text-[#888]">3 rows</span></span>
                  <span>Time: <span className="text-emerald-500">12ms (via Rust)</span></span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-[#1a1a1a] rounded text-[#444] hover:text-white transition-colors"><Download className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-[#1a1a1a] rounded text-[#444] hover:text-white transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-[#0c0c0c] z-10">
                  <tr className="border-b border-[#1a1a1a]">
                    <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#444]">id</th>
                    <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#444]">email</th>
                    <th className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-[#444]">total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1a1a1a]">
                  {results.map((row) => (
                    <tr key={row.id} className="hover:bg-blue-600/5 transition-colors group">
                      <td className="px-6 py-3 text-xs font-mono text-[#666] group-hover:text-blue-400">{row.id}</td>
                      <td className="px-6 py-3 text-xs font-mono text-[#888]">{row.email}</td>
                      <td className="px-6 py-3 text-xs font-mono text-emerald-500">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

// Sub-component for icons used in the code
function RefreshCcw(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>;
}

function Plus(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M12 5v14"/><path d="M5 12h14"/></svg>;
}