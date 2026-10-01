import CategoryCard from "@/components/cards/categoryCard";
import Breadcrumbs from "@/components/global/breadcrumbs";

export default function Categories(){
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Men" },
    ];

    const categories = [
        {
            id: 1,
            title: "ALL-DIS",
            image: "/images/all-dis.png",
            link: "/shop"
        },
        {
            id: 2,
            title: "Watches",
            image: "/images/Watches.png",
            link: "/shop"
        },
        {
            id: 3,
            title: "Bags",
            image: "/images/bags.png",
            link: "/shop"
        },
        {
            id: 4,
            title: "Shoes",
            image: "/images/shoes.png",
            link: "/shop"
        },
        {
            id: 5,
            title: "Clothing",
            image: "/images/clothing.png",
            link: "/shop"
        },
        {
            id: 6,
            title: "Jewelry",
            image: "/images/jewelry.png",
            link: "/shop"
        },
        {
            id: 7,
            title: "Golf",
            image: "/images/golf.png",
            link: "/shop"
        },
        {
            id: 8,
            title: "More",
            image: "/images/heels.png",
            link: "/shop"
        }
    ];

    return(
        <>
        <Breadcrumbs items={breadcrumbs}/>
        <div className="md:pt-10 md:pb-12.5 pt-4 pb-6">
            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-7">
                    {categories.map((item) => (
                        <CategoryCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}