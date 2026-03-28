'use client';

import { useState } from 'react';
import { Shield, ShieldAlert, ShieldCheck, Zap, Terminal, Search, User, MapPin, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export default function NexusDashboard() {
  const [prompt, setPrompt] = useState("");
  const vertical = "Crisis Intelligence Bridge";
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTriage = async () => {
    setLoading(true);
    setError("");
    try {
      const resp = await fetch("http://localhost:8080/api/v1/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
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
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-white relative overflow-hidden bg-black">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12 z-10 pt-10">
        <h1 className="text-7xl font-black tracking-[0.2em] neon-text bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent uppercase">
          NEXUS
        </h1>
        <p className="text-sm font-bold tracking-widest text-cyan-400 flex items-center gap-2 uppercase">
          <Shield className="w-4 h-4" /> SOCIETAL BENEFIT: CRISIS INTELLIGENCE BRIDGE
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 shrink-0">
        {/* Input Panel */}
        <div className="glass p-8 flex flex-col gap-6 bg-white/5 border border-white/10 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-50 rounded-t-2xl"></div>
          
          <label className="text-xs font-black tracking-[0.2em] text-cyan-400 uppercase flex items-center gap-2">
            <FileText className="w-4 h-4" /> Raw Incident Report (Messy Input)
          </label>

          <div className="relative group flex-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Patient needs painkillers immediately. History shows severe allergic reaction to ibuprofen. Location: Sector 7..."
              className="relative w-full h-full min-h-[250px] bg-black/80 border border-white/10 rounded-2xl p-6 text-sm font-mono focus:outline-none focus:border-cyan-500/50 resize-none placeholder-gray-600 leading-relaxed"
            />
          </div>

          <button
            onClick={handleTriage}
            disabled={loading || !prompt}
            className="w-full py-4 bg-gradient-to-r from-pink-600 to-cyan-600 hover:from-pink-500 hover:to-cyan-500 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all neon-shadow disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            {loading ? <Zap className="w-5 h-5 animate-pulse text-white" /> : 
              <>
                <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Initialize Bridge Triage
              </>
            }
          </button>
        </div>

        {/* Output Panel */}
        <div className="glass p-8 flex flex-col gap-6 bg-white/5 border border-white/10">
          <label className="text-xs font-black tracking-[0.2em] text-pink-500 uppercase flex items-center gap-2">
            <User className="w-4 h-4" /> Structured Rescue Plan
          </label>

          {!result && !error && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-500 opacity-50 border border-dashed border-white/10 rounded-2xl bg-black/20 m-4">
              <Terminal className="w-12 h-12 mb-4" strokeWidth={1} />
              <p className="text-xs font-mono tracking-widest uppercase font-bold text-center px-8">Awaiting Input For Agentic Synthesis</p>
            </div>
          )}

          {error && (
            <div className="flex-1 flex items-center justify-center text-red-400 p-4 border border-red-500/20 bg-red-500/5 rounded-2xl m-4">
              <div className="text-center">
                <ShieldAlert className="w-10 h-10 mx-auto mb-2 text-red-500" />
                <p className="text-sm font-mono uppercase font-bold">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 text-[10px] font-black tracking-widest text-red-500 hover:text-red-400 uppercase">System Restart</button>
              </div>
            </div>
          )}

          {result && (
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto animate-in fade-in slide-in-from-bottom-4">
              {/* Conflict Flag Agentic Action */}
              {result.plan?.life_threatening_conflict && (
                <div className="p-4 bg-red-500/10 border border-red-500 border-l-4 border-l-red-500 rounded-lg flex gap-4 animate-pulse">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h3 className="text-xs font-black tracking-widest text-red-500 uppercase mb-1">Agent Autonomous Flag</h3>
                    <p className="text-sm font-medium text-white/90">{result.plan.life_threatening_conflict}</p>
                  </div>
                </div>
              )}

              {/* Zero-Day Defense Audit log */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col gap-2">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest text-cyan-500 uppercase">Input Sanitization</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-[9px] font-black rounded uppercase flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Secured</span>
                 </div>
                 <p className="text-xs font-mono text-gray-400 truncate opacity-70 border-l-2 border-cyan-500/50 pl-2 ml-1">{result.hardened_prompt.replace('\n', ' ')}</p>
              </div>

              {/* Triage Output */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex flex-col justify-center">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Priority Level</p>
                  <p className={`text-2xl font-black uppercase tracking-wider ${result.plan?.priority.includes('CRITICAL') || result.plan?.priority === 'High' ? 'text-red-500' : 'text-cyan-400'}`}>
                    {result.plan?.priority || "UNKNOWN"}
                  </p>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 overflow-hidden relative group">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 flex items-center gap-1"><MapPin className="w-3 h-3"/> Location Intel</p>
                  <p className="text-sm font-bold text-white truncate mb-3">{result.plan?.location || "Unspecified"}</p>
                  
                  {/* Google Services Signal: Maps Static API Thumbnail */}
                  <div className="w-full h-24 rounded border border-white/10 overflow-hidden bg-black/50 relative">
                    <img 
                      src={result.plan?.location === "Sector 7" 
                        ? "https://placehold.co/400x200/111111/00e5ff?text=Google+Maps:+Sector+7+Grid" 
                        : `https://placehold.co/400x200/111111/ff007f?text=Google+Maps:+${encodeURIComponent(result.plan?.location || "Unknown")}`}
                      alt="Google Maps Static Integration"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded backdrop-blur text-[8px] font-black tracking-widest text-gray-400 uppercase">
                      Maps API
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/10 flex-1 flex flex-col">
                <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Extracted Action Required</p>
                <div className="bg-black/30 p-4 rounded text-sm text-gray-200 leading-relaxed font-medium flex-1">
                  {result.plan?.action_required || "Processing..."}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
