'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, Search, Database, Cpu, Zap, Globe, 
  ChevronRight, LayoutGrid, List, ExternalLink, 
  Settings, Activity, HardDrive, Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AtlasDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'flex'>('grid');

  const projects = [
    { 
      name: 'vector-db-prod', 
      type: 'PostgreSQL', 
      status: 'healthy', 
      usage: '42%', 
      storage: '1.2GB / 5GB', 
      region: 'us-east-1',
      endpoint: 'vector-prod.atlas.cloud' 
    },
    { 
      name: 'auth-service-staging', 
      type: 'Redis', 
      status: 'healthy', 
      usage: '12%', 
      storage: '128MB / 1GB', 
      region: 'eu-central-1',
      endpoint: 'auth-stg.atlas.cloud' 
    },
    { 
      name: 'analytics-warehouse', 
      type: 'MongoDB', 
      status: 'scaling', 
      usage: '89%', 
      storage: '45GB / 100GB', 
      region: 'us-west-2',
      endpoint: 'analytics.atlas.cloud' 
    }
  ];

  const filteredProjects = projects.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] selection:bg-blue-500/30">
      
      {/* Universal Header */}
      <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          
          <div className="flex items-center gap-6 flex-1">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tighter">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span>ATLAS</span>
            </div>
            
            <div className="relative max-w-md w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444] group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111] border border-[#1a1a1a] rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-[#444]"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* View Toggle Switch */}
            <div className="flex items-center bg-[#111] border border-[#1a1a1a] rounded-md p-1 gap-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-[#1a1a1a] text-blue-400 shadow-sm' : 'text-[#555] hover:text-[#999]'}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('flex')}
                className={`p-1.5 rounded transition-all ${viewMode === 'flex' ? 'bg-[#1a1a1a] text-blue-400 shadow-sm' : 'text-[#555] hover:text-[#999]'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <Link 
              href="/app/dashboard/project/new"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-md transition-all flex items-center gap-2 shadow-lg shadow-blue-600/10"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        
        <div className="flex flex-col mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Projects</h1>
          <p className="text-[#666] text-sm font-medium">Manage your cloud infrastructure and database clusters.</p>
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div 
              key={viewMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" 
                : "flex flex-col gap-3"
              }
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.name}
                  className={`group relative border border-[#1a1a1a] bg-[#0c0c0c] hover:border-[#333] transition-all duration-300
                    ${viewMode === 'grid' ? 'rounded-2xl p-6 flex flex-col' : 'rounded-xl p-4 flex items-center justify-between'}`}
                >
                  
                  {/* Top: Branding & Meta */}
                  <div className={viewMode === 'grid' ? "mb-6" : "flex items-center gap-6 flex-1"}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#111] to-[#080808] border border-[#1a1a1a] flex items-center justify-center group-hover:border-blue-500/30 transition-colors shadow-inner">
                        <Database className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-none mb-1.5">{project.name}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-black tracking-widest text-[#444]">{project.type}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'healthy' ? 'bg-emerald-500 animate-pulse' : 'bg-blue-400'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Infrastructure Stats */}
                    <div className={viewMode === 'grid' ? "grid grid-cols-2 gap-4 mt-6" : "flex items-center gap-12 ml-auto mr-12"}>
                      <div className="space-y-1">
                        <p className="text-[10px] text-[#444] font-bold uppercase tracking-widest flex items-center gap-1">
                          <Cpu className="w-3 h-3" /> Compute
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-16 bg-[#1a1a1a] rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: project.usage }} />
                          </div>
                          <span className="text-xs font-mono text-[#888]">{project.usage}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-[10px] text-[#444] font-bold uppercase tracking-widest flex items-center gap-1">
                          <HardDrive className="w-3 h-3" /> Storage
                        </p>
                        <span className="text-xs font-mono text-[#888]">{project.storage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Connection */}
                  <div className={viewMode === 'grid' ? "mt-auto pt-6 border-t border-[#1a1a1a] flex items-center justify-between" : "flex items-center gap-4"}>
                    <div className="flex items-center gap-1.5 text-xs text-[#555] font-mono">
                      <Terminal className="w-3 h-3" /> {project.endpoint}
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-[#1a1a1a] text-[#555] hover:text-white transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-blue-500/10 text-[#555] hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          ) : (
            /* Empty State: The "World Class" Experience */
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 border-2 border-dashed border-[#1a1a1a] rounded-[2rem]"
            >
              <div className="w-20 h-20 bg-[#0c0c0c] border border-[#1a1a1a] rounded-3xl flex items-center justify-center mb-6 shadow-2xl relative">
                <Database className="w-10 h-10 text-[#333]" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full animate-ping" />
              </div>
              <h3 className="text-xl font-bold mb-2">No projects found.</h3>
              <p className="text-[#555] text-center max-w-sm mb-8">
                Ready to deploy? Launch your first database cluster or hosting environment in seconds.
              </p>
              <Link 
                href="/app/dashboard/project/new"
                className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl"
              >
                <Plus className="w-5 h-5" />
                New Project
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Decorative Grid Floor */}
      <div className="fixed bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none z-[-1]" />
    </div>
  );
}