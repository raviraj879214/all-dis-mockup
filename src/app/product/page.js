import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/components/cards/productCard";
import Breadcrumbs from "@/components/global/breadcrumbs";
import Accordion from "@/components/single/accordion";
import SwiperInit from "@/components/SwiperInit";

export default function Product(){

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Men", href: "/categories" },
        { label: "Necklaces", href: "/shop" },
        { label: "Silver Nacklace" }
    ];

    const products = [
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
    
     const accItems = [
    {
      id: 1,
      title: "Product Details",
      content: (
        <>
        <ul>
            <li>100% Original</li>
            <li>By Alsooni</li>
        </ul>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Shipping & Returns",
      content: (
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
      ),
    }
  ];

    return(
        <>
        <Breadcrumbs items={breadcrumbs}/>
        <div className="md:pt-3 pt-0 md:pb-10 pb-5">
            <div className="container">
                <div className="flex flex-wrap -mx-3.5 -mb-7">
                    <div className="px-3.5 mb-7 lg:w-8/12 md:w-7/12 w-full">
                        <div className="flex lg:flex-nowrap flex-wrap gap-3.5 [&_.thumbSwiper]:opacity-0 [&_.thumbSwiper.swiper-initialized]:opacity-100 lg:[&_.thumbSwiper]:min-h-full [&_.thumbSwiper_.swiper-slide]:opacity-40 [&_.thumbSwiper_.swiper-slide]:cursor-pointer [&_.thumbSwiper_.swiper-slide-thumb-active]:opacity-100 [&_.thumbSwiper_.swiper-slide-thumb-active]:border-primary lg:[&_.thumbSwiper]:h-0 [&_.thumbSwiper_.swiper-slide]:border-2 [&_.thumbSwiper_.swiper-slide]:border-trans">
                            <div className="lg:w-2/8 lg:order-0 w-full order-2">
                                <div className="swiper thumbSwiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[100%] h-full">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[100%] h-full">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[100%] h-full">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[100%] h-full">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-6/8 w-full">
                                <div className="swiper mainSwiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[115%]">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[115%]">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[115%]">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="relative w-full pb-[115%]">
                                                <Image
                                                    src="/images/vaiseema-silver-necklace-for-men.png"
                                                    alt="Vaiseema Silver"
                                                    width={270}
                                                    height={370}
                                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-0 right-0 p-2.5 flex gap-2.5">
                                        <div className="swiper-button-prev border border-white items-center justify-center relative! inset-auto! mt-0!">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4! h-3.5!"><path d="M6.86171 14L0 7L6.85943 0L7.66743 0.8225L2.18743 6.41667H16V7.58333H2.18743L7.66971 13.1798L6.86171 14Z" fill="currentcolor"/></svg>
                                        </div>
                                        <div className="swiper-button-next border border-white items-center justify-center relative! inset-auto! mt-0!">
                                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4! h-3.5!"><path d="M9.13829 14L16 7L9.14057 0L8.33257 0.8225L13.8126 6.41667H0V7.58333H13.8126L8.33029 13.1798L9.13829 14Z" fill="currentcolor"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-3.5 mb-7 lg:w-4/12 md:w-5/12 w-full">
                        <h1 className="font-outfit font-light text-[40px] normal-case mb-3">Vaiseema Silver Necklace For Men</h1>
                        <p className="text-primary font-normal text-2xl mb-3">$ 149.00</p>
                        <p className="mb-6">Size: 28 inch</p>

                        <div className="flex flex-col gap-5 mb-4">
                            <button type="button" className="btn btn-primary-outline">Add To Wishlist</button>
                            <button type="button" className="btn btn-primary">Add To Bag</button>
                        </div>
                        
                        <Accordion items={accItems} multiple={true} defaultOpen="all"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-12.5">
            <div className="container">
                <h2 className="text-center mb-5">Related Products</h2>
                <div className="swiper swiper-related-products [&_.swiper-pagination]:relative! [&_.swiper-pagination]:mt-4 [&_.swiper-pagination]:top-auto! [&_.swiper-pagination]:bottom-auto!">
                    <div className="swiper-wrapper">
                        {products.map((item) => (
                            <div key={item.id} className="swiper-slide">
                                <ProductCard
                                    title={item.title}
                                    image={item.image}
                                    link={item.link}
                                    price={item.price}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"> </div>
                </div>
            </div>
        </div>
        <SwiperInit />
        </>
    )
}