"use client";

import { useState } from "react";
import { submitEnquiry } from "../actions";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    await submitEnquiry(formData);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="bg-[#5fa728]/10 border border-[#5fa728]/30 rounded-xl p-6 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-[#5fa728] text-white flex items-center justify-center text-xl font-bold mx-auto">
          ✓
        </div>
        <h3 className="text-xl font-bold text-[#1e295d]">Thank You!</h3>
        <p className="text-sm text-slate-600">
          Your enquiry has been successfully submitted. Our team will contact you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-xs font-semibold text-[#1e295d] underline hover:text-[#5fa728] mt-2 inline-block"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1e295d] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Official Email / Phone</label>
        <input
          type="text"
          name="contactInfo"
          required
          placeholder="email@company.com or +91..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1e295d] text-sm"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Requirement Details</label>
        <textarea
          name="requirements"
          rows={4}
          required
          placeholder="Details about your lead requirements or battery scrap supply..."
          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1e295d] text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#1e295d] hover:bg-[#141b3e] disabled:opacity-50 text-white py-3 rounded-lg font-bold text-sm transition-colors shadow-md"
      >
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}