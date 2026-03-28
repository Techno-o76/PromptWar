'use client';

import { useState } from 'react';
import { 
  Shield, Database, HeartHandshake, History, LibraryBig, Siren, 
  Bell, LineChart, RefreshCcw, TrafficCone, Thermometer, Newspaper, Radio, 
  CheckCircle2, Hourglass, Info, Map, UploadCloud, AlertTriangle
} from 'lucide-react';

// Data extraction as per stitch-rules.md
const NAV_ITEMS = [
  { name: 'Guardian Hub', icon: Shield, active: true },
  { name: 'Data Ingestion', icon: Database, active: false },
  { name: 'Support Flow', icon: HeartHandshake, active: false },
  { name: 'History', icon: History, active: false },
  { name: 'Resources', icon: LibraryBig, active: false },
];

const SIGNALS = [
  { name: 'Traffic Flow', desc: 'Real-time road density', icon: TrafficCone, color: 'text-blue-500', bg: 'bg-blue-50', payload: 'Traffic camera analysis: Severe gridlock on I-95 North due to a multi-vehicle accident. Approaching ambulances are delayed by 15 minutes. Location: Sector 4.' },
  { name: 'Weather', desc: 'Local climate shifts', icon: Thermometer, color: 'text-orange-400', bg: 'bg-orange-50', payload: 'Meteorological alert: Flash flood warning issued for the downtown basin. Water levels rising 2 inches per hour. Evacuation of ground-level residents advised. Location: Sector 2.' },
  { name: 'News Feed', desc: 'Social sentiment', icon: Newspaper, color: 'text-purple-500', bg: 'bg-purple-50', payload: 'Social Media Sentiment: Trending hashtags indicate panic at Central Mall. Unconfirmed reports of structural collapse. Location: Sector 9.' },
  { name: 'IoT Array', desc: 'Smart city sensors', icon: Radio, color: 'text-[#29664c]', bg: 'bg-[#b9f9d6]/30', payload: 'Sensor Array 42 Trigger: High levels of carbon monoxide detected in the ventilation sub-system. Life-threatening levels reached. Location: Sector 7.' },
];

