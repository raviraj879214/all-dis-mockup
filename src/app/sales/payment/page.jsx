import React from "react";

export default function PaymentPage() {
  return (
    <div className="bg-white border border-[var(--border-gray)] p-6 md:p-8 shadow-sm space-y-6">
      <div className="pb-4 border-b border-[var(--border-gray)]">
        <h1 className="text-2xl font-forum text-[var(--black)] uppercase tracking-wide m-0">
          Payment Method & Direct Payouts
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Configure payout bank accounts where sales earnings are sent.
        </p>
      </div>

      <div className="space-y-4 text-xs">
        <div className="p-5 border border-[var(--primary)] bg-[var(--light-gray)] flex items-center justify-between">
          <div>
            <span className="px-2 py-0.5 bg-[var(--primary)] text-white font-bold text-[10px] uppercase tracking-wider">
              Primary Payout Method
            </span>
            <p className="font-bold text-sm text-[var(--black)] mt-2 m-0">Chase Business Checking</p>
            <p className="text-gray-500 font-mono mt-0.5 m-0">Account ending in •••• 4892</p>
          </div>
          <button className="text-xs font-bold text-[var(--primary)] uppercase underline hover:opacity-80">
            Edit
          </button>
        </div>

        <div className="p-5 border border-[var(--border-gray)] flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-[var(--black)] m-0">Stripe Connect Integration</p>
            <p className="text-gray-500 font-mono mt-0.5 m-0">Connected Account: sales@clinic.com</p>
          </div>
          <span className="text-green-700 font-bold uppercase text-[10px] bg-green-100 px-2 py-0.5">
            Connected
          </span>
        </div>

        <div className="pt-2">
          <button className="btn btn-primary-outline text-xs py-2.5 px-5 font-bold uppercase">
            + Add Alternative Payout Method
          </button>
        </div>
      </div>
    </div>
  );
}