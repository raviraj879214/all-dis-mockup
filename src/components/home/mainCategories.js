import Image from "next/image";
import Link from "next/link";

export default function MainCategories(){
    return (
        <div className="md:py-12.5 py-7">
            <div className="container">
                <div className="flex flex-wrap md:-mx-3.5 md:-mx-2.5 -mb-7 justify-center">
                    <div className="lg:w-2/12 md:w-3/12 w-4/12 md:px-3.5 px-2.5 mb-7">
                        <div className="pb-[100%] relative bg-primary rounded-full text-white">
                            <Link href="/categories" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full two-line-ellipsis md:text-[24px] text-[20px] font-outfit font-light">
                                All
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-2/12 md:w-3/12 w-4/12 md:px-3.5 px-2.5 mb-7">
                        <div className="pb-[100%] relative bg-primary rounded-full text-white">
                            <Link href="/categories" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full two-line-ellipsis md:text-[24px] text-[20px] font-outfit font-light">
                                Men
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-2/12 md:w-3/12 w-4/12 md:px-3.5 px-2.5 mb-7">
                        <div className="pb-[100%] relative bg-primary rounded-full text-white">
                            <Link href="/categories" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full two-line-ellipsis md:text-[24px] text-[20px] font-outfit font-light">
                                Women
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}