'use client';

import Link from 'next/link';

export default function HistoryLog() {
  return (
    <div className="bg-[#f7f7f2] min-h-screen flex text-[#2d2f2c] overflow-hidden">
      
<div className="flex min-h-screen">

<aside className="hidden md:flex flex-col h-screen w-72 bg-surface dark:bg-stone-900 rounded-r-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] py-8 gap-2 sticky top-0">
<div className="px-8 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="shield_with_heart">shield_with_heart</span>
</div>
<div>
<h2 className="text-lg font-bold text-on-background leading-tight">Safety Guardian</h2>
<p className="text-xs text-on-surface-variant">Community Support</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<Link aria-label="Navigation Link" className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300" href="/">
<span className="material-symbols-outlined" data-icon="shield_with_heart">shield_with_heart</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Guardian Hub</span>
</Link>
<Link aria-label="Navigation Link" className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300" href="/data-ingestion">
<span className="material-symbols-outlined" data-icon="database">database</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Data Ingestion</span>
</Link>
<Link aria-label="Navigation Link" className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300" href="/support-flow">
<span className="material-symbols-outlined" data-icon="volunteer_activism">volunteer_activism</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Support Flow</span>
</Link>
<Link aria-label="Navigation Link" className="bg-primary text-white rounded-full mx-4 px-6 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-300 shadow-md" href="/history">
<span className="material-symbols-outlined" data-icon="history" >history</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">History</span>
</Link>
<Link aria-label="Navigation Link" className="text-stone-600 dark:text-stone-400 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all hover:translate-x-1 duration-300" href="/resources">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Resources</span>
</Link>
</nav>
<div className="mt-auto px-4 space-y-1">
<a aria-label="Link" className="text-stone-600 dark:text-stone-400 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Help Center</span>
</a>
<a aria-label="Link" className="text-stone-600 dark:text-stone-400 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] dark:hover:bg-stone-800 rounded-full transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Logout</span>
</a>
<div className="mt-6 p-4 rounded-3xl bg-secondary-container text-on-secondary-container">
<p className="text-xs font-bold uppercase tracking-widest mb-2">Ready to Help</p>
<button aria-label="Action" className="w-full py-3 bg-white text-on-surface rounded-full text-sm font-bold shadow-sm hover:scale-105 duration-200">
                        Safety Assistance
                    </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="bg-surface/80 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center w-full px-8 py-4">
<div className="flex items-center gap-2">
<span className="text-xl font-extrabold text-primary tracking-tight font-headline">Safety Guardian Hub</span>
<span className="mx-3 h-4 w-px bg-outline-variant/30"></span>
<span className="text-sm font-medium text-on-surface-variant">History Dashboard</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center px-4 py-2 bg-primary-container/30 text-primary text-xs font-bold rounded-full gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        All Systems Active
                    </div>
<button aria-label="Action" className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button aria-label="Action" className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Professional portrait of a safety coordinator in a bright airy office with modern decor and natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt6cMrGsvbHTKN91n3aRrZtCxNslPKIeZfCEUNKexW_LH7AOda0iUZ11O0d6OcMCrU_Jz0QN9rLVm2H7p56P02V92bXjxpRQtRGpshi_SrDgZg7K4su7OVsYhTq3WvSIdSZEjjLXDBF_bEOOu_95qfeYrbSm5HH0gLB4FdE_rPzjwRzLoydRdL_Y_QxNEGCGK1QQenMojoKyP1df08EhK1IvegKdGYPqyofWU5fYnMFGVR_5znHxaDZjwXMBiaR7QIXxo5bvJndpc"/>
</div>
</div>
</header>

<div className="flex-1 p-8 overflow-y-auto">
<div className="max-w-7xl mx-auto space-y-8">

<section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline mb-2">History &amp; Activity</h1>
<p className="text-on-surface-variant text-lg max-w-2xl">
                                Detailed chronological log of all community support interactions and data streams ingested into the guardian system.
                            </p>
</div>
<div className="flex gap-3">
<button aria-label="Action" className="px-6 py-3 rounded-full bg-surface-container-lowest border border-outline-variant/10 text-on-surface font-semibold flex items-center gap-2 shadow-sm hover:bg-white transition-all">
<span className="material-symbols-outlined" data-icon="download">download</span>
                                Export CSV
                            </button>
<button aria-label="Action" className="px-6 py-3 rounded-full bg-primary text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all">
<span className="material-symbols-outlined" data-icon="add">add</span>
                                Manual Entry
                            </button>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<aside className="lg:col-span-3 space-y-6 sticky top-24">
<div className="bg-surface-container-low rounded-xl p-6 space-y-8">
<div>
<h3 className="font-headline font-bold text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="filter_list">filter_list</span>
                                        Filters
                                    </h3>

<div className="relative mb-6">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input aria-label="Input field" className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary shadow-sm" placeholder="Search activities..." type="text"/>
</div>

<div className="space-y-4">
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Activity Type</p>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input aria-label="Input field" defaultChecked className="rounded text-primary focus:ring-primary h-5 w-5 bg-white border-outline-variant/20" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">All Activities</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input aria-label="Input field" className="rounded text-primary focus:ring-primary h-5 w-5 bg-white border-outline-variant/20" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Data Ingestion</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input aria-label="Input field" className="rounded text-primary focus:ring-primary h-5 w-5 bg-white border-outline-variant/20" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Safety Assistance</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input aria-label="Input field" className="rounded text-primary focus:ring-primary h-5 w-5 bg-white border-outline-variant/20" type="checkbox"/>
<span className="text-sm text-on-surface group-hover:text-primary transition-colors">Alert Response</span>
</label>
</div>
</div>
</div>

<div>
<p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Date Range</p>
<div className="space-y-3">
<div className="space-y-1">
<label className="text-[10px] font-bold text-outline uppercase ml-1">From</label>
<input aria-label="Input field" className="w-full px-4 py-2 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm" type="date"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-outline uppercase ml-1">To</label>
<input aria-label="Input field" className="w-full px-4 py-2 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm" type="date"/>
</div>
</div>
</div>
<button aria-label="Action" className="w-full py-3 bg-surface-container-highest text-on-surface font-bold rounded-full text-sm hover:bg-outline-variant/20 transition-all">
                                    Clear All Filters
                                </button>
</div>

<div className="bg-primary p-6 rounded-xl text-white overflow-hidden relative group">
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-9xl transition-transform group-hover:scale-110 duration-500" data-icon="history">history</span>
<p className="text-xs font-bold text-on-primary/70 uppercase tracking-widest mb-1 relative z-10">Monthly Reach</p>
<h4 className="text-3xl font-extrabold mb-4 relative z-10">2,481</h4>
<div className="bg-white/20 h-1 w-full rounded-full relative z-10 overflow-hidden">
<div className="bg-secondary-fixed h-full w-[78%]"></div>
</div>
<p className="text-[11px] mt-2 relative z-10 opacity-80">78% of target support achieved</p>
</div>
</aside>

<div className="lg:col-span-9 space-y-4">

<div className="grid grid-cols-12 px-8 py-3 bg-surface-container/40 rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-widest hidden md:grid">
<div className="col-span-3">Date/Time</div>
<div className="col-span-3">Activity Type</div>
<div className="col-span-2">Outcome</div>
<div className="col-span-3">Guardian Assigned</div>
<div className="col-span-1 text-right">Action</div>
</div>

<div className="space-y-3">

<div className="grid grid-cols-1 md:grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,47,44,0.03)] hover:shadow-[0_10px_30px_rgba(45,47,44,0.06)] transition-all group">
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0">
<p className="text-sm font-bold text-on-surface">Oct 24, 2023</p>
<p className="text-xs text-on-surface-variant">14:22 PM</p>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg" data-icon="database">database</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Data Ingestion</p>
<p className="text-xs text-on-surface-variant">IoT Mesh Update</p>
</div>
</div>
<div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
<span className="px-3 py-1 bg-tertiary-container/40 text-on-tertiary-container text-[10px] font-bold rounded-full uppercase">Successful</span>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Guardian" className="w-full h-full object-cover" data-alt="Close up of a friendly male professional with a warm expression and short beard in a brightly lit modern office space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQsdmP68PNGdxj273s2FWhlbfQnm98Nx4cQVceVDtpLMcXdLSEgdZ_cjJW4sTKIsX9xTsFSaXnIAU_RaX4owi_fGeRdlruSkX2T2eQo_jrzkQi08ep2TY3IH2FrYRQUmf9GoPafMeqG3hzF12GDSCxm8uVgTx_jbwHZX4j3JisfHILJuInvdQgtevEEi1_XT9xEiD2mCOE_yJbxQ1pS-8GJxgrwKkXR4c2uT47tf4_0mYFYFrMt26SGxg78DxKR83FW5Iin9czpjI"/>
</div>
<p className="text-sm font-medium">Marcus Chen</p>
</div>
<div className="col-span-1 md:col-span-1 text-right">
<button aria-label="Action" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,47,44,0.03)] hover:shadow-[0_10px_30px_rgba(45,47,44,0.06)] transition-all group">
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0">
<p className="text-sm font-bold text-on-surface">Oct 24, 2023</p>
<p className="text-xs text-on-surface-variant">11:05 AM</p>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-lg" data-icon="volunteer_activism">volunteer_activism</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Safety Assistance</p>
<p className="text-xs text-on-surface-variant">Vulnerability Support</p>
</div>
</div>
<div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
<span className="px-3 py-1 bg-tertiary-container/40 text-on-tertiary-container text-[10px] font-bold rounded-full uppercase">Resolved</span>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Guardian" className="w-full h-full object-cover" data-alt="Headshot of a confident professional woman with a kind smile, clean and minimalist aesthetic with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIqVCkZzqqNAlQUNPgIAS5HXgpPhaEWJNHVIFSgBNxjlZ9fxnEuHcz-H33Qk0dmWB_7_l9769aOCQ_chkGhX6nNCjzCC4UgbdeqCIUgz7Wv-bafhihvAcivgRDjze-CidhdY1fgqpDJFcY0-GOZy1B8DtY607pXHSPaKGJ_vb-uWmxa3UnjC1Rbz18PVZW8st85D7Dj7Yjh-ihF1lTd_FBPGOyoS-oLBZm2QHnS_3xKx4h1zh-k6HkxUSMafxzLC6Ysa5CJdpnK6Q"/>
</div>
<p className="text-sm font-medium">Elena Rodriguez</p>
</div>
<div className="col-span-1 md:col-span-1 text-right">
<button aria-label="Action" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,47,44,0.03)] hover:shadow-[0_10px_30px_rgba(45,47,44,0.06)] transition-all group">
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0">
<p className="text-sm font-bold text-on-surface">Oct 23, 2023</p>
<p className="text-xs text-on-surface-variant">09:45 AM</p>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-error-container/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-lg" data-icon="notifications_active">notifications_active</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Alert Response</p>
<p className="text-xs text-on-surface-variant">Zone 4 Perimeter</p>
</div>
</div>
<div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
<span className="px-3 py-1 bg-surface-container-highest/60 text-on-surface-variant text-[10px] font-bold rounded-full uppercase">Archived</span>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden text-on-surface-variant flex items-center justify-center text-[10px] font-bold">
                                            AI
                                        </div>
<p className="text-sm font-medium">Guardian-AI (Alpha)</p>
</div>
<div className="col-span-1 md:col-span-1 text-right">
<button aria-label="Action" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 items-center px-8 py-6 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(45,47,44,0.03)] hover:shadow-[0_10px_30px_rgba(45,47,44,0.06)] transition-all group">
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0">
<p className="text-sm font-bold text-on-surface">Oct 23, 2023</p>
<p className="text-xs text-on-surface-variant">08:15 AM</p>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-lg" data-icon="database">database</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Data Ingestion</p>
<p className="text-xs text-on-surface-variant">Weather API Sync</p>
</div>
</div>
<div className="col-span-1 md:col-span-2 mb-4 md:mb-0">
<span className="px-3 py-1 bg-tertiary-container/40 text-on-tertiary-container text-[10px] font-bold rounded-full uppercase">Successful</span>
</div>
<div className="col-span-1 md:col-span-3 mb-4 md:mb-0 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container overflow-hidden">
<img alt="Guardian" className="w-full h-full object-cover" data-alt="Portrait of an experienced male security consultant with a calm and observant look, warm outdoor lighting in a professional garden setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpP8_V9YZIj1zolDtnCqzNx8Bvl9_R3UZU-f7R-ocqrvUheU2TnLLH6ZPULiU-riKiLWYpzLx3-Ub4-xk2YG7qMOEfxL-yKHBSnTw91VAZo-D3WGikHTyWfgquUiqAr2XPwFX5-Jsa3tmJ1ZOaavFyoeQJrxEoahahTQmeBq6y4pHGDy5Sr1cWmqiDRUBcwdtm_N7-pRJjSzXpZQjdz6QUelNdEkYlyd4DVhomt5WOthY3B0esCPqA1-I970SLNclU6A-LiSZ78AM"/>
</div>
<p className="text-sm font-medium">David Miller</p>
</div>
<div className="col-span-1 md:col-span-1 text-right">
<button aria-label="Action" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-6">
<p className="text-xs text-on-surface-variant">Showing <span className="font-bold text-on-surface">1-10</span> of <span className="font-bold text-on-surface">1,248</span> actions</p>
<div className="flex gap-2">
<button aria-label="Action" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button aria-label="Action" className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shadow-md">1</button>
<button aria-label="Action" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors text-xs font-bold">2</button>
<button aria-label="Action" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors text-xs font-bold">3</button>
<button aria-label="Action" className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl flex justify-around items-center py-4 px-2 z-50 border-t border-outline-variant/10">
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-500" href="/">
<span className="material-symbols-outlined" data-icon="shield_with_heart">shield_with_heart</span>
<span className="text-[10px] font-bold">Hub</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-500" href="/data-ingestion">
<span className="material-symbols-outlined" data-icon="database">database</span>
<span className="text-[10px] font-bold">Data</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-primary" href="/history">
<span className="material-symbols-outlined" data-icon="history" >history</span>
<span className="text-[10px] font-bold">History</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-500" href="/support-flow">
<span className="material-symbols-outlined" data-icon="volunteer_activism">volunteer_activism</span>
<span className="text-[10px] font-bold">Support</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-500" href="/settings">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="text-[10px] font-bold">Menu</span>
</Link>
</nav>

    </div>
  );
}
