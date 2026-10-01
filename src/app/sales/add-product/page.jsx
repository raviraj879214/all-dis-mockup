"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [productForm, setProductForm] = useState({
    title: "",
    category: "Consultation Vouchers",
    price: "",
    stock: "",
    description: "",
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productForm.title || !productForm.price) return;

    // Perform API post / database action here

    router.push("/sales/products");
  };

  return (
    <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-6">
      <div className="pb-4 border-b border-[var(--border-gray)]">
        <h1 className="text-2xl font-forum text-[var(--black)] uppercase tracking-wide m-0">
          Add New Product
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          List a new medical package, kit, or consultation voucher for sale.
        </p>
      </div>

      <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
        <div>
          <label className="block uppercase font-bold text-gray-700 mb-1">Product Title</label>
          <input
            type="text"
            required
            value={productForm.title}
            onChange={(e) => setProductForm({ ...productForm, title: e.target.value })}
            placeholder="e.g. Comprehensive Cardiac Screening"
            className="w-full border border-[var(--border-gray)] p-2.5 focus:outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block uppercase font-bold text-gray-700 mb-1">Category</label>
            <select
              value={productForm.category}
              onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
              className="w-full border border-[var(--border-gray)] p-2.5 bg-white focus:outline-none focus:border-[var(--primary)]"
            >
              <option value="Consultation Vouchers">Consultation Vouchers</option>
              <option value="Medical Package">Medical Package</option>
              <option value="Diagnostic Kit">Diagnostic Kit</option>
            </select>
          </div>
          <div>
            <label className="block uppercase font-bold text-gray-700 mb-1">Price ($)</label>
            <input
              type="number"
              required
              value={productForm.price}
              onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
              placeholder="250.00"
              className="w-full border border-[var(--border-gray)] p-2.5 focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block uppercase font-bold text-gray-700 mb-1">Initial Stock Quantity</label>
            <input
              type="number"
              value={productForm.stock}
              onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
              placeholder="30"
              className="w-full border border-[var(--border-gray)] p-2.5 focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
        </div>

        <div>
          <label className="block uppercase font-bold text-gray-700 mb-1">Product Description</label>
          <textarea
            rows={4}
            value={productForm.description}
            onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
            placeholder="Include details about package offerings, terms, and fulfillment instructions..."
            className="w-full border border-[var(--border-gray)] p-2.5 focus:outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="pt-2 flex gap-3">
          <button type="submit" className="btn btn-primary py-2.5 px-6 uppercase font-bold text-xs">
            Save & Publish Product
          </button>
          <button
            type="button"
            onClick={() => router.push("/sales/products")}
            className="btn btn-primary-outline py-2.5 px-6 uppercase font-bold text-xs"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}