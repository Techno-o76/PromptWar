'use client';

import Link from 'next/link';

export default function DataIngestion() {
  return (
    <div className="bg-[#f7f7f2] min-h-screen flex text-[#2d2f2c] overflow-hidden">
      

<aside className="hidden md:flex flex-col h-screen w-72 rounded-r-[3rem] border-r-0 bg-[#f7f7f2] dark:bg-stone-900 shadow-[0_20px_40px_rgba(45,47,44,0.06)] py-8 gap-2 sticky top-0">
<div className="px-8 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" >shield_with_heart</span>
</div>
<div>
<h2 className="text-lg font-bold text-[#2d2f2c] dark:text-stone-100 font-headline leading-tight">Safety Guardian</h2>
<p className="text-xs text-stone-500 font-medium">Community Support</p>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-2">

<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300 font-label text-sm font-medium" href="#">
<span className="material-symbols-outlined">shield_with_heart</span>
<span>Guardian Hub</span>
</a>

<a className="bg-[#29664c] text-white rounded-full mx-4 px-6 py-3 flex items-center gap-3 hover:translate-x-1 duration-300 font-label text-sm font-medium" href="#">
<span className="material-symbols-outlined" >database</span>
<span>Data Ingestion</span>
</a>

<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300 font-label text-sm font-medium" href="#">
<span className="material-symbols-outlined">volunteer_activism</span>
<span>Support Flow</span>
</a>

<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300 font-label text-sm font-medium" href="#">
<span className="material-symbols-outlined">history</span>
<span>History</span>
</a>

<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300 font-label text-sm font-medium" href="#">
<span className="material-symbols-outlined">library_books</span>
<span>Resources</span>
</a>
</nav>
<div className="px-8 mt-auto pt-8">
<button className="w-full bg-secondary-container text-on-secondary-container font-bold py-4 rounded-full shadow-sm hover:scale-[1.02] transition-transform active:scale-95">
                Safety Assistance
            </button>
</div>
<div className="mt-6 flex flex-col gap-1">
<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-2 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all text-sm font-medium" href="#">
<span className="material-symbols-outlined">help</span>
<span>Help Center</span>
</a>
<a className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-2 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all text-sm font-medium" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
<main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">

<header className="flex justify-between items-center w-full px-8 py-4 bg-[#f7f7f2] dark:bg-stone-900 sticky top-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-xl font-extrabold text-[#29664c] dark:text-[#b9f9d6] font-headline tracking-tight">Safety Guardian Hub</h1>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-primary-container/30 rounded-full">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
<span className="text-sm font-bold text-[#29664c]">All Systems Active</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-stone-500 hover:bg-[#dcddd7]/50 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-500 hover:bg-[#dcddd7]/50 rounded-full transition-colors active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
<img alt="User profile" data-alt="professional portrait of a confident male safety coordinator in a bright office setting with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYsD_y9ljmyGu7Vh4aogqChFFP-YPhOTlqTuLJItrXqzRGVWcr0Y7T_rAiToxyB_nU6SQW4ZAjahAsgK-WM71N-jtxfe304wcjzzvhk2pVH2pc2D5_hKVooywj4KFFNvF7tXFPmT2GJ53C0_GWlVNTLXplHNN40_Y9HC7szwqeTTE9nF0ad4srP9s-ZNFbLGRFxf0C1rRSYaKQh1-hfdMIMIzBmaZ4Ru__MBLM8FX9swfgWYXW-n71ONOvwdFbzkIIuwhdMHGq8iQ"/>
</div>
</div>
</div>
</header>
<div className="w-full bg-[#e8e9e3] dark:bg-stone-800 h-px"></div>

<div className="p-8 md:p-12 max-w-7xl mx-auto w-full space-y-12">

<section className="space-y-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-4">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight mb-4">Data Ingestion</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">Feed our AI ecosystem with unstructured field data to enhance community safety insights in real-time.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary-container/20 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-surface-container-lowest border-2 border-dashed border-outline-variant/30 rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center transition-all hover:border-primary/50">
<div className="flex flex-wrap justify-center gap-6 mb-10">
<div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-primary transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-3xl">mic</span>
</div>
<div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container transform rotate-3 hover:rotate-0 transition-transform cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-3xl">traffic</span>
</div>
<div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-3xl">cloudy_snowing</span>
</div>
<div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-700 transform rotate-6 hover:rotate-0 transition-transform cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-3xl">newspaper</span>
</div>
<div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-sm">
<span className="material-symbols-outlined text-3xl">photo_camera</span>
</div>
</div>
<div className="space-y-2">
<p className="text-2xl font-bold font-headline text-on-surface">Drop Files Here</p>
<p className="text-on-surface-variant">or <span className="text-primary font-bold cursor-pointer underline underline-offset-4">browse your computer</span></p>
<p className="text-xs text-stone-400 mt-4">Supports WAV, MP4, JSON, CSV, and HEIC up to 500MB</p>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between px-2">
<h3 className="text-xl font-bold font-headline flex items-center gap-2">
<span className="material-symbols-outlined text-primary">sync</span>
                            Processing
                        </h3>
<span className="text-sm font-bold text-primary px-3 py-1 bg-primary-container rounded-full">3 active</span>
</div>
<div className="space-y-4">

<div className="bg-surface-container-low rounded-xl p-6 flex items-center gap-6 group hover:bg-surface-container transition-colors">
<div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined">mic</span>
</div>
<div className="flex-1 space-y-3">
<div className="flex justify-between items-center">
<h4 className="font-bold text-on-surface">Voice_Log_Sector_7.wav</h4>
<span className="text-sm font-medium text-stone-500">72%</span>
</div>
<div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full transition-all duration-1000" ></div>
</div>
<p className="text-xs text-on-surface-variant">Transcribing audio and identifying sentiment markers...</p>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-6 flex items-center gap-6 group hover:bg-surface-container transition-colors">
<div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-orange-700 shrink-0 shadow-sm">
<span className="material-symbols-outlined">newspaper</span>
</div>
<div className="flex-1 space-y-3">
<div className="flex justify-between items-center">
<h4 className="font-bold text-on-surface">Global_Alerts_Feed_V2.json</h4>
<span className="text-sm font-medium text-stone-500">45%</span>
</div>
<div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full transition-all duration-1000" ></div>
</div>
<p className="text-xs text-on-surface-variant">Parsing metadata and cross-referencing locations...</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="px-2">
<h3 className="text-xl font-bold font-headline flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">history</span>
                            Recently Ingested
                        </h3>
</div>
<div className="space-y-3">
<div className="bg-white border-l-4 border-primary rounded-xl p-4 shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-bold truncate pr-4">Traffic_Cam_42_A.mp4</span>
<span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">2m ago</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1">Analyzed: 4 anomalies detected in South District.</p>
</div>
<div className="bg-white border-l-4 border-primary rounded-xl p-4 shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-bold truncate pr-4">Weather_Station_Delta.csv</span>
<span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">14m ago</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1">Climate drift updated for regional mapping.</p>
</div>
<div className="bg-white border-l-4 border-primary rounded-xl p-4 shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-bold truncate pr-4">Incident_Report_771.pdf</span>
<span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">1h ago</span>
</div>
<p className="text-xs text-on-surface-variant line-clamp-1">Text-to-vector embedding completed.</p>
</div>
</div>
<button className="w-full py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-full transition-colors font-label">
                        View Full History
                    </button>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface-container-low rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
<div className="space-y-6 z-10">
<div className="inline-flex items-center gap-2 px-4 py-1 bg-white rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-widest">
                        System Insight
                    </div>
<h2 className="text-3xl font-extrabold font-headline leading-tight">Data Integrity is at 99.8% Today</h2>
<p className="text-on-surface-variant text-lg leading-relaxed">Your contributions are helping the Safety Guardian Hub build a more resilient community. Every byte of data uploaded today has been automatically categorized and sanitized.</p>
<div className="flex gap-4">
<div className="p-4 bg-white rounded-2xl shadow-sm text-center flex-1">
<p className="text-2xl font-black text-primary">1.2 TB</p>
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">Total Ingested</p>
</div>
<div className="p-4 bg-white rounded-2xl shadow-sm text-center flex-1">
<p className="text-2xl font-black text-secondary">24k+</p>
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">Source Nodes</p>
</div>
</div>
</div>
<div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
<img alt="Data visualization dashboard" className="w-full h-full object-cover" data-alt="vibrant abstract data visualization on multiple screens in a dark control room with glowing green and gold light streaks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM0jEcYtKitpTBTCEUWthP4QBisCa9bFB38rvG_UQgxVZZXyi54KS810v7zb0AFzUJU0jINbti-h2Qp0l5e89NQo6y5FbjDkfs_d5iFnVIbdwBUfDoFXVMpMOmugsJL_GPxfTN9gg9xVh9Bj8MK5y0YyLSKcUWjvKabdGnQwdqXDjq_z7KBDVoUJBDDeoFo9p1iM4kSo2Rv00fgGdDUNCSw8vzLHhIwxbqRJjfEZ872tCG5irDmY535rZUcTDZLm2LOItcduI3WN8"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
</div>
</section>
</div>

<div className="h-24 md:hidden"></div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] px-6 py-4 flex justify-between items-center z-50">
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">shield_with_heart</span>
<span className="text-[10px] font-bold">Hub</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="#">
<span className="material-symbols-outlined" >database</span>
<span className="text-[10px] font-bold">Ingestion</span>
</a>
<div className="bg-secondary-container p-3 rounded-full -mt-10 shadow-lg">
<span className="material-symbols-outlined text-on-secondary-container">add</span>
</div>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">volunteer_activism</span>
<span className="text-[10px] font-bold">Flow</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">history</span>
<span className="text-[10px] font-bold">History</span>
</a>
</nav>

    </div>
  );
}
