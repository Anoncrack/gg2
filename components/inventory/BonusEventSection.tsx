"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function BonusEventSection() {
    const [copied, setCopied] = useState(false);
    const PROMO_CODE = "VIPER";

    const handleCopy = () => {
        navigator.clipboard.writeText(PROMO_CODE);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative w-full py-32 bg-[#020202] text-white overflow-hidden font-sans border-t border-white/5">

            { }
            { }
            <div className="absolute top-1/2 -translate-y-1/2 left-[-100px] md:left-[-150px] z-10 w-[300px] md:w-[500px] h-[600px] pointer-events-none opacity-60">
                <Image
                    src="/images/palm.webp"
                    alt="Palm Tree"
                    fill
                    className="object-contain"
                />
            </div>

            { }
            <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] md:right-[-160px] z-10 w-[300px] md:w-[500px] h-[600px] pointer-events-none opacity-60">
                <Image
                    src="/images/palm.webp"
                    alt="Palm Tree"
                    fill
                    className="object-contain scale-x-[-1]"
                />
            </div>


            <div className="container mx-auto px-4 max-w-[1400px] relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    { }
                    <div className="relative group">
                        { }
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500" />

                        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-700">
                            <Image
                                src="/images/event-car.webp"
                                alt="Dodge Viper Prize"
                                width={800}
                                height={500}
                                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                            />
                        </div>

                        { }
                        <div className="absolute top-0 right-10 z-20 bg-[#E91E63] text-white text-[10px] font-bold uppercase px-3 py-1 rounded shadow-lg animate-bounce">
                            Hovedpremie
                        </div>
                    </div>


                    { }
                    <div className="flex flex-col items-start text-left">

                        <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                            VINN EN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">DODGE VIPER</span>
                        </h2>

                        { }
                        <div className="flex items-center gap-4 mb-8 w-full">
                            <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-600 to-transparent" />
                            <div className="w-3 h-3 bg-blue-600 rotate-45 shadow-[0_0_10px_#2563eb]" />
                            <div className="h-[2px] flex-1 bg-gradient-to-l from-blue-600 to-transparent" />
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                            Registrer deg før slutten av februar og delta i vårt nye
                            <span className="text-white font-bold mx-1">LUCKY EVENT</span>.
                            Dette er din sjanse til å vinne eksklusive kjøretøy, sjeldne gjenstander
                            og premium-status helt gratis.
                        </p>

                        { }
                        <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl p-2 flex items-center justify-between mb-8 group hover:border-blue-500/50 transition-colors">
                            <div className="pl-4">
                                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">Kampanjekode:</span>
                                <span className="text-xl font-mono font-bold text-white tracking-widest">{PROMO_CODE}</span>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all flex items-center gap-2"
                            >
                                {copied ? (
                                    <span className="text-green-500 text-xs font-bold uppercase">Kopiert!</span>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                )}
                            </button>
                        </div>

                        { }
                        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
                            { }
                            <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-4 flex items-center gap-4 hover:bg-blue-900/10 hover:border-blue-500/30 transition-all">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">Lykkehjul</div>
                                    <div className="text-[10px] text-gray-500 uppercase">Gratis spinn</div>
                                </div>
                            </div>

                            { }
                            <div className="bg-[#0f0f0f] border border-white/5 rounded-lg p-4 flex items-center gap-4 hover:bg-[#E91E63]/10 hover:border-[#E91E63]/30 transition-all">
                                <div className="w-10 h-10 rounded-full bg-[#E91E63]/20 flex items-center justify-center text-[#E91E63]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-white">Premium</div>
                                    <div className="text-[10px] text-gray-500 uppercase">Status i 3 dager</div>
                                </div>
                            </div>
                        </div>

                        { }
                        <Link href="/register" className="w-full max-w-md py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-black italic uppercase tracking-widest text-center rounded-lg shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_25px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all">
                            DELTA I EVENTET
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    );
}