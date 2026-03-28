'use client';

import Link from 'next/link';

export default function Resources() {
  return (
    <div className="bg-[#f7f7f2] min-h-screen flex text-[#2d2f2c] overflow-hidden">
      

<aside className="hidden md:flex flex-col h-screen w-72 bg-[#f7f7f2] py-8 gap-2 shadow-[0_20px_40px_rgba(45,47,44,0.06)] fixed left-0 top-0 rounded-r-[3rem] z-50">
<div className="px-8 mb-10 flex items-center gap-3">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-fixed">
<span className="material-symbols-outlined" data-weight="fill" >shield_with_heart</span>
</div>
<div>
<h2 className="text-lg font-bold text-[#2d2f2c]">Safety Guardian</h2>
<p className="text-xs text-stone-500 font-medium">Community Support</p>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="text-stone-600 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all hover:translate-x-1 duration-300" href="#">
<span className="material-symbols-outlined">shield_with_heart</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Guardian Hub</span>
</a>
<a className="text-stone-600 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all hover:translate-x-1 duration-300" href="#">
<span className="material-symbols-outlined">database</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Data Ingestion</span>
</a>
<a className="text-stone-600 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all hover:translate-x-1 duration-300" href="#">
<span className="material-symbols-outlined">volunteer_activism</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">Support Flow</span>
</a>
<a className="text-stone-600 mx-4 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all hover:translate-x-1 duration-300" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-['Plus_Jakarta_Sans'] font-medium text-sm">History</span>
</a>

<a className="bg-[#29664c] text-white rounded-full mx-4 px-6 py-3 flex items-center gap-3 transition-all" href="#">
<span className="material-symbols-outlined" >library_books</span>
<span className="font-['Plus_Jakarta_Sans'] font-bold text-sm">Resources</span>
</a>
</nav>
<div className="mt-auto pt-8 border-t border-[#e8e9e3] mx-6">
<a className="text-stone-600 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all text-sm font-medium" href="#">
<span className="material-symbols-outlined">help</span> Help Center
            </a>
<a className="text-stone-600 px-6 py-3 flex items-center gap-3 hover:bg-[#e8e9e3] rounded-full transition-all text-sm font-medium" href="#">
<span className="material-symbols-outlined">logout</span> Logout
            </a>
<div className="mt-6 p-4 bg-secondary-container rounded-3xl flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container">medical_services</span>
</div>
<span className="text-xs font-bold text-on-secondary-container">Safety Assistance</span>
</div>
</div>
</aside>

<main className="flex-1 md:ml-72 bg-background min-h-screen">

<header className="flex justify-between items-center w-full px-8 py-6 sticky top-0 bg-[#f7f7f2]/80 backdrop-blur-md z-40">
<div className="flex items-center gap-4">
<h1 className="text-xl font-extrabold text-[#29664c] tracking-tight font-headline">Safety Guardian Hub</h1>
<div className="hidden lg:flex bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/10 items-center gap-2">
<span className="w-2.5 h-2.5 bg-tertiary rounded-full animate-pulse"></span>
<span className="text-xs font-bold text-primary tracking-wide">All Systems Active</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2.5 rounded-full hover:bg-[#dcddd7]/50 transition-colors text-on-surface">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2.5 rounded-full hover:bg-[#dcddd7]/50 transition-colors text-on-surface">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-primary-container">
<img alt="User profile" className="w-full h-full object-cover" data-alt="portrait of a confident woman in professional attire with soft natural lighting and blurred greenery in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD81slwGRitgCeEwtTXrfTP2vSs2AiH1U3nR1stJCC87uiQLoq3cwzzx12k1zDwPnZthdntxP4c-rWP52aer7P9eSqd_gQCJIjllioY1ICspDjiPJyd0TvFQNeeDKUQPpcfdTSp5tif-3_iLvOvIW1ge1xqGQKO1gsRoaxJMTpbEFe9jRz8mhvhfKgnTMKxVsRlCybj5cDFHvUTIr8hvQWw4yYZZ5uhBsMeVFPUtT_oXhTRj7aR5sRexG5h9AxgyUzNM3lLOkqzMpM"/>
</div>
</div>
</header>
<div className="max-w-7xl mx-auto px-8 pb-20">

<section className="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-7">
<span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-xs font-bold mb-4">Resource Library</span>
<h2 className="text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-6">Empower Your <br/><span className="text-primary italic">Community Response</span></h2>
<p className="text-lg text-on-surface-variant max-w-xl mb-8">Access our comprehensive library of toolkits, safety guidelines, and local coordination assets designed for resilience.</p>
<div className="relative max-w-lg">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-6 py-4 bg-surface-container-highest rounded-full border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-on-surface shadow-sm" placeholder="Search for guides, protocols, or contacts..." type="text"/>
</div>
</div>
<div className="lg:col-span-5 flex justify-end">
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl transform rotate-1 group">
<img alt="Resource featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="aerial photography of people holding hands in a circle in a green grassy field symbolizing community strength and unity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYyRyTa7hd1GUbRZgGtVvYSjF6VdbZP5G32E9eBCWjsDbd680fY7zKPS3xtCWspwB3g1pNNLECnGQ2huOcxeAdPOAr9ERnciT_52LYZTNieyezEb6fDXkasmmtHAb8xone48kOwXnbIitofIKG6mfN9r03nuvzDEX6QDWReXHYOr5nvxK7tvl2WO5wE579LcVm8YChGReJKU1WaJcQC5jYge7eGSfUaK7elrY1HLDyHDkweoyS6LPW__XIe1reooJyty9eK5Uyt6M"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<p className="text-xs font-bold uppercase tracking-widest mb-1">Latest Update</p>
<h3 className="text-xl font-bold">2024 Resilience Handbook</h3>
</div>
</div>
</div>
</section>

<div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
<button className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm transition-all shadow-md">All Resources</button>
<button className="px-6 py-2.5 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container rounded-full font-bold text-sm transition-all">Emergency Protocols</button>
<button className="px-6 py-2.5 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container rounded-full font-bold text-sm transition-all">Volunteer Guides</button>
<button className="px-6 py-2.5 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container rounded-full font-bold text-sm transition-all">Asset Inventory</button>
<button className="px-6 py-2.5 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container rounded-full font-bold text-sm transition-all">Community Contacts</button>
<button className="px-6 py-2.5 bg-surface-container-low text-on-surface-variant hover:bg-primary-container hover:text-on-primary-container rounded-full font-bold text-sm transition-all">Policy Documents</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] flex flex-col md:flex-row gap-8 items-center border border-outline-variant/5">
<div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-64 bg-primary-container rounded-xl overflow-hidden">
<img alt="Emergency Protocols" className="w-full h-full object-cover mix-blend-multiply opacity-80" data-alt="illustration-style photo of emergency first aid kit items arranged neatly on a wooden table with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFVKjLHOnFHaI4Zs7xJC-fUJ5pv_8jvyC7J8WQ8vByKLNNPgJtxsA9IOXBVhYjH1QLD5rQOmnH4P5q0noAhz0dtNHPOkJadBjvfgXMshKZqT2iW-0la1piW75eA3wGQaaKV23nYXTPA0oWeLhiAsL_3XCOxSHBWA_0quHZ1F5UJaT6inTs5Q8iLSv6m8bHsb1XeP5IgWEfwOKR5mhWLPITQdNeYWkVMu5LQX-r5IqobDFx3GuM9wbuHMEI8K9weYv6cP8vUCDBstU"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary" data-weight="fill" >warning</span>
<span className="text-xs font-bold uppercase tracking-widest text-primary">Priority Protocol</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-3">Emergency Protocols</h3>
<p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Detailed step-by-step procedures for community-wide alerts, evacuation routing, and immediate safety measures during severe events.</p>
<div className="flex gap-4">
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">Download PDF</button>
<button className="text-primary font-bold text-sm px-4 py-2.5">Read Online</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] flex flex-col border border-outline-variant/5">
<div className="w-full h-40 bg-tertiary-container rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Volunteer Guides" className="w-full h-full object-cover" data-alt="diverse group of volunteers smiling and working together in a community garden, soft warm light and natural textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIsoQmppV87ahKeIHyKj1KjPqueWOflvBl3xc1L2G2SUof_W-q1aGsPIGRYv6cwR68_gubpkUwE8iZm4C4o37BH6dHN2MjBTUVJfEVOYpImynjlVmJMToqTYGuFCgqqj-6nQUVoNkdUw4OWcxu8jYZKRr-kR5NaWqkDsYflylqqhnDGDOukq4cOlq_LNFoALDk_KYOMQZFKIJQeY1KKhcFK4t4UzQtMuu890jMgUpAF8CyVFC-epif16tDd_l6SRPXJgEREW0XpqQ"/>
</div>
<h3 className="text-xl font-bold text-on-surface mb-2">Volunteer Guides</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-1">Training manuals for safety wardens and community leads. Includes coordination toolkits and communication etiquette.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-stone-400">12 Modules • Updated June 2024</span>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] flex flex-col border border-outline-variant/5">
<div className="w-full h-40 bg-secondary-container rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Asset Inventory" className="w-full h-full object-cover" data-alt="neatly organized technical equipment and communication tools on a workbench with industrial chic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN_hw2aotTouQ7Vy9R3itA33NW7YuQglF3OZdaDF2URfEUAmOBxPqgR1OgQbK3CeJmisvuH7nIQAgb5wbOva1T62-j6uLI77Mr8t6WB5AxvWey1qfPscN-wqP7WvV0mJvxpVNfA_ceVvpE1rn4dTm6DanrzYIRlmTJZlvwGh0FIagx4O0rt9_DA96cY_f0alZhi9vJaP0PG9bmnKG4oxv4no3VN2cXiUEnDn4wrNQi1X7LiqWqYVneS6WS4O0a1mDUfxJwT4epyb4"/>
</div>
<h3 className="text-xl font-bold text-on-surface mb-2">Asset Inventory</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-1">Digital catalog of shared community resources: medical supplies, generators, radios, and emergency shelters.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-stone-400">Live Database • 420 Items</span>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="lg:col-span-2 bg-[#fdfdfb] p-8 rounded-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] flex flex-col md:flex-row gap-8 items-center border border-outline-variant/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" data-weight="fill" >contact_phone</span>
<span className="text-xs font-bold uppercase tracking-widest text-secondary">Verified Network</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-3">Community Contacts</h3>
<p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Direct lines to local agencies, verified neighborhood responders, and specialized technical support teams in your area.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="flex items-center gap-3 p-3 bg-surface rounded-2xl">
<span className="material-symbols-outlined text-primary">local_police</span>
<span className="text-xs font-bold">Local PD</span>
</div>
<div className="flex items-center gap-3 p-3 bg-surface rounded-2xl">
<span className="material-symbols-outlined text-error">fire_truck</span>
<span className="text-xs font-bold">Fire Dept</span>
</div>
</div>
<button className="hero-gradient text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20">Access Directory</button>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-4 relative z-10">
<div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container"></div>
<div className="flex-1 h-2 bg-surface-container rounded-full"></div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 flex items-center gap-3 opacity-60">
<div className="w-8 h-8 rounded-full bg-surface-container"></div>
<div className="flex-1 h-2 bg-surface-container rounded-full"></div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant/5 flex items-center gap-3 opacity-30">
<div className="w-8 h-8 rounded-full bg-surface-container"></div>
<div className="flex-1 h-2 bg-surface-container rounded-full"></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] flex flex-col border border-outline-variant/5">
<div className="w-full h-40 bg-primary-fixed rounded-lg mb-6 flex items-center justify-center overflow-hidden">
<img alt="Wellness" className="w-full h-full object-cover" data-alt="abstract artistic rendering of soft blue and green watercolor shapes suggesting tranquility and mental clarity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU0VGg7m8eXu4C4eKARYYFnchqfP49bCwlC7aI60hfFoFaKLuxUajT5P0ZwXzrF0R2Xo100ehcWgKLFLZwTZW8QqGURdVW-RGXl-Ai4QZiD86yFIN2JFBeLHE0asatJsxvE3-Ae-xIyRpnUeDeJjd2vzMPP2Octxf3ch_4BP59Om74vUp7uszC3aYNpPP_dxNdTFecLGhoE1Xlje1fQh6NWE6ZxFcCf6d3oKN1FMkb5WHGkKpbWJqfGHKlVCvN0oyLJCn3ou1k_eY"/>
</div>
<h3 className="text-xl font-bold text-on-surface mb-2">Wellbeing Kits</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-1">Resources for managing stress, psychological first aid, and community peer-support frameworks.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-stone-400">8 Toolkits • New Release</span>
<button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>

