"use client";

import Link from "next/link";
import Image from "next/image";

export function InventoryHero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden font-sans">

            { }
            <div className="absolute inset-0 z-0">
                { }
                <Image
                    src="/images/inventory-bg.webp"
                    alt="Inventory System"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
                { }
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#050505]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
            </div>

            { }
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-10 md:mt-20">

                { }
                <div className="mb-8 animate-in fade-in zoom-in duration-700">
                    <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        INVENTAR
                    </h1>
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <div className="h-[2px] w-12 bg-[#E91E63]" />
                        <div className="text-xl md:text-3xl font-bold uppercase tracking-[0.3em] text-[#E91E63] drop-shadow-md">
                            NYTT SYSTEM
                        </div>
                        <div className="h-[2px] w-12 bg-[#E91E63]" />
                    </div>
                </div>

                { }
                <div className="max-w-2xl text-gray-300 text-sm md:text-lg font-medium leading-relaxed mb-12 drop-shadow-md">
                    <p>
                        Opplev total frihet med vårt nye Drag & Drop-system.
                        Administrer dine eiendeler, bytt varer med andre spillere
                        og organiser kjøretøyet ditt med et moderne grensesnitt.
                    </p>
                </div>

                { }
                <div className="flex flex-col md:flex-row gap-6 mb-24 w-full md:w-auto px-6">

                    { }
                    <Link href="#guide" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-[#E91E63] hover:border-[#E91E63] rounded-xl font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md overflow-hidden min-w-[250px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>HVORDAN FUNGERER DET?</span>
                    </Link>

                    { }
                    <Link href="/wiki/items" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md min-w-[250px]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                        <span>ALLE GJENSTANDER</span>
                    </Link>
                </div>

                { }
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">

                    { }
                    <div className="flex flex-col items-center group cursor-default">
                        <div className="w-20 h-20 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-lg group-hover:border-[#E91E63] group-hover:shadow-[0_0_30px_rgba(233,30,99,0.3)] transition-all duration-500 rotate-3 group-hover:rotate-0">
                            <svg className="w-8 h-8 text-white group-hover:text-[#E91E63] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                        </div>
                        <h3 className="text-base font-black uppercase tracking-widest text-white mb-2 group-hover:text-[#E91E63] transition-colors">
                            Drag & Drop
                        </h3>
                        <p className="text-xs text-gray-500 max-w-[220px]">
                            Intuitivt system. Flytt gjenstander enkelt mellom lommer, ryggsekk og kjøretøy.
                        </p>
                    </div>

                    { }
                    <div className="flex flex-col items-center group cursor-default">
                        <div className="w-20 h-20 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-lg group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 -rotate-3 group-hover:rotate-0">
                            <svg className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h3 className="text-base font-black uppercase tracking-widest text-white mb-2 group-hover:text-blue-500 transition-colors">
                            Visuell Oversikt
                        </h3>
                        <p className="text-xs text-gray-500 max-w-[220px]">
                            Se nøyaktig hva du bærer på. Hvert element har sitt eget unike ikon og sjeldenhet.
                        </p>
                    </div>

                    { }
                    <div className="flex flex-col items-center group cursor-default">
                        <div className="w-20 h-20 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center mb-6 shadow-lg group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500 rotate-3 group-hover:rotate-0">
                            <svg className="w-8 h-8 text-white group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                        </div>
                        <h3 className="text-base font-black uppercase tracking-widest text-white mb-2 group-hover:text-green-500 transition-colors">
                            Sikker Handel
                        </h3>
                        <p className="text-xs text-gray-500 max-w-[220px]">
                            Bytt gjenstander med andre spillere trygt uten risiko for svindel.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}