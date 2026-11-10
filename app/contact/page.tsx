import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact Us | Vamya Industries India Pvt. Ltd.",
  description: "Get in touch for lead ingot purchases, alloy customization, or battery scrap sales.",
};

export default function ContactPage() {
  // Replace this with your actual Google Maps link
const googleMapsUrl = "https://maps.app.goo.gl/AqtJ4PfTZtDSsDgW7";  
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#1e295d]/90 backdrop-blur-md border-b border-slate-700/50 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 bg-[#1e295d] flex items-center justify-center">
            <Image src="/v-mark.png" alt="Vamya Emblem" width={40} height={40} className="object-cover" priority />
          </div>
          <span className="font-bold text-lg tracking-wide">Vamya Industries</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#5fa728]">Home</Link>
          <Link href="/about" className="hover:text-[#5fa728]">About Us</Link>
          <Link href="/products" className="hover:text-[#5fa728]">Our Products</Link>
          <Link href="/sustainability" className="hover:text-[#5fa728]">Sustainability</Link>
          <Link href="/contact" className="text-[#5fa728] font-semibold">Contact</Link>
        </nav>
      </header>

      {/* Main Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold mt-4">Contact Vamya Industries</h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Reach out for sales inquiries, lead ingot procurement, or battery scrap supply partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-[#1e295d] mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Right Column: Plant Info & Interactive Maps QR Code */}
          <div className="bg-[#1e295d]/60 border border-slate-700/60 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4">Plant & Registered Office</h3>
            
            <div className="space-y-3 text-slate-300 text-sm">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2 group hover:text-[#5fa728] transition-colors"
              >
                <span className="text-[#5fa728] font-bold group-hover:scale-110 transition-transform">📍</span>
                <span>
                  <strong>Address:</strong> Kheda Industrial Zone, Kheda, Gujarat, India 
                  <span className="inline-block text-[10px] bg-[#5fa728]/20 text-[#5fa728] px-2 py-0.5 rounded ml-2 font-semibold">
                    Open Map ↗
                  </span>
                </span>
              </a>

              <p className="flex items-start gap-2">
                <span className="text-[#5fa728] font-bold">✉️</span>
                <span><strong>Email:</strong> info@vamyaindustries.com</span>
              </p>

              <p className="flex items-start gap-2">
                <span className="text-[#5fa728] font-bold">📞</span>
                <span><strong>Phone:</strong> +91 98765 43210</span>
              </p>
            </div>

            {/* CLICKABLE & HOVERABLE QR CODE BLOCK */}
            <div className="mt-6 pt-6 border-t border-slate-700/60 text-center">
              <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
                Scan or Click for Directions
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
                title="Click to open location on Google Maps"
              >
                <div className="w-36 h-36 mx-auto bg-white p-2.5 rounded-2xl border-2 border-slate-600 shadow-md group-hover:border-[#5fa728] group-hover:shadow-[0_0_20px_rgba(95,167,40,0.4)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src="/map-qr.png" 
                    alt="Google Maps Location QR Code" 
                    width={128} 
                    height={128} 
                    className="object-contain" 
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute inset-0 bg-[#1e295d]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[#5fa728] font-bold text-xs">
                    Open Maps ↗
                  </div>
                </div>
              </a>
            </div>

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