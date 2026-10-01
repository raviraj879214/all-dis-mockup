import React from "react";
import Link from "next/link";

export default function SalesDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-gray)]">
          <div>
            <h1 className="text-2xl md:text-3xl font-forum text-[var(--black)] uppercase tracking-wide m-0">
              My Sales Dashboard
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Overview of your merchant earnings and transaction performance.
            </p>
          </div>
          <Link
            href="/sales/add-product"
            className="btn btn-primary text-xs py-2.5 px-5 uppercase tracking-wider self-start sm:self-auto shrink-0 inline-block text-center"
          >
            + Add New Product
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
            <span className="text-xs text-gray-500 uppercase font-semibold block">Total Revenue</span>
            <span className="text-2xl font-forum font-bold text-[var(--black)] mt-1 block">$12,450.00</span>
          </div>
          <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
            <span className="text-xs text-gray-500 uppercase font-semibold block">Units Sold</span>
            <span className="text-2xl font-forum font-bold text-[var(--primary)] mt-1 block">74</span>
          </div>
          <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
            <span className="text-xs text-gray-500 uppercase font-semibold block">Active Listings</span>
            <span className="text-2xl font-forum font-bold text-green-700 mt-1 block">3</span>
          </div>
          <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
            <span className="text-xs text-gray-500 uppercase font-semibold block">Payout Method</span>
            <span className="text-xs font-bold text-gray-700 mt-2 block">Chase Checking (Active)</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-4">
        <div className="pb-4 border-b border-[var(--border-gray)] flex justify-between items-center">
          <h2 className="text-xl font-forum text-[var(--black)] uppercase tracking-wider m-0">
            Recent Sales Transactions
          </h2>
          <Link
            href="/sales/products"
            className="text-xs font-bold text-[var(--primary)] uppercase underline hover:opacity-80"
          >
            View All Products
          </Link>
        </div>

        <div className="divide-y divide-[var(--border-gray)] text-xs md:text-sm">
          <div className="py-3.5 flex justify-between items-center">
            <div>
              <p className="font-bold text-[var(--black)] m-0">Executive Health Checkup Package</p>
              <p className="text-gray-500 text-xs m-0">Order #ORD-98234 • Oct 12, 2026</p>
            </div>
            <span className="font-bold text-green-700">+$299.00</span>
          </div>
          <div className="py-3.5 flex justify-between items-center">
            <div>
              <p className="font-bold text-[var(--black)] m-0">Cardiology Consultation Voucher</p>
              <p className="text-gray-500 text-xs m-0">Order #ORD-98102 • Oct 10, 2026</p>
            </div>
            <span className="font-bold text-green-700">+$180.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}