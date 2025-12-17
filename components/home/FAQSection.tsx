"use client";

import Link from "next/link";

const FAQ_ITEMS = [
  {
    question: "Hva er SendingLight RP?",
    answer: "Det er et unikt prosjekt basert på GTA V, som lar tusenvis av spillere samhandle med hverandre i sanntid. Vi fokuserer på høy kvalitet og realistisk rollespill i Norge.",
  },
  {
    question: "Hva betyr RP (RolePlay)?",
    answer: "Dette er en spillmodus der spillere lager karakterer og scenarier, og deretter handler i henhold til rollene sine i spillet, akkurat som skuespillere i en film.",
  },
  {
    question: "Hvordan begynner jeg å spille?",
    answer: "Først trenger du en lisensiert versjon av GTA V. Deretter må du installere klienten (FiveM/RAGE), finne vår server i listen eller koble til via IP-adressen.",
  },
  {
    question: "Er det gratis å spille?",
    answer: "Ja, serveren er helt gratis å spille på. Vi har valgfrie donasjoner som hjelper oss med å dekke serverkostnadene, men det er ingen krav om betaling.",
  },
  {
    question: "Hva kan man gjøre på serveren?",
    answer: "I tillegg til et stort utvalg av jobber og interaksjoner med spillere, har vi jevnlige oppdateringer, sesongbaserte arrangementer, kriminelle aktiviteter og statlige organisasjoner.",
  },
  {
    question: "Hvor finner jeg serverreglene?",
    answer: "Du finner en seksjon med serverregler, klager på spillere og andre viktige emner på vårt prosjektforum eller Discord.",
    hasLink: true,
  },
];

export function FAQSection() {
  return (
    <section className="w-full py-24 bg-[#050505] text-white font-sans border-t border-white/5">
      <div className="container mx-auto px-4 max-w-[1400px]">

        { }
        <div className="mb-12">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">
            FAQ <span className="text-[#E91E63] text-lg not-italic font-bold tracking-normal ml-2">OFTE STILTE SPØRSMÅL</span>
          </h2>
        </div>

        { }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group bg-[#0f0f0f] border border-white/10 rounded-xl p-8 hover:border-[#E91E63]/50 hover:bg-[#111] transition-all duration-300 cursor-default"
            >
              <h4 className="text-lg font-bold text-white mb-4 group-hover:text-[#E91E63] transition-colors">
                {item.question}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.answer}

              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}