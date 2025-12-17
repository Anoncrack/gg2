"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";


const SLIDES = [
  {
    id: 1,
    title: "STYR PÅ DIN MÅTE",
    desc: "På denne dynamiske serveren er valget ditt: led en beryktet gjeng eller bli med i styrken for å bli en rettferdighetens beskytter.",
    image: "/images/carousel/slide-1.webp",
  },
  {
    id: 2,
    title: "BILER OG STIL",
    desc: "Opplev spenningen med endeløs tilpasning. Velg fra en variert bilpark og skap din unike stil med et bredt utvalg av klær.",
    image: "/images/carousel/slide-2.webp",
  },
  {
    id: 3,
    title: "FORRETNINGER OG JOBB",
    desc: "Start din egen lastebilbedrift eller dykk ned i forretningsverdenen for å generere passiv inntekt. Bli en tycoon.",
    image: "/images/carousel/slide-3.webp",
  },
];



const GALLERY_IMAGES = Array.from({ length: 20 }, (_, i) => `/images/gallery/${i + 1}.webp`);

export function FeaturesGallerySection() {

  const [currentSlide, setCurrentSlide] = useState(0);


  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);


  const thumbnailsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);


  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLightboxOpen]);


  const nextSlide = () => setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));


  const openGallery = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeGallery = () => setLightboxOpen(false);

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
    scrollThumbnailIntoView(photoIndex + 1);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
    scrollThumbnailIntoView(photoIndex - 1);
  };

  const scrollThumbnailIntoView = (index: number) => {


  };

  return (
    <>
      <section className="w-full bg-[#050505] py-20 text-white overflow-hidden font-sans">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-auto xl:h-[600px]">

            { }
            <div className="relative w-full h-[500px] xl:h-full rounded-2xl overflow-hidden group border border-white/5 bg-[#0a0a0a]">
              {SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                           ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <Image src={slide.image} alt={slide.title} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 drop-shadow-lg text-white">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl drop-shadow-md">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              ))}

              { }
              <div className="absolute bottom-12 right-12 z-20 flex gap-4 pointer-events-none">
                <button onClick={prevSlide} className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-[#E91E63] hover:border-[#E91E63] transition-all"><span className="text-xl">←</span></button>
                <button onClick={nextSlide} className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center hover:bg-[#E91E63] hover:border-[#E91E63] transition-all"><span className="text-xl">→</span></button>
              </div>
            </div>

            { }
            <div className="flex flex-col gap-4 h-full">

              { }
              <div
                onClick={() => openGallery(0)}
                className="relative flex-[2] rounded-2xl overflow-hidden border border-white/5 group cursor-pointer bg-[#0a0a0a]"
              >
                <Image
                  src={GALLERY_IMAGES[0]}
                  alt="Main Gallery"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-60"
                />

                { }
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-20 h-20 bg-[#E91E63] rounded-full flex items-center justify-center shadow-[0_0_30px_#E91E63] mb-4 animate-pulse">
                    { }
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-black uppercase tracking-widest italic">ÅPNE GALLERI</span>
                </div>

                { }
                <div className="absolute bottom-8 left-8 transition-opacity duration-300 group-hover:opacity-0">
                  <h4 className="text-2xl font-bold uppercase drop-shadow-md">
                    BILDER FRA <span className="text-[#E91E63]">SERVEREN</span>
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">Klikk for å se hele samlingen</p>
                </div>
              </div>

              { }
              <div className="flex-1 grid grid-cols-3 gap-4">
                { }
                {[1, 2, 3, 4, 5].map((idx) => (
                  <div
                    key={idx}
                    onClick={() => openGallery(idx)}
                    className="relative rounded-xl overflow-hidden border border-white/5 bg-[#0f0f0f] group cursor-pointer"
                  >
                    <Image
                      src={GALLERY_IMAGES[idx]}
                      alt={`Gallery ${idx}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}

                { }
                <div
                  onClick={() => openGallery(6)}
                  className="relative rounded-xl overflow-hidden bg-[#111] border border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:bg-[#E91E63] hover:border-[#E91E63] transition-all duration-300"
                >
                  <span className="text-lg font-bold">+{GALLERY_IMAGES.length - 6}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest">BILDER</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      { }
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col animate-in fade-in duration-300">

          { }
          <div className="absolute top-0 w-full p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
            <div className="text-sm font-bold text-gray-400 tracking-widest">
              BILDE {photoIndex + 1} / {GALLERY_IMAGES.length}
            </div>
            <button
              onClick={closeGallery}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
          </div>

          { }
          <div className="flex-1 relative flex items-center justify-center p-4 md:p-10" onClick={closeGallery}>
            <div className="relative w-full h-full max-w-7xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={GALLERY_IMAGES[photoIndex]}
                alt="Gallery Fullscreen"
                fill
                className="object-contain"
                quality={100}
              />
            </div>

            { }
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#E91E63] transition-all hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-[#E91E63] transition-all hover:scale-110"
            >
              →
            </button>
          </div>

          { }
          <div className="h-24 md:h-32 bg-[#0a0a0a] border-t border-white/10 w-full z-20 flex items-center px-4">
            <div
              ref={thumbnailsRef}
              className="flex gap-3 overflow-x-auto w-full max-w-[1920px] mx-auto pb-2 scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`relative min-w-[80px] h-[60px] md:min-w-[120px] md:h-[80px] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 border-2
                                       ${photoIndex === idx
                      ? "border-[#E91E63] opacity-100 scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"}`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </>
  );
}