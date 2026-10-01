"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/sales", label: "My Sales Dashboard" },
  { href: "/sales/add-product", label: "Add Product" },
  { href: "/sales/products", label: "List of Products (Sold)" },
  { href: "/sales/payment", label: "Payment Method" },
];

export default function SalesLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--light-gray)] text-[var(--dark-gray)] font-outfit py-6 md:py-12">
      <main className="container px-4 mx-auto max-w-7xl space-y-8">
        
        {/* Navigation Tabs Bar */}
        <div className="bg-white border border-[var(--border-gray)] p-2 shadow-sm">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-1 pt-1 px-1">
            {tabs.map((tab) => {
              const isActive =
                tab.href === "/sales"
                  ? pathname === "/sales"
                  : pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`whitespace-nowrap px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                    isActive
                      ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
                      : "bg-gray-50 text-[var(--dark-gray)] border-[var(--border-gray)] hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Dynamic Route Content */}
        {children}
      </main>
    </div>
  );
}