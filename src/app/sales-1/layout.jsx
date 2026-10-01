"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/sales-1", label: "My Sales Dashboard" },
  { href: "/sales-1/add-product", label: "Add Product" },
  { href: "/sales-1/products", label: "List of Products (Sold)" },
  { href: "/sales-1/payment", label: "Payment Method" },
];

export default function SalesLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--light-gray)] text-[var(--dark-gray)] font-outfit pb-24">
      
      {/* 1. Ultra-Luxury Image Hero Banner Header */}
      <div className="relative bg-black text-white min-h-[340px] flex items-center shadow-xl overflow-hidden border-b border-[var(--border-gray)]">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 hover:scale-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Theme Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[var(--primary-dark)]/90 to-[var(--secondary)]/80 z-10" />

        {/* Banner Main Content */}
        <div className="container mx-auto px-6 relative z-20 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--primary)] font-semibold mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-gray-500">/</span>
              <span>Merchant Portal</span>
              <span className="text-gray-500">/</span>
              <span className="text-white">Sales & Operations</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-forum tracking-wider text-white uppercase m-0 leading-tight">
              Sales Overview & Operations
            </h1>
            
            <p className="text-xs md:text-sm text-gray-200 max-w-xl mt-3 leading-relaxed m-0">
              Track live revenue metrics, manage product listings, and streamline client service transactions across your private merchant account.
            </p>
          </div>

          {/* Quick Metrics Bar Container */}
          <div className="flex items-center gap-6 bg-black/60 backdrop-blur-md p-5 border border-white/15 shadow-2xl">
            <div className="text-center px-4 border-r border-white/10">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">
                Active Listings
              </span>
              <span className="text-3xl font-forum text-amber-300 font-semibold mt-1 block">
                3
              </span>
            </div>
            <div className="text-center px-4 border-r border-white/10">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">
                Units Sold
              </span>
              <span className="text-3xl font-forum text-[var(--primary)] font-semibold mt-1 block">
                74
              </span>
            </div>
            <div className="text-center px-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">
                Status
              </span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-2 block flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Body with Navigation Bar */}
      <main className="container mx-auto px-4 mt-8 space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white border border-[var(--border-gray)] p-2 shadow-xs">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-0.5 px-0.5">
            {tabs.map((tab) => {
              const isActive =
                tab.href === "/sales-1"
                  ? pathname === "/sales-1"
                  : pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`whitespace-nowrap px-6 py-3 text-[12px] uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] font-semibold shadow-xs"
                      : "bg-white text-[var(--dark-gray)] border-transparent hover:bg-[var(--light-gray)] hover:text-[var(--black)]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dynamic Page Children Container */}
        <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-xs">
          {children}
        </div>
      </main>

    </div>
  );
}