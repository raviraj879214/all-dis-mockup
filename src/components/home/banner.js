import Image from "next/image";
import Link from "next/link";

import SwiperInit from '@/components/SwiperInit';

export default function Banner(){
    return (
        <>
        <div className="hero-banner overflow-hidden md:mb-12.5 mb-7">
            <div className="hero-banner-slider swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="bg-cover bg-no-repeat bg-center lg:min-h-[45vw] md:min-h-[55vw] min-h-100 flex items-center justify-center py-7 md:px-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 text-white uppercase" style={{ "backgroundImage" : "url(/images/banner.png)"}}>
                            <div className="container relative z-10">
                                <div className="max-w-212.5">
                                    <h1 className="mb-4 h1">new and <br></br>like-new designer merchandise</h1>
                                    <Link href="/product" className="btn btn-primary">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-cover bg-no-repeat bg-center lg:min-h-[45vw] md:min-h-[55vw] min-h-100 flex items-center justify-center py-7 md:px-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 text-white uppercase" style={{ "backgroundImage" : "url(/images/banner.png)"}}>
                            <div className="container relative z-10">
                                <div className="max-w-212.5">
                                    <h2 className="mb-4 h1">new and <br></br>like-new designer merchandise</h2>
                                    <Link href="/product" className="btn btn-primary">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-cover bg-no-repeat bg-center lg:min-h-[45vw] md:min-h-[55vw] min-h-100 flex items-center justify-center py-7 md:px-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 text-white uppercase" style={{ "backgroundImage" : "url(/images/banner.png)"}}>
                            <div className="container relative z-10">
                                <div className="max-w-212.5">
                                    <h2 className="mb-4 h1">new and <br></br>like-new designer merchandise</h2>
                                    <Link href="/product" className="btn btn-primary">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bg-cover bg-no-repeat bg-center lg:min-h-[45vw] md:min-h-[55vw] min-h-100 flex items-center justify-center py-7 md:px-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 text-white uppercase" style={{ "backgroundImage" : "url(/images/banner.png)"}}>
                            <div className="container relative z-10">
                                <div className="max-w-212.5">
                                    <h2 className="mb-4 h1">new and <br></br>like-new designer merchandise</h2>
                                    <Link href="/product" className="btn btn-primary">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-button-prev border border-white items-center justify-center hidden! md:inline-flex!">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4! h-3.5!"><path d="M6.86171 14L0 7L6.85943 0L7.66743 0.8225L2.18743 6.41667H16V7.58333H2.18743L7.66971 13.1798L6.86171 14Z" fill="currentcolor"/></svg>
                </div>
                <div className="swiper-button-next border border-white items-center justify-center hidden! md:inline-flex!">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4! h-3.5!"><path d="M9.13829 14L16 7L9.14057 0L8.33257 0.8225L13.8126 6.41667H0V7.58333H13.8126L8.33029 13.1798L9.13829 14Z" fill="currentcolor"/></svg>
                </div>
                <div className="swiper-pagination" style={{"--swiper-pagination-bullet-inactive-color": "#fff"}}/>
            </div>
        </div>
        <SwiperInit />
        </>
    )
}