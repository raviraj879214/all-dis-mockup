import CategoryCard from "@/components/cards/categoryCard";

export default function TopCategories(){
    const categories = [
        {
            id: 1,
            title: "ALL-DIS",
            image: "/images/all-dis.png",
            link: "/categories"
        },
        {
            id: 2,
            title: "Watches",
            image: "/images/Watches.png",
            link: "/categories"
        },
        {
            id: 3,
            title: "Bags",
            image: "/images/bags.png",
            link: "/categories"
        },
        {
            id: 4,
            title: "Shoes",
            image: "/images/shoes.png",
            link: "/categories"
        },
        {
            id: 5,
            title: "Clothing",
            image: "/images/clothing.png",
            link: "/categories"
        },
        {
            id: 6,
            title: "Jewelry",
            image: "/images/jewelry.png",
            link: "/categories"
        },
        {
            id: 7,
            title: "Golf",
            image: "/images/golf.png",
            link: "/categories"
        },
        {
            id: 8,
            title: "More",
            image: "/images/heels.png",
            link: "/categories"
        }
    ];
    return (
        <div className="md:py-12.5 py-7">
            <div className="container">
                <h2 className="text-center mb-5">Top Categories</h2>
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
    )
}