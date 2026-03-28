'use client';

import { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, Zap, Terminal, RefreshCcw, Search, BarChart3, Database } from 'lucide-react';

export default function PromptWar() {
  const [prompt, setPrompt] = useState("");
  const [vertical, setVertical] = useState("Medical");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDefend = async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await fetch("http://localhost:8080/api/v1/defend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, vertical })
      });
      if (!resp.ok) throw new Error("Backend connection failed.");
      const data = await resp.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12 z-10">
        <div className="p-3 glass neon-shadow rounded-2xl mb-4 bg-white/5">
          <Shield className="w-12 h-12 text-pink-500" strokeWidth={1.5} />
        </div>
        <h1 className="text-6xl font-black tracking-tighter neon-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          PROMPT<span className="text-pink-500">WAR</span>
        </h1>
        <p className="text-gray-400 font-medium tracking-wide flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" /> ZERO-DAY PROMPT DEFENSE ENGINE
        </p>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Input Panel */}
        <div className="glass p-8 flex flex-col gap-6 bg-white/5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold tracking-widest text-cyan-400 uppercase flex items-center gap-2">
              <Database className="w-4 h-4" /> Vertical Configuration
            </label>
            <div className="flex gap-2">
              {["Medical", "Financial", "Secure AI"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVertical(v)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    vertical === v ? "bg-cyan-500 text-black" : "bg-white/10 text-gray-400 hover:bg-white/20"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Paste your prompt to analyze or enter an adversarial attempt..."
              className="relative w-full h-48 bg-black/60 border border-white/10 rounded-2xl p-4 text-sm font-mono focus:outline-none focus:border-cyan-500/50 resize-none"
            />
          </div>

          <button
            onClick={handleDefend}
            disabled={loading || !prompt}
            className="w-full py-4 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all neon-shadow disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : 
              <>
                <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Initialize Defense
              </>
            }
          </button>
        </div>

        {/* Output Panel */}
        <div className="glass p-8 flex flex-col gap-6 bg-white/5 bg-black/20">
          <label className="text-sm font-semibold tracking-widest text-pink-500 uppercase flex items-center gap-2">
            <BarChart3 className="w-4 h-4" /> Hardening Report
          </label>

          {!result && !error && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 opacity-50">
              <ShieldAlert className="w-16 h-16 mb-4" strokeWidth={1} />
              <p className="text-sm font-mono tracking-tighter uppercase font-bold">Awaiting Autonomous Analysis</p>
            </div>
          )}

          {error && (
            <div className="flex-1 flex items-center justify-center text-pink-400 p-4 border border-pink-500/20 bg-pink-500/5 rounded-2xl">
              <div className="text-center">
                <ShieldAlert className="w-10 h-10 mx-auto mb-2" />
                <p className="text-sm font-mono uppercase">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 text-xs font-bold text-pink-500 hover:underline">Check Backend Status</button>
              </div>
            </div>
          )}

          {result && (
            <div className="flex-1 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-cyan-400">Status</span>
                  <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[10px] font-black rounded uppercase">Secure Output</span>
                </div>
                <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap max-h-64 overflow-y-auto scrollbar-hide">
                  {result.hardened}
                </pre>
              </div>
              <div className="p-4 bg-pink-500/5 rounded-2x border border-pink-500/20 flex items-center gap-4">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-pink-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-pink-500 uppercase">Detection Logic</p>
                  <p className="text-[11px] font-medium text-white">Autonomous Red-Teaming identified Vertical: {result.vertical}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 flex gap-8 items-center justify-center opacity-40 grayscale hover:grayscale-0 transition-all pointer-events-none">
        <Terminal className="w-5 h-5" />
        <span className="text-[10px] font-black tracking-[4px] uppercase">Nexus Integrated System</span>
        <Search className="w-5 h-5" />
      </div>
    </main>
  );
}
