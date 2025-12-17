"use client";

import { useState } from "react";
import Image from "next/image";
import vehicleData from "@/data/vih.json";

export function VehiclesSection() {

    const [gridStartIndex, setGridStartIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const ITEMS_PER_PAGE = 6;


    const visibleVehicles = vehicleData.slice(gridStartIndex, gridStartIndex + ITEMS_PER_PAGE);
    const totalPages = Math.ceil(vehicleData.length / ITEMS_PER_PAGE);
    const currentPage = Math.floor(gridStartIndex / ITEMS_PER_PAGE);

    const nextGridPage = () => {
        setGridStartIndex(prev => (prev + ITEMS_PER_PAGE < vehicleData.length ? prev + ITEMS_PER_PAGE : 0));
    };

    const prevGridPage = () => {
        setGridStartIndex(prev => (prev - ITEMS_PER_PAGE >= 0 ? prev - ITEMS_PER_PAGE : (totalPages - 1) * ITEMS_PER_PAGE));
    };

    const openModal = (idx: number) => {
        setModalIndex(gridStartIndex + idx);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalIndex(null);
        document.body.style.overflow = "auto";
    };

    const nextModalCar = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (modalIndex !== null) setModalIndex(prev => (prev === vehicleData.length - 1 ? 0 : (prev as number) + 1));
    };

    const prevModalCar = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (modalIndex !== null) setModalIndex(prev => (prev === 0 ? vehicleData.length - 1 : (prev as number) - 1));
    };

    const activeCar = modalIndex !== null ? vehicleData[modalIndex] : null;

    return (
        <section className="relative w-full py-24 text-white font-sans overflow-hidden">

            { }
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/vehicles-bg.webp"
                    alt="Garage Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                { }
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 max-w-[1600px]">

                <div className="flex flex-col xl:flex-row gap-12">

                    { }
                    <div className="xl:w-1/3 flex flex-col justify-center">
                        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-2 text-white/80">NY KOLLEKSJON</h2>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-8 leading-none drop-shadow-xl">
                            NY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#E91E63]">TRANSPORT</span>
                        </h1>

                        { }
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-24 bg-gradient-to-r from-[#3b82f6] to-[#E91E63]" />
                            <div className="w-3 h-3 rotate-45 border border-white bg-[#050505]" />
                            <div className="h-[2px] w-24 bg-white/10" />
                        </div>

                        <p className="text-gray-300 font-medium leading-relaxed max-w-md mb-12 drop-shadow-md">
                            Et seks-seters helikopter og dusinvis av andre biler for deltakere i Vinterpasset 2026.
                        </p>

                        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 group cursor-pointer">
                            <span className="group-hover:text-white transition-colors">Klikk for å se</span>
                            <svg className="w-12 h-12 text-[#E91E63] -mt-4 rotate-12 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </div>

                    { }
                    <div className="xl:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px]">
                            {visibleVehicles.map((car, idx) => (
                                <div
                                    key={car.id}
                                    onClick={() => openModal(idx)}
                                    className="group relative bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 rounded-xl p-6 cursor-pointer hover:border-[#E91E63] hover:bg-[#0a0a0a]/90 transition-all duration-500 flex flex-col justify-between h-[240px]"
                                >
                                    { }
                                    <div className="w-8 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-4 shadow-[0_0_15px_orange]" />

                                    { }
                                    <div className="relative w-full h-36 mb-2 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            fill
                                            className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>

                                    { }
                                    <div className="mt-auto relative z-10">
                                        <h4 className="text-sm font-bold text-white uppercase truncate group-hover:text-[#E91E63] transition-colors">{car.name}</h4>
                                        <div className="flex justify-between items-center mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                            <span>Nivå {car.level}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                            <span>{car.max_speed}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        { }
                        <div className="flex items-center justify-center gap-8 mt-12">
                            <button onClick={prevGridPage} className="w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur hover:bg-[#E91E63] hover:border-[#E91E63] transition-all flex items-center justify-center">←</button>
                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setGridStartIndex(i * ITEMS_PER_PAGE)}
                                        className={`h-1 rounded-full transition-all duration-300 ${i === currentPage ? "w-8 bg-[#E91E63]" : "w-2 bg-white/20 hover:bg-white/50"}`}
                                    />
                                ))}
                            </div>
                            <button onClick={nextGridPage} className="w-12 h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur hover:bg-[#E91E63] hover:border-[#E91E63] transition-all flex items-center justify-center">→</button>
                        </div>
                    </div>
                </div>
            </div>

            { }
            {modalIndex !== null && activeCar && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-7xl h-screen md:h-auto flex flex-col md:flex-row items-center justify-center p-4 md:p-10" onClick={(e) => e.stopPropagation()}>

                        <button onClick={closeModal} className="absolute top-6 right-6 z-50 text-white/50 hover:text-[#E91E63] transition-colors"><svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>

                        { }
                        <button onClick={prevModalCar} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full border border-white/10 bg-black/50 hover:bg-[#E91E63] hover:border-[#E91E63] items-center justify-center transition-all hover:scale-110">←</button>
                        <button onClick={nextModalCar} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-40 w-16 h-16 rounded-full border border-white/10 bg-black/50 hover:bg-[#E91E63] hover:border-[#E91E63] items-center justify-center transition-all hover:scale-110">→</button>

                        { }
                        <div className="relative w-full md:w-3/5 h-[350px] md:h-[600px] flex items-center justify-center perspective-[1200px] group">
                            { }
                            <div className="absolute top-[25%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-[#3b82f6] via-[#1d4ed8] to-[#050505] opacity-80 transform rotate-x-[60deg] rotate-z-[45deg] rounded-[40px] shadow-[0_0_100px_rgba(59,130,246,0.4)] animate-pulse" />
                            <div className="absolute top-[23%] w-[280px] md:w-[480px] h-[280px] md:h-[480px] border-[2px] border-white/30 transform rotate-x-[60deg] rotate-z-[45deg] rounded-[30px]" />

                            { }
                            <div className="relative w-full h-full flex items-center justify-center z-10 transition-all duration-500 animate-in zoom-in slide-in-from-bottom-10 hover:scale-105">
                                <Image src={activeCar.image} alt={activeCar.name} width={900} height={600} className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]" />
                            </div>
                        </div>

                        { }
                        <div className="w-full md:w-2/5 md:pl-12 text-white">
                            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E91E63] mb-2">SPESIFIKASJONER</div>
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none mb-8">{activeCar.name}</h2>

                            <div className="space-y-5 font-mono text-sm uppercase tracking-wide">
                                {[
                                    { label: "Bagasjekapasitet", value: activeCar.trunk_capacity },
                                    { label: "Drivstofftype", value: activeCar.fuel_type },
                                    { label: "Tankvolum", value: activeCar.fuel_reserve },
                                    { label: "Maks Hastighet", value: activeCar.max_speed, highlight: true }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-end group">
                                        <span className="text-gray-500 group-hover:text-white transition-colors">{stat.label}:</span>
                                        <div className="flex-1 mx-4 border-b border-dashed border-gray-800 mb-1 group-hover:border-gray-600 transition-colors" />
                                        <span className={`font-bold ${stat.highlight ? "text-[#E91E63] text-lg" : "text-white"}`}>{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}