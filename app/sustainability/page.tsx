import Image from "next/image";
import Link from "next/link";

export default function SustainabilityPage() {
  const esgGoals = [
    { title: "Zero Liquid Discharge (ZLD)", desc: "100% process water is treated, recycled, and reused on-site to preserve regional water tables." },
    { title: "CPCB Air Norm Compliance", desc: "Multi-stage baghouses and wet scrubbers maintain atmospheric emissions well below national limits." },
    { title: "Circular Economy Focus", desc: "Diverting hazardous lead-acid battery scrap into high-grade reusable lead ingots and polypropylene chips." },
    { title: "Worker Safety & Hygiene", desc: "Rigorous personal protection protocols, continuous monitoring, and automated material handling." },
  ];

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
          <Link href="/about" className="hover:text-[#5fa728] transition-colors">About Us</Link>
          <Link href="/process" className="hover:text-[#5fa728] transition-colors">Our Process</Link>
          <Link href="/infrastructure" className="hover:text-[#5fa728] transition-colors">Infrastructure</Link>
          <Link href="/sustainability" className="text-[#5fa728] font-semibold">Sustainability</Link>
          <Link href="/contact" className="hover:text-[#5fa728] transition-colors">Contact</Link>
        </nav>
        <Link href="/contact" className="bg-[#5fa728] hover:bg-[#4e8f21] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md">
          Get In Touch
        </Link>
      </header>

      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
          Environmental, Social & Governance
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">Preserving Nature Through Circular Metallurgy</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
          Sustainability isn't an afterthought—it forms the architectural core of our recovery operations in Kheda, Gujarat.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        {esgGoals.map((goal, i) => (
          <div key={i} className="bg-[#1e295d]/40 border border-slate-700/60 rounded-2xl p-6 hover:border-[#5fa728]/40 transition-all">
            <h3 className="text-lg font-bold text-[#5fa728] mb-2">{goal.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{goal.desc}</p>
          </div>
        ))}
      </section>

      <footer className="bg-[#0b1120] border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}