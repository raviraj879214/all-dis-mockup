"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock database for demo matching your reference image
const mockProductDetails = {
  id: "#ALLDISPRODUCT00000183",
  name: "PREMIUM COTTON CASUAL SHIRT",
  price: "$200.00",
  category: "Clothing",
  images: ["/placeholder-casual.jpg"],
  attributes: [
    { label: "Clothing Size", value: "Medium" },
    { label: "Model", value: "Medium" },
    { label: "Material", value: "Rayon" },
    { label: "Fabric Type", value: "100% Silk" },
    { label: "Pattern", value: "Printed" },
    { label: "Fit", value: "Slim Fit" },
    { label: "Occasion", value: "Casual" },
    { label: "Lining", value: "No" },
    { label: "Care Instructions", value: "Hand Wash" },
    { label: "Season", value: "Summer" },
    { label: "Year", value: "2024" },
    { label: "Authenticity", value: "Pending Verification" },
    { label: "Country of Origin", value: "Vietnam" },
    { label: "Returnable", value: "Yes" },
    { label: "Condition", value: "New With Tag" },
    { label: "Style", value: "Over-sized" },
    { label: "Color", value: "Yellow" },
    { label: "Size", value: "M" },
    { label: "Sleeve Type", value: "Three-Quarter Sleeve" },
    { label: "Front Type", value: "Flat Front" },
    { label: "Specialty", value: "New" },
    { label: "Closure", value: "Zip" },
    { label: "Pockets Type", value: "Slanted Pocket" },
    { label: "Placement", value: "In Stores" },
    { label: "Gender", value: "Unisex" },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non arcu sed quam pharetra facilisis non sed arcu. Aliquam tempor lectus id urna gravida, nec pellentesque arcu tristique. Nunc euismod efficitur sem euismod. Curabitur sed lectus finibus, maximus ligula non, pharetra dolor. Phasellus vel lorem diam. Aliquam pretium dolor non diam sagittis, sed pretium eros viverra. In sed risus nec tellus elementum sodales id non libero. Curabitur id urna gravida, nec pellentesque arcu tristique.",
  pickupAddress: {
    fullName: "Raviraj RTT Private Limited",
    streetAddress1: "Building 102, Floor 4, Silicon Avenue",
    streetAddress2: "--",
    city: "San Francisco",
    state: "CA",
    postalCode: "94103",
    country: "US",
    phone: "1234567890",
    isPrimary: "No",
  },
  dimensions: {
    length: "10 in",
    width: "10 in",
    height: "10 in",
    weight: "0.5 lbs",
  },
};

export default function ProductDetailsPage() {
  const params = useParams();
  const product = mockProductDetails; // In real app, fetch using params.id

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <nav className="text-xs text-gray-500 flex items-center space-x-2">
          <Link href="/sales/products" className="hover:underline">
            Products
          </Link>
          <span>/</span>
          <span className="text-[var(--black)] font-semibold">
            Product Details
          </span>
        </nav>
        <Link
          href="/sales/products"
          className="text-xs font-bold text-[var(--primary)] uppercase underline hover:opacity-80"
        >
          ← Back to Product List
        </Link>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-8">
        
        {/* SECTION 1: Product Images Preview */}
        <div>
          <div className="w-40 h-40 bg-gray-100 border border-[var(--border-gray)] rounded overflow-hidden flex items-center justify-center relative">
            <span className="absolute top-2 left-2 bg-[var(--black)] text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
              1/1
            </span>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* SECTION 2: Product Key Summary Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[var(--light-gray)] border border-[var(--border-gray)] text-xs">
          <div>
            <span className="text-gray-400 font-bold uppercase text-[10px] block mb-1">
              Product Name
            </span>
            <span className="font-bold text-sm text-[var(--black)] tracking-wide">
              {product.name}
            </span>
          </div>
          <div>
            <span className="text-gray-400 font-bold uppercase text-[10px] block mb-1">
              Price
            </span>
            <span className="font-bold text-sm text-emerald-600">
              {product.price}
            </span>
          </div>
          <div>
            <span className="text-gray-400 font-bold uppercase text-[10px] block mb-1">
              Category
            </span>
            <span className="inline-block px-2.5 py-1 bg-blue-50 text-blue-600 font-medium rounded text-[11px]">
              {product.category}
            </span>
          </div>
        </div>

        {/* SECTION 3: Product Attributes Table */}
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-[var(--border-gray)]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--black)] m-0 font-forum">
              Product Attributes
            </h2>
            <button className="text-xs font-bold text-blue-600 uppercase underline hover:opacity-80">
              Edit Attributes
            </button>
          </div>

          <div className="border border-[var(--border-gray)] divide-y divide-[var(--border-gray)] text-xs">
            {product.attributes.map((attr, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 hover:bg-[var(--light-gray)] transition-colors"
              >
                <span className="text-gray-500 font-medium">{attr.label}</span>
                <span className="font-semibold text-[var(--black)]">
                  {attr.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Product Description */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--black)] m-0 font-forum pb-2 border-b border-[var(--border-gray)]">
            Product Description
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed font-outfit">
            {product.description}
          </p>
        </div>

        {/* SECTION 5: Pickup Address */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--black)] m-0 font-forum pb-2 border-b border-[var(--border-gray)]">
            Pickup Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-gray-400 block mb-1">Full Name</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.fullName}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Address Line 1</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.streetAddress1}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Address Line 2</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.streetAddress2}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">City</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.city}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">State</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.state}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Postal Code</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.postalCode}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Country</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.country}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block mb-1">Primary Address</span>
              <span className="font-bold text-[var(--black)]">
                {product.pickupAddress.isPrimary}
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 6: Product Dimensions */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--black)] m-0 font-forum pb-2 border-b border-[var(--border-gray)]">
            Product Dimensions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)] text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                Length
              </span>
              <span className="text-sm font-bold text-[var(--black)] font-forum">
                {product.dimensions.length}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)] text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                Width
              </span>
              <span className="text-sm font-bold text-[var(--black)] font-forum">
                {product.dimensions.width}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)] text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                Height
              </span>
              <span className="text-sm font-bold text-[var(--black)] font-forum">
                {product.dimensions.height}
              </span>
            </div>
            <div className="p-4 bg-[var(--light-gray)] border border-[var(--border-gray)] text-center">
              <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                Weight
              </span>
              <span className="text-sm font-bold text-[var(--black)] font-forum">
                {product.dimensions.weight}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}