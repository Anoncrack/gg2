"use client";

import Link from "next/link";

export default function TermsPage() {
    const lastUpdated = "17. Desember 2025";

    return (
        <main className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-[#E91E63] selection:text-white">

            { }
            <div className="relative pt-32 pb-16 bg-[#0a0a0a] border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#E91E63_0%,transparent_40%)] opacity-10" />
                <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center md:text-left">
                    <div className="inline-block px-3 py-1 mb-4 border border-[#E91E63]/30 bg-[#E91E63]/10 rounded text-[10px] font-bold uppercase tracking-widest text-[#E91E63]">
                        Juridisk Dokument
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
                        VILKÅR FOR <span className="text-[#E91E63]">BRUK</span>
                    </h1>
                    <p className="text-sm text-gray-400">
                        Sist oppdatert: <span className="text-white font-bold">{lastUpdated}</span>
                    </p>
                </div>
            </div>

            { }
            <div className="container mx-auto px-6 max-w-4xl py-16">

                { }
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white mb-12 transition-colors">
                    ← Tilbake til forsiden
                </Link>

                <article className="prose prose-invert prose-lg max-w-none">

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">01.</span> Aksept av Vilkår
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Ved å opprette en konto, laste ned vår launcher, eller koble til serverne driftet av <strong>SendingLight RP</strong> ("Tjenesten"),
                            inngår du en bindende avtale med oss. Du bekrefter at du har lest, forstått og godtar å være bundet av disse vilkårene ("Vilkårene").
                        </p>
                        <p className="leading-relaxed text-sm bg-[#0f0f0f] p-4 border-l-4 border-[#E91E63] text-gray-400">
                            Hvis du ikke godtar vilkårene, har du ikke tillatelse til å bruke våre tjenester. Vi forbeholder oss retten til å endre disse vilkårene når som helst uten forvarsel.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">02.</span> Ansvarsfraskrivelse (Non-Affiliation)
                        </h2>
                        <p className="mb-4">
                            SendingLight RP er en uavhengig spillserver basert på modifikasjonsplattformen FiveM.
                        </p>
                        <ul className="space-y-3 bg-[#0a0a0a] border border-white/5 p-6 rounded-xl text-sm">
                            <li className="flex gap-3">
                                <span className="text-red-500 font-bold">✕</span>
                                <span>Vi er <strong>IKKE</strong> tilknyttet, støttet av, eller assosiert med Rockstar Games, Take-Two Interactive eller deres datterselskaper.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500 font-bold">✕</span>
                                <span>Grand Theft Auto V og relaterte varemerker tilhører Take-Two Interactive.</span>
                            </li>
                        </ul>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">03.</span> Virtuelle Eiendeler og Betalinger
                        </h2>
                        <p className="mb-4">
                            Tjenesten kan inkludere muligheten til å anskaffe virtuell valuta eller gjenstander ("Virtuelle Eiendeler") gjennom donasjoner eller spillaktivitet.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Ingen Eiendomsrett</h3>
                                <p className="text-sm text-gray-400">
                                    Du eier ikke de virtuelle gjenstandene. Du får en begrenset, tilbakekallelig lisens til å bruke dem på serveren. Vi kan når som helst endre eller fjerne gjenstander uten kompensasjon.
                                </p>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Forbud mot RMT (Real Money Trading)</h3>
                                <p className="text-sm text-gray-400">
                                    Det er strengt forbudt å selge, kjøpe eller bytte virtuelle eiendeler (penger, biler, kontoer) mot virkelige penger eller kryptovaluta utenfor våre offisielle kanaler. Brudd på dette medfører permanent utestengelse.
                                </p>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Ingen Refusjon (No Refunds)</h3>
                                <p className="text-sm text-gray-400">
                                    Alle bidrag og donasjoner er endelige. Ettersom dette er digitale tjenester som leveres umiddelbart, frafaller du angreretten. Forsøk på "Chargeback" (tilbakeføring) via bank vil føre til umiddelbar og permanent utestengelse.
                                </p>
                            </div>
                        </div>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">04.</span> Brukeratferd og Regler
                        </h2>
                        <p className="mb-4">
                            For å opprettholde et trygt miljø, godtar du å ikke:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                            <li>Bruke tredjeparts programvare for juks (Cheats, Mod Menus, Exploits).</li>
                            <li>Utnytte feil i spillet (Bugs/Glitches) til egen fordel.</li>
                            <li>Trakassere, true eller diskriminere andre spillere.</li>
                            <li>Utgi deg for å være en administrator eller moderator.</li>
                            <li>Dele personlig informasjon om andre brukere (Doxing).</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#E91E63]">
                            Vi forbeholder oss retten til å suspendere eller terminere din tilgang til Tjenesten umiddelbart, uten varsel, ved brudd på disse reglene.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">05.</span> Ansvarsbegrensning
                        </h2>
                        <p className="leading-relaxed text-sm">
                            Tjenesten leveres "som den er" (AS IS) uten noen form for garantier. Vi garanterer ikke at serveren vil være tilgjengelig 24/7, feilfri, eller sikker mot dataangrep.
                            SendingLight RP er ikke ansvarlig for tap av data, nedetid, eller skader på din maskinvare som følge av bruk av vår launcher eller server.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">06.</span> Lovvalg
                        </h2>
                        <p className="leading-relaxed text-sm">
                            Disse vilkårene styres av og tolkes i samsvar med norsk lov. Eventuelle tvister som oppstår i forbindelse med disse vilkårene skal underlegges jurisdiksjonen til domstolene i Oslo, Norge.
                        </p>
                    </section>

                    { }
                    <section className="mb-16 bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt og Støtte</h2>
                        <p className="text-gray-400 mb-6">
                            For spørsmål vedrørende disse vilkårene, appeller om utestengelse, eller generelle henvendelser:
                        </p>
                        <a
                            href="mailto:help@sendinglight.net"
                            className="inline-block text-xl md:text-2xl font-black italic text-[#E91E63] hover:text-white transition-colors border-b-2 border-[#E91E63] pb-1"
                        >
                            help@sendinglight.net
                        </a>
                    </section>

                </article>
            </div>

        </main>
    );
}