"use client";

import Image from "next/image";


const ITEMS = [
  {
    id: 1,
    name: "Pepperkake",
    level: 2,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/50",
    image: "/images/items/1.webp",
  },
  {
    id: 2,
    name: "Panserplate",
    level: 5,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/50",
    image: "/images/items/2.webp",
  },
  {
    id: 3,
    name: "Førstehjelpsskrin",
    level: 17,
    color: "bg-purple-500",
    shadow: "shadow-purple-500/50",
    image: "/images/items/3.webp",
  },
  {
    id: 4,
    name: "Arbeidsmedaljong",
    level: 82,
    color: "bg-red-600",
    shadow: "shadow-red-600/50",
    image: "/images/items/4.webp",
  },
  {
    id: 5,
    name: "Stål Multiverktøy",
    level: 106,
    color: "bg-yellow-500",
    shadow: "shadow-yellow-500/50",
    image: "/images/items/5.webp",
  },
  {
    id: 6,
    name: "Medisinsk Sekk",
    level: 126,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/50",
    image: "/images/items/6.webp",
  },
];

export function NewItemsSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1600px]">

        <div className="flex flex-col xl:flex-row gap-16 items-start">

          { }
          <div className="xl:w-1/3 pt-10 sticky top-24">
            <h2 className="text-xl font-bold uppercase tracking-widest text-white/60 mb-2">
              VINTERPASS 2026
            </h2>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-8 leading-none">
              NYE <span className="text-[#3b82f6]">GJENSTANDER</span>
            </h1>

            { }
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-[#3b82f6]" />
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#3b82f6] blur-md opacity-50" />
                { }
                <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
                </svg>
              </div>
              <div className="h-[2px] w-16 bg-white/20" />
            </div>

            <p className="text-gray-400 font-medium leading-relaxed max-w-sm">
              Skill deg ut i spillet med nye unike gjenstander, fra sjeldne samleobjekter til praktisk utstyr for din karakter.
            </p>
          </div>

          { }
          <div className="xl:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2"
                >
                  { }
                  <div className={`w-8 h-1 ${item.color} rounded-full mb-8 shadow-[0_0_15px_currentColor]`} />

                  { }
                  <div className="relative w-full h-40 flex items-center justify-center mb-6">
                    { }
                    <div className={`absolute w-20 h-20 ${item.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  { }
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white uppercase mb-2 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                      { }
                      <svg className={`w-3 h-3 ${item.color.replace('bg-', 'text-')}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9-4.03-9-9-4.97 0-9 4.03-9 9 0 4.97 4.03 9 9 9z" /></svg>
                      <span>Nivå {item.level}</span>
                    </div>
                  </div>

                  { }
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}