"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MultiOrderPurchasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  // Multiple In-Route Orders
  const inRouteOrders = [
    {
      id: "ORD-98234",
      date: "Oct 12, 2026",
      total: "$349.00",
      itemsCount: 2,
      carrier: "FedEx Express",
      trackingNumber: "781234567890",
      trackingUrl: "https://www.fedex.com/fedextrack/?trknbr=781234567890",
      status: "In Transit",
      estimatedDelivery: "Oct 16, 2026",
      origin: "New York, NY",
      destination: "Chicago, IL",
      items: [
        { name: "Executive Health Checkup Package", qty: 1, price: "$299.00" },
        { name: "Diagnostic Test Kit", qty: 1, price: "$50.00" },
      ],
    },
    {
      id: "ORD-98102",
      date: "Oct 10, 2026",
      total: "$180.00",
      itemsCount: 1,
      carrier: "FedEx Ground",
      trackingNumber: "890123456789",
      trackingUrl: "https://www.fedex.com/fedextrack/?trknbr=890123456789",
      status: "Out for Delivery",
      estimatedDelivery: "Oct 14, 2026",
      origin: "Boston, MA",
      destination: "Chicago, IL",
      items: [
        { name: "Cardiology Consultation Voucher", qty: 1, price: "$180.00" },
      ],
    },
  ];

  // Multiple Past Purchases
  const pastOrders = [
    {
      id: "ORD-87123",
      date: "Sep 28, 2026",
      total: "$150.00",
      carrier: "FedEx Standard",
      trackingNumber: "654321987012",
      status: "Delivered",
    },
    {
      id: "ORD-76541",
      date: "Aug 15, 2026",
      total: "$450.00",
      carrier: "FedEx Ground",
      trackingNumber: "987654321098",
      status: "Delivered",
    },
    {
      id: "ORD-65412",
      date: "Jun 10, 2026",
      total: "$120.00",
      carrier: "FedEx Express",
      trackingNumber: "456789123045",
      status: "Cancelled",
    },
    {
      id: "ORD-54321",
      date: "May 02, 2026",
      total: "$220.00",
      carrier: "FedEx Ground",
      trackingNumber: "321654987000",
      status: "Delivered",
    },
  ];

  const filteredPastOrders = pastOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.trackingNumber.includes(searchQuery);
    const matchesStatus =
      statusFilter === "ALL" || order.status.toUpperCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[var(--light-gray)] text-[var(--dark-gray)] font-outfit py-6 md:py-12">
      <main className="container px-4 mx-auto max-w-7xl space-y-8">
        
        {/* Header & Overall Summary */}
        <div className="bg-white border border-[var(--border-gray)] p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-gray)]">
            <div>
              <h1 className="text-2xl md:text-3xl font-forum text-[var(--black)] uppercase tracking-wide m-0">
                Purchases & Orders
              </h1>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                Manage all active shipments, FedEx tracking, and order history in one place.
              </p>
            </div>
            <Link href="/packages" className="btn btn-primary text-xs py-2.5 px-5 self-start sm:self-auto">
              Explore Packages
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
              <span className="text-xs text-gray-500 uppercase font-semibold block">Total Orders</span>
              <span className="text-2xl font-forum font-bold text-[var(--black)] mt-1 block">
                {inRouteOrders.length + pastOrders.length}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
              <span className="text-xs text-gray-500 uppercase font-semibold block">Active Shipments</span>
              <span className="text-2xl font-forum font-bold text-[var(--primary)] mt-1 block">
                {inRouteOrders.length}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
              <span className="text-xs text-gray-500 uppercase font-semibold block">Delivered</span>
              <span className="text-2xl font-forum font-bold text-green-700 mt-1 block">
                {pastOrders.filter((o) => o.status === "Delivered").length}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)]">
              <span className="text-xs text-gray-500 uppercase font-semibold block">Cancelled</span>
              <span className="text-2xl font-forum font-bold text-gray-500 mt-1 block">
                {pastOrders.filter((o) => o.status === "Cancelled").length}
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Multiple In-Route Orders */}
        <section className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm">
          <div className="pb-4 mb-6 border-b border-[var(--border-gray)] flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-forum text-[var(--black)] uppercase tracking-wider m-0">
              Purchases In Route ({inRouteOrders.length})
            </h2>
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded">
              Active Deliveries
            </span>
          </div>

          <div className="space-y-6">
            {inRouteOrders.map((order) => (
              <div key={order.id} className="border border-[var(--primary)] p-5 md:p-6 bg-[var(--light-gray)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--border-gray)]">
                  <div>
                    <span className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest block">
                      Order #{order.id}
                    </span>
                    <span className="text-xs text-gray-500">Placed on {order.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-400 uppercase font-semibold block mb-1">Carrier & Tracking</span>
                    <p className="font-bold text-[var(--black)] text-sm m-0">{order.carrier}</p>
                    <p className="font-mono text-gray-700 mt-0.5">#{order.trackingNumber}</p>
                  </div>

                  <div>
                    <span className="text-gray-400 uppercase font-semibold block mb-1">Est. Delivery</span>
                    <p className="font-bold text-[var(--black)] text-sm m-0">{order.estimatedDelivery}</p>
                    <p className="text-gray-500 mt-0.5">{order.origin} → {order.destination}</p>
                  </div>

                  <div>
                    <span className="text-gray-400 uppercase font-semibold block mb-1">Total Amount</span>
                    <p className="font-bold text-[var(--black)] text-sm m-0">{order.total}</p>
                    <p className="text-gray-500 mt-0.5">{order.itemsCount} item(s)</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href={order.trackingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-xs py-2 px-5">
                    Track on FedEx
                  </a>
                  <button className="btn btn-primary-outline text-xs py-2 px-5">
                    View Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Filterable Past Purchases Table */}
        <section className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm">
          <div className="pb-4 mb-6 border-b border-[var(--border-gray)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-forum text-[var(--black)] uppercase tracking-wider m-0">
                Past Purchases
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Filter and search through your complete order history.
              </p>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="Search Order ID or FedEx #"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-[var(--border-gray)] p-2 text-xs w-48 focus:outline-none focus:border-[var(--primary)]"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-[var(--border-gray)] p-2 text-xs bg-white focus:outline-none focus:border-[var(--primary)]"
              >
                <option value="ALL">All Statuses</option>
                <option value="DELIVERED">Delivered</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-[var(--border-gray)] text-xs md:text-sm">
              <thead>
                <tr className="bg-[var(--light-gray)] border-b border-[var(--border-gray)] font-forum uppercase tracking-wider text-[var(--black)]">
                  <th className="p-3.5">Order ID</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">FedEx Tracking</th>
                  <th className="p-3.5">Total</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-gray)]">
                {filteredPastOrders.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-6 text-center text-gray-400">
                      No matching orders found.
                    </td>
                  </tr>
                ) : (
                  filteredPastOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="p-3.5 font-bold text-[var(--black)]">{order.id}</td>
                      <td className="p-3.5 text-gray-600">{order.date}</td>
                      <td className="p-3.5 font-mono text-xs text-gray-600">#{order.trackingNumber}</td>
                      <td className="p-3.5 font-semibold text-[var(--black)]">{order.total}</td>
                      <td className="p-3.5">
                        <span className={`inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider ${
                          order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-3.5 text-right space-x-3">
                        <button className="text-xs font-bold text-[var(--primary)] uppercase underline hover:opacity-80">
                          Invoice
                        </button>
                        <button className="text-xs font-bold text-[var(--black)] uppercase underline hover:opacity-80">
                          Reorder
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-6 mt-4 border-t border-[var(--border-gray)] text-xs text-gray-500">
            <span>Showing {filteredPastOrders.length} of {pastOrders.length} orders</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-[var(--border-gray)] hover:bg-gray-50 disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1.5 border border-[var(--border-gray)] hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}