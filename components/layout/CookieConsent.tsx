"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null;

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const localConsent = localStorage.getItem("cookie_consent");

        if (!localConsent) {

            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);


    const saveConsentToDb = async (status: 'accepted' | 'declined') => {
        if (!supabase) return;


        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
            try {
                await supabase
                    .from('user_consents')
                    .upsert({
                        user_id: session.user.id,
                        status: status,
                        agreed_at: new Date().toISOString(),
                        user_agent: navigator.userAgent,
                    }, { onConflict: 'user_id' });
            } catch (error) {
                console.error("Failed to save consent audit:", error);
            }
        }
    };

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        saveConsentToDb('accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        saveConsentToDb('declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[200] p-4 md:p-6 flex justify-center pointer-events-none">
            <div className="pointer-events-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-6 animate-in slide-in-from-bottom-10 duration-500 ring-1 ring-white/5">

                { }
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                        <span className="text-2xl">🍪</span>
                        <h4 className="text-lg font-black italic uppercase text-white">
                            Ditt Personvern <span className="text-[#E91E63]">Teller</span>
                        </h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-2xl">
                        Vi lagrer ditt samtykke sikkert. Vi bruker informasjonskapsler for å huske innloggingen din, sikre kontoen din og analysere trafikk (Google Analytics).
                        Ved å godta bekrefter du at du har lest vår{" "}
                        <Link href="/legal/privacy" className="text-white underline hover:text-[#E91E63] transition-colors decoration-white/30 underline-offset-4">
                            Personvernerklæring
                        </Link>.
                    </p>
                </div>

                { }
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <button
                        onClick={handleDecline}
                        className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-xs font-bold uppercase text-gray-400 hover:text-white hover:bg-white/10 transition-all min-w-[120px]"
                    >
                        Kun Nødvendige
                    </button>

                    <button
                        onClick={handleAccept}
                        className="px-8 py-3 rounded-lg bg-[#E91E63] hover:bg-[#c2185b] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(233,30,99,0.3)] hover:shadow-[0_0_30px_rgba(233,30,99,0.5)] hover:-translate-y-1 transition-all min-w-[140px]"
                    >
                        Godta Alt
                    </button>
                </div>

            </div>
        </div>
    );
}