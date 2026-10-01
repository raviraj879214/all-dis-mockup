"use client";
import { useState, useEffect } from "react";

import {
  Transition,
} from "@headlessui/react";

import ProductCard from "@/components/cards/productCard";
import Breadcrumbs from "@/components/global/breadcrumbs";
import Filters from "@/components/listing/filters";

export default function Categories(){

    const [filters, setfilters] = useState(false);

    // Prevent body scroll when Filter Modal Opem
    useEffect(() => {
        if (filters) {
            document.body.classList.add("overflow-hidden");
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
            document.documentElement.classList.remove("overflow-hidden");
        }
    }, [filters]);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Men", href: "/categories" },
        { label: "Necklaces" },
    ];

    const categories = [
        {
            id: 1,
            title: "ALL-DIS",
            image: "/images/all-dis.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 2,
            title: "Watches",
            image: "/images/Watches.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 3,
            title: "Bags",
            image: "/images/bags.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 4,
            title: "Shoes",
            image: "/images/shoes.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 5,
            title: "Clothing",
            image: "/images/clothing.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 6,
            title: "Jewelry",
            image: "/images/jewelry.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 7,
            title: "Golf",
            image: "/images/golf.png",
            price: "149.00",
            link: "/product"
        },
        {
            id: 8,
            title: "More",
            image: "/images/heels.png",
            price: "149.00",
            link: "/product"
        }
    ];
    

    return(
        <>
        <Breadcrumbs items={breadcrumbs}/>
        <div className="md:pt-10 md:pb-12.5 pt-2 pb-6">
            <div className="container">
                <div className="flex flex-wrap gap-4 items-center justify-between mb-7.5">
                    <div><b>478</b> Results</div>
                    <div className="flex gap-4.5 md:grow-0 grow">
                        <button type="button" className="btn btn-primary inline-flex items-center gap-2.5 md:w-auto w-1/2"
                        onClick={() => {
                            setfilters((prev) => !prev);
                        }}>
                            <svg width="16" height="16" className="flex-none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 14C16 14.4 15.7333 14.6667 15.3333 14.6667H7.2C6.93333 15.4667 6.2 16 5.33333 16C4.46667 16 3.73333 15.4667 3.46667 14.6667H0.666667C0.266667 14.6667 0 14.4 0 14C0 13.6 0.266667 13.3333 0.666667 13.3333H3.46667C3.73333 12.5333 4.46667 12 5.33333 12C6.2 12 6.93333 12.5333 7.2 13.3333H15.3333C15.7333 13.3333 16 13.6 16 14ZM15.3333 7.33333H12.5333C12.2667 6.53333 11.5333 6 10.6667 6C9.8 6 9.06667 6.53333 8.8 7.33333H0.666667C0.266667 7.33333 0 7.6 0 8C0 8.4 0.266667 8.66667 0.666667 8.66667H8.8C9.06667 9.46667 9.8 10 10.6667 10C11.5333 10 12.2667 9.46667 12.5333 8.66667H15.3333C15.7333 8.66667 16 8.4 16 8C16 7.6 15.7333 7.33333 15.3333 7.33333ZM0.666667 2.66667H3.46667C3.73333 3.46667 4.46667 4 5.33333 4C6.2 4 6.93333 3.46667 7.2 2.66667H15.3333C15.7333 2.66667 16 2.4 16 2C16 1.6 15.7333 1.33333 15.3333 1.33333H7.2C6.93333 0.533333 6.2 0 5.33333 0C4.46667 0 3.73333 0.533333 3.46667 1.33333H0.666667C0.266667 1.33333 0 1.6 0 2C0 2.4 0.266667 2.66667 0.666667 2.66667Z" fill="white"/></svg> Filter By
                        </button>
                        <div className="p-0 md:w-auto w-1/2">
                            <select name="sort_by" id="filter-sort" className="appearance-none btn inline-flex items-center justify-start gap-5 py-2 px-4 h-full font-medium w-40 text-start bg-[url('/images/arrow-down.svg')] bg-size-[14px] bg-no-repeat bg-position-[calc(100%-10px)_center] w-full" defaultValue="">
                                <option value="" disabled>Sort By</option>
                                <option value="ratings">Newest</option>
                                <option value="ratings">Oldest</option>
                                <option value="ratings">Ratings</option>
                                <option value="ratings">Name</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
                    {categories.map((item) => (
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            link={item.link}
                            price={item.price}
                        />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button type="button" className="btn btn-primary-outline">Load More</button>
                </div>
            </div>
        </div>
        <Transition
            show={filters}
            enter="transition ease-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
            className="fixed right-0 w-75 max-w-full h-full overflow-auto bg-white border-l border-border-gray top-0 bottom-[calc(-100vh+100%)] md:text-base text-sm z-999">
            <div>
                <Filters setfilters={setfilters}/>
            </div>
        </Transition>
        </>
    )
}