"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MultiOrderPurchasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Active Purchases (In Route)
  const activeOrders = [
    {
      id: "ORD-98234",
      date: "Oct 12, 2026",
      total: "$349.00",
      paymentMethod: "Visa •••• 4242",
      carrier: "FedEx Express",
      serviceType: "Priority Overnight",
      trackingNumber: "781234567890",
      trackingUrl: "https://www.fedex.com/fedextrack/?trknbr=781234567890",
      status: "IN_TRANSIT",
      statusLabel: "In Transit",
      stepIndex: 2, // 1: Placed, 2: In Transit, 3: Out for Delivery, 4: Delivered
      estimatedDelivery: "Thu, Oct 16, 2026",
      shippingAddress: "124 Grand Avenue, Suite 400, Chicago, IL 60611",
      origin: "New York Hub, NY",
      destination: "Chicago Gateway, IL",
      items: [
        { name: "Silk Cashmere Evening Overcoat", qty: 1, price: "$280.00", sku: "SKU-9921" },
        { name: "Leather Care Kit & Buffer", qty: 1, price: "$69.00", sku: "SKU-1044" },
      ],
      carrierLog: [
        { time: "Oct 13, 08:30 AM", location: "New York, NY", detail: "Departed FedEx origin facility" },
        { time: "Oct 12, 06:15 PM", location: "New York, NY", detail: "Package picked up by carrier" },
        { time: "Oct 12, 02:00 PM", location: "Warehouse", detail: "Shipment label generated" },
      ]
    },
    {
      id: "ORD-98102",
      date: "Oct 10, 2026",
      total: "$180.00",
      paymentMethod: "Mastercard •••• 8812",
      carrier: "FedEx Ground",
      serviceType: "Standard Ground",
      trackingNumber: "890123456789",
      trackingUrl: "https://www.fedex.com/fedextrack/?trknbr=890123456789",
      status: "OUT_FOR_DELIVERY",
      statusLabel: "Out for Delivery",
      stepIndex: 3,
      estimatedDelivery: "Today, Oct 14, 2026",
      shippingAddress: "124 Grand Avenue, Suite 400, Chicago, IL 60611",
      origin: "Boston Regional, MA",
      destination: "Chicago Gateway, IL",
      items: [
        { name: "Handcrafted Italian Leather Belt", qty: 1, price: "$180.00", sku: "SKU-3320" },
      ],
      carrierLog: [
        { time: "Oct 14, 07:10 AM", location: "Chicago, IL", detail: "Loaded onto delivery vehicle" },
        { time: "Oct 13, 11:45 PM", location: "Chicago, IL", detail: "Arrived at local distribution center" },
        { time: "Oct 11, 09:00 AM", location: "Boston, MA", detail: "In transit to destination" },
      ]
    },
  ];

  // Past Orders
  const pastOrders = [
    {
      id: "ORD-87123",
      date: "Sep 28, 2026",
      total: "$150.00",
      paymentMethod: "Apple Pay",
      carrier: "FedEx Standard",
      trackingNumber: "654321987012",
      trackingUrl: "#",
      status: "DELIVERED",
      statusLabel: "Delivered",
      estimatedDelivery: "Delivered Sep 30",
      shippingAddress: "124 Grand Avenue, Suite 400, Chicago, IL 60611",
      items: [
        { name: "Organic Pima Cotton Shirts (Pack of 2)", qty: 1, price: "$150.00", sku: "SKU-8812" },
      ]
    },
    {
      id: "ORD-76541",
      date: "Aug 15, 2026",
      total: "$450.00",
      paymentMethod: "Visa •••• 4242",
      carrier: "FedEx Ground",
      trackingNumber: "987654321098",
      trackingUrl: "#",
      status: "DELIVERED",
      statusLabel: "Delivered",
      estimatedDelivery: "Delivered Aug 18",
      shippingAddress: "124 Grand Avenue, Suite 400, Chicago, IL 60611",
      items: [
        { name: "Merino Wool Tailored Blazer", qty: 1, price: "$450.00", sku: "SKU-5541" },
      ]
    },
    {
      id: "ORD-65412",
      date: "Jun 10, 2026",
      total: "$120.00",
      paymentMethod: "Visa •••• 4242",
      carrier: "FedEx Express",
      trackingNumber: "456789123045",
      trackingUrl: "#",
      status: "CANCELLED",
      statusLabel: "Cancelled",
      estimatedDelivery: "N/A",
      shippingAddress: "124 Grand Avenue, Suite 400, Chicago, IL 60611",
      items: [
        { name: "Minimalist Suede Loafers", qty: 1, price: "$120.00", sku: "SKU-2201" },
      ]
    },
  ];

  const allOrders = [...activeOrders, ...pastOrders];

  const filteredOrders = allOrders.filter((order) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      order.id.toLowerCase().includes(query) ||
      order.trackingNumber.includes(query) ||
      order.items.some((item) => item.name.toLowerCase().includes(query));

    if (statusFilter === "ALL") return matchesSearch;
    return matchesSearch && order.status === statusFilter;
  });

  return (
    <div className="min-h-screen bg-[var(--light-gray)] text-[var(--dark-gray)] font-outfit pb-24">
      
      {/* 1. Ultra-Luxury Hero Banner */}
      <div className="relative bg-stone-950 text-white min-h-[340px] flex items-center shadow-xl overflow-hidden border-b border-stone-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000 hover:scale-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/90 to-transparent z-10" />

        <div className="container mx-auto max-w-7xl px-6 relative z-20 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-teal-400 font-semibold mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-stone-600">/</span>
              <span>Client Portal</span>
              <span className="text-stone-600">/</span>
              <span className="text-white">Purchases & Tracking</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-forum tracking-wider text-white uppercase">
              Purchases & Tracking
            </h1>
            <p className="text-xs md:text-sm text-gray-300 max-w-xl mt-3 leading-relaxed">
              Real-time shipment logistics, itemized manifests, and complete order documentation for your private account.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-6 bg-stone-900/80 backdrop-blur-md p-5 border border-white/10 shadow-2xl">
            <div className="text-center px-4 border-r border-stone-800">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">In Transit</span>
              <span className="text-3xl font-forum text-amber-300 font-semibold mt-1 block">{activeOrders.length}</span>
            </div>
            <div className="text-center px-4 border-r border-stone-800">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Delivered</span>
              <span className="text-3xl font-forum text-emerald-400 font-semibold mt-1 block">
                {pastOrders.filter((o) => o.status === "DELIVERED").length}
              </span>
            </div>
            <div className="text-center px-4">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-medium">Total Orders</span>
              <span className="text-3xl font-forum text-white font-semibold mt-1 block">{allOrders.length}</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container px-4 mx-auto max-w-7xl mt-8 space-y-10">
        
      

        {/* 3. Active In-Route Deliveries Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-forum text-stone-900 uppercase tracking-wider m-0">
              Active Shipments ({activeOrders.length})
            </h2>
            <span className="text-xs text-stone-500">Live FedEx API Courier Feeds</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white border border-[var(--border-gray)] p-6 space-y-6 hover:border-stone-900 transition-all shadow-sm"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-teal-800 tracking-wider uppercase block">
                      Order #{order.id}
                    </span>
                    <span className="text-[11px] text-gray-400">Purchased on {order.date}</span>
                  </div>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                    {order.statusLabel}
                  </span>
                </div>

                {/* Progress Visualizer */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                    <span className={order.stepIndex >= 1 ? "text-stone-900 font-bold" : ""}>Placed</span>
                    <span className={order.stepIndex >= 2 ? "text-stone-900 font-bold" : ""}>In Transit</span>
                    <span className={order.stepIndex >= 3 ? "text-stone-900 font-bold" : ""}>Out for Delivery</span>
                    <span className={order.stepIndex >= 4 ? "text-stone-900 font-bold" : ""}>Delivered</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden relative">
                    <div
                      className="bg-stone-900 h-full transition-all duration-700"
                      style={{ width: `${(order.stepIndex / 4) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Logistics Info Box */}
                <div className="grid grid-cols-2 gap-4 text-xs bg-stone-50 p-4 border border-stone-200/60">
                  <div>
                    <span className="text-stone-400 uppercase text-[10px] block font-semibold">Carrier & Tracking</span>
                    <p className="font-semibold text-stone-900 mt-0.5 m-0">{order.carrier}</p>
                    <p className="font-mono text-stone-500 text-[11px]">#{order.trackingNumber}</p>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase text-[10px] block font-semibold">Est. Delivery</span>
                    <p className="font-semibold text-stone-900 mt-0.5 m-0">{order.estimatedDelivery}</p>
                    <p className="text-stone-500 text-[11px]">{order.origin} → {order.destination}</p>
                  </div>
                </div>

                {/* Manifest Summary */}
                <div className="text-xs space-y-1">
                  <span className="text-stone-400 uppercase text-[10px] font-semibold block">Package Contents</span>
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-stone-800 font-medium m-0 flex justify-between">
                      <span>• {item.name} <span className="text-stone-400">(x{item.qty})</span></span>
                      <span>{item.price}</span>
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-xs font-semibold uppercase tracking-wider text-teal-800 hover:text-stone-900 hover:underline transition-colors"
                  >
                    View Complete Manifest →
                  </button>
                  <a
                    href={order.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-stone-900 text-white text-[11px] font-semibold tracking-wider uppercase hover:bg-teal-900 transition-colors"
                  >
                    Track on Carrier Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Complete Orders Table */}
        <section className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-4">
          <div className="pb-4 border-b border-[var(--border-gray)] flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-forum text-stone-900 uppercase tracking-wide m-0">
                Order History & Invoices
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Complete record of past transactions, itemized receipts, and order returns.
              </p>
            </div>
            <span className="text-xs text-stone-400 font-mono">Showing {filteredOrders.length} records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-[var(--border-gray)] text-xs">
              <thead>
                <tr className="bg-[var(--light-gray)] border-b border-[var(--border-gray)] font-forum uppercase tracking-wider text-stone-900">
                  <th className="p-3.5">Order Ref</th>
                  <th className="p-3.5">Date</th>
                  <th className="p-3.5">Items Purchased</th>
                  <th className="p-3.5">Carrier / Tracking</th>
                  <th className="p-3.5">Total Paid</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-gray)]">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-stone-50 transition-colors">
                    <td className="p-3.5 font-semibold text-stone-900">{order.id}</td>
                    <td className="p-3.5 text-stone-600">{order.date}</td>
                    <td className="p-3.5 text-stone-800 max-w-xs truncate">
                      {order.items.map((i) => i.name).join(", ")}
                    </td>
                    <td className="p-3.5 font-mono text-stone-500">
                      {order.carrier} (#{order.trackingNumber})
                    </td>
                    <td className="p-3.5 font-semibold text-stone-900">{order.total}</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider ${
                          order.status === "DELIVERED"
                            ? "bg-emerald-100 text-emerald-800"
                            : order.status === "CANCELLED"
                            ? "bg-stone-100 text-stone-500"
                            : "bg-teal-50 text-teal-800 border border-teal-200"
                        }`}
                      >
                        {order.statusLabel}
                      </span>
                    </td>
                    <td className="p-3.5 text-right space-x-3">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="font-semibold text-teal-800 uppercase hover:underline"
                      >
                        Details
                      </button>
                      <button className="font-semibold text-stone-900 uppercase hover:underline">
                        Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* 5. Detailed Item Manifest Side Drawer */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg h-full shadow-2xl p-6 md:p-8 overflow-y-auto space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-teal-800">
                    Order Manifest
                  </span>
                  <h3 className="text-2xl font-forum text-stone-900 mt-1 m-0">
                    #{selectedOrder.id}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="p-2 text-stone-400 hover:text-stone-900 text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Order Meta */}
              <div className="grid grid-cols-2 gap-4 text-xs bg-stone-50 p-4 border border-stone-200">
                <div>
                  <span className="text-stone-400 uppercase text-[10px] font-semibold block">Date Placed</span>
                  <p className="font-semibold text-stone-900 mt-0.5 m-0">{selectedOrder.date}</p>
                </div>
                <div>
                  <span className="text-stone-400 uppercase text-[10px] font-semibold block">Payment Method</span>
                  <p className="font-semibold text-stone-900 mt-0.5 m-0">{selectedOrder.paymentMethod}</p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-100 pb-2 m-0">
                  Purchased Items ({selectedOrder.items.length})
                </h4>
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-2 border-b border-stone-50">
                    <div>
                      <p className="font-semibold text-stone-900 m-0">{item.name}</p>
                      <p className="text-[10px] font-mono text-stone-400 m-0">{item.sku} • Qty: {item.qty}</p>
                    </div>
                    <span className="font-semibold text-stone-900">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Delivery Address */}
              <div className="space-y-1 text-xs">
                <span className="text-stone-400 uppercase text-[10px] font-semibold block">Shipping Address</span>
                <p className="text-stone-800 m-0 leading-relaxed">{selectedOrder.shippingAddress}</p>
              </div>

              {/* Carrier Feed Log (If Active) */}
              {selectedOrder.carrierLog && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-100 pb-2 m-0">
                    Live Carrier Scan History
                  </h4>
                  <div className="space-y-3 text-xs pl-2 border-l-2 border-stone-200">
                    {selectedOrder.carrierLog.map((log, idx) => (
                      <div key={idx} className="relative pl-3">
                        <span className="text-[10px] text-stone-400 block font-mono">{log.time} • {log.location}</span>
                        <p className="font-medium text-stone-800 m-0">{log.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <div className="flex justify-between text-sm font-semibold text-stone-900">
                <span>Total Amount Paid</span>
                <span>{selectedOrder.total}</span>
              </div>
              <button className="w-full py-3 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-teal-900 transition-colors">
                Download Official PDF Receipt
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}