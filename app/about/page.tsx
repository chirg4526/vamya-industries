import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <header className="sticky top-0 z-50 bg-[#1e295d]/90 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0 shadow-md border-2 border-white/20 bg-[#1e295d] flex items-center justify-center">
            <Image src="/v-mark.png" alt="Vamya Emblem" width={48} height={48} className="w-full h-full object-cover" priority />
          </div>
          <div className="flex flex-col text-white">
            <span className="font-bold text-lg leading-tight tracking-wide">Vamya Industries</span>
            <span className="text-xs font-medium text-slate-200 tracking-normal">India Pvt. Ltd.</span>
            <span className="text-[11px] text-[#5fa728] font-semibold tracking-tight mt-0.5">Extracting Value. Preserving Nature.</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#5fa728] transition-colors">Home</Link>
          <Link href="/about" className="text-[#5fa728] font-semibold">About Us</Link>
          <Link href="/process" className="hover:text-[#5fa728] transition-colors">Our Process</Link>
          <Link href="/infrastructure" className="hover:text-[#5fa728] transition-colors">Infrastructure</Link>
          <Link href="/sustainability" className="hover:text-[#5fa728] transition-colors">Sustainability</Link>
          <Link href="/contact" className="hover:text-[#5fa728] transition-colors">Contact</Link>
        </nav>
        <Link href="/contact" className="bg-[#5fa728] hover:bg-[#4e8f21] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md">
          Get In Touch
        </Link>
      </header>

      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
          Corporate Overview
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">Pioneering Sustainable Lead Recycling in India</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
          Vamya Industries India Pvt. Ltd. operates at the intersection of metallurgical excellence and environmental stewardship, turning lead scrap into high-purity industrial raw materials.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        <div className="bg-[#1e295d]/60 border border-slate-700/60 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#5fa728] mb-4">Our Mission</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            To provide world-class, zero-discharge lead recycling solutions that power sustainable battery manufacturing while preventing toxic environmental contamination across Gujarat and nationwide.
          </p>
        </div>
        <div className="bg-[#1e295d]/60 border border-slate-700/60 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#5fa728] mb-4">Our Vision</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            To become a benchmark circular economy enterprise recognized globally for technical purity standards, eco-friendly smelting practices, and transparent partner relations.
          </p>
        </div>
      </section>

      <footer className="bg-[#0b1120] border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}