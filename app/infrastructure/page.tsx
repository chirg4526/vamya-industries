import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
export default function InfrastructurePage() {
  const specs = [
    { title: "Plant Location", value: "Kheda, Gujarat, India" },
    { title: "Target Processing Capacity", value: "Multi-Ton Annual Lead Recovery" },
    { title: "Core Output", value: "99.97%+ Pure Refined Lead Ingots" },
    { title: "Environmental Compliance", value: "Zero Liquid Discharge (ZLD) Standard" },
  ];

  const machinery = [
    { name: "Automated Battery Breaking Unit", description: "High-capacity crushing and hydro-mechanic separation line designed to separate polypropylene casings, heavy plastics, and lead paste efficiently." },
    { name: "Rotary Smelting Furnaces", description: "Advanced thermal reduction furnaces equipped with precise temperature automation for maximum lead recovery rates from battery scrap." },
    { name: "Refining & Alloying Pots", description: "Indirect-fired kettle units for dross removal, chemical treatment, and custom lead alloy production to suit diverse customer requirements." },
    { name: "Multi-Stage Air Pollution Control System (APCS)", description: "Integrated baghouses, wet scrubbers, and suction hoods that capture dust and sulfur emissions, exceeding strict CPCB air quality norms." },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />

      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
          World-Class Recycling Facility
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">Plant & Machinery Infrastructure</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
          Engineered for high volume, purity, and environmental compliance, our operational setup in Kheda, Gujarat powers modern lead recovery operations.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.map((item, index) => (
            <div key={index} className="bg-[#1e295d]/60 border border-slate-700/60 rounded-xl p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">{item.title}</p>
              <p className="text-lg font-bold text-[#5fa728] mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-white text-center">Core Machinery & Systems</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {machinery.map((mach, index) => (
            <div key={index} className="bg-[#1e295d]/40 border border-slate-700/60 rounded-2xl p-6 hover:border-[#5fa728]/40 transition-all">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5fa728]"></span>
                {mach.name}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{mach.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#0b1120] border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}