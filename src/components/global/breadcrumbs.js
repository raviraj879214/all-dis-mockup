"use client";

import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <div className="py-2.5">
      <div className="container-extended">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm p-0! list-none! m-0!">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={index} className="flex items-center gap-2">
                  {!isLast && item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-primary">
                      {item.label}
                    </span>
                  )}

                  {!isLast && <span>/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}