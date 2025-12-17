"use client";

import { useState } from "react";
import Image from "next/image";
import type { Server } from "@/app/servers/page";

export function ServerCard({ server }: { server: Server }) {
  const [copied, setCopied] = useState(false);
  const [showIp, setShowIp] = useState(false); 

 
  const percentage = Math.min((server.current_players / server.max_players) * 100, 100);
  const isFull = percentage > 90;
  const isOffline = !server.is_online;


  const fullAddress = `${server.ip}:${server.port}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const handleConnectClick = (e: React.MouseEvent) => {
    if (isOffline) {
        e.preventDefault();
        return;
    }
    
   
    if (!showIp) {
        e.preventDefault(); // Отменяем мгновенный переход, чтобы показать IP
        setShowIp(true);
        navigator.clipboard.writeText(fullAddress);
        
        // Скрываем IP обратно через 5 секунд
        setTimeout(() => setShowIp(false), 5000);
    }
  };

  return (
    <div className={`group relative h-[280px] md:h-[220px] w-full rounded-2xl overflow-hidden border transition-all duration-500
                    ${isOffline ? 'border-red-900/30 opacity-80 grayscale' : 'border-white/10 hover:border-[#E91E63]/50 hover:shadow-[0_10px_40px_rgba(233,30,99,0.15)]'}`}>
        
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
            <Image 
                src={server.image} 
                alt={server.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col md:flex-row justify-between md:items-center gap-6">
            
         
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border 
                        ${isOffline ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-green-500/10 border-green-500 text-green-500'}`}>
                        {isOffline ? "Offline" : "Online"}
                    </span>
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                        {server.region}
                    </span>
                </div>

                <h3 className="text-3xl font-black italic uppercase text-white mb-4 group-hover:text-[#E91E63] transition-colors">
                    {server.name}
                </h3>

                <div className="flex gap-2">
                    {server.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-gray-400 font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

       
            {!isOffline && (
                <div className="w-full md:w-[250px]">
                    <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-gray-400 uppercase tracking-widest">Spillere</span>
                        <span className="text-white">{server.current_players} <span className="text-gray-600">/ {server.max_players}</span></span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden
                                      ${isFull ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-[#3b82f6] to-[#E91E63]'}`}
                            style={{ width: `${percentage}%` }}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_2s_infinite]" />
                        </div>
                    </div>
                </div>
            )}

          
            <div className="flex items-center gap-3 mt-2 md:mt-0">
             
                <button 
                    onClick={handleCopy} 
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all group/btn"
                    title="Kopier IP"
                >
                    {copied ? <span className="text-green-500 text-lg">✓</span> : <svg className="w-5 h-5 text-gray-400 group-hover/btn:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>}
                </button>

             
                <a 
                    href={isOffline ? '#' : `fivem://connect/${fullAddress}`}
                    onClick={handleConnectClick}
                    className={`flex-1 md:flex-none px-8 py-3 rounded-lg font-black italic uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg min-w-[180px]
                               ${isOffline 
                                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                    : showIp 
                                        ? 'bg-[#111] border border-[#E91E63] text-[#E91E63]' // Стиль при показе IP
                                        : 'bg-[#E91E63] hover:bg-[#c2185b] text-white hover:shadow-[0_0_30px_rgba(233,30,99,0.4)] hover:-translate-y-1' // Обычный стиль
                                }`}
                >
                    {isOffline ? (
                        "VEDLIKEHOLD"
                    ) : showIp ? (
                        
                        <div className="flex items-center gap-2 animate-in fade-in zoom-in duration-200">
                             <span className="font-mono text-sm not-italic select-all">{fullAddress}</span>
                             <span className="text-[10px] bg-[#E91E63] text-white px-1 rounded ml-1">KOPIERT</span>
                        </div>
                    ) : (
                        
                        <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            KOBLE TIL
                        </>
                    )}
                </a>
            </div>

        </div>
    </div>
  );
}