export default function SafetyGuardianHub() {
  // Go API State
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTriage = async () => {
    setLoading(true);
    setError("");
    setResult(null);
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
      setPrompt(""); // Clear input on submit
    }
  };

  return (
    <div className="bg-[#f7f7f2] min-h-screen flex text-[#2d2f2c] overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col py-10 gap-2 h-screen w-72 rounded-r-[3rem] sticky left-0 top-0 bg-[#f7f7f2] dark:bg-[#1a1c1a] z-40 border-r border-[#e8e9e3]">
        <div className="px-8 mb-10">
          <h1 className="text-xl font-bold text-[#29664c] tracking-tight">NEXUS Bridge</h1>
          <p className="text-xs text-[#5a5c58] opacity-70 mt-1">Societal Benefit Intel</p>
        </div>
        
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.name} 
              href="#" 
              className={item.active 
                ? "bg-[#b9f9d6] text-[#29664c] rounded-full mx-4 px-6 py-3 flex items-center gap-3 font-medium transition-all duration-300"
                : "text-[#2d2f2c] opacity-70 mx-4 px-6 py-3 flex items-center gap-3 font-medium hover:bg-[#e8e9e3] rounded-full transition-all"
              }
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'fill-[#29664c]/20' : ''}`} />
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="mt-auto px-8">
          <button className="w-full py-4 px-6 rounded-full bg-[#fdd404] text-[#594a00] font-bold flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform">
            <Siren className="w-5 h-5" />
            Safety Assistance
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top App Bar */}
        <header className="fixed top-0 right-0 left-0 md:left-72 z-30 h-20 bg-[#f7f7f2]/80 backdrop-blur-xl flex justify-between items-center px-8 border-b border-[#e8e9e3]">
          <div className="flex items-center gap-4">
            <div className="md:hidden text-2xl font-extrabold text-[#29664c]">NX</div>
            <h2 className="hidden md:block text-2xl font-extrabold text-[#29664c] tracking-tight">Safety Guardian Hub</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#b9f9d6]/50">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29664c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#29664c]"></span>
              </div>
              <span className="text-sm font-bold text-[#246147]">All Systems Active</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-[#e8e9e3] transition-colors">
                <Bell className="w-6 h-6 text-[#2d2f2c]" />
              </button>
              <img alt="User Profile" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8cz3ksV0AtaiNNca31lbif5FEp8m8w8NbRmmum8RK-fKHcKjIvebiJRQQrCCY8G7ZVGk7-jViuQkr9V0cmg7eEHYe8zyCGZ5Ans20Y9SETWYgoNy1RTKT1bXixptYMGVaNtuaPFQfnTdvtvKWOWOs-njVaEqlyBAv__A8ziS1b_5ps8e3G-GE1hwuVMXD8wo6HSbUu_R2Kw1Ar8iIOooJ7afdmV5vgwTM80e0OP5dtNlV0nGiBIyz5KNNg6MF3zUzX4YBtuiBSRQ" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-12">
          
          {/* Hero Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#2d2f2c] tracking-tight leading-tight">
                Good morning, Guardian. <br/>
                <span className="text-[#29664c]">Your community is secure.</span>
              </h3>
              <p className="text-[#5a5c58] text-lg max-w-xl">
                Everything looks peaceful today. We are currently monitoring 12 active streams and supporting 3 community initiatives.
              </p>
            </div>
            <div className="bg-[#29664c] rounded-2xl p-8 flex flex-col justify-between text-[#c8ffe0] relative overflow-hidden group shadow-lg">
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Network Pulse</p>
                <h4 className="text-4xl font-extrabold mt-2 text-white">98.4%</h4>
                <p className="text-sm mt-1 opacity-90">Community Confidence Score</p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <LineChart className="w-40 h-40 text-white" />
              </div>
            </div>
          </section>

          {/* Main Interactive Bento Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Card: Unstructured Data Hub (Triage Input) */}
            <div className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm border border-[#e8e9e3]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-[#2d2f2c]">Unstructured Data Hub</h4>
                  <p className="text-sm text-[#5a5c58]">Intake messy signals for processing</p>
                </div>
                <button className="p-3 bg-white rounded-full shadow-sm border border-[#e8e9e3] hover:bg-[#b9f9d6] hover:border-[#b9f9d6] transition-colors group">
                  <RefreshCcw className="w-5 h-5 text-[#29664c] group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {SIGNALS.map((sig) => (
                  <div 
                    key={sig.name} 
                    onClick={() => setPrompt(sig.payload)}
                    className="bg-[#f7f7f2] p-5 rounded-xl flex flex-col gap-3 border border-[#dcddd7]/50 hover:shadow-md hover:border-[#b9f9d6] transition-all cursor-pointer group"
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${sig.bg} group-hover:scale-110 transition-transform`}>
                      <sig.icon className={`w-6 h-6 ${sig.color}`} />
                    </div>
                    <div>
                      <p className="font-bold text-[#2d2f2c]">{sig.name}</p>
                      <p className="text-xs text-[#5a5c58] mt-0.5">{sig.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Form connected to Go backend */}
              <div className="mt-auto">
                <div className="bg-[#29664c]/5 border-2 border-dashed border-[#29664c]/20 rounded-2xl p-6 flex flex-col gap-4">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter raw incident report (e.g. Needs painkillers immediately. Allergy: ibuprofen. Loc: Sector 7)"
                    className="w-full h-24 bg-white/80 border border-[#29664c]/10 rounded-xl p-4 text-sm focus:outline-none focus:border-[#29664c]/50 resize-none placeholder-[#5a5c58]/60"
                  />
                  
                  {error && <p className="text-xs text-red-500 font-bold flex items-center gap-1"><AlertTriangle className="w-3 h-3"/> {error}</p>}

                  <button 
                    onClick={handleTriage}
                    disabled={loading || !prompt}
                    className="w-full py-4 bg-[#29664c] text-white rounded-xl font-bold hover:bg-[#1b5a40] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <UploadCloud className="w-5 h-5" />}
                    {loading ? "Processing..." : "Submit Incident Report"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card: Support Bridge (Triage Output) */}
            <div className="bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm border border-[#e8e9e3]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-[#2d2f2c]">Support Bridge</h4>
                  <p className="text-sm text-[#5a5c58]">Live Community Assistance Stream</p>
                </div>
                <div className="flex -space-x-3">
                  <img alt="Guardian" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVCdcmsv7wmrFlw7dDWHVtQj7PRt9dvRL1CAwMFcMUYJRh5EWp6ie4aBZFkm3bcyIZLUTynhYGD6rq41OCuCJxjteOE_5UMaTEwAqIVu4TTmcvV2rPF5hd6J4p7ywX96giNzZDwhEuzucpHvMfzzDcyKPN1nIk4hGbiE1Vi2YAnS2_KmsocXWZsAirLZhglDngMVWpvsZo1D_K5pTZW1YY0RV52nzLGxPxq5ox2aCOohPNA6z_dicR9CDSoZL56NIyaSc2Bp0JwmY" />
                  <img alt="Guardian" className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeHlC8Bz0kGJuOrtK4UZe_VUFS4p_XP_bwCMnDKnAyRMhVFv_e_O8LWm-62_tZQJ7JcykBNmhz5zl3SNgl9zXxRteb5lsMSVKm744CCJoRuEVRCiDFm6yVBcHzlmIJrrHXGcMo2ebncWi4f67kmjdhCmga0AUzfs08BUap9q9QYptlrQ4jJC8b1O_rv_TQiy-MrQSbSB_-mgBrEcdK7aoiAlrH7JUGpTAYpXoEdyNz_saFFnl1vB-BUfuIQ5XtER5MV6zUy0kj2Y" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#b9f9d6] text-[10px] flex items-center justify-center font-bold text-[#29664c]">+12</div>
                </div>
              </div>

              <div className="space-y-4 overflow-y-auto pr-2 max-h-[500px]">
                
                {/* Dynamically Injected Result from Go Backend */}
                {result && (
                  <div className="bg-[#b9f9d6]/30 p-5 rounded-xl border border-[#29664c]/10 animate-in fade-in slide-in-from-top-4 flex flex-col gap-3">
                    
                    {/* Conflict Flag */}
                    {result.plan.life_threatening_conflict && (
                      <div className="bg-red-500/10 border-l-4 border-red-500 p-3 rounded flex items-start gap-3 w-full">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-red-600 uppercase tracking-widest">Autonomous Flag</p>
                          <p className="text-sm text-red-800 font-medium">{result.plan.life_threatening_conflict}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 items-start w-full">
                      <div className="bg-[#29664c] text-white p-2 rounded-full shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="font-bold text-[#246147] truncate">Incident Structured Plan</p>
                          <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60 bg-white/50 px-2 py-0.5 rounded">Just Now</span>
                        </div>
                        <p className="text-sm text-[#246147]/80 mt-1 line-clamp-2">{result.plan.action_required}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                          <span className={`px-3 py-1 text-xs rounded-full font-bold ${result.plan.priority.includes('CRITICAL') ? 'bg-red-100 text-red-700' : 'bg-cyan-100 text-cyan-700'}`}>
                            Priority: {result.plan.priority}
                          </span>
                          <span className="px-3 py-1 bg-[#e8e9e3] text-[#2d2f2c] text-xs rounded-full font-bold flex items-center gap-1">
                            {result.plan.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Pre-existing Static Elements matching Stitch Design */}
                <div className="bg-[#b9f9d6]/20 p-5 rounded-xl border border-[#29664c]/5 flex gap-4 items-start">
                  <div className="bg-[#29664c] text-white p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-[#246147]">Food Distribution Confirmed</p>
                      <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60">2m ago</span>
                    </div>
                    <p className="text-sm text-[#246147]/80 mt-1">St. Mary's community hub has received the excess fresh produce from the local market.</p>
                  </div>
                </div>

                <div className="bg-[#f7f7f2] p-5 rounded-xl border border-[#e8e9e3] flex gap-4 items-start">
                  <div className="bg-[#fdd404] text-[#594a00] p-2 rounded-full">
                    <Hourglass className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-bold text-[#2d2f2c]">Transport Assistance Needed</p>
                      <span className="text-[10px] uppercase font-bold tracking-tighter opacity-60">15m ago</span>
                    </div>
                    <p className="text-sm text-[#5a5c58] mt-1">A senior group in the North Sector requires a volunteer shuttle for the garden expo.</p>
                  </div>
                </div>

              </div>
              <button className="mt-8 w-full py-4 border-2 border-[#29664c]/20 text-[#29664c] font-bold rounded-full hover:bg-[#29664c]/5 transition-colors">
                View Full Support Log
              </button>
            </div>
          </section>

          {/* Bottom Contextual Section: Safety Map Preview */}
          <section className="bg-white rounded-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center border border-[#e8e9e3]">
            <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtfOdDPkTorgsZlFJliIivJirRQZIr28hKuwS-9161yqT9qIYpMdj0tsKK78uzqSjt9lfoxkjzAB9DSUXVia0_jGrdq-04B3dimIwzHDMyHlHWFDs73_UzraVyAZs8R1KyIitJHynthZsuhM-UsAGyfuqo-0MlOPeQGrrHRTyDPfU1c4cpVdpoqDu8HUQ6JJyHQ7rePk-y10cYGwVxDxaqOWEDDadonhAdT5bK75JHxON-En2FqyUsSFVvhEb1Anh556hvbkqAo8g')"}}></div>
            
            <div className="relative z-10 bg-white/90 backdrop-blur-xl p-10 rounded-2xl max-w-lg text-center shadow-xl space-y-6 mx-4 border border-[#e8e9e3]/50">
              <Map className="w-12 h-12 text-[#29664c] mx-auto" strokeWidth={1.5} />
              <h5 className="text-3xl font-extrabold text-[#2d2f2c]">Community Safety Map</h5>
              <p className="text-[#5a5c58] leading-relaxed">
                Visualizing safe zones, resource depots, and active community volunteers in real-time across the metropolitan area.
              </p>
              
              {result?.plan && (
                <div className="mt-4 p-2 bg-[#f7f7f2] rounded-xl border border-[#e8e9e3] overflow-hidden">
                   <p className="text-[10px] font-black tracking-widest text-[#29664c] uppercase mb-1 text-left px-2 pt-1">New Triage Intel Route</p>
                   <img 
                      src={result.plan.location === "Sector 7" 
                        ? "https://placehold.co/400x120/f7f7f2/29664c?text=Maps+Routing:+Sector+7+Grid" 
                        : `https://placehold.co/400x120/f7f7f2/29664c?text=Maps+Routing:+${encodeURIComponent(result.plan.location)}`}
                      alt="Google Maps Static Integration"
                      className="w-full h-24 object-cover rounded-lg"
                    />
                </div>
              )}

              <button className="px-10 py-4 bg-[#29664c] text-white rounded-full font-bold shadow-lg hover:-translate-y-1 transition-all mt-4 w-full">
                Open Live Map View
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-[#e8e9e3] flex justify-around items-center z-50">
        <a className="flex flex-col items-center gap-1 text-[#29664c]" href="#">
          <Shield className="w-6 h-6 fill-[#29664c]/20" />
          <span className="text-[10px] font-bold">Hub</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#5a5c58]/80" href="#">
          <Database className="w-6 h-6" />
          <span className="text-[10px] font-bold">Data</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-[#5a5c58]/80" href="#">
          <HeartHandshake className="w-6 h-6" />
          <span className="text-[10px] font-bold">Support</span>
        </a>
      </nav>
    </div>
  );
}
