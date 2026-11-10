import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1e295d]/90 backdrop-blur-md border-b border-slate-700/50 px-6 md:px-10 py-4 flex items-center justify-between w-full">
      {/* Left: Branding & Tagline */}
      <Link href="/" className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-white/20 bg-[#1e295d] flex items-center justify-center shrink-0">
          <Image src="/v-mark.png" alt="Vamya Emblem" width={40} height={40} className="object-cover" priority />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-wide text-white leading-tight">
            Vamya Industries
          </span>
          <span className="text-[10px] text-slate-300 font-medium">India Pvt. Ltd.</span>
          <span className="text-[9px] text-[#5fa728] font-semibold tracking-tight hidden sm:block">
            Extracting Value. Preserving Nature.
          </span>
        </div>
      </Link>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className="hover:text-[#5fa728] transition-colors">Home</Link>
        <Link href="/about" className="hover:text-[#5fa728] transition-colors">About Us</Link>
        <Link href="/products" className="hover:text-[#5fa728] transition-colors">Our Products</Link>
        <Link href="/sustainability" className="hover:text-[#5fa728] transition-colors">Sustainability</Link>
        <Link href="/contact" className="hover:text-[#5fa728] transition-colors">Contact</Link>
      </nav>

      {/* Right: Get In Touch CTA Button */}
      <div className="flex items-center">
        <Link 
          href="/contact" 
          className="bg-[#5fa728] hover:bg-[#4d8920] text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all transform hover:scale-105"
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}