import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title, image, link }){
    return (
        <Link href={link} className="block text-primary [&:hover>div::after]:top-0!">
            <div className="relative md:pb-[137%] pb-[100%] overflow-hidden mb-3 [&]:after:content-[''] [&]:after:absolute [&]:after:top-full [&]:after:left-0 [&]:after:transition-top [&]:after:duration-300 [&]:after:w-full [&]:after:h-full [&]:after:bg-[rgba(0,0,0,0.3)] [&]:after:rounded-[0%]">
                <Image
                    src={image}
                    alt={title}
                    width={270}
                    height={370}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <h5 className="mb-0 font-outfit font-light text-center">{title}</h5>
        </Link>
    )
}