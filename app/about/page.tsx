import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Header />

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