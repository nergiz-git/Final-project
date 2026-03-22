
import React, { useContext, useEffect, useState } from "react";
import video4 from "../../assets/video4.mp4";
import ImageSlider from "../components/ImageSlider";
import sofa1 from "../../assets/sofa1.webp";
import ProductCard from "../components/productCard";
import { useOutletContext } from "react-router";
import MainContext from "../context/context";
import { Helmet } from "react-helmet";


function FurnitureTables() {
  const { search } = useOutletContext();
  const [tables, setTables] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const filteredTables = tables.filter(table =>
    table.title.toLowerCase().includes(search.toLowerCase())
  );

  const dataToShow = search ? filteredTables : tables;

  useEffect(() => {
    fetch("http://localhost:3002/tables")
      .then(res => res.json())
      .then(data => setTables(data)
    )
  }, []);

  const handleSelectOption = (id, color) => {
    setSelectedOptions(prev => ({ ...prev, [id]: color }));
  };
  let { theme } = useContext(MainContext)


  return (
    <div className={`pt-[1px] ${theme ? "bg-dark" : "bg-light"}`}>
            <Helmet>
        <title>Tables</title>
        <link rel="icon" type="image/svg+xml" href="https://www.jenniferfurniture.com/cdn/shop/files/MazieSofa.jpg?v=1712519081&width=1080" />
      </Helmet>
      {/* Header Section - Responsive */}
      <div className="mt-32 sm:mt-40 md:mt-[200px] mx-4 sm:mx-6 md:mx-[48px] mb-8 sm:mb-12 md:mb-[68px]">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] mb-2 sm:mb-3 md:mb-[10px] font-bold">Tables</h1>
        <span className="group flex items-center gap-2 cursor-pointer text-sm sm:text-base">
          <svg
            className="transition-all duration-300 group-hover:scale-110"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={theme ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
            <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
          </svg>
          Discover table design collections
        </span>
      </div>

      <hr className={`${theme ? "border-gray-700" : "border-gray-200"}`} />

      {/* Products Grid - Responsive */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] py-6 sm:py-8">
        {/* Mobile & Tablet: Simple 2-column grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {dataToShow.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}

            {/* First 2 products */}
            {dataToShow.slice(0, 2).map(product => (
              <ProductCard
                category="tables"
                key={product.id}
                product={product}
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}

            {/* Video - Full width on mobile/tablet */}
            {!search && (
              <div className="col-span-full h-[250px] sm:h-[350px]">
                <video src={video4} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg" />
              </div>
            )}

            {/* Products 3-6 */}
            {dataToShow.slice(2, 6).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                category="tables"
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}

            {/* Image - Full width on mobile/tablet */}
            {!search && (
              <div className="col-span-full h-[250px] sm:h-[350px]">
                <img src="https://cdn.media.amplience.net/i/boconcept/5f49a733-a7a1-444c-a843-b2e30077d0f0?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.4447922%2C0.9062792%2C0.125%2C0.09372071&scaleFit=poi" className="w-full h-full object-cover rounded-lg" alt="Chair" />
              </div>
            )}

            {/* Rest of products */}
            {dataToShow.slice(6).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                category="tables"
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Complex grid layout */}
        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[350px]">
          {dataToShow.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              No products found
            </p>
          )}

          {/* 1st row */}
          {dataToShow.slice(0, 4).map(product => (
            <ProductCard
              category="tables"
              key={product.id}
              product={product}
              selectedOptions={selectedOptions}
              onSelect={handleSelectOption}
            />
          ))}

          {/* 2-3rd row video */}
          {!search && (
            <div className="col-span-2 row-span-2">
               <img src="https://cdn.media.amplience.net/i/boconcept/a9ba3b0d-8341-4ba8-86fc-b2e300b2cc24?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.4231315%2C0.61864835%2C0.125%2C0.08748906&scaleFit=poi" className="w-full h-full object-cover" alt="Chair" />
            </div>
          )}

          {/* 2nd row right */}
          {dataToShow.slice(4, 6).map(product => (
            <ProductCard key={product.id} product={product} category="tables"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 3rd row right */}
          {dataToShow.slice(6, 8).map(product => (
            <ProductCard key={product.id} product={product} category="tables"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 4th row */}
          {dataToShow.slice(8, 12).map(product => (
            <ProductCard key={product.id} product={product} category="tables"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 5th row left */}
          {dataToShow.slice(12, 14).map(product => (
            <ProductCard key={product.id} product={product} category="tables"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 5-6th row right image */}
          {!search && (
            <div className="col-span-2 row-span-2">
              <img src="https://cdn.media.amplience.net/i/boconcept/363e4944-51e6-4774-83bf-afd9008070da?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.33556324%2C0.40369013%2C0.125%2C0.16&scaleFit=poi" className="w-full h-full object-cover" alt="Chair" />
            </div>
          )}

          {/* 6th row left */}
          {dataToShow.slice(14, 16).map(product => (
            <ProductCard key={product.id} product={product} category="tables"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FurnitureTables;

