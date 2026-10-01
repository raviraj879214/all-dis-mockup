import Link from "next/link";

export default function GrowBusiness(){
    return (
        <div className="md:py-12.5 py-7">
            <div className="container">
                <div className="md:py-30 py-20 bg-secondary text-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="h1 md:mb-4 mb-7">We Help You Grow Your Business</h2>
                        <Link href="/shop" className="btn btn-white-outline">Sell With Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}