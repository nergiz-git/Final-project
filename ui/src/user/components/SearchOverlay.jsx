import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router';
import ProductCard from './productCard';
import MainContext from '../context/context';

function SearchOverlay() {
    const { search, setSearch, allProducts } = useOutletContext();
    let { theme, setTheme } = useContext(MainContext);

    const filteredProducts = allProducts?.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    ) || [];

    useEffect(() => {
        document.body.style.overflow = search ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [search]);

    return (
        <>
            {search && (
                <div className={`fixed inset-0 z-[1000] p-8 overflow-auto mt-[20px] mx-[15px]
      ${theme ? "bg-black text-gray-200" : "bg-white text-[#1D1D1B]"}
    `}>
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 w-full max-w-md">
                            <input
                                type="text"
                                value={search}             // <--- Burada search istifadə olunur
                                onChange={(e) => setSearch(e.target.value)} // <--- Real-time sync
                                placeholder="Search products..."
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>
                        <button
                            onClick={() => setSearch("")}
                            className="text-xl font-bold cursor-pointer"
                        >
                            ×
                        </button>
                    </div>

                    {filteredProducts.length === 0 ? (
                        <p
                            className={`text-center text-lg mt-10
                            ${theme ? "text-gray-200" : "text-gray-500"}`}
                        >
                            No products found
                        </p>

                    ) : (
                        <div className="grid grid-cols-4 gap-6 mt-[100px]">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default SearchOverlay
