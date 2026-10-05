"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

export default function Header() {
  const [open, setOpen] = useState(false); // search drawer state
  const [menuDeskOpen, setMenuDeskOpen] = useState(false); // desktop menu state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // auth state
  const [isLoggingIn, setIsLoggingIn] = useState(false); // loader modal state

  const pathname = usePathname();
  const router = useRouter();

  // Check if current route is Home page
  const isHomePage = pathname === "/";

  // Prevent body scroll when desktop menu is open
  useEffect(() => {
    if (menuDeskOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [menuDeskOpen]);

  // Handler for "Sell With Us" button click
  const handleSellWithUsClick = (e) => {
    e?.preventDefault();

    setIsLoggingIn(true);

    // Close mobile/desktop menu
    setMenuDeskOpen(false);

    // Simulate login operation before redirecting to seller page
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoggedIn(true);
      router.push("/seller");
    }, 1500);
  };

  // Handler for Logout
  const handleSignOut = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <>
      <header className="relative z-50 text-base md:py-4 py-2 border-b border-[#E8E8E8]">
        <div className="container-extended">
          <div className="flex flex-nowrap items-center justify-between">

            {/* Left Controls: Mega menu & Search */}
            <div className="flex md:gap-2 gap-1.5 items-center w-3/10">

              <div className="menu-bar-wpr ml-2 leading-none">
                <button
                  type="button"
                  className={`menu-bar menu-bar-primary mr-3 ${
                    menuDeskOpen ? "active" : ""
                  }`}
                  onClick={() => {
                    setMenuDeskOpen((prev) => !prev);
                    setOpen(false);
                  }}
                >
                  <svg
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="1" fill="black" />
                    <rect y="7" width="24" height="1" fill="black" />
                    <rect y="14" width="24" height="1" fill="black" />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => {
                  setOpen((prev) => !prev);
                  setMenuDeskOpen(false);
                }}
                className="py-2 px-1 flex items-center gap-1 focus:outline-none"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4441 11.8148L15.8697 15.2404C15.9531 15.3238 16 15.437 16 15.555C16 15.673 15.9531 15.7862 15.8697 15.8697C15.7862 15.9531 15.673 16 15.555 16C15.437 16 15.3238 15.9531 15.2404 15.8697L11.8148 12.4432C10.4294 13.6653 8.62275 14.3003 6.77738 14.2137C4.93202 14.1271 3.1928 13.3257 1.92797 11.9792C0.663135 10.6327 -0.028009 8.84676 0.000869894 6.99959C0.0297487 5.15242 0.776383 3.389 2.08269 2.08269C3.389 0.776383 5.15242 0.0297487 6.99959 0.000869894C8.84676 -0.028009 10.6327 0.663135 11.9792 1.92797C13.3257 3.1928 14.1271 4.93275 12.4441 11.8148ZM7.11101 13.3329C7.92808 13.3329 8.73715 13.172 9.49203 12.8593C10.2469 12.5466 10.9328 12.0883 11.5106 11.5106C12.0883 10.9328 12.5466 10.2469 12.8593 9.49203C13.172 8.73715 13.3329 7.92808 13.3329 7.11101C13.3329 6.29394 13.172 5.48487 12.8593 4.72999C12.5466 3.97512 12.0883 3.28922 11.5106 2.71146C10.9328 2.1337 10.2469 1.6754 9.49203 1.36272C8.73715 1.05004 7.92808 0.889109 7.11101 0.889109C5.46086 0.889109 3.87829 1.54463 2.71146 2.71146C1.54463 3.87829 0.889109 5.46086 0.889109 7.11101C0.889109 8.76116 1.54463 10.3437 2.71146 11.5106C3.87829 12.6774 5.46086 13.3329 7.11101 13.3329Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="shrink w-3/10 text-center">
              <Link href="/">
                <Image
                  src="/images/site-logo.png"
                  alt="Nairobi"
                  width={128}
                  height={70}
                  className="md:max-w-full max-w-25 mx-auto"
                />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex flex-nowrap items-center justify-end gap-4 text-dark-gray w-3/10">
              <div className="flex items-center">

                {/* Wishlist */}
                <Link
                  href="/wishlist"
                  className="inline-block md:px-3 px-1.5 py-4"
                >
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3595 3.1061e-06C10.7279 -0.000722056 10.1031 0.125535 9.52471 0.370748C8.94635 0.615961 8.42711 0.974767 8 1.42436C7.57289 0.974767 7.05365 0.615961 6.47529 0.370748C5.89693 0.125535 5.2721 -0.000722056 4.64052 3.1061e-06C3.40331 0.00817945 2.21997 0.49019 1.35004 1.34031C0.480105 2.19043 -0.00538806 3.33926 4.51155e-05 4.5348C4.51155e-05 8.04699 3.51499 12.2784 7.83446 13.9691C7.94071 14.0103 8.05929 14.0103 8.16554 13.9691C12.485 12.2784 16 8.04699 16 4.5348C16.0054 3.33926 15.5199 2.19043 14.65 1.34031C13.78 0.49019 12.5967 0.00817945 11.3595 3.1061e-06ZM8 13.1128C4.12449 11.5234 0.88193 7.63137 0.88193 4.5348C0.876159 3.56517 1.26863 2.63291 1.97325 1.94253C2.67787 1.25215 3.6371 0.86003 4.64052 0.85218C5.22782 0.853226 5.80646 0.98909 6.32877 1.24858C6.85108 1.50807 7.30212 1.88376 7.64473 2.34471C7.68573 2.39852 7.73924 2.44226 7.80096 2.4724C7.86267 2.50255 7.93085 2.51826 8 2.51826C8.06915 2.51826 8.13733 2.50255 8.19904 2.4724C8.26076 2.39852 8.31427 2.34471 8.35527 2.34471C8.69788 1.88376 9.14892 1.50807 9.67123 1.24858C10.1935 0.98909 10.7722 0.853226 11.3595 0.85218C12.3629 0.86003 13.3221 1.25215 14.0267 1.94253C14.7314 2.63291 15.1238 3.56517 15.1181 4.5348C15.1181 7.63137 11.8755 11.5234 8 13.1128Z"
                      fill="black"
                    />
                  </svg>
                </Link>

                {/* Person Icon Menu - Visible ONLY when logged in */}
                {isLoggedIn && (
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="inline-block md:px-3 px-1.5 py-4 focus:outline-none flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0144 13.2661C15.2491 11.8577 16 10.0153 16 8C16 3.58875 12.4109 0 7.99987 0C3.58855 0 0 3.58875 0 8C0 10.0151 0.750424 11.8572 1.98459 13.2653C2.00552 13.2976 2.03007 13.3268 2.05953 13.3516C3.52472 14.9765 5.64472 16 7.99987 16C10.3553 16 12.4758 14.9762 13.941 13.3511C13.9699 13.3265 13.994 13.2978 14.0144 13.2661ZM7.99987 0.775219C11.9838 0.775219 15.2248 4.01615 15.2248 7.99974C15.226 9.49354 14.7613 10.9505 13.8955 12.1678C13.1632 9.57008 10.7667 7.69844 7.99987 7.69844C5.23307 7.69844 2.83657 9.57008 2.10424 12.1681C1.23865 10.9507 0.774104 9.49374 0.775231 8C0.775231 4.01615 4.01596 0.775219 7.99987 0.775219ZM7.99987 15.2248C5.9207 15.2248 4.0449 14.3405 2.72546 12.9299C3.15752 10.3779 5.39044 8.47366 7.99987 8.47366C10.609 8.47366 12.8422 10.3779 13.2748 12.9296C11.9551 14.3405 10.0793 15.2248 7.99987 15.2248Z"
                          fill="black"
                        />
                        <path
                          d="M7.99987 6.6997C9.30484 6.6997 10.3667 5.63817 10.3667 4.33321C10.3667 3.02826 9.30484 1.96673 7.99987 1.96673C6.6949 1.96673 5.63335 3.02826 5.63335 4.33321C5.63335 5.63817 6.6949 6.6997 7.99987 6.6997ZM7.99987 2.74195C8.87743 2.74195 9.59142 3.45593 9.59142 4.33321C9.59142 5.2105 8.87743 5.92448 7.99987 5.92448C7.12231 5.92448 6.40858 5.21076 6.40858 4.33321C6.40858 3.45567 7.12231 2.74195 7.99987 2.74195Z"
                          fill="black"
                        />
                      </svg>
                    </MenuButton>

                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 mt-2 w-72 origin-top-right rounded-none bg-white shadow-xl ring-1 ring-black/5 focus:outline-none divide-y divide-gray-100 z-50">

                        {/* Logged-in user */}
                        <div className="px-4 py-3">
                          <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">
                            Signed in as
                          </p>
                          <p className="text-sm font-medium text-black truncate">
                            client@example.com
                          </p>
                        </div>

                        <div className="py-2 px-2">

                          {/* My Account */}
                          <MenuItem>
                            {({ active }) => (
                              <Link
                                href="/seller"
                                className={`${
                                  active
                                    ? "bg-gray-100 text-black"
                                    : "text-gray-700"
                                } block px-3 py-2.5 text-xs uppercase tracking-wider font-semibold transition-colors`}
                              >
                                My Account
                              </Link>
                            )}
                          </MenuItem>

                          {/* Purchases - Design 1 */}
                          <Link
                            href="/purchases"
                            className="mt-1 px-3 py-1.5 flex items-center space-x-2 rounded hover:bg-gray-100 transition-colors"
                          >
                            <span className="w-20 text-xs uppercase tracking-wider font-semibold text-gray-700">
                              Purchases
                            </span>

                            <span className="text-[9px] px-1.5 py-0.5 font-normal tracking-normal normal-case rounded border bg-gray-50 text-gray-600 border-gray-200">
                              Design 1
                            </span>
                          </Link>

                          {/* Purchases - Design 2 */}
                          <Link
                            href="/purchases-1"
                            className="px-3 py-1.5 flex items-center space-x-2 rounded hover:bg-gray-100 transition-colors"
                          >
                            <span className="w-20 text-xs uppercase tracking-wider font-semibold text-gray-700">
                              Purchases
                            </span>

                            <span className="text-[9px] px-1.5 py-0.5 font-normal tracking-normal normal-case rounded border bg-amber-50 text-amber-700 border-amber-200">
                              Design 2
                            </span>
                          </Link>

                          {/* My Sales - Design 1 */}
                          <Link
                            href="/sales"
                            className="mt-1 px-3 py-1.5 flex items-center space-x-2 rounded hover:bg-gray-100 transition-colors"
                          >
                            <span className="w-20 text-xs uppercase tracking-wider font-semibold text-gray-700">
                              My Sales
                            </span>

                            <span className="text-[9px] px-1.5 py-0.5 font-normal tracking-normal normal-case rounded border bg-gray-50 text-gray-600 border-gray-200">
                              Design 1
                            </span>
                          </Link>

                          {/* My Sales - Design 2 */}
                          <Link
                            href="/sales-1"
                            className="px-3 py-1.5 flex items-center space-x-2 rounded hover:bg-gray-100 transition-colors"
                          >
                            <span className="w-20 text-xs uppercase tracking-wider font-semibold text-gray-700">
                              My Sales
                            </span>

                            <span className="text-[9px] px-1.5 py-0.5 font-normal tracking-normal normal-case rounded border bg-amber-50 text-amber-700 border-amber-200">
                              Design 2
                            </span>
                          </Link>
                        </div>

                        {/* Sign Out */}
                        <div className="py-1">
                          <MenuItem>
                            {({ active }) => (
                              <button
                                onClick={handleSignOut}
                                className={`${
                                  active
                                    ? "bg-red-50 text-red-700"
                                    : "text-red-600"
                                } block w-full text-left px-4 py-2.5 text-xs uppercase tracking-wider font-semibold transition-colors`}
                              >
                                Sign Out
                              </button>
                            )}
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Transition>
                  </Menu>
                )}

                {/* Cart Link */}
                <Link
                  href="/cart"
                  className="inline-block md:px-3 px-1.5 py-4"
                >
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59446 4.07296L9.48978 2.70262C9.37202 1.1927 8.06359 0 6.49346 0C4.92333 0 3.60181 1.1927 3.49713 2.70262L3.39246 4.07296H1.88775C1.27278 4.07296 0.762493 4.54243 0.710156 5.13878L0.00359853 14.7692C-0.0225703 15.0864 0.0951892 15.4036 0.317624 15.632C0.540059 15.8604 0.854084 16 1.18119 16H11.8188C12.1459 16 12.4599 15.8731 12.6824 15.632C12.9048 15.4036 13.0226 15.0864 12.9964 14.7692L12.2898 5.2276C12.2376 4.58049 11.688 4.08565 11.0207 4.08565H9.59446V4.07296ZM4.2822 2.75337C4.3607 1.6368 5.32895 0.761301 6.49346 0.761301C7.65797 0.761301 8.62621 1.6368 8.70472 2.75337L8.79631 4.07296H4.17752L4.2822 2.75337ZM11.5048 5.27835L12.2113 14.82C12.2244 14.9215 12.1852 15.023 12.1067 15.1118C12.0282 15.1879 11.9235 15.2387 11.8188 15.2387H1.18119C1.07652 15.2387 0.971844 15.2008 0.893337 15.1118C0.814831 15.023 0.775578 14.9342 0.788662 14.82L1.49522 5.18953C1.5083 4.98652 1.6784 4.83426 1.88775 4.83426H3.34012L3.26161 5.84933C3.24853 6.06503 3.40554 6.24266 3.62798 6.25535H3.65414C3.86349 6.25535 4.03359 6.10309 4.04668 5.90008L4.12518 4.83426H8.86173L8.94024 5.90008C8.95332 6.11578 9.13651 6.26804 9.35894 6.25535C9.58138 6.24266 9.73839 6.06503 9.7253 5.84933L9.6468 4.83426H11.0207C11.2693 4.83426 11.4786 5.02458 11.5048 5.27835Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>

              {/* Sell With Us - Desktop only */}
              {isHomePage && !isLoggedIn && (
                <button
                  onClick={handleSellWithUsClick}
                  className="btn btn-primary hidden md:inline-block"
                >
                  Sell With Us
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Drawer */}
        <Transition
          show={open}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-2"
          className="absolute left-0 w-full bg-white shadow-lg border-t border-border z-5"
        >
          <div className="md:px-6 px-4 py-4">
            <form action="" method="get">
              <div className="flex md:gap-5 gap-3 max-w-[1000px] mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  name="s"
                  className="block min-w-0 w-full grow py-1.5 md:px-5 px-4 text-black border border-dark-gray placeholder:text-dark-gray focus:outline-none sm:text-sm/6"
                />

                <button
                  type="submit"
                  className="btn btn-black grow-0 shrink-0 flex-auto md:py-3.5 py-2 md:px-6 px-4"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </Transition>

        {/* Desktop / Mobile Hamburger Menu Sidebar */}
        <Transition
          show={menuDeskOpen}
          enter="transition ease-out duration-200"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-150"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="absolute left-0 w-70 max-w-full bg-white shadow-lg border-t border-border top-0 bottom-[calc(-100vh+100%)] md:text-base text-sm z-7"
        >
          <div className="p-6">

            <div className="text-end -mt-2">
              <button
                type="button"
                onClick={() => {
                  setMenuDeskOpen((prev) => !prev);
                  setOpen(false);
                }}
                className="btn-none"
              >
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71906 20.7457 3.32851Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </button>
            </div>

            <ul className="m-0! list-none! p-0! md:[&_li]:mb-2 [&_li]:mb-1 max-w-300 mx-auto [&_a]:transition [&_a]:hover:text-black">

              {/* Sell With Us - Mobile only */}
              {isHomePage && !isLoggedIn && (
                <li className="md:hidden! mb-5!">
                  <button
                    type="button"
                    onClick={handleSellWithUsClick}
                    className="btn btn-primary w-full text-center"
                  >
                    Sell With Us
                  </button>
                </li>
              )}

              <li>
                <Link
                  href="/contact-us"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/support/"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  Support
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  onClick={() => setMenuDeskOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </Transition>

        {/* Backdrop overlay for mega menu */}
        <Transition
          show={menuDeskOpen}
          enter="opacity ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="opacity ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute top-0 left-0 bottom-[calc(-100vh+100%)] w-full bg-[rgba(0,0,0,0.4)] z-1"
          onClick={() => {
            setMenuDeskOpen((prev) => !prev);
            setOpen(false);
          }}
        >
          <div></div>
        </Transition>
      </header>

      {/* Logging In Modal / Loader Transition */}
      <Transition
        show={isLoggingIn}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
      >
        <div className="bg-white p-6 rounded-none shadow-2xl flex flex-col items-center justify-center gap-3 w-64 border border-gray-200">

          <svg
            className="animate-spin h-8 w-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>

          <span className="text-sm font-medium uppercase tracking-wider text-black">
            Logging in...
          </span>
        </div>
      </Transition>
    </>
  );
}