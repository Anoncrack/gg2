"use client";

import Image from "next/image";


const SMALL_ITEMS = [
  {
    id: 1,
    title: "Våpen og Ammunisjon",
    image: "/images/gallery/4.webp",
  },
  {
    id: 2,
    title: "Mat og Drikke",
    image: "/images/gallery/7.webp",
  },
  {
    id: 3,
    title: "Ressurser og Crafting",
    image: "/images/gallery/12.webp",
  },
  {
    id: 4,
    title: "Dokumenter og Nøkler",
    image: "/images/gallery/15.webp",
  },
];


const BIG_ITEM = {
  id: 5,
  title: "Kjøretøy og Lagring",
  desc: "Administrer bagasjerommet på bilen din med full visuell oversikt.",
  image: "/images/gallery/2.webp",
};

export function InventoryGridSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans border-t border-white/5">
      <div className="container mx-auto px-4 max-w-[1400px]">

        { }
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-4">
            INVENTAR KATEGORIER
          </h2>
          { }
          <div className="flex items-center gap-4 opacity-80">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#3b82f6]" />
            <div className="w-4 h-4 rotate-45 border-2 border-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#3b82f6]" />
          </div>
        </div>

        { }
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

          { }
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {SMALL_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] cursor-pointer hover:border-[#E91E63] transition-all duration-300"
              >
                { }
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                { }
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                { }
                <div className="absolute bottom-4 left-6 z-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          { }
          <div className="lg:col-span-1 relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] cursor-pointer group hover:border-blue-500 transition-all duration-300 min-h-[300px] lg:min-h-0">
            { }
            <Image
              src={BIG_ITEM.image}
              alt={BIG_ITEM.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            { }
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

            { }
            <div className="absolute bottom-8 left-8 z-10 max-w-xs">
              <div className="inline-block px-3 py-1 bg-blue-600/20 border border-blue-500 rounded text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3 backdrop-blur-md">
                Premium Feature
              </div>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white mb-2">
                {BIG_ITEM.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                {BIG_ITEM.desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}