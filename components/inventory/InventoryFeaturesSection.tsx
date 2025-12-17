"use client";


const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
    ),
    title: "Intuitiv Kontroll",
    desc: "Full Drag & Drop-støtte. Flytt, splitt og bruk gjenstander med enkle musebevegelser.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    ),
    title: "Realistisk Vekt",
    desc: "Hver gjenstand har sin egen vekt. Planlegg utstyret ditt nøye for ikke å bli overbelastet.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Hurtigspor",
    desc: "Tilegn våpen og mat til hurtigtaster (1-5) for umiddelbar bruk i kritiske situasjoner.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Markedsøkonomi",
    desc: "Prisene på gjenstander svinger dynamisk basert på tilbud og etterspørsel fra spillere.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Slitasje og Kvalitet",
    desc: "Våpen og verktøy slites over tid. Hold utstyret ditt ved like for å unngå at det går i stykker.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    title: "Crafting System",
    desc: "Bruk ressurser til å lage nye gjenstander direkte i inventaret eller på arbeidsbenker.",
  },
];


const STORAGE_TIERS = [
  {
    title: "Lommer",
    iconColor: "text-gray-400",
    borderColor: "border-gray-600",
    capacity: "5 KG",
    price: "GRATIS",
    desc: "Startkapasitet for alle innbyggere",
  },
  {
    title: "Ryggsekk",
    iconColor: "text-amber-700",
    borderColor: "border-amber-700",
    capacity: "25 KG",
    price: "$ 2 500",
    desc: "Kan kjøpes i klesbutikken",
  },
  {
    title: "Bagasjerom",
    iconColor: "text-gray-300",
    borderColor: "border-gray-300",
    capacity: "100+ KG",
    price: "VARIERER",
    desc: "Avhenger av kjøretøyets modell",
  },
  {
    title: "Lagerhus",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-400",
    capacity: "1000+ KG",
    price: "EIENDOM",
    desc: "Privat lagring for organisasjoner",
  },
];

export function InventoryFeaturesSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans border-t border-white/5">
      <div className="container mx-auto px-4 max-w-[1400px]">

        { }
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4">
            FORDELER MED <span className="text-blue-500">NYTT SYSTEM</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="w-3 h-3 bg-blue-500 rotate-45 -mt-[7px] shadow-[0_0_10px_#3b82f6]" />
        </div>

        { }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-blue-500/30 hover:bg-[#0f0f0f] transition-all duration-300 group"
            >
              { }
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold uppercase tracking-wider mb-3 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        { }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORAGE_TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`relative bg-[#0a0a0a] border border-white/5 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2
                               hover:border-opacity-50 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}
              style={{ borderColor: idx === 0 ? undefined : '' }}
            >
              { }
              <div className={`w-16 h-[2px] mb-8 ${tier.borderColor.replace('border', 'bg')}`} />

              <h3 className="text-xl font-bold uppercase tracking-wider mb-2">
                {tier.title}
              </h3>

              { }
              <div className={`mb-6 ${tier.iconColor}`}>
                <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9-4.03-9-9-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9z" opacity="0.5" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg>
              </div>

              <div className="text-3xl font-black italic mb-2 text-white">
                {tier.capacity}
              </div>

              <div className="inline-block px-3 py-1 rounded bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                KAPASITET
              </div>

              <div className="mt-auto w-full pt-6 border-t border-white/5">
                <span className="block text-xs text-gray-500 uppercase tracking-widest mb-1">PRIS</span>

              </div>

              { }
              <div className={`absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 bg-gradient-to-b from-transparent to-${tier.iconColor.replace('text-', '')}`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}