<section className="mt-20 bg-surface-container-high rounded-xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<circle className="text-primary" cx="10" cy="10" fill="currentColor" r="20"></circle>
<circle className="text-secondary" cx="90" cy="80" fill="currentColor" r="30"></circle>
</svg>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-bold text-on-surface mb-4">Can't find what you need?</h3>
<p className="text-on-surface-variant max-w-2xl mx-auto mb-8">Our central support team can help you source specific guides or create new resource toolkits for your neighborhood's unique requirements.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:scale-105 transition-all">Request a Resource</button>
<button className="bg-white text-primary px-8 py-3.5 rounded-full font-bold shadow-sm border border-outline-variant/10 hover:bg-surface-container-low transition-all">Contact Librarian</button>
</div>
</div>
</section>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/10 flex justify-around items-center py-3 z-50">
<a className="flex flex-col items-center gap-1 text-stone-500" href="#">
<span className="material-symbols-outlined text-2xl">shield_with_heart</span>
<span className="text-[10px] font-bold">Hub</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-500" href="#">
<span className="material-symbols-outlined text-2xl">volunteer_activism</span>
<span className="text-[10px] font-bold">Support</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="#">
<span className="material-symbols-outlined text-2xl" >library_books</span>
<span className="text-[10px] font-bold">Resources</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-500" href="#">
<span className="material-symbols-outlined text-2xl">history</span>
<span className="text-[10px] font-bold">History</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-500" href="#">
<span className="material-symbols-outlined text-2xl">settings</span>
<span className="text-[10px] font-bold">Settings</span>
</a>
</nav>

    </div>
  );
}
