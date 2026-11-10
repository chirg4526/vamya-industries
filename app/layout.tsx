import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vamya Industries India Pvt. Ltd. | Lead Recycling & Recovery",
    template: "%s | Vamya Industries",
  },
  description:
    "Eco-friendly lead recycling, battery recovery, and zero liquid discharge metallurgical plant in Kheda, Gujarat, India.",
  keywords: [
    "Lead Recycling India",
    "Battery Recycling Gujarat",
    "Refined Lead Ingots",
    "Vamya Industries",
    "Kheda Metallurgy",
    "Zero Liquid Discharge Recycling",
  ],
  openGraph: {
    title: "Vamya Industries India Pvt. Ltd.",
    description: "Extracting Value. Preserving Nature. Leading eco-friendly battery recycling in Kheda, Gujarat.",
    url: "https://vamyaindustries.com",
    siteName: "Vamya Industries",
    images: [
      {
        url: "/v-mark.png",
        width: 800,
        height: 800,
        alt: "Vamya Industries Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-[#0f172a]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}