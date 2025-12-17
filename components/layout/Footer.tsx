"use client";

import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#020202] border-t border-white/5 text-white font-sans pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-[1600px]">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    { }
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block text-2xl font-black italic uppercase tracking-tighter mb-6">
                            SENDING<span className="text-[#E91E63]">LIGHT</span>
                        </Link>
                        <p className="text-xs text-gray-500 leading-relaxed max-w-md mb-6">
                            SendingLight RP er en uavhengig spillserver. Vi er ikke tilknyttet, støttet av eller
                            på noen måte forbundet med Rockstar Games eller Take-Two Interactive Software, Inc.
                        </p>
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                            Server location: Oslo, Norway
                        </p>
                    </div>

                    { }
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Navigasjon</h4>
                        <ul className="space-y-3 text-xs font-medium text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-[#E91E63] transition-colors">Hjem</Link>
                            </li>
                            <li>
                                <Link href="/servers" className="hover:text-[#E91E63] transition-colors">Server Status</Link>
                            </li>
                            <li>
                                <Link href="/inventory" className="hover:text-[#E91E63] transition-colors">Inventar System</Link>
                            </li>
                            <li>
                                <Link href="/lucky-event" className="hover:text-[#E91E63] transition-colors">Eventer</Link>
                            </li>
                        </ul>
                    </div>

                    { }
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Juridisk</h4>
                        <ul className="space-y-3 text-xs font-medium text-gray-400">
                            <li>
                                <Link href="/legal/terms" className="hover:text-[#E91E63] transition-colors flex items-center gap-2">
                                    Vilkår for bruk
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/privacy" className="hover:text-[#E91E63] transition-colors flex items-center gap-2">
                                    Personvernerklæring
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>

                { }
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                        © {currentYear} SendingLight Network. Alle rettigheter forbeholdt.
                    </p>

                    <div className="flex gap-6">
                        <span className="text-[10px] text-gray-700 font-bold uppercase">v.2.0.5-beta</span>
                        <span className="text-[10px] text-gray-700 font-bold uppercase">System: Stable</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}