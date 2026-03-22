// import React, { useContext, useEffect, useState } from "react";
// import video4 from "../../assets/video4.mp4";
// import ImageSlider from "../components/ImageSlider";
// import sofa1 from "../../assets/sofa1.webp";
// import ProductCard from "../components/productCard";
// import { useOutletContext } from "react-router";
// import MainContext from "../context/context";


// function FurnitureSofas() {
//   const { search } = useOutletContext();
//   const [sofas, setSofas] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const filteredSofas = sofas.filter(sofa =>
//     sofa.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const dataToShow = search ? filteredSofas : sofas;
//   useEffect(() => {
//     fetch("http://localhost:3002/sofas")
//       .then(res => res.json())
//       .then(data => setSofas(data)
//       )
//   }, []);

//   const handleSelectOption = (id, color) => {
//     setSelectedOptions(prev => ({ ...prev, [id]: color }));
//   };
//   let { theme } = useContext(MainContext)
//   return (
//     <div className={`${theme ? "bg-dark" : "bg-light"}`}>
//       <div className={` pt-[1px] ${theme ? "bg-dark" : "bg-light"}`}>
//         <div className="mt-[200px] mx-[48px] mb-[68px]">
//           <h1 className="text-[50px] mb-[10px]">Sofas</h1>
//           <span className="group flex items-center gap-2 cursor-pointer">
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={theme ? "white" : "black"}
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//               <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//             Discover sofa design collections
//           </span>
//         </div>

//         <hr />

//         <div className="max-w-[1600px] mx-auto px-2 py-8 ml-[40px] mr-[40px]">
//           <div className="grid grid-cols-4 gap-6 auto-rows-[300px] ">

//             {dataToShow.length === 0 && (
//               <p className="col-span-4 text-center text-gray-500">
//                 No products found
//               </p>
//             )}

//             {dataToShow.slice(0, 4).map(product => (
//               <ProductCard
//                 category="sofas"
//                 key={product.id}
//                 product={product}
//                 selectedOptions={selectedOptions}
//                 onSelect={handleSelectOption}

//               />
//             ))}


//             {!search && (
//               <div className="col-span-2 row-span-2">
//                 <video src={video4} autoPlay muted loop className="w-full h-full object-cover" />
//               </div>
//             )}

//             {dataToShow.slice(4, 6).map(product => (
//               <ProductCard key={product.id} product={product} category="sofas"
//                 selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//             ))}

//             {dataToShow.slice(6, 8).map(product => (
//               <ProductCard key={product.id} product={product} category="sofas"
//                 selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//             ))}


//             {dataToShow.slice(8, 12).map(product => (
//               <ProductCard key={product.id} product={product} category="sofas"
//                 selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//             ))}


//             {dataToShow.slice(12, 14).map(product => (
//               <ProductCard key={product.id} product={product} category="sofas"
//                 selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//             ))}

//             {!search && (
//               <div className="col-span-2 row-span-2">
//                 <img src={sofa1} className="w-full h-full object-cover" />
//               </div>
//             )}

//             {dataToShow.slice(14, 16).map(product => (
//               <ProductCard key={product.id} product={product} category="sofas"
//                 selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FurnitureSofas;


import React, { useContext, useEffect, useState } from "react";
import video4 from "../../assets/video4.mp4";
import ImageSlider from "../components/ImageSlider";
import sofa1 from "../../assets/sofa1.webp";
import ProductCard from "../components/productCard";
import { useOutletContext } from "react-router";
import MainContext from "../context/context";
import { Helmet } from "react-helmet";


function FurnitureSofas() {
  const { search } = useOutletContext();
  const [sofas, setSofas] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const filteredSofas = sofas.filter(sofa =>
    sofa.title.toLowerCase().includes(search.toLowerCase())
  );

  const dataToShow = search ? filteredSofas : sofas;

  useEffect(() => {
    fetch("http://localhost:3002/sofas")
      .then(res => res.json())
      .then(data => setSofas(data)
    )
  }, []);

  const handleSelectOption = (id, color) => {
    setSelectedOptions(prev => ({ ...prev, [id]: color }));
  };
  let { theme } = useContext(MainContext)


  return (
    <div className={`pt-[1px] ${theme ? "bg-dark" : "bg-light"}`}>
            <Helmet>
        <title>Beds</title>
        <link rel="icon" type="image/svg+xml" href="https://www.jenniferfurniture.com/cdn/shop/files/MazieSofa.jpg?v=1712519081&width=1080" />
      </Helmet>
      {/* Header Section - Responsive */}
      <div className="mt-32 sm:mt-40 md:mt-[200px] mx-4 sm:mx-6 md:mx-[48px] mb-8 sm:mb-12 md:mb-[68px]">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] mb-2 sm:mb-3 md:mb-[10px] font-bold">Sofas</h1>
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
          Discover sofa design collections
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
                category="sofas"
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
                category="sofas"
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}

            {/* Image - Full width on mobile/tablet */}
            {!search && (
              <div className="col-span-full h-[250px] sm:h-[350px]">
                <img src={sofa1} className="w-full h-full object-cover rounded-lg" alt="Sofa" />
              </div>
            )}

            {/* Rest of products */}
            {dataToShow.slice(6).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                category="sofas"
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
              category="sofas"
              key={product.id}
              product={product}
              selectedOptions={selectedOptions}
              onSelect={handleSelectOption}
            />
          ))}

          {/* 2-3rd row video */}
          {!search && (
            <div className="col-span-2 row-span-2">
              <video src={video4} autoPlay muted loop className="w-full h-full object-cover" />
            </div>
          )}

          {/* 2nd row right */}
          {dataToShow.slice(4, 6).map(product => (
            <ProductCard key={product.id} product={product} category="sofas"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 3rd row right */}
          {dataToShow.slice(6, 8).map(product => (
            <ProductCard key={product.id} product={product} category="sofas"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 4th row */}
          {dataToShow.slice(8, 12).map(product => (
            <ProductCard key={product.id} product={product} category="sofas"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 5th row left */}
          {dataToShow.slice(12, 14).map(product => (
            <ProductCard key={product.id} product={product} category="sofas"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}

          {/* 5-6th row right image */}
          {!search && (
            <div className="col-span-2 row-span-2">
              <img src={sofa1} className="w-full h-full object-cover" alt="Sofa" />
            </div>
          )}

          {/* 6th row left */}
          {dataToShow.slice(14, 16).map(product => (
            <ProductCard key={product.id} product={product} category="sofas"
              selectedOptions={selectedOptions} onSelect={handleSelectOption} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FurnitureSofas;

