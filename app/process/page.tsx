import Image from "next/image";
import Link from "next/link";

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Battery Crashing & Separation", desc: "Automated mechanical crushing separates heavy plastic, battery acid, and metallic lead component components." },
    { num: "02", title: "Smelting & Thermal Reduction", desc: "Rotary furnaces reduce lead paste and metallic scrap under strict temperature controls." },
    { num: "03", title: "Refining & Alloying", desc: "Refining kettles remove dross and impurities to produce pure lead ingots (99.97%+) and specialized alloys." },
    { num: "04", title: "Emissions Control & Filtration", desc: "Multi-stage APCS systems trap dust, particulate matter, and acidic vapors to fulfill ZLD standards." }
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
          <Link href="/process" className="text-[#5fa728] font-semibold">Our Process</Link>
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
          Technical Workflow
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">Industrial Recycling Process</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
          From incoming battery scrap to high-purity lead ingots, explore our four-stage circular recovery cycle.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        {steps.map((item, i) => (
          <div key={i} className="bg-[#1e295d]/40 border border-slate-700/60 rounded-2xl p-6 relative overflow-hidden">
            <span className="text-4xl font-black text-[#5fa728]/20 absolute top-4 right-4">{item.num}</span>
            <h3 className="text-xl font-bold text-[#5fa728] mb-2">{item.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      <footer className="bg-[#0b1120] border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}