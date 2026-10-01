import Image from "next/image";
import Link from "next/link";

export default function RowCol({item}){
    return (
        <div className="md:py-12.5 py-10">
            <div className="container">
                <div className="flex flex-wrap -mx-3.5 -mb-6">
                    <div className="lg:w-8/12 md:w-1/2 px-3.5 mb-6">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={800}
                            height={500}
                            className="max-w-full h-auto"
                        />
                    </div>
                    <div className={`lg:w-4/12 md:w-1/2 px-3.5 flex flex-col justify-center mb-6 ${item?.reverse ? "md:-order-1" : ""}`}>
                        <div className="min-h-[70%] flex flex-col">
                            <p className="text-primary mb-2.5 uppercase">{item.tag}</p>
                            <h2 className="h3 font-outfit font-light mb-5">{item.title}</h2>
                            <div className="mt-auto flex flex-wrap md:gap-x-7 gap-x-5 gap-y-3.5">
                                <Link href={item.btnPrimaryLink} className="btn btn-primary min-w-36 md:grow-0 grow">{item.btnPrimaryTitle}</Link>
                                <Link href={item.btnOutlineLink} className="btn btn-primary-outline min-w-36 md:grow-0 grow">{item.btnOutlineTitle}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}