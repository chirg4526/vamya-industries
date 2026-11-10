import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
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
          <Link href="/sustainability" className="hover:text-[#5fa728] transition-colors">Sustainability</Link>
          <Link href="/contact" className="text-[#5fa728] font-semibold">Contact</Link>
        </nav>
        <Link href="/contact" className="bg-[#5fa728] hover:bg-[#4e8f21] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md">
          Get In Touch
        </Link>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <span className="text-[#5fa728] font-semibold uppercase tracking-widest text-xs bg-[#5fa728]/10 px-3 py-1 rounded-full border border-[#5fa728]/20">
          Reach Out To Us
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight">Contact Vamya Industries</h1>
        <p className="text-slate-300 mt-4 text-base md:text-lg leading-relaxed">
          Connect with our team for battery recycling partnerships, refined lead ingot procurement, or facility visits in Kheda, Gujarat.
        </p>
      </section>

      {/* Form & Plant Info Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">
        
        {/* Contact Form Box using our new Client Component */}
        <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#1e295d] mb-2">Send an Enquiry</h2>
          <p className="text-sm text-slate-600 mb-6">Fill out the form below and our procurement team will get back to you shortly.</p>
          
          <ContactForm />
        </div>

        {/* Plant Address & Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="bg-[#1e295d]/60 border border-slate-700/60 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Plant & Registered Office</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <p className="flex items-start gap-2"><span className="text-[#5fa728] font-bold">📍</span><span><strong>Address:</strong> Kheda Industrial Zone, Kheda, Gujarat, India</span></p>
              <p className="flex items-start gap-2"><span className="text-[#5fa728] font-bold">✉️</span><span><strong>Email:</strong> info@vamyaindustries.com</span></p>
              <p className="flex items-start gap-2"><span className="text-[#5fa728] font-bold">📞</span><span><strong>Phone:</strong> +91 98765 43210</span></p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg h-64 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117562.43588975344!2d72.61058204335938!3d22.753303600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b31f0cfb3f9%3A0x6b772c6769f7f45!2sKheda%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1120] border-t border-slate-800 py-12 px-6 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Vamya Industries India Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}