"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function CentralizedDashboard() {
  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    {
      id: "account",
      label: "Account Info",
      internal: true,
    },
    {
      id: "purchases-v1",
      label: "Purchases",
      badge: "Design 1",
      href: "/purchases",
      internal: false,
    },
    {
      id: "purchases-v2",
      label: "Purchases",
      badge: "Design 2",
      href: "/purchases-1",
      internal: false,
    },
    {
      id: "sales-v1",
      label: "Sales",
      badge: "Design 1",
      href: "/sales",
      internal: false,
    },
    {
      id: "sales-v2",
      label: "Sales",
      badge: "Design 2",
      href: "/sales-1",
      internal: false,
    },
    {
      id: "contact",
      label: "Contact",
      internal: true,
    },
  ];

  const getMobileClassName = (isActive) => {
    return `whitespace-nowrap px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border flex items-center gap-1.5 ${
      isActive
        ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-sm"
        : "bg-gray-50 text-[var(--dark-gray)] border-[var(--border-gray)] hover:bg-gray-100"
    }`;
  };

  const getDesktopClassName = (isActive) => {
    return `w-full text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-200 border-l-2 flex items-center justify-between ${
      isActive
        ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--light-gray)]"
        : "border-transparent hover:bg-gray-50 text-[var(--dark-gray)]"
    }`;
  };

  const handleTabClick = (tab) => {
    if (tab.internal) {
      setActiveTab(tab.id);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--light-gray)] text-[var(--dark-gray)] font-outfit py-6 md:py-12">
      <main className="container px-4 mx-auto max-w-7xl">

        {/* Mobile View */}
        <div className="block lg:hidden mb-6 bg-white border border-[var(--border-gray)] p-2 shadow-sm rounded-none">
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none pb-1 pt-1 px-1">

            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              const content = (
                <>
                  <span>{tab.label}</span>

                  {tab.badge && (
                    <span
                      className={`text-[9px] px-1 py-0.2 tracking-normal normal-case rounded ${
                        isActive
                          ? "bg-white/20 text-white border border-white/30 font-medium"
                          : tab.badge === "Design 2"
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : "bg-gray-200 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </>
              );

              // Account / Contact
              if (tab.internal) {
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab)}
                    className={getMobileClassName(isActive)}
                  >
                    {content}
                  </button>
                );
              }

              // Purchases / Sales
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={getMobileClassName(isActive)}
                >
                  {content}
                </Link>
              );
            })}

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block bg-white border border-[var(--border-gray)] p-6 shadow-sm w-72">

            <div className="mb-6 pb-4 border-b border-[var(--border-gray)]">
              <h4 className="text-xl font-forum uppercase tracking-widest text-[var(--black)] m-0">
                My Account
              </h4>

              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                Dashboard & Settings
              </p>
            </div>

            <nav className="flex flex-col space-y-2">

              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                const content = (
                  <>
                    <div className="flex items-center space-x-2">
                      <span>{tab.label}</span>

                      {tab.badge && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 font-normal tracking-normal normal-case rounded border ${
                            tab.badge === "Design 2"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-gray-50 text-gray-600 border-gray-200"
                          }`}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </div>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    )}
                  </>
                );

                // Account / Contact - NO REDIRECT
                if (tab.internal) {
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabClick(tab)}
                      className={getDesktopClassName(isActive)}
                    >
                      {content}
                    </button>
                  );
                }

                // Purchases / Sales - REDIRECT
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={getDesktopClassName(isActive)}
                  >
                    {content}
                  </Link>
                );
              })}

            </nav>

            <div className="mt-8 pt-6 border-t border-[var(--border-gray)]">
              <button className="btn btn-primary-outline w-full text-center text-xs py-2.5">
                Logout
              </button>
            </div>

          </aside>

          {/* Main Content */}
          <section className="lg:col-span-3 bg-white border border-[var(--border-gray)] p-5 md:p-10 shadow-sm">

            {activeTab === "account" && <FullAccountInfoSection />}

            {activeTab === "contact" && <ContactSection />}

          </section>

        </div>
      </main>
    </div>
  );
}

/* ========================================================================
   ACCOUNT INFO SECTION
   ======================================================================== */
function FullAccountInfoSection() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      fullName: "John Doe",
      street: "123 Health Ave, Suite 400",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 (555) 000-0000",
      isDefault: true,
      type: "Billing",
    },
    {
      id: 2,
      fullName: "John Doe",
      street: "456 Care Boulevard, Apt 2B",
      city: "Brooklyn",
      state: "NY",
      zip: "11201",
      phone: "+1 (555) 999-8888",
      isDefault: false,
      type: "Shipping",
    },
  ]);

  const [editingAddressId, setEditingAddressId] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    type: "Shipping",
  });

  const handleEditClick = (address) => {
    setEditingAddressId(address.id);
    setIsAddingNew(false);
    setFormData({
      fullName: address.fullName,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
      phone: address.phone,
      type: address.type,
    });
  };

  const handleAddNewClick = () => {
    setIsAddingNew(true);
    setEditingAddressId(null);
    setFormData({
      fullName: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      type: "Shipping",
    });
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();

    if (editingAddressId !== null) {
      setAddresses((prev) =>
        prev.map((item) =>
          item.id === editingAddressId ? { ...item, ...formData } : item
        )
      );
      setEditingAddressId(null);
    } else if (isAddingNew) {
      const newAddress = {
        id: Date.now(),
        ...formData,
        isDefault: false,
      };
      setAddresses((prev) => [...prev, newAddress]);
      setIsAddingNew(false);
    }
  };

  const handleCancelForm = () => {
    setEditingAddressId(null);
    setIsAddingNew(false);
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prev) => prev.filter((item) => item.id !== id));
    if (editingAddressId === id) setEditingAddressId(null);
  };

  const favorites = [
    { id: 1, name: "Premium Health Consultation Package", price: "$299.00", inStock: true },
    { id: 2, name: "Executive Diagnostic Screening", price: "$450.00", inStock: true },
  ];

  return (
    <div className="space-y-10 md:space-y-12 divide-y divide-[var(--border-gray)]">
      
      {/* Personal Info & Security */}
      <div>
        <div className="pb-4 mb-6 border-b border-[var(--border-gray)]">
          <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)] m-0">Personal Info & Security</h2>
          <p className="text-xs md:text-sm text-gray-500 font-outfit mt-1">
            Manage your personal profile credentials and login details.
          </p>
        </div>

        <form className="space-y-4 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                Username
              </label>
              <input
                type="text"
                defaultValue="johndoe_user"
                className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                First Name
              </label>
              <input
                type="text"
                defaultValue="John"
                className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>
          </div>

          <div className="pt-2">
            <h4 className="text-base font-forum text-[var(--black)] mb-2 uppercase">Change Password</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Update Details
            </button>
          </div>
        </form>
      </div>

      {/* Address Book */}
      <div className="pt-8 md:pt-10">
        <div className="pb-4 mb-6 border-b border-[var(--border-gray)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)] m-0">Address Book</h2>
            <p className="text-xs md:text-sm text-gray-500 font-outfit mt-1">
              Manage saved billing and shipping locations.
            </p>
          </div>
          {!isAddingNew && editingAddressId === null && (
            <button onClick={handleAddNewClick} className="btn btn-primary-outline text-xs self-start sm:self-auto">
              Add New Address
            </button>
          )}
        </div>

        {/* Dynamic Edit/Add Form */}
        {(editingAddressId !== null || isAddingNew) && (
          <form
            onSubmit={handleSaveAddress}
            className="mb-8 border border-[var(--primary)] p-4 md:p-6 bg-[var(--light-gray)] space-y-4"
          >
            <h4 className="font-forum text-lg md:text-xl uppercase text-[var(--primary)] m-0">
              {isAddingNew ? "Add New Address" : "Edit Address"}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  Address Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
                >
                  <option value="Shipping">Shipping</option>
                  <option value="Billing">Billing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                Street Address
              </label>
              <input
                type="text"
                required
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  State
                </label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                  ZIP Code
                </label>
                <input
                  type="text"
                  required
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-[var(--border)] p-2.5 bg-white text-sm focus:outline-none focus:border-[var(--primary)]"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button type="submit" className="btn btn-primary text-xs py-2 px-5">
                Save Address
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="btn btn-primary-outline text-xs py-2 px-5"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Address Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className={`border p-5 relative bg-[var(--light-gray)] transition-all ${
                editingAddressId === addr.id ? "border-[var(--primary)] shadow-md" : "border-[var(--border-gray)]"
              }`}
            >
              <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-[var(--primary)] text-white mb-3">
                {addr.type} {addr.isDefault && "• Default"}
              </span>
              <h5 className="font-forum text-lg text-[var(--black)] mb-1">{addr.fullName}</h5>
              <p className="text-sm text-gray-600 mb-1">{addr.street}</p>
              <p className="text-sm text-gray-600 mb-1">{addr.city}, {addr.state} {addr.zip}</p>
              <p className="text-sm text-gray-600 mb-4">{addr.phone}</p>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleEditClick(addr)}
                  className="btn-none text-xs font-bold text-[var(--primary)] uppercase underline cursor-pointer"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteAddress(addr.id)}
                  className="btn-none text-xs font-bold text-red-600 uppercase underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Info */}
      <div className="pt-8 md:pt-10">
        <div className="pb-4 mb-6 border-b border-[var(--border-gray)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)] m-0">Payment Info</h2>
            <p className="text-xs md:text-sm text-gray-500 font-outfit mt-1">
              Saved payment methods for quick checkout.
            </p>
          </div>
          <button className="btn btn-primary-outline text-xs self-start sm:self-auto">Add Payment Method</button>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border border-[var(--border-gray)] p-4 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-[var(--primary)] text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider shrink-0">
                VISA
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--black)] mb-0">Visa ending in 4242</p>
                <p className="text-xs text-gray-500 mb-0">Expires 12/28 • Default</p>
              </div>
            </div>
            <button className="btn-none text-xs font-bold text-[var(--primary)] uppercase underline">Manage</button>
          </div>
        </div>
      </div>

      {/* Favorite Items */}
      <div className="pt-8 md:pt-10">
        <div className="pb-4 mb-6 border-b border-[var(--border-gray)]">
          <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)] m-0">Favorite Items</h2>
          <p className="text-xs md:text-sm text-gray-500 font-outfit mt-1">
            Packages and items saved in your wishlist.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-[var(--border-gray)] text-sm">
            <thead>
              <tr className="bg-[var(--light-gray)] border-b border-[var(--border-gray)] font-forum uppercase tracking-wider text-[var(--black)]">
                <th className="p-3">Item</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-gray)]">
              {favorites.map((fav) => (
                <tr key={fav.id} className="hover:bg-gray-50">
                  <td className="p-3 font-medium text-[var(--black)]">{fav.name}</td>
                  <td className="p-3 font-semibold">{fav.price}</td>
                  <td className="p-3 text-right">
                    <button className="btn btn-primary text-xs py-1.5 px-3">View Item</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="pt-8 md:pt-10">
        <div className="pb-4 mb-4 border-b border-[var(--border-gray)]">
          <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)] m-0">Terms & Conditions</h2>
          <p className="text-xs md:text-sm text-gray-500 font-outfit mt-1">
            Account guidelines, user agreement, and privacy commitments.
          </p>
        </div>

        <div className="border border-[var(--border-gray)] bg-[var(--light-gray)] p-4 md:p-5 text-sm space-y-3 max-h-48 overflow-y-auto">
          <h5 className="font-forum text-base text-[var(--black)] uppercase mb-1">1. Account Security</h5>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            You are responsible for maintaining confidentiality regarding your credentials.
          </p>
          <h5 className="font-forum text-base text-[var(--black)] uppercase mb-1">2. Privacy & Data Handling</h5>
          <p className="text-xs text-gray-600 leading-relaxed mb-0">
            We store address and profile information strictly for order processing.
          </p>
        </div>
      </div>

    </div>
  );
}

/* ========================================================================
   CONTACT SECTION
   ======================================================================== */
function ContactSection() {
  return (
    <div className="space-y-6">
      <div className="border-b border-[var(--border-gray)] pb-4">
        <h2 className="text-2xl md:text-3xl font-forum text-[var(--black)]">Contact & Support</h2>
        <p className="text-xs md:text-sm text-gray-500 mb-0 font-outfit">
          Reach out to our support team or send us an inquiry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase font-semibold mb-1 tracking-wider text-[var(--dark-gray)]">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your inquiry here..."
              className="w-full border border-[var(--border)] p-3 text-sm focus:outline-none focus:border-[var(--primary)]"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full md:w-auto">
            Send Message
          </button>
        </form>

        <div className="space-y-4 bg-[var(--light-gray)] p-6 border border-[var(--border-gray)]">
          <h4 className="text-lg font-forum text-[var(--black)] mb-2 uppercase">Direct Support</h4>
          <p className="text-sm font-outfit">
            <strong>Email:</strong> support@example.com
          </p>
          <p className="text-sm font-outfit">
            <strong>Phone:</strong> +1 (800) 555-0199
          </p>
        </div>
      </div>
    </div>
  );
}