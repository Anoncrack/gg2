import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import patches from "@/data/patches.json";

export async function generateStaticParams() {
  return patches.map((patch) => ({
    slug: patch.slug,
  }));
}

export default async function PatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const patch = patches.find((p) => p.slug === resolvedParams.slug);

  if (!patch) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E91E63] selection:text-white">



      { }
      <div className="relative h-[60vh] w-full">
        <Image
          src={patch.image}
          alt={patch.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#E91E63] text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-[0_0_15px_#E91E63]">
              {patch.category}
            </span>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              {patch.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4 drop-shadow-xl">
            {patch.title}
          </h1>
        </div>
      </div>

      { }
      <article className="container mx-auto px-4 max-w-3xl py-16">

        { }
        <div
          className="patch-content"
          dangerouslySetInnerHTML={{ __html: patch.content }}
        />

        { }
        {patch.category === 'EVENT' && (
          <div className="mt-16 p-8 border border-[#E91E63]/30 bg-[#E91E63]/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold uppercase text-white mb-1">Vil du delta?</h4>
              <p className="text-sm text-gray-400">Logg inn på serveren nå for å oppleve eventet.</p>
            </div>
            <Link href="/lucky-event" className="px-8 py-3 bg-[#E91E63] hover:bg-[#c2185b] text-white font-bold uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(233,30,99,0.3)] transition-all hover:-translate-y-1">
              Gå til Event Siden
            </Link>
          </div>
        )}

        { }
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between">
          <Link href="/" className="text-gray-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
            ← Tilbake til oversikt
          </Link>
        </div>
      </article>



    </main>
  );
}