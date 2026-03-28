'use client';

import Link from 'next/link';
import { Shield, Database, HeartHandshake, History, LibraryBig, Siren } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Guardian Hub', icon: Shield, active: false, href: '/' },
  { name: 'Data Ingestion', icon: Database, active: false, href: '/data-ingestion' },
  { name: 'Support Flow', icon: HeartHandshake, active: true, href: '/support-flow' },
  { name: 'History', icon: History, active: false, href: '/history' },
  { name: 'Resources', icon: LibraryBig, active: false, href: '/resources' },
];

export default function SupportFlow() {
  return (
    <div className="bg-[#f7f7f2] min-h-screen flex text-[#2d2f2c] overflow-hidden">
      

<aside className="hidden md:flex flex-col py-10 gap-2 h-screen w-72 rounded-r-[3rem] sticky left-0 top-0 bg-[#f7f7f2] z-40 border-r border-[#e8e9e3] shadow-[0_20px_40px_rgba(45,47,44,0.06)]">
  <div className="px-8 mb-10">
    <h1 className="text-xl font-bold text-[#29664c] tracking-tight">NEXUS Bridge</h1>
    <p className="text-xs text-[#5a5c58] opacity-70 mt-1">Societal Benefit Intel</p>
  </div>
  
  <nav className="flex flex-col gap-2">
    {NAV_ITEMS.map((item) => (
      <Link aria-label="Navigation Link" 
        key={item.name} 
        href={item.href} 
        className={item.active 
          ? "bg-[#b9f9d6] text-[#29664c] rounded-full mx-4 px-6 py-3 flex items-center gap-3 font-medium transition-all duration-300"
          : "text-[#2d2f2c] opacity-70 mx-4 px-6 py-3 flex items-center gap-3 font-medium hover:bg-[#e8e9e3] rounded-full transition-all"
        }
      >
        <item.icon className={`w-5 h-5 ${item.active ? 'fill-[#29664c]/20' : ''}`} />
        {item.name}
      </Link>
    ))}
  </nav>
  
  <div className="mt-auto px-8">
    <button aria-label="Action" className="w-full py-4 px-6 rounded-full bg-[#fdd404] text-[#594a00] font-bold flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform">
      <Siren className="w-5 h-5" />
      Safety Assistance
    </button>
  </div>
</aside>

<main className="flex-1 h-screen overflow-y-auto bg-[#f7f7f2] relative flex flex-col">

<header className="flex justify-between items-center w-full px-8 py-4 bg-[#f7f7f2] sticky top-0 z-10">
<div className="flex items-center gap-4">
<span className="text-xl font-extrabold text-[#29664c] font-['Plus_Jakarta_Sans'] tracking-tight">Safety Guardian Hub</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full gap-2">
<span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-primary tracking-wide">All Systems Active</span>
</div>
<div className="flex items-center gap-2">
<button aria-label="Action" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#dcddd7]/50 transition-colors text-stone-500 active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button aria-label="Action" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#dcddd7]/50 transition-colors text-stone-500 active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-high ml-2 overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="professional portrait of a community support volunteer in a clean minimal setting with warm natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK9FDCfagqFBM0ovXwg1zBSfNV1Or6AMGpDQJkk_WZU2uj7H6dmuRcuGVjrsyjvBPinkY95nhCE26H6U9UJJGVOlqJ1y3CNWiS1MXX9cxfXML9_w1AxIbucP_U1gK0N3OMwAYorXpb1B7CB2aWVOjzgyD-0wr0FzYK72_HEK-ACsnCCT5D9tUaxFQvpAMwbGmSvfhajANs3dPQFAmTB1aGTWTkR_AfVLasmJKC07Lycsfp2D8BQdRnoWGRGp-g1sLXmbFJl0j1kSs"/>
</div>
</div>
</div>
</header>

<div className="bg-[#e8e9e3] h-px w-full"></div>

<div className="px-8 pt-12 pb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold text-[#2d2f2c] tracking-tight mb-4">Support Flow</h2>
<p className="text-lg text-[#5a5c58] max-w-2xl leading-relaxed">
                        Orchestrate and monitor community support actions. Build response workflows and allocate resources to where they are needed most.
                    </p>
</div>
<button aria-label="Action" className="bg-[#29664c] text-white rounded-full px-8 py-4 font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                    New Support Action
                </button>
</div>
</div>

<div className="px-8 pb-20">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-on-surface">Current Support Operations</h3>
<div className="h-px flex-1 bg-surface-container"></div>
<div className="flex gap-2">
<button aria-label="Action" className="p-2 rounded-full bg-surface-container-low text-stone-600 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
<button aria-label="Action" className="p-2 rounded-full bg-surface-container-low text-stone-600 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined" data-icon="sort">sort</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col shadow-[0_20px_40px_rgba(45,47,44,0.06)] border border-outline-variant/10 group">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-3xl" data-icon="restaurant">restaurant</span>
</div>
<span className="bg-primary-container/30 text-on-primary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">In Progress</span>
</div>
<h4 className="text-2xl font-bold mb-2 font-['Plus_Jakarta_Sans']">Food Distribution</h4>
<p className="text-stone-500 text-sm mb-8 leading-relaxed">Coordinating 500 meals for the central community shelter and surrounding residential blocks.</p>
<div className="mt-auto">
<div className="flex items-center -space-x-3 mb-6">
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-stone-200">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a helpful male volunteer smiling kindly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBmcsVKGToo93NBmcQw1Lv0boRUgUIwdMtvU3Qm0I41P7t_6YvYukocoBOCLyXF6xv1ca9fYEfKCfVoXXZk7MMAK8Powv-x0OZFbeA6d14sE8ZdPDxhDB8LbPKIkRWDRmGO6CFIseQ4x23p9Y3DpAt3V5beDzRJr2qRrBtCQnNNiO3nIObnkRi68h-t4NAEn1VnhgUIDdhQkLVL8Y9iDD4ejFGvzJUZkQucaK-BM5xBhvCVBzAF6MhlAaJBIWHoFdeCnksdqEW4Z8"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-stone-200">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="portrait of a young female coordinator with a headset in a warm office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbJXqBR7kXXRPtZDlPW4Jp31_-y7XLA1X4WFx16QXN6VOB6O5xxmFMNj5Fsqr5lH4bC9_cC7DEXwWvGHqW_CTScKXiBz6TgHEMSNeYd_gq4XUTek3OQpEPRZuKYbJgWX-b1nIjPsQ2rU_OV3ghYZpFjeD6TmU3ZkrgZ3NZsYu8s4m0Ofyp3MhZ3SoRo6bM75oEvOpIta8QsSzZ228K28-fQrUUC5MHxUKsmKFBe42R_QxfC-EIFuw0jM7GU9cB9fm6BgVSU7SICKw"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-stone-200">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="mature woman in a green community support vest smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5bAshgBmX9KP15OXEiDDy19WLgfDkHqlhMJH3F6RhEqiRc2m3b4KojbNQEHxB7LEJVQocSsQVxyayiBUo7piDUeYeH2uJw4tpAzPdJUMhXe4iIcQLKxEmm1Tna5XWnRQuIEU4Dezl8Rwen7XzmusUJkg3nBR6-8JD9MJtEVDctaXqNlNRcLHx1pmZQ2DzR-sLmitcMoImZCQlUcL0kiPZyEiStdy-p6kYmEu9n0FdN7T4dxbZYY4NnlV6Z9oKPYtsbKyBrmKpUNo"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-stone-600">
                                +8
                            </div>
</div>
<div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-[#29664c] w-[65%] rounded-full"></div>
</div>
<div className="flex justify-between mt-3">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Progress</span>
<span className="text-[10px] font-bold text-[#29664c] uppercase tracking-widest">65%</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col shadow-[0_20px_40px_rgba(45,47,44,0.06)] border border-outline-variant/10 group">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-3xl" data-icon="medical_services">medical_services</span>
</div>
<span className="bg-secondary-container/30 text-on-secondary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Scheduled</span>
</div>
<h4 className="text-2xl font-bold mb-2 font-['Plus_Jakarta_Sans']">Medical Evacuation</h4>
<p className="text-stone-500 text-sm mb-8 leading-relaxed">Planning air-lift for 4 critical patients from the north-side clinic to the regional hospital center.</p>
<div className="mt-auto">
<div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-stone-400" data-icon="calendar_today">calendar_today</span>
<div>
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Departure</p>
<p className="text-sm font-bold text-on-surface">Tomorrow, 08:30 AM</p>
</div>
</div>
<div className="flex gap-2">
<div className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-stone-500">URGENT</div>
<div className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-stone-500">AIR-UNIT 4</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col shadow-[0_20px_40px_rgba(45,47,44,0.06)] border border-outline-variant/10 group">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-tertiary-container text-on-tertiary-container rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-3xl" data-icon="water_drop">water_drop</span>
</div>
<span className="bg-tertiary-container/30 text-on-tertiary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Completed</span>
</div>
<h4 className="text-2xl font-bold mb-2 font-['Plus_Jakarta_Sans']">Clean Water Supply</h4>
<p className="text-stone-500 text-sm mb-8 leading-relaxed">Deployment of 3 portable filtration systems to the western zone completed and verified.</p>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[#29664c] font-bold text-sm mb-4">
<span className="material-symbols-outlined" data-icon="verified" >verified</span>
                            Success Verified
                        </div>
<div className="h-40 w-full rounded-xl overflow-hidden bg-surface-container-high relative">
<img alt="Water system" className="w-full h-full object-cover" data-alt="modern portable water filtration system deployed in a field with clean running water and sunny landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO6VsFNAM72Qc3kb8y-RKDqkC1F1JMUnGB4FLfQSuvhvAp5P5BxM2bfKV3wQJGDR8ukVdlQbuF2FP4G04vIiEPRjHWvW94H24QOH1cS0O5FAZMECSkdgno--rh4qob_tpw-5UB2EemC9XIIVESbNzEW6LhfBxk8kHUrQCa8zj2Pk2OLHw4OJmu7iSc7gAJlzqodKftmQm0YzLNpoCaGwumZVGthpM8zcskXeDD9zkkb90KNjGi5-q8eB9IbdZSXX9ma9acD8qIuec"/>
</div>
</div>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-[#29664c] to-[#1b5a40] rounded-xl p-10 flex flex-col md:flex-row shadow-[0_20px_40px_rgba(45,47,44,0.15)] text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div className="relative z-10 md:w-1/2">
<h4 className="text-3xl font-extrabold mb-4 font-['Plus_Jakarta_Sans'] tracking-tight">Active Impact Analysis</h4>
<p className="text-white/70 mb-8 max-w-sm">We are currently reaching 1,240 households across 4 major zones. Support efficiency is up by 14% this week.</p>
<button aria-label="Action" className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-all flex items-center gap-2">
                            View Full Report <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="relative z-10 md:w-1/2 mt-10 md:mt-0 flex justify-around items-center">
<div className="text-center">
<p className="text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tighter">84%</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Task Rate</p>
</div>
<div className="text-center">
<p className="text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tighter">4.2k</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-white/50">People Helped</p>
</div>
<div className="text-center">
<p className="text-4xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tighter">12</p>
<p className="text-[10px] font-bold uppercase tracking-widest text-white/50">Active Teams</p>
</div>
</div>
</div>

<div className="bg-surface-container-high/50 rounded-xl p-8 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold font-['Plus_Jakarta_Sans']">Activity Log</h4>
<span className="material-symbols-outlined text-stone-400" data-icon="history">history</span>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
<div>
<p className="text-sm font-bold text-on-surface">Volunteer team arrived at Zone C</p>
<p className="text-[10px] text-stone-500 font-medium">14 minutes ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-secondary-fixed mt-1.5 shrink-0"></div>
<div>
<p className="text-sm font-bold text-on-surface">Medical Evacuation scheduled</p>
<p className="text-[10px] text-stone-500 font-medium">1 hour ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-stone-300 mt-1.5 shrink-0"></div>
<div>
<p className="text-sm font-bold text-on-surface">Status update: Water Supply</p>
<p className="text-[10px] text-stone-500 font-medium">3 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
<div>
<p className="text-sm font-bold text-on-surface">Inventory replenished: Meals</p>
<p className="text-[10px] text-stone-500 font-medium">Yesterday</p>
</div>
</div>
</div>
<button aria-label="Action" className="mt-8 text-[#29664c] font-bold text-xs flex items-center justify-center gap-1 hover:underline">
                        View all activity <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest glass-card flex justify-around items-center py-4 px-2 z-50 rounded-t-3xl shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-400" href="/">
<span className="material-symbols-outlined" data-icon="shield_with_heart">shield_with_heart</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Hub</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-[#29664c]" href="/support-flow">
<span className="material-symbols-outlined" data-icon="volunteer_activism" >volunteer_activism</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Support</span>
</Link>
<button aria-label="Action" className="w-14 h-14 -mt-10 bg-[#29664c] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#29664c]/30 border-4 border-[#f7f7f2]">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-400" href="/history">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="text-[10px] font-bold uppercase tracking-widest">History</span>
</Link>
<Link aria-label="Navigation Link" className="flex flex-col items-center gap-1 text-stone-400" href="/resources">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Docs</span>
</Link>
</nav>

    </div>
  );
}
