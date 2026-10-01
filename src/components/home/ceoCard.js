import Image from "next/image";
import Link from "next/link";

export default function CEOCard(){
    return (
        <div className="md:py-12.5 py-8">
            <div className="container">
                <div className="bg-gray">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div className="m-0">
                            <Image
                                src="/images/benjamin-aldous.png"
                                alt="Benjamin Aldous"
                                width={570}
                                height={570}
                                className="max-w-full h-auto"
                            />
                        </div>
                        <div className="md:ps-15.5 md:pe-15 md:py-10 ps-7 pe-7 py-10 flex flex-col justify-center">
                            <h2 className="mb-5 xl:text-[64px] lg:text-[45px] md:text-[40px] text-[30px]"><span className="text-primary">“</span>I’m a big value shopper, and always looking for good deal.<span className="text-primary">”</span></h2>
                            <h3 className="font-josefin-sans font-normal italic h4 capitalize mb-3">Benjamin Aldous</h3>
                            <p className="mb-0 font-outfit font-light h5">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}