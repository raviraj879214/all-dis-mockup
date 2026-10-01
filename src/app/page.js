import FooterCards from "@/components/global/footerCards";
import Banner from "@/components/home/banner";
import CEOCard from "@/components/home/ceoCard";
import GrowBusiness from "@/components/home/growBusiness";
import MainCategories from "@/components/home/mainCategories";
import RowCol from "@/components/home/RowCol";
import TopCategories from "@/components/home/topCategories";

export default function Home() {
  const rowColSections = [
      {
          id: 1,
          tag: "Designer fashion for less",
          title: "Get up to 80% off Designer brands",
          image: "/images/designer-brands.png",
          btnPrimaryTitle: "Shop Now",
          btnPrimaryLink: "/product",
          btnOutlineTitle: "Sell With Us",
          btnOutlineLink: "#",
          reverse: false
      },
      {
          id: 2,
          tag: "New Arrivals",
          title: "New items are added everyday",
          image: "/images/Jewelry-1.png",
          btnPrimaryTitle: "Shop Now",
          btnPrimaryLink: "/shop",
          btnOutlineTitle: "Sell With Us",
          btnOutlineLink: "#",
          reverse: true
      },
      {
          id: 3,
          tag: "Sell With us",
          title: "Do you have new or like-new designer merchandise?",
          image: "/images/bag-img.png",
          btnPrimaryTitle: "Shop Now",
          btnPrimaryLink: "/shop",
          btnOutlineTitle: "Sell With Us",
          btnOutlineLink: "#",
          reverse: false
      }
  ];
  return (
    <>
    <Banner />
    
    <MainCategories />
    <TopCategories />
    {rowColSections.map((item)=>(
      <RowCol key={item.id} item={item}/> 
    ))}
    <GrowBusiness />
    <CEOCard />
    </>
  );
}
