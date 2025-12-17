"use client";

import { useState } from "react";
import Image from "next/image";

const ITEMS = [

  {
    id: "police",
    label: "POLITI",
    letters: "SE",
    charImg: "/images/chars/police.webp",
    cardBg: "/images/chars/bg-police.webp",
    color: "#3b82f6",
  },
  {
    id: "worker",
    label: "ARBEIDER",
    letters: "ND",
    charImg: "/images/chars/worker.webp",
    cardBg: "/images/chars/bg-worker.webp",
    color: "#f97316",
  },
  {
    id: "crime",
    label: "KRIMINELL",
    letters: "ING",
    charImg: "/images/chars/criminal.webp",
    cardBg: "/images/chars/bg-criminal.webp",
    color: "#ef4444",
  },

  {
    id: "leader",
    label: "LEDER",
    letters: "LI",
    charImg: "/images/chars/leader.webp",
    cardBg: "/images/chars/bg-leader.webp",
    color: "#a855f7",
  },
  {
    id: "medic",
    label: "LEGE",
    letters: "G",
    charImg: "/images/chars/doctor.webp",
    cardBg: "/images/chars/bg-doctor.webp",
    color: "#2dd4bf",
  },
  {
    id: "army",
    label: "MILITÆR",
    letters: "HT",
    charImg: "/images/chars/military.webp",
    cardBg: "/images/chars/bg-military.webp",
    color: "#84cc16",
  },
];

export function HeroSection() {
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] font-sans select-none">

      { }
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
        <Image
          src="/images/bgh.webp"
          alt="Oslo Background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      { }
      <div className="lg:hidden relative z-10 w-full h-full flex flex-col pt-24 pb-8 px-4 gap-4">

        { }
        <a
          href="#choose-path"
          className="relative w-full flex-1 rounded-2xl overflow-hidden border border-white/10 group shadow-lg min-h-[200px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] to-[#880E4F]" />
          <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-pulse">
              <svg className="w-6 h-6 ml-1 fill-[#E91E63]" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="mt-4 text-center">
              <div className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-80 mb-1">SendingLight.net</div>
              <h1 className="text-4xl font-black italic uppercase leading-none tracking-tighter drop-shadow-md">START SPILLET</h1>
            </div>
          </div>
        </a>

        { }
        <div className="h-[55%] w-full">
          <div className="flex gap-3 overflow-x-auto h-full pb-2 snap-x snap-mandatory scrollbar-hide">
            {ITEMS.map((item) => (
              <div key={item.id} className="relative min-w-[85%] sm:min-w-[300px] h-full rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] snap-center">
                { }
                <Image src={item.cardBg} alt="bg" fill className="object-cover grayscale brightness-[0.3]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                { }
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[90%] flex items-end justify-center">
                  <Image src={item.charImg} alt={item.label} fill className="object-contain object-bottom drop-shadow-2xl" />
                </div>

                { }
                <div className="absolute bottom-6 left-0 w-full text-center z-20">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">{item.label}</h3>
                  <div className="h-1 w-16 mx-auto mt-2 rounded-full shadow-[0_0_10px_currentColor]" style={{ backgroundColor: item.color, color: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      { }
      <div className="hidden lg:flex relative z-10 w-full max-w-[1920px] h-[85vh] px-4 gap-2 items-end pb-10 mx-auto mt-20">

        { }
        {ITEMS.slice(0, 3).map((item) => (
          <HeroCard key={item.id} item={item} globalActive={isCenterHovered} />
        ))}

        { }
        <a
          href="#choose-path"
          className="relative flex-[1.2] h-full rounded-[16px] overflow-hidden cursor-pointer transition-all duration-700 hover:flex-[1.6] border border-white/10 z-30 group mx-2"
          onMouseEnter={() => setIsCenterHovered(true)}
          onMouseLeave={() => setIsCenterHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63] to-[#880E4F] transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.8)]">
              <svg className="w-10 h-10 ml-2 fill-[#E91E63]" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="mt-10 text-center relative">
              <div className="text-[11px] font-bold tracking-[0.5em] uppercase opacity-80 mb-2 text-white/80">SendingLight.net</div>
              <h1 className="text-7xl font-black italic uppercase leading-none tracking-tighter drop-shadow-lg">START<br />SPILLET</h1>
            </div>
          </div>
        </a>

        { }
        {ITEMS.slice(3, 6).map((item) => (
          <HeroCard key={item.id} item={item} globalActive={isCenterHovered} />
        ))}
      </div>

    </section>
  );
}


function HeroCard({ item, globalActive }: { item: typeof ITEMS[0], globalActive: boolean }) {
  const [isLocalHovered, setIsLocalHovered] = useState(false);
  const isActive = globalActive || isLocalHovered;

  return (
    <div
      onMouseEnter={() => setIsLocalHovered(true)}
      onMouseLeave={() => setIsLocalHovered(false)}
      className={`relative flex-1 h-full rounded-[16px] overflow-hidden border border-white/10 bg-[#0f0f0f] 
                   transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer
                   ${isActive ? 'flex-[2]' : 'flex-1'}`}
    >
      { }
      <div className="absolute inset-0 z-0">
        <Image
          src={item.cardBg}
          alt="background"
          fill
          className={`object-cover transition-all duration-1000 ease-out
                     ${isActive ? 'grayscale-0 brightness-[0.5] scale-110' : 'grayscale brightness-[0.2] scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-70'}`} />
      </div>

      { }
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center pointer-events-none overflow-hidden">
        <span className={`text-[20vh] lg:text-[28vh] font-[1000] italic leading-none transition-all duration-700 block
                     ${isActive ? 'text-white/10 translate-y-0 scale-100' : 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] translate-y-12 scale-110'}`}>
          {item.letters}
        </span>
      </div>

      { }
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[190%] h-[120%] z-20 flex items-end justify-center 
                       transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]
                       ${isActive ? 'translate-y-[30%] scale-105' : 'translate-y-[35%] scale-100'}`}>
        <div className="relative w-full h-full">
          <Image
            src={item.charImg}
            alt={item.label}
            fill
            priority
            className={`object-contain object-bottom transition-all duration-700 drop-shadow-2xl
                           ${isActive ? 'grayscale-0 brightness-110 contrast-110' : 'grayscale brightness-50 contrast-125'}`}
          />
        </div>
      </div>

      { }
      <div className="absolute bottom-0 left-0 w-full z-30 pb-12 flex flex-col items-center justify-end overflow-hidden">
        <div className={`flex flex-col items-center transition-all duration-500 ease-out delay-75
                        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0'}`}>
          <p className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-2">VELG EN ROLLE</p>
          <span className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {item.label}
          </span>
          <div className={`h-[4px] mt-4 rounded-full shadow-[0_0_20px_currentColor] transition-all duration-700 ${isActive ? 'w-24' : 'w-0'}`} style={{ backgroundColor: item.color, color: item.color }} />
        </div>
      </div>
    </div>
  );
}