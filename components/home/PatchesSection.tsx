"use client";

import Link from "next/link";
import Image from "next/image";
import patches from "@/data/patches.json";

export function PatchesSection() {
    return (
        <section className="relative w-full py-24 bg-[#050505] text-white font-sans border-t border-white/5">
            <div className="container mx-auto px-4 max-w-[1600px]">

                { }
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-2">
                            SISTE <span className="text-[#E91E63]">OPPDATERINGER</span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-lg">
                            Hold deg oppdatert med utviklingen av SendingLight. Vi slipper nye funksjoner og forbedringer hver uke.
                        </p>
                    </div>

                    <Link href="/wiki/changelog" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
                        Se alle endringer
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                { }
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patches.map((patch) => (
                        <Link
                            key={patch.id}
                            href={`/patch/${patch.slug}`}
                            className="group relative flex flex-col h-[380px] bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#E91E63] hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(233,30,99,0.15)]"
                        >
                            { }
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={patch.image}
                                    alt={patch.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-80" />

                                { }
                                <div className="absolute top-4 left-4">
                                    <span className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-white/10 backdrop-blur-md
                                ${patch.category === 'EVENT' ? 'bg-[#E91E63]/20 text-[#E91E63] border-[#E91E63]/30' :
                                            patch.category === 'UPDATE' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                                'bg-gray-800/50 text-gray-300'}`}>
                                        {patch.category}
                                    </span>
                                </div>
                            </div>

                            { }
                            <div className="flex-1 p-6 flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold mb-2 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-white/50 rounded-full" />
                                        {patch.date}
                                    </div>
                                    <h3 className="text-xl font-black italic uppercase leading-tight text-white mb-3 group-hover:text-[#E91E63] transition-colors line-clamp-2">
                                        {patch.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                        {patch.preview}
                                    </p>
                                </div>

                                <div className="pt-4 mt-2 border-t border-white/5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                    Les Mer <span className="text-lg leading-none">›</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}