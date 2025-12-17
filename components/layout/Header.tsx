"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// --- БЕЗОПАСНАЯ ИНИЦИАЛИЗАЦИЯ ---
// Создаем клиента только если есть ключи. Иначе null.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

const NAV_LINKS = [
  { href: "/", label: "Hjem" },
  { href: "/servers", label: "Servere" },
  { href: "/inventory", label: "Inventar" },
  { href: "/lucky-event", label: "Lucky Event", isSpecial: true },
];

// Определяем цвета для ролей
const ROLE_COLORS: Record<string, string> = {
  citizen: "text-gray-400",
  police: "text-blue-400",
  gang: "text-red-500",
  medic: "text-green-400",
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Состояние пользователя
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  // 1. Эффект скролла
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Закрытие меню
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  // 3. Логика Авторизации
  useEffect(() => {
    if (!supabase) return; // Если ключей нет (билд), выходим

    // Получаем текущую сессию
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
    };

    getSession();

    // Слушаем изменения (вход/выход)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Получение профиля из таблицы profiles
  const fetchProfile = async (userId: string) => {
    if (!supabase) return;
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    if (data) setProfile(data);
  };

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b
        ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1600px] flex justify-between items-center">
          
          {/* === LOGO === */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="/images/logo.webp"
                alt="SendingLight Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(233,30,99,0.5)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black italic uppercase tracking-tighter leading-none text-white">
                SENDING<span className="text-[#E91E63] group-hover:text-white transition-colors">LIGHT</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-[#E91E63] transition-colors">
                Roleplay
              </span>
            </div>
          </Link>

          {/* === DESKTOP NAV === */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1
                    ${
                      link.isSpecial
                        ? "text-[#E91E63] drop-shadow-[0_0_8px_rgba(233,30,99,0.6)]"
                        : isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E91E63] transition-all duration-300
                    ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* === RIGHT ACTION === */}
          <div className="hidden lg:flex items-center gap-6">
            
            {user && profile ? (
              <div className="flex items-center gap-4 animate-in fade-in duration-500">
                  <div className="text-right">
                      <div className="text-sm font-black italic uppercase text-white leading-none">
                          {profile.username || "Unknown"}
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest ${ROLE_COLORS[profile.role] || "text-gray-500"}`}>
                          {profile.role}
                      </div>
                  </div>
                  
                  <div className="relative group cursor-pointer">
                      <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden group-hover:border-[#E91E63] transition-colors">
                          <Image 
                             src={profile.avatar_url || "/images/avatar-default.webp"} 
                             alt="Avatar" 
                             width={40} height={40} 
                             className="object-cover"
                          />
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="absolute top-12 right-0 bg-[#111] border border-white/10 text-white text-[10px] uppercase font-bold px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-900/50 hover:border-red-500 whitespace-nowrap"
                      >
                          Logg Ut
                      </button>
                  </div>
              </div>
            ) : (
              <>
                <div className="hidden xl:flex flex-col items-end text-right">
                  <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Online
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">play.sendinglight.net</span>
                </div>

                <Link
                  href="/servers"
                  className="group relative px-6 py-2.5 bg-white/5 hover:bg-[#E91E63] border border-white/10 hover:border-[#E91E63] rounded text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(233,30,99,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Spill Nå
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </Link>
              </>
            )}

          </div>

          {/* === MOBILE BURGER === */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none z-50"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* === MOBILE MENU === */}
      <div
        className={`fixed inset-0 z-[40] bg-[#050505] transition-all duration-500 flex flex-col items-center justify-center gap-8
        ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
      `}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E91E63_0%,transparent_70%)] opacity-10 pointer-events-none" />

        {NAV_LINKS.map((link, idx) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-3xl font-black italic uppercase tracking-tighter text-white transition-all duration-300 hover:text-[#E91E63]
            ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            `}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/servers"
          className={`mt-8 px-10 py-4 bg-[#E91E63] text-white font-bold uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(233,30,99,0.4)]
          ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
          style={{ transitionDelay: "400ms" }}
        >
          Koble til Server
        </Link>
      </div>
    </>
  );
}