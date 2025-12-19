'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp, Check, AlertCircle, Database, Shield, Globe, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreateProject() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  const [form, setForm] = useState({
    organization: 'tehilla',
    name: '',
    password: '',
    region: 'iad1',
    connectionMode: 'both', 
    apiSchema: 'public', 
    postgresType: 'standard',
  });

  //master chief will implement it from the rust libary or from slintrust
  const organizations = [
    { value: 'tehilla', label: 'tehilla' },
    { value: 'tehilla-labs', label: 'tehilla-labs' },
    { value: 'acme-co', label: 'acme-co' },
  ];

  const regions = [
    { value: 'iad1', label: 'US East (N. Virginia)', flag: 'US', latency: 'Best for North America' },
    { value: 'sfo1', label: 'US West (San Francisco)', flag: 'US', latency: 'Best for West Coast' },
    { value: 'fra1', label: 'Europe (Frankfurt)', flag: 'EU', latency: 'Best for Europe' },
    { value: 'sin1', label: 'Asia Pacific (Singapore)', flag: 'SG', latency: 'Best for APAC' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || form.name.length < 2) return;

    setLoading(true);

    // Simulate API call, master chief will change this to real API call
    await new Promise(r => setTimeout(r, 2200));

    const slug = form.name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    // Redirect to a real username/project page after creation master chief will still handle this to be saved in the db
    router.push(`/dashboard/project/${slug}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Back */}
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition">
          <ChevronDown className="w-4 h-4 rotate-90" />
          Back to projects
        </Link>

        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10">
          <h1 className="text-4xl font-bold mb-3">Create a new project</h1>
          <p className="text-gray-400 mb-10">Deploy Postgres, Edge Functions, and Realtime in seconds.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Organization</label>
              <select
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none transition"
              >
                {organizations.map(org => (
                  <option key={org.value} value={org.value}>{org.label}</option>
                ))}
              </select>
            </div>

            {/* Project Name → Human URL */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Project name</label>
              <input
                type="text"
                required
                minLength={2}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="atlas"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none transition"
              />
              {form.name && (
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                  <Globe className="w-4 h-4" />
                  <code className="bg-white/5 px-3 py-1 rounded-lg">
                    atlas.app/dashboard/project/<span className="text-blue-400">{form.name.toLowerCase().replace(/\s+/g, '-')}</span>
                  </code>
                  <button type="button" className="ml-auto text-gray-500 hover:text-white">Copy</button>
                </div>
              )}
            </div>

            {/* Database Password */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Database password</label>
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="•••••••••••"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-2">Minimum 8 characters. Stored encrypted.</p>
            </div>

            {/* Region */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-2 block">Region</label>
              <select
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                className="w-full px-5 py-4 bg-gray-900 border border-white/10 rounded-xl focus:border-blue-500/50 focus:outline-none transition"
              >
                {regions.map(r => (
                  <option key={r.value} value={r.value}>
                    {r.flag} {r.label} — {r.latency}
                  </option>
                ))}
              </select>
            </div>

            {/* Advanced Configuration */}
            <div>
              <button
                type="button"
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div className="text-left">
                    <div className="font-medium">Advanced Configuration</div>
                    <div className="text-xs text-gray-500">Postgres type • Cannot be changed later</div>
                  </div>
                </div>
                {advancedOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {advancedOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-5">
                      <div>
                        <p className="font-medium mb-3">Postgres Type</p>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="radio" name="pgtype" value="standard" checked={form.postgresType === 'standard'} onChange={(e) => setForm({ ...form, postgresType: e.target.value })} className="sr-only" />
                          <div className={`w-5 h-5 rounded-full border-2 ${form.postgresType === 'standard' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                            {form.postgresType === 'standard' && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <div>
                            <div className="font-medium">Postgres <span className="text-green-400 text-xs font-bold">Recommended</span></div>
                            <p className="text-xs text-gray-400">Production-ready, battle-tested</p>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer mt-4">
                          <input type="radio" name="pgtype" value="orioledb" checked={form.postgresType === 'orioledb'} onChange={(e) => setForm({ ...form, postgresType: e.target.value })} className="sr-only" />
                          <div className={`w-5 h-5 rounded-full border-2 ${form.postgresType === 'orioledb' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                            {form.postgresType === 'orioledb' && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <div>
                            <div className="font-medium">Postgres with OrioleDB <span className="text-yellow-400 text-xs">Alpha</span></div>
                            <p className="text-xs text-gray-400">Experimental storage engine • Not for production</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Security & Connection Options */}
            <div>
              <button
                type="button"
                onClick={() => setSecurityOpen(!securityOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <div className="text-left">
                    <div className="font-medium">Security & API Access</div>
                    <div className="text-xs text-gray-500">Can be changed later</div>
                  </div>
                </div>
                {securityOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              <AnimatePresence>
                {securityOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-6">
                      <div>
                        <p className="font-medium mb-4">What connections do you plan to use?</p>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="radio" name="connection" value="both" checked={form.connectionMode === 'both'} onChange={(e) => setForm({ ...form, connectionMode: e.target.value })} className="sr-only" />
                          <div className={`w-5 h-5 rounded-full border-2 ${form.connectionMode === 'both' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                            {form.connectionMode === 'both' && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              Data API + Connection String
                              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Recommended</span>
                            </div>
                            <p className="text-xs text-gray-400">Use HTTP APIs + direct Postgres access</p>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer mt-4">
                          <input type="radio" name="connection" value="connection-only" checked={form.connectionMode === 'connection-only'} onChange={(e) => setForm({ ...form, connectionMode: e.target.value })} className="sr-only" />
                          <div className={`w-5 h-5 rounded-full border-2 ${form.connectionMode === 'connection-only' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                            {form.connectionMode === 'connection-only' && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <div>
                            <div className="font-medium">Only Connection String</div>
                            <p className="text-xs text-gray-400">No auto-generated REST/GraphQL APIs</p>
                          </div>
                        </label>
                      </div>

                      {form.connectionMode === 'both' && (
                        <div>
                          <p className="font-medium mb-3">Data API configuration</p>
                          <div className="space-y-3">
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="radio" name="schema" value="public" checked={form.apiSchema === 'public'} onChange={(e) => setForm({ ...form, apiSchema: e.target.value })} className="sr-only" />
                              <div className={`w-5 h-5 rounded-full border-2 ${form.apiSchema === 'public' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                                {form.apiSchema === 'public' && <div className="w-2 h-2 bg-white rounded-full" />}
                              </div>
                              <div>
                                <div className="font-medium">Use public schema for Data API <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">Default</span></div>
                                <p className="text-xs text-gray-400">Query all tables in public schema</p>
                              </div>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                              <input type="radio" name="schema" value="dedicated" checked={form.apiSchema === 'dedicated'} onChange={(e) => setForm({ ...form, apiSchema: e.target.value })} className="sr-only" />
                              <div className={`w-5 h-5 rounded-full border-2 ${form.apiSchema === 'dedicated' ? 'border-blue-500 bg-blue-500' : 'border-gray-600'} flex items-center justify-center`}>
                                {form.apiSchema === 'dedicated' && <div className="w-2 h-2 bg-white rounded-full" />}
                              </div>
                              <div>
                                <div className="font-medium">Use dedicated API schema</div>
                                <p className="text-xs text-gray-400">Only allowlisted tables via api schema</p>
                              </div>
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              disabled={loading || !form.name || form.password.length < 8}
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating project...
                </>
              ) : (
                <>
                  Create project
                  <Check className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-8">
            By creating a project, you agree to the{' '}
            <Link href="/terms" className="text-blue-400 hover:underline">Terms of Service</Link> and{' '}
            <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}