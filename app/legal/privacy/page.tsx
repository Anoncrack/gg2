"use client";

import Link from "next/link";

export default function PrivacyPage() {
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
                        PERSONVERN<span className="text-[#E91E63]">ERKLÆRING</span>
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
                            <span className="text-[#E91E63]">01.</span> Innledning
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Velkommen til <strong>SendingLight RP</strong> ("vi", "oss" eller "vår"). Vi tar ditt personvern på alvor.
                            Denne personvernerklæringen forklarer hvordan vi samler inn, bruker, deler og beskytter din personlige informasjon
                            når du besøker nettstedet vårt <strong>sendinglight.net</strong>, bruker vår launcher, eller spiller på våre servere.
                        </p>
                        <p className="leading-relaxed">
                            Ved å bruke våre tjenester godtar du praksisen beskrevet i denne erklæringen. Hvis du ikke er enig i disse vilkårene,
                            vennligst ikke bruk våre tjenester.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">02.</span> Hvilke opplysninger vi samler inn
                        </h2>
                        <p className="mb-4">Vi samler inn ulike typer informasjon for å kunne tilby og forbedre våre tjenester:</p>

                        <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 mb-6">
                            <h3 className="text-lg font-bold text-white mb-3">A. Informasjon du gir oss direkte</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Kontoinformasjon:</strong> E-postadresse, brukernavn og passord (kryptert) når du registrerer deg.</li>
                                <li><strong>Profilinformasjon:</strong> Innstillinger, preferanser og eventuelle bilder du laster opp.</li>
                                <li><strong>Support:</strong> Informasjon du oppgir når du kontakter oss via e-post eller tickets.</li>
                            </ul>
                        </div>

                        <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-3">B. Automatisk innsamlet informasjon</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm">
                                <li><strong>Tekniske data:</strong> IP-adresse, nettlesertype, operativsystem og enhetsinformasjon.</li>
                                <li><strong>Spilldata:</strong> Steam Hex ID, Discord ID, Rockstar License ID, og logger over handlinger i spillet (for å forhindre juks og overvåke økonomien).</li>
                                <li><strong>Informasjonskapsler (Cookies):</strong> Vi bruker cookies for å huske at du er logget inn.</li>
                            </ul>
                        </div>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">03.</span> Hvorfor vi behandler dataene
                        </h2>
                        <p className="mb-4">Vi behandler dine personopplysninger for følgende formål:</p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2.5 shrink-0" />
                                <span><strong>Autentisering:</strong> For å identifisere deg og gi deg tilgang til kontoen din og serveren (Whitelist).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2.5 shrink-0" />
                                <span><strong>Sikkerhet og Anti-Cheat:</strong> For å oppdage og forhindre juks, hacking, og uautorisert tilgang. IP-adresser og Hardware ID kan brukes til utestengelser (bans).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2.5 shrink-0" />
                                <span><strong>Kommunikasjon:</strong> For å sende deg viktige oppdateringer om kontoen din eller endringer i vilkårene (vi sender ikke spam).</span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 bg-[#E91E63] rounded-full mt-2.5 shrink-0" />
                                <span><strong>Statistikk:</strong> For å analysere spilleraktivitet og forbedre serverens ytelse og innhold.</span>
                            </li>
                        </ul>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">04.</span> Deling av informasjon
                        </h2>
                        <p className="mb-4">
                            Vi selger <strong>aldri</strong> dine personopplysninger til tredjeparter. Vi deler kun informasjon med følgende tjenesteleverandører som er nødvendige for driften:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border border-white/10 rounded-lg bg-[#0a0a0a]">
                                <h4 className="font-bold text-white mb-1">Supabase / PostgreSQL</h4>
                                <p className="text-xs text-gray-500">For sikker lagring av database og autentisering.</p>
                            </div>
                            <div className="p-4 border border-white/10 rounded-lg bg-[#0a0a0a]">
                                <h4 className="font-bold text-white mb-1">Vercel</h4>
                                <p className="text-xs text-gray-500">For hosting av nettsiden og analyse av ytelse.</p>
                            </div>
                            <div className="p-4 border border-white/10 rounded-lg bg-[#0a0a0a]">
                                <h4 className="font-bold text-white mb-1">FiveM / Cfx.re</h4>
                                <p className="text-xs text-gray-500">Plattformen for spillserveren (brukerlisenser).</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Vi kan også utlevere informasjon dersom det er påkrevd ved lov, rettskjennelse eller for å beskytte våre rettigheter.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">05.</span> Informasjonskapsler (Cookies)
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Vår nettside bruker informasjonskapsler for å forbedre brukeropplevelsen. En cookie er en liten tekstfil som lagres i din nettleser.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Nødvendige cookies:</strong> Kreves for innlogging og kjernefunksjonalitet.</li>
                            <li><strong>Analyse cookies:</strong> Hjelper oss å forstå hvordan nettstedet brukes (anonymisert).</li>
                        </ul>
                        <p className="text-sm text-gray-500">
                            Du kan når som helst deaktivere cookies i nettleserinnstillingene dine, men dette kan påvirke funksjonaliteten ved innlogging.
                        </p>
                    </section>

                    { }
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#E91E63]">06.</span> Dine rettigheter (GDPR)
                        </h2>
                        <p className="mb-4">Som bruker i EØS-området har du følgende rettigheter:</p>
                        <div className="space-y-4">
                            <div className="border-l-2 border-[#E91E63] pl-4">
                                <strong className="text-white block">Rett til innsyn</strong>
                                <span className="text-sm">Du kan be om en kopi av alle personopplysninger vi har lagret om deg.</span>
                            </div>
                            <div className="border-l-2 border-[#E91E63] pl-4">
                                <strong className="text-white block">Rett til sletting ("Retten til å bli glemt")</strong>
                                <span className="text-sm">Du kan be oss om å slette kontoen din og all tilhørende data, forutsatt at vi ikke er lovpålagt å beholde den.</span>
                            </div>
                            <div className="border-l-2 border-[#E91E63] pl-4">
                                <strong className="text-white block">Rett til korrigering</strong>
                                <span className="text-sm">Hvis informasjonen vår er feil, har du rett til å få den rettet.</span>
                            </div>
                        </div>
                        <p className="mt-6 text-sm">
                            For å utøve disse rettighetene, vennligst kontakt oss på e-postadressen nedenfor.
                        </p>
                    </section>

                    { }
                    <section className="mb-16 bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Kontakt Oss</h2>
                        <p className="text-gray-400 mb-6">
                            Hvis du har spørsmål om denne personvernerklæringen eller ønsker å slette dataene dine, vennligst kontakt vår Data Protection Officer:
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