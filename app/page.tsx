import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="reading-column py-16 text-center">
      <h1 className="font-cinzel text-5xl md:text-6xl text-gold mb-6">
        Fire on the Mountain
      </h1>
      <p className="font-garamond text-xl text-parchment/80 max-w-2xl mx-auto mb-8">
        Step into the ancient text. Witness the prophet Elijah stand alone against four hundred and fifty prophets of Baal.
      </p>
      <div className="section-divider" />
      <Link
        href="/elijah"
        className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 px-6 py-3 rounded-sm transition-all group"
      >
        Read The Contest
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}