import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Battery Crashing & Separation", desc: "Automated mechanical crushing separates heavy plastic, battery acid, and metallic lead component components." },
    { num: "02", title: "Smelting & Thermal Reduction", desc: "Rotary furnaces reduce lead paste and metallic scrap under strict temperature controls." },
    { num: "03", title: "Refining & Alloying", desc: "Refining kettles remove dross and impurities to produce pure lead ingots (99.97%+) and specialized alloys." },
    { num: "04", title: "Emissions Control & Filtration", desc: "Multi-stage APCS systems trap dust, particulate matter, and acidic vapors to fulfill ZLD standards." }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
     <Header />

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