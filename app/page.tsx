import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#1e295d] text-white shadow-md border-b border-[#2a3a80]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5 group">
  {/* Rounded V-Mark Badge Container */}
  <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 shadow-md border-2 border-white/20">
    <Image
      src="/v-mark.png"
      alt="Vamya V-Mark Emblem"
      width={180}
      height={180}
      className="w-full h-full object-cover"
      priority
    />
  </div>

  {/* Pure White Corporate Typography */}
  <div className="flex flex-col text-white">
    <span className="font-bold text-lg leading-tight tracking-wide">
      Vamya Industries
    </span>
    <span className="text-xs font-medium text-slate-200 tracking-normal">
      India Pvt. Ltd.
    </span>
    <span className="text-[11px] text-[#7bc143] font-semibold tracking-tight mt-0.5">
      Extracting Value. Preserving Nature.
    </span>
  </div>
</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  <Link href="/" className="hover:text-[#5fa728]">Home</Link>
  <Link href="/about" className="hover:text-[#5fa728]">About Us</Link>
  <Link href="/products" className="hover:text-[#5fa728]">Our Products</Link>
  <Link href="/sustainability" className="hover:text-[#5fa728]">Sustainability</Link>
  <Link href="/contact" className="hover:text-[#5fa728]">Contact</Link>
</nav>
          <a
            href="#contact"
            className="bg-[#5fa728] hover:bg-[#4d8b1f] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-all shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative bg-gradient-to-r from-[#161d43] via-[#1e295d] to-[#253575] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block bg-[#5fa728]/20 text-[#8be24c] border border-[#5fa728]/40 text-xs font-semibold uppercase px-3 py-1 rounded-full tracking-wider">
              Lead-Acid Battery Recycling & Recovery
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Extracting Value. <br />
              <span className="text-[#7bc143]">Preserving Nature.</span>
            </h1>
            <p className="text-slate-200 text-base leading-relaxed">
              Vamya Industries India Pvt. Ltd. focuses on responsible recovery of valuable materials from used lead-acid batteries to power a cleaner, sustainable circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#process"
                className="bg-[#5fa728] hover:bg-[#4d8b1f] text-white font-medium px-6 py-3 rounded-md text-center shadow-lg transition-all"
              >
                Explore Our Process
              </a>
              <a
                href="#contact"
                className="border border-slate-400 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md text-center transition-all"
              >
                Contact Plant HQ
              </a>
            </div>
          </div>

          {/* Quick Enquiry Form Card */}
          <div className="md:w-1/2 w-full bg-white text-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-1 text-[#1e295d]">Quick Business Enquiry</h3>
            <p className="text-xs text-slate-500 mb-6">Connect with our facility in Kheda, Gujarat.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e295d]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email / Phone</label>
                <input type="text" placeholder="email@company.com or +91..." className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e295d]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Requirement Details</label>
                <textarea rows={3} placeholder="Tell us about your battery recycling or lead procurement needs..." className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#1e295d]"></textarea>
              </div>
              <button type="button" className="w-full bg-[#1e295d] hover:bg-[#161d43] text-white font-semibold py-3 rounded-md transition-all shadow-md">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. About Us Section */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#5fa728] font-bold text-sm tracking-wider uppercase">About The Company</span>
            <h2 className="text-3xl font-bold text-[#1e295d] mt-2 mb-4">Responsible Material Recovery & Environmental Stewardship</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Based in <strong>Village Sayala, Taluka Matar, District Kheda, Gujarat</strong>, Vamya Industries India Pvt. Ltd. focuses on the responsible recovery of valuable materials from used lead-acid batteries.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our state-of-the-art facility utilizes modern processing and material-handling equipment alongside advanced environmental pollution-control systems to minimize waste and support environmental compliance.
            </p>
          </div>
          <div className="bg-[#1e295d] text-white p-8 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-[#7bc143] border-b border-slate-700 pb-3">Facility Overview</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400 text-xs">Location</p>
                <p className="font-medium text-white">Taluka Matar, District Kheda, Gujarat, India - 388180</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Core Focus</p>
                <p className="font-medium text-white">Used Lead-Acid Battery Recycling & Secondary Lead Recovery</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Environmental Commitment</p>
                <p className="font-medium text-white">Zero-Discharge Principles & Pollution Control Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Process (4 Steps) */}
      <section id="process" className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5fa728] font-bold text-sm tracking-wider uppercase">Operational Workflow</span>
            <h2 className="text-3xl font-bold text-[#1e295d] mt-2">Our Recycling & Lead Recovery Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-[#1e295d] text-white rounded-lg flex items-center justify-center font-bold mb-4">01</div>
              <h3 className="font-bold text-[#1e295d] mb-2">Battery Receipt & Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Safe handling, weighing, sorting, and initial inspection of incoming spent lead-acid batteries.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-[#1e295d] text-white rounded-lg flex items-center justify-center font-bold mb-4">02</div>
              <h3 className="font-bold text-[#1e295d] mb-2">Breaking & Separation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Mechanical battery breaking to isolate lead paste, metallic grids, plastic casings, and acid.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-[#5fa728] text-white rounded-lg flex items-center justify-center font-bold mb-4">03</div>
              <h3 className="font-bold text-[#1e295d] mb-2">Lead Recovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Controlled smelting and metallurgical processing to extract raw unrefined lead material.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-10 h-10 bg-[#5fa728] text-white rounded-lg flex items-center justify-center font-bold mb-4">04</div>
              <h3 className="font-bold text-[#1e295d] mb-2">Refining & Dispatch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Purification into high-grade refined lead ingots and specialized alloys for industrial supply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Infrastructure & Sustainability */}
      <section id="sustainability" className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1e295d] mb-4">Infrastructure & Systems</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-[#5fa728] font-bold">✓</span> Advanced processing and material-handling equipment.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5fa728] font-bold">✓</span> High-efficiency lead recovery and smelting systems.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5fa728] font-bold">✓</span> Integrated environmental pollution-control filtration systems.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1e295d] mb-4">Sustainability & Circular Economy</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Our core purpose is to support a circular economy through material recovery, waste reduction, responsible plant operations, and active preservation of natural resources.
            </p>
            <span className="inline-block bg-[#5fa728]/10 text-[#5fa728] font-semibold text-xs px-3 py-1.5 rounded-md">
              Preserving Nature for Future Generations
            </span>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer id="contact" className="bg-[#161d43] text-slate-300 py-12 px-6 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h4 className="text-white font-bold text-lg mb-3">Vamya Industries India Pvt. Ltd.</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Extracting Value. Preserving Nature. <br />
              Lead-acid battery recycling and lead recovery solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Plant Location</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Village Sayala, Taluka Matar, <br />
              District Kheda, Gujarat, India - 388180
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Official Communication</h4>
            <p className="text-xs text-slate-400">Website: www.vamyaindustries.com</p>
            <p className="text-xs text-slate-400 mt-1">Phone & Email: To be added upon final verification.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}