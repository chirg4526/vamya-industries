import Image from "next/image";
import Link from "next/link";
import ContactForm from "../contact/contact-form";

export const metadata = {
  title: "Products & Raw Material Procurement",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1e295d]/90 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white/20 bg-[#1e295d] flex items-center justify-center">
            <Image src="/v-mark.png" alt="Vamya Emblem" width={40} height={40} className="object-cover" priority />
          </div>
          <span className="font-bold text-lg tracking-wide">Vamya Industries</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#5fa728]">Home</Link>
          <Link href="/about" className="hover:text-[#5fa728]">About Us</Link>
          <Link href="/products" className="text-[#5fa728] font-semibold">Our Products</Link>
          <Link href="/sustainability" className="hover:text-[#5fa728]">Sustainability</Link>
          <Link href="/contact" className="hover:text-[#5fa728]">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
          Raw Materials & Manufacturing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">Procurement & Product Portfolio</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg">
          We purchase raw scrap materials and manufacture refined lead ingots and specialized lead alloys.
        </p>
      </section>

      {/* Main Grid: 2 Columns (Raw Materials vs Final Products) */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">
        
        {/* COLUMN 1: RAW MATERIALS (WE PURCHASE) */}
        <div className="bg-[#1e295d]/50 border border-slate-700/60 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-bold text-[#5fa728] uppercase tracking-wider bg-[#5fa728]/20 px-3 py-1 rounded-full">
              We Purchase
            </span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-3">Raw Materials</h2>
            <p className="text-slate-300 text-sm mb-6">
              We actively procure battery scrap and raw lead materials for processing at our plant:
            </p>

            <ul className="space-y-3 text-slate-200 text-sm mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#5fa728] font-bold">✓</span> Battery Scrap (Drained & Intact Lead-Acid Batteries)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#5fa728] font-bold">✓</span> Lead Scrap / Lead Dross & Slag
              </li>
            </ul>
          </div>

          <div className="bg-white text-slate-900 rounded-xl p-6">
            <h3 className="font-bold text-lg text-[#1e295d] mb-1">Get In Touch</h3>
            <p className="text-xs text-slate-600 mb-4">Submit your details for battery scrap sales & purchase inquiries.</p>
            <ContactForm />
          </div>
        </div>

        {/* COLUMN 2: FINAL PRODUCTS (WE SUPPLY) */}
        <div className="bg-[#1e295d]/50 border border-slate-700/60 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
          <div>
            <span className="text-xs font-bold text-[#5fa728] uppercase tracking-wider bg-[#5fa728]/20 px-3 py-1 rounded-full">
              We Supply
            </span>
            <h2 className="text-2xl font-bold text-white mt-4 mb-3">Our Final Products</h2>
            <p className="text-slate-300 text-sm mb-6">
              High-purity manufactured lead products and custom alloys:
            </p>

            <ul className="space-y-3 text-slate-200 text-sm mb-8">
              <li className="flex items-center gap-2"><span className="text-[#5fa728] font-bold">✓</span> Remelted Lead</li>
              <li className="flex items-center gap-2"><span className="text-[#5fa728] font-bold">✓</span> Pure Lead</li>
              <li className="flex items-center gap-2"><span className="text-[#5fa728] font-bold">✓</span> Tin Lead Alloy</li>
              <li className="flex items-center gap-2"><span className="text-[#5fa728] font-bold">✓</span> Antimony Lead Alloy</li>
              <li className="flex items-center gap-2"><span className="text-[#5fa728] font-bold">✓</span> Silver Lead Alloy</li>
            </ul>
          </div>

          <div className="bg-white text-slate-900 rounded-xl p-6">
            <h3 className="font-bold text-lg text-[#1e295d] mb-1">Get In Touch</h3>
            <p className="text-xs text-slate-600 mb-4">Submit an inquiry for refined lead ingot procurement.</p>
            <ContactForm />
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#0b1120] border-t border-slate-800 py-10 px-6 text-center text-slate-400 text-sm">
        <p className="font-bold text-white">Vamya Ind. India Pvt. Ltd.</p>
        <p className="text-xs text-[#5fa728] font-semibold">Extracting Value. Preserving Nature.</p>
        <p className="text-xs text-slate-400 mt-4">lead acid battery recycling & lead recovery sol.</p>
      </footer>
    </div>
  );
}