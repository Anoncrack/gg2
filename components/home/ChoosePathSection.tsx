"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function ChoosePathSection() {

  const [activeSide, setActiveSide] = useState<"left" | "right" | null>(null);

  return (
    <section id="choose-path" className="relative w-full py-32 md:py-48 overflow-hidden bg-[#020202] text-white font-sans">

      { }

      { }
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out z-0
                   ${activeSide === "right" ? "opacity-30 blur-sm" : "opacity-100"}`}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/art-gangster.webp"
            alt="Gangster"
            fill
            className={`object-cover object-left-top transition-all duration-700
                           ${activeSide === "left"
                ? "grayscale-0 brightness-110 scale-105"
                : "grayscale brightness-[0.3] scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020202]/50 to-[#020202]" />
          <div className={`absolute inset-0 bg-gradient-to-r from-pink-600/20 to-transparent transition-opacity duration-700 ${activeSide === "left" ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>

      { }
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-all duration-700 ease-in-out z-0
                   ${activeSide === "left" ? "opacity-30 blur-sm" : "opacity-100"}`}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/art-cop.webp"
            alt="Lawman"
            fill
            className={`object-cover object-right-top transition-all duration-700
                           ${activeSide === "right"
                ? "grayscale-0 brightness-110 scale-105"
                : "grayscale brightness-[0.3] scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#020202]/50 to-[#020202]" />
          <div className={`absolute inset-0 bg-gradient-to-l from-blue-600/20 to-transparent transition-opacity duration-700 ${activeSide === "right" ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>


      { }
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl drop-shadow-xl">
          <span className="text-[#E91E63] font-bold">SendingLight RP</span> er en unik mulighet
          til å fordype deg i et virtuelt univers og spille den valgte rollen,
          etter regler som ligner på det virkelige liv. Bli politiker, gangster,
          forretningsmann, taxisjåfør, fabrikkarbeider, politimann eller hvilken som helst annen rolle.
          Vi har ingen grenser, du står fritt til å velge din vei og skape din egen historie i denne virtuelle verdenen!
        </p>

        <div className="flex flex-col items-center mb-10 group">
          <h3 className="text-2xl font-bold text-white uppercase tracking-widest mb-2 transition-colors duration-300 group-hover:text-white">
            VIL DU PRØVE?
          </h3>
          <div className="h-1 w-16 bg-[#E91E63] rounded-full transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_10px_#E91E63]" />
        </div>

        { }
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">

          { }
          <Link
            href="/inventory"
            onMouseEnter={() => setActiveSide("left")}
            onMouseLeave={() => setActiveSide(null)}
            className={`group relative flex items-center justify-between px-8 py-5 min-w-[300px] border rounded-md transition-all duration-300 overflow-hidden
                           ${activeSide === "left"
                ? "bg-[#E91E63] border-[#E91E63] shadow-[0_0_30px_rgba(233,30,99,0.4)] translate-y-[-2px]"
                : "bg-transparent border-white/20 hover:border-white/50"}`}
          >
            <span className={`text-lg transition-transform duration-300 ${activeSide === "left" ? "-translate-x-1" : ""}`}>
              ‹
            </span>

            <span className="font-bold uppercase tracking-wider text-sm mx-4">
              Veien til en Gangster
            </span>

            <span className="w-2"></span>
          </Link>

          { }
          <Link
            href="/inventory"
            onMouseEnter={() => setActiveSide("right")}
            onMouseLeave={() => setActiveSide(null)}
            className={`group relative flex items-center justify-between px-8 py-5 min-w-[300px] border rounded-md transition-all duration-300 overflow-hidden
                           ${activeSide === "right"
                ? "bg-slate-800 border-slate-600 shadow-[0_0_30px_rgba(71,85,105,0.4)] translate-y-[-2px]"
                : "bg-transparent border-white/20 hover:border-white/50"}`}
          >
            <span className="w-2"></span>

            <span className="font-bold uppercase tracking-wider text-sm mx-4">
              Lovens Vei
            </span>

            <span className={`text-lg transition-transform duration-300 ${activeSide === "right" ? "translate-x-1" : ""}`}>
              ›
            </span>
          </Link>

        </div>



      </div>
    </section>
  );
}