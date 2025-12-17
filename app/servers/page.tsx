import Image from "next/image";
import Link from "next/link";
import { createClient } from '@supabase/supabase-js';
import { ServerCard } from "@/components/servers/ServerCard";


export const dynamic = 'force-dynamic';


const STATIC_SERVERS = [
  {
    id: 1,
    name: "OSLO #1",
    region: "NO",
    ip: "play.sendinglight.net",
    port: 22005,
    image: "/images/gallery/1.webp",
    max_players: 1000,
    tags: ["Roleplay", "Voice", "Economy"],
  },
  {
    id: 2,
    name: "BERGEN #2",
    region: "NO",
    ip: "s2.sendinglight.net",
    port: 22006,
    image: "/images/gallery/3.webp",
    max_players: 1000,
    tags: ["Medium RP", "Gangs"],
  },
  {
    id: 3,
    name: "TRONDHEIM #3",
    region: "NO",
    ip: "s3.sendinglight.net",
    port: 22007,
    image: "/images/gallery/5.webp",
    max_players: 1000,
    tags: ["No Whitelist", "Action"],
  },
  {
    id: 4,
    name: "DEV SERVER",
    region: "EU",
    ip: "dev.sendinglight.net",
    port: 22008,
    image: "/images/gallery/2.webp",
    max_players: 100,
    tags: ["Maintenance", "Test"],
  },
];

export type Server = typeof STATIC_SERVERS[0] & {
  current_players: number;
  is_online: boolean;
};



const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey);
};

async function getServers(): Promise<Server[]> {
  const supabase = getSupabaseClient();


  if (!supabase) {
    console.warn("⚠️ Supabase keys missing. Serving static data.");
    return STATIC_SERVERS.map(s => ({ ...s, current_players: 0, is_online: false }));
  }

  try {

    let { data: dbStats, error } = await supabase
      .from('servers')
      .select('id, current_players, last_updated, is_online');

    if (error) {
      console.error("Supabase Error:", error.message);
      throw error;
    }

    if (!dbStats) dbStats = [];

    const now = new Date();
    const UPDATE_INTERVAL_MINUTES = 10;


    const result = await Promise.all(STATIC_SERVERS.map(async (staticServer) => {
      const dbServer = dbStats?.find(s => s.id === staticServer.id);

      if (!dbServer) {
        return { ...staticServer, current_players: 0, is_online: false };
      }

      let currentOnline = dbServer.current_players;
      let isOnline = dbServer.is_online;

      const lastUpdate = new Date(dbServer.last_updated);
      const diffMinutes = (now.getTime() - lastUpdate.getTime()) / 60000;


      if (isOnline && diffMinutes > UPDATE_INTERVAL_MINUTES && process.env.SUPABASE_SERVICE_ROLE_KEY) {

        const minPlayers = Math.floor(staticServer.max_players * 0.4);
        const maxPlayers = Math.floor(staticServer.max_players * 0.98);
        const newOnline = Math.floor(Math.random() * (maxPlayers - minPlayers + 1)) + minPlayers;

        const { error: updateError } = await supabase
          .from('servers')
          .update({
            current_players: newOnline,
            last_updated: now.toISOString()
          })
          .eq('id', staticServer.id);

        if (!updateError) {
          currentOnline = newOnline;
        }
      }

      return {
        ...staticServer,
        current_players: currentOnline,
        is_online: isOnline
      };
    }));

    return result;

  } catch (e) {
    console.error("Failed to fetch servers, using fallback:", e);
    return STATIC_SERVERS.map(s => ({ ...s, current_players: 0, is_online: false }));
  }
}

export default async function ServersPage() {
  const servers = await getServers();
  const totalOnline = servers.reduce((acc, s) => acc + (s.is_online ? s.current_players : 0), 0);

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E91E63] selection:text-white">

      { }
      <div className="absolute top-0 left-0 w-full z-10 h-20 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

      { }
      <div className="relative pt-40 pb-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1a_0%,#050505_70%)] z-[-1]" />
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
          VELG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#3b82f6]">SERVER</span>
        </h1>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#111] border border-white/10 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-in fade-in zoom-in duration-500">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute opacity-75" />
            <div className="w-3 h-3 bg-green-500 rounded-full relative" />
          </div>
          <span className="text-sm font-bold text-gray-300 tracking-wider">
            <span className="text-white font-mono text-lg mx-1">{totalOnline}</span> SPILLERE ONLINE
          </span>
        </div>
      </div>

      { }
      <section className="container mx-auto px-4 max-w-5xl pb-32">
        <div className="grid grid-cols-1 gap-8">
          {servers.map((server) => (
            <ServerCard key={server.id} server={server} />
          ))}
        </div>
      </section>

    </main>
  );
}