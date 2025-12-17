"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey)
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function StartAndAuthSection() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "citizen",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!supabase) {
      setMessage({ text: "Systemfeil: Kunne ikke koble til database.", type: "error" });
      setLoading(false);
      return;
    }

    try {
      if (isLoginMode) {

        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        if (error) throw error;
        setMessage({ text: "Du er logget inn!", type: "success" });
      } else {

        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              username: formData.username,
              role: formData.role,
            },
          },
        });
        if (error) throw error;
        setMessage({ text: "Konto opprettet!", type: "success" });
      }
    } catch (error: any) {
      console.error(error);
      setMessage({ text: error.message || "Feil oppsto.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden">

      { }
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#E91E63]/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          { }
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-2">
                HVORDAN KOMMER JEG I GANG?
              </h2>
              <p className="text-gray-400">Bare to enkle trinn og du er klar til å gå!</p>
            </div>

            <div className="flex flex-col gap-4">

              { }
              <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-[#E91E63]/50 transition-all duration-300">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-gradient-to-br from-green-900 to-green-600 rounded-lg shadow-lg text-2xl font-black italic text-white border border-white/10">
                  V
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-white uppercase mb-1">Sjekk din GTA V-kopi</h4>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-0">Sørg for at du har en lisensiert versjon installert.</p>
                </div>

                <button className="px-6 py-3 bg-[#1a1a1a] hover:bg-[#E91E63] text-white text-xs font-bold uppercase tracking-wider rounded border border-white/10 transition-all duration-300 flex items-center gap-2 group-hover:shadow-[0_0_15px_#E91E63]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  SJEKK NÅ
                </button>
              </div>

              { }
              <div className="group relative bg-[#0f0f0f] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-[#3b82f6]/50 transition-all duration-300">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg shadow-lg text-white border border-white/10">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-white uppercase mb-1">Velg Vår Server</h4>
                  <p className="text-xs text-gray-500 mb-4 sm:mb-0">Koble direkte til SendingLight Norge.</p>
                </div>

                <Link href="/servers" className="px-6 py-3 bg-[#E91E63] hover:bg-[#c2185b] text-white text-xs font-bold uppercase tracking-wider rounded shadow-[0_4px_15px_rgba(233,30,99,0.3)] hover:shadow-[0_6px_20px_rgba(233,30,99,0.5)] transition-all duration-300 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  SPILL NÅ
                </Link>
              </div>

            </div>
          </div>

          { }
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#E91E63]/5 to-transparent rounded-2xl -m-1" />

            <form onSubmit={handleSubmit} className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">

              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black italic uppercase text-white">
                    {isLoginMode ? "LOGG INN" : "NY KONTO"}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {isLoginMode ? "Velkommen tilbake til Los Santos." : "Bli en del av samfunnet."}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLoginMode(!isLoginMode)}
                  className="text-[10px] font-bold uppercase tracking-widest text-[#E91E63] hover:text-white transition-colors border-b border-[#E91E63] pb-0.5"
                >
                  {isLoginMode ? "Opprett konto →" : "Har du konto? →"}
                </button>
              </div>

              {message && (
                <div className={`mb-6 p-4 rounded text-xs font-bold uppercase tracking-wide border ${message.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
                  {message.text}
                </div>
              )}

              <div className="space-y-5">

                {!isLoginMode && (
                  <div className="group animate-in fade-in slide-in-from-top-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Brukernavn</label>
                    <input
                      type="text" name="username" value={formData.username} onChange={handleChange} required={!isLoginMode}
                      className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#E91E63] transition-all"
                    />
                  </div>
                )}

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">E-post</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#E91E63] transition-all"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Passord</label>
                  <input
                    type="password" name="password" value={formData.password} onChange={handleChange} required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#E91E63] transition-all"
                  />
                </div>

                {!isLoginMode && (
                  <div className="group animate-in fade-in slide-in-from-top-2">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Ønsket Rolle</label>
                    <div className="relative">
                      <select
                        name="role" value={formData.role} onChange={handleChange}
                        className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:border-[#E91E63]"
                      >
                        <option value="citizen">Sivil (Citizen)</option>
                        <option value="police">Politi (LSPD)</option>
                        <option value="gang">Gjengmedlem (Gangster)</option>
                        <option value="medic">Lege (EMS)</option>
                      </select>
                    </div>
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full mt-4 bg-gradient-to-r from-[#E91E63] to-[#c2185b] text-white font-bold uppercase tracking-widest py-4 rounded-lg shadow-[0_4px_20px_rgba(233,30,99,0.3)] hover:shadow-[0_6px_25px_rgba(233,30,99,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  {loading ? "BEHANDLER..." : (isLoginMode ? "LOGG INN" : "REGISTRER DEG")}
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}