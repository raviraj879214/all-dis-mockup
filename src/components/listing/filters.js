import PriceRange from "./PriceRange";

export default function Filters({setfilters}){

    return (
        <>
        <div className={`filters-outer`}>
            
            {/* Filter Skeleton Loader */}
            <div className="filter-skeleton-loader w-full hidden">
                <div className="h-12 bg-loader rounded-full w-full mb-5"></div>
                <div className="filter-cards w-full">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div className="border border-border rounded-thm p-5 mb-5 last:mb-0 w-full" key={i}>
                            <div className="h-3.5 bg-loader rounded-full w-full mb-3"></div>
                            <div className="h-3.5 bg-loader rounded-full w-full mb-3"></div>
                            <div className="h-3.5 bg-loader rounded-full w-full mb-3"></div>
                            <div className="h-3.5 bg-loader rounded-full w-full mb-3"></div>
                            <div className="h-3.5 bg-loader rounded-full w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="filter-by-wrap">
                <div className="absolute top-0 right-0">
                    <button type="button" 
                            onClick={() => {
                            setfilters((prev) => !prev);
                            }}
                            className="btn-none p-4">
                        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path></svg>
                    </button>
                </div>
                <div className="border-t border-border-gray py-3 px-5 leading-[1.2]">
                    <div className="max-h-50 overflow-auto">
                        <label htmlFor="main-category[1]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="main_category[1]" id="main-category[1]" className="filter-checkbox radio-ui"/>
                            <span>All</span>
                        </label>
                        <label htmlFor="main-category[2]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="main_category[2]" id="main-category[2]" className="filter-checkbox radio-ui"/>
                            <span>Men</span>
                        </label>
                        <label htmlFor="main-category[3]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="main_category[3]" id="main-category[3]" className="filter-checkbox radio-ui"/>
                            <span>Women</span>
                        </label>
                    </div>
                </div>
                <div className="border-t border-border-gray py-3 px-5 leading-[1.2]">
                    <h5 className="text-base font-outfit font-semibold mb-5 leading-none">Categories</h5>
                    <div className="max-h-50 overflow-auto">
                        <label htmlFor="category[1]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[1]" id="category[1]" className="filter-checkbox"/>
                            <span>Anesthesiology (25)</span>
                        </label>
                        <label htmlFor="category[2]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[2]" id="category[2]" className="filter-checkbox"/>
                            <span>Cardiology (9)</span>
                        </label>
                        <label htmlFor="category[3]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[3]" id="category[3]" className="filter-checkbox"/>
                            <span>Dermatology (6)</span>
                        </label>
                        <label htmlFor="category[4]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[4]" id="category[4]" className="filter-checkbox"/>
                            <span>Endocrinology (5)</span>
                        </label>
                        <label htmlFor="category[5]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[5]" id="category[5]" className="filter-checkbox"/>
                            <span>Gastroenterology (15)</span>
                        </label>
                        <label htmlFor="category[6]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[6]" id="category[6]" className="filter-checkbox"/>
                            <span>Anesthesiology (25)</span>
                        </label>
                        <label htmlFor="category[7]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[7]" id="category[7]" className="filter-checkbox"/>
                            <span>Cardiology (9)</span>
                        </label>
                        <label htmlFor="category[8]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[8]" id="category[8]" className="filter-checkbox"/>
                            <span>Dermatology (6)</span>
                        </label>
                        <label htmlFor="category[9]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[9]" id="category[9]" className="filter-checkbox"/>
                            <span>Endocrinology (5)</span>
                        </label>
                        <label htmlFor="category[10]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="category[10]" id="category[10]" className="filter-checkbox"/>
                            <span>Gastroenterology (15)</span>
                        </label>
                    </div>
                </div>
                <div className="border-t border-border-gray py-3 px-5 leading-[1.2]">
                    <h5 className="text-base font-outfit font-semibold mb-5 leading-none">Designers</h5>
                    <div className="max-h-50 overflow-auto">
                        <label htmlFor="treatment[1]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[1]" id="treatment[1]" className="filter-checkbox"/>
                            <span>Abdominal Liposuction (15)</span>
                        </label>
                        <label htmlFor="treatment[2]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[2]" id="treatment[2]" className="filter-checkbox"/>
                            <span>Brain Tumor Removal (12)</span>
                        </label>
                        <label htmlFor="treatment[3]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[3]" id="treatment[3]" className="filter-checkbox"/>
                            <span>Chemotherapy (19)</span>
                        </label>
                        <label htmlFor="treatment[4]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[4]" id="treatment[4]" className="filter-checkbox"/>
                            <span>Hip Replacement (35)</span>
                        </label>
                        <label htmlFor="treatment[5]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[5]" id="treatment[5]" className="filter-checkbox"/>
                            <span>Knee Replacement (43)</span>
                        </label>
                        <label htmlFor="treatment[6]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[6]" id="treatment[6]" className="filter-checkbox"/>
                            <span>Abdominal Liposuction (15)</span>
                        </label>
                        <label htmlFor="treatment[7]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[7]" id="treatment[7]" className="filter-checkbox"/>
                            <span>Brain Tumor Removal (12)</span>
                        </label>
                        <label htmlFor="treatment[8]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[8]" id="treatment[8]" className="filter-checkbox"/>
                            <span>Chemotherapy (19)</span>
                        </label>
                        <label htmlFor="treatment[9]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[9]" id="treatment[9]" className="filter-checkbox"/>
                            <span>Hip Replacement (35)</span>
                        </label>
                        <label htmlFor="treatment[10]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="treatment[10]" id="treatment[10]" className="filter-checkbox"/>
                            <span>Knee Replacement (43)</span>
                        </label>
                    </div>
                </div>
                <div className="border-t border-border-gray py-3 px-5 leading-[1.2]">
                    <h5 className="text-base font-outfit font-semibold mb-5 leading-none">By Place</h5>
                    <div className="max-h-50 overflow-auto">
                        <label htmlFor="place[1]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[1]" id="place[1]" className="filter-checkbox"/>
                            <span>Rio de Janeiro</span>
                        </label>
                        <label htmlFor="place[2]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[2]" id="place[2]" className="filter-checkbox"/>
                            <span>Brasília</span>
                        </label>
                        <label htmlFor="place[3]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[3]" id="place[3]" className="filter-checkbox"/>
                            <span>São Paulo</span>
                        </label>
                        <label htmlFor="place[4]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[4]" id="place[4]" className="filter-checkbox"/>
                            <span>João Pessoa</span>
                        </label>
                        <label htmlFor="place[5]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[5]" id="place[5]" className="filter-checkbox"/>
                            <span>Salvador</span>
                        </label>
                        <label htmlFor="place[6]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[6]" id="place[6]" className="filter-checkbox"/>
                            <span>Rio de Janeiro</span>
                        </label>
                        <label htmlFor="place[7]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[7]" id="place[7]" className="filter-checkbox"/>
                            <span>Brasília</span>
                        </label>
                        <label htmlFor="place[8]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[8]" id="place[8]" className="filter-checkbox"/>
                            <span>São Paulo</span>
                        </label>
                        <label htmlFor="place[9]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[9]" id="place[9]" className="filter-checkbox"/>
                            <span>João Pessoa</span>
                        </label>
                        <label htmlFor="place[10]" className="flex items-center gap-2.5 mb-3 last:mb-0 cursor-pointer">
                            <input type="checkbox" name="place[10]" id="place[10]" className="filter-checkbox"/>
                            <span>Salvador</span>
                        </label>
                    </div>
                </div>
                <PriceRange
                    min={0}
                    max={1000}
                    defaultMin={299}
                    defaultMax={599}
                /> 
            </div>
        </div>
        </>
    )
}