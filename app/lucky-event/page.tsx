"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// --- КОМПОНЕНТ ТАЙМЕРА ---
function CountdownTimer() {
  const [time, setTime] = useState({ dager: 12, timer: 4, min: 32, sek: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { dager, timer, min, sek } = prev;
        sek--;
        if (sek < 0) { sek = 59; min--; }
        if (min < 0) { min = 59; timer--; }
        if (timer < 0) { timer = 23; dager--; }
        return { dager, timer, min, sek };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center perspective-500">
      {Object.entries(time).map(([label, value]) => (
        <div key={label} className="group flex flex-col items-center bg-black/40 backdrop-blur-md border border-white/10 p-4 min-w-[90px] md:min-w-[120px] rounded-xl transform hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#E91E63]/50">
          <span className="text-3xl md:text-5xl font-black italic text-white tabular-nums font-mono drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mt-2 group-hover:text-[#E91E63] transition-colors">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LuckyEventPage() {
  // Эффект параллакса
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width) - 0.5;
    const y = (clientY / height) - 0.5;
    setMousePos({ x, y });
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#E91E63] selection:text-white">
      
      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .bg-grid-pattern {
            background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
        }
      `}</style>

      {/* TEXTURE OVERLAY */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>

      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
         {/* DYNAMIC BG */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/casino-bg.webp')] bg-cover bg-center opacity-50 scale-110 transition-transform duration-100 ease-out" 
                 style={{ transform: `scale(1.1) translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
         </div>

         <div className="relative z-10 text-center px-4 max-w-6xl flex flex-col items-center w-full">
            
            {/* Compliance Badge */}
            <div className="mb-6 px-4 py-1.5 border border-[#E91E63]/30 bg-[#E91E63]/10 backdrop-blur rounded-full inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E91E63] animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    Virtual Roleplay Event • Ingen Ekte Penger
                </span>
            </div>

            {/* TITLE */}
            <h1 className="relative text-7xl md:text-[9rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-8 select-none drop-shadow-2xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
                      style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)` }}>
                    CASINO
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-pink-500 to-purple-500 pb-4"
                      style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}>
                    SPINS
                </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-light drop-shadow-lg">
                Opplev den ultimate luksus-atmosfæren i Vinewood. Spinn hjulet daglig for sjansen til å vinne 
                <span className="text-white font-bold border-b-2 border-[#E91E63] mx-1">legendariske kjøretøy</span> 
                og eksklusive gjenstander til din karakter.
            </p>

            <div className="mb-16 w-full max-w-3xl">
                <CountdownTimer />
            </div>
         </div>
         
         <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
      </section>

      {/* 2. SHOWCASE: DODGE VIPER */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-30" />
         
         {/* Blue Glow Spot */}
         <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

         <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
            <div className="flex flex-col items-center mb-16 text-center">
                <h3 className="text-[#3b82f6] font-bold uppercase tracking-[0.5em] text-xs mb-4">Virtuell Hovedpremie</h3>
                <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                    DODGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-cyan-400">VIPER</span>
                </h2>
                <div className="mt-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    *Virtuelt kjøretøy til bruk på SendingLight RP
                </div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Stats */}
                <div className="lg:col-span-3 space-y-10 order-2 lg:order-1">
                    {[
                        { label: "Ytelse", val: "A+", unit: "TIER", desc: "Racing Setup" },
                        { label: "Sjeldenhet", val: "0.1", unit: "%", desc: "Drop Rate" },
                    ].map((stat, i) => (
                        <div key={i} className="border-l-2 border-white/10 pl-6 hover:border-[#3b82f6] transition-colors duration-300 group">
                            <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1 group-hover:text-[#3b82f6] transition-colors">{stat.label}</div>
                            <div className="text-5xl font-black italic text-white mb-1">
                                {stat.val}<span className="text-lg text-gray-600 ml-1 not-italic">{stat.unit}</span>
                            </div>
                            <div className="text-xs text-gray-600 uppercase tracking-wider">{stat.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Car Image - CENTER */}
                <div className="lg:col-span-6 order-1 lg:order-2 relative group perspective-1000">
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-blue-500/20 blur-2xl rounded-[100%] transition-all duration-500 group-hover:bg-[#E91E63]/20" />
                    
                    <Image 
                        src="/images/event-car.webp" 
                        alt="Dodge Viper" 
                        width={1200} 
                        height={800} 
                        className="relative z-10 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Chance Badge */}
                    <div className="absolute top-0 right-10 z-30 bg-black/60 backdrop-blur border border-[#E91E63] px-4 py-2 rounded transform rotate-6 shadow-[0_0_20px_#E91E63]">
                        <div className="text-[#E91E63] font-black text-xl leading-none">EXOTIC</div>
                        <div className="text-white text-[9px] font-bold uppercase tracking-wider">Class</div>
                    </div>
                </div>

                 {/* Right Info */}
                <div className="lg:col-span-3 order-3 space-y-6 text-right lg:text-left">
                    <div className="bg-[#111] rounded-xl p-6 border border-white/5 hover:border-[#3b82f6] transition-colors group">
                        <h4 className="text-xl font-bold uppercase text-white mb-2 group-hover:text-[#3b82f6]">Neon Night Kit</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Bilen kommer ferdig styla med "Neon Night" bodykit som gir deg respekt på gata.
                        </p>
                    </div>
                    <div className="bg-[#111] rounded-xl p-6 border border-white/5 hover:border-[#E91E63] transition-colors group">
                        <h4 className="text-xl font-bold uppercase text-white mb-2 group-hover:text-[#E91E63]">Vis Din Status</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Dette er ikke bare en bil, det er et symbol på makt i Los Santos.
                        </p>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* 3. LOOT TABLE (NO REAL MONEY) */}
      <section className="py-32 bg-[#080808] border-t border-white/5 relative">
        <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
                    MULIGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-orange-500">GEVINSTER</span>
                </h2>
                <p className="text-gray-400 text-lg">Hva kan du vinne på hjulet?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Spill-Chips", subt: "Til bruk i kasinoet", img: "/images/event-loot.webp", color: "border-green-500/50", shadow: "shadow-green-500/20" },
                    { title: "Sjeldne Skins", subt: "Våpen & Klær", img: "/images/items/4.webp", color: "border-blue-500/50", shadow: "shadow-blue-500/20" },
                    { title: "Platinum VIP", subt: "7 Dager Status", img: "/images/items/2.webp", color: "border-yellow-500/50", shadow: "shadow-yellow-500/20" }
                ].map((item, i) => (
                    <div key={i} className={`group relative h-[350px] bg-[#111] border ${item.color} rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${item.shadow}`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
                        <div className="absolute inset-0 p-8 flex items-center justify-center z-0">
                            <Image src={item.img} alt={item.title} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="absolute bottom-0 w-full p-8 z-20 text-center">
                            <h3 className="text-2xl font-black italic uppercase text-white mb-1">{item.title}</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-wider text-xs">{item.subt}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-12">
                *Alle premier er virtuelle gjenstander i spillet og har ingen verdi i den virkelige verden.
            </p>
        </div>
      </section>

      {/* 4. LOCATION & HOW TO */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
         <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                {/* Map */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <Image 
                        src="/images/event-map.webp" 
                        alt="Location Map" 
                        width={800} 
                        height={600}
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute bottom-8 left-8 z-20">
                         <h4 className="text-2xl font-black italic uppercase text-white">VINEWOOD CASINO</h4>
                         <div className="flex items-center gap-2 mt-2">
                             <div className="w-2 h-2 bg-[#E91E63] rounded-full animate-pulse" />
                             <span className="text-xs font-bold uppercase text-[#E91E63] tracking-widest">Safe Zone</span>
                         </div>
                    </div>
                </div>

                {/* Steps */}
                <div>
                    <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-12">
                        SLIK <span className="text-[#E91E63]">DELTAR DU</span>
                    </h2>

                    <div className="space-y-12">
                        {[
                            { step: "01", title: "Logg Inn", text: "Start FiveM og koble til SendingLight Norge." },
                            { step: "02", title: "Finn Kasinoet", text: "Naviger til Diamond Casino-bygningen i Vinewood." },
                            { step: "03", title: "Spinn Hjulet", text: "Gå til lykkehjulet i lobbyen og trykk 'E' for ditt daglige spinn." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="text-6xl font-black italic text-[#222] group-hover:text-[#E91E63] transition-colors duration-300 select-none">
                                    {item.step}
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-2xl font-bold uppercase text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm max-w-sm">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 5. BIG CTA SECTION */}
      <section className="relative py-40 bg-[#E91E63] overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="relative z-10 px-4">
              <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-8 drop-shadow-lg">
                  PRØV LYKKEN I DAG
              </h2>
              <p className="text-white/80 text-xl font-bold mb-12 max-w-2xl mx-auto">
                  Bli med i Norges største RP-samfunn. Opprett din karakter og start din reise nå.
              </p>
              
              <Link 
                href="/servers" 
                className="inline-block px-16 py-6 bg-white text-black text-xl font-black italic uppercase tracking-widest rounded-full shadow-[0_0_50px_rgba(255,255,255,0.5)] hover:scale-105 hover:shadow-[0_0_80px_rgba(255,255,255,0.7)] transition-all duration-300"
              >
                  KOBLE TIL SERVER
              </Link>
          </div>
      </section>

    </main>
  );
}