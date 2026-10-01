"use client";

import React from "react";
import Link from "next/link";

const initialProducts = [
  {
    id: "#ALLDISPRODUCT00000185",
    name: "Premium Checkered Shirt",
    image: "/placeholder-shirt.jpg",
    status: "Edit",
    price: "$5,500.00",
    flashsaleActive: false,
  },
  {
    id: "#ALLDISPRODUCT00000184",
    name: "Pro Tour Golf Polo",
    image: "/placeholder-golf.jpg",
    status: "Edit",
    price: "$800.00",
    flashsaleActive: false,
  },
  {
    id: "#ALLDISPRODUCT00000183",
    name: "Premium Cotton Casual Shirt",
    image: "/placeholder-casual.jpg",
    status: "Sent for Review",
    price: "$200.00",
    flashsaleActive: false,
  },
  {
    id: "#ALLDISPRODUCT00000182",
    name: "Classic Oxford Shirt",
    image: "/placeholder-oxford.jpg",
    status: "Edit",
    price: "$100.00",
    flashsaleActive: false,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-6">
      <div className="pb-4 border-b border-[var(--border-gray)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-forum text-[var(--black)] uppercase tracking-wide m-0">
          List of Products
        </h1>
        <Link
          href="/sales/add-product"
          className="btn btn-primary text-xs py-2.5 px-5 uppercase tracking-wider self-start sm:self-auto shrink-0 inline-block text-center"
        >
          + Post New Item
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm">
          <thead>
            <tr className="border-b border-[var(--border-gray)] font-bold uppercase tracking-wider text-gray-500 text-[11px]">
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4 text-center">Active Flashsale</th>
              <th className="py-3 px-4 text-center">Product Status</th>
              <th className="py-3 px-4 text-right">Product Price</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-gray)]">
            {initialProducts.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                {/* Product Name with Thumbnail and ID */}
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 font-mono tracking-tight">
                        {item.id}
                      </span>
                      <span className="font-semibold text-[var(--black)]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Flashsale Button */}
                <td className="py-4 px-4 text-center">
                  <button className="inline-flex items-center gap-1 px-3 py-1.5 border border-orange-400 text-orange-500 hover:bg-orange-50 rounded font-semibold text-xs tracking-wide transition-colors">
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 2L3 14h7v8l10-12h-7z" />
                    </svg>
                    Activate Flash Sale
                  </button>
                </td>

                {/* Status Badge */}
                <td className="py-4 px-4 text-center">
                  {item.status === "Sent for Review" ? (
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-medium">
                      Sent for Review
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[11px] font-medium">
                      Edit
                    </span>
                  )}
                </td>

                {/* Price */}
                <td className="py-4 px-4 text-right font-bold text-[var(--black)]">
                  {item.price}
                </td>

                {/* Action Icons */}
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center space-x-3 text-blue-500">
                    <button
                      title="Edit"
                      className="hover:opacity-75 transition-opacity"
                    >
                      <svg
                        className="w-4 h-4 stroke-current fill-none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>

                    <span className="text-gray-300">/</span>

                    <button
                      title="Delete"
                      className="text-red-400 hover:opacity-75 transition-opacity"
                    >
                      <svg
                        className="w-4 h-4 stroke-current fill-none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>

                    <span className="text-gray-300">/</span>

                    <Link
  href={`/sales/products/${item.id.replace('#', '')}`}
  title="View"
  className="hover:opacity-75 transition-opacity inline-flex items-center"
>
  <svg
    className="w-4 h-4 stroke-current fill-none"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="flex items-center gap-2 pt-4 border-t border-[var(--border-gray)] text-xs">
        <button
          disabled
          className="px-3 py-1.5 border border-gray-200 text-gray-400 rounded cursor-not-allowed"
        >
          Previous
        </button>
        <button className="px-3 py-1.5 bg-blue-600 text-white font-bold rounded">
          1
        </button>
        <button className="px-3 py-1.5 border border-gray-200 text-gray-600 hover:bg-gray-50 rounded">
          Next
        </button>
      </div>
    </div>
  );
}