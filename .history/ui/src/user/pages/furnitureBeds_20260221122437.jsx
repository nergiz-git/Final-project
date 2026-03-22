// import React, { useContext, useEffect, useState } from "react";
// import ProductCard from "../components/productCard";
// import { useOutletContext } from "react-router";
// import MainContext from "../context/context";


// function FurnitureBeds() {
//   const { search } = useOutletContext();
//   const [beds, setBeds] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const filteredBeds = beds.filter(beds =>
//     beds.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const dataToShow = search ? filteredBeds : beds;

//   useEffect(() => {
//     fetch("http://localhost:3002/beds")
//       .then(res => res.json())
//       .then(data => setBeds(data))
//   }, []);

//   const handleSelectOption = (id, color) => {
//     setSelectedOptions(prev => ({ ...prev, [id]: color }));
//   };
//   let { theme } = useContext(MainContext)


//   return (
//     <div className={` pt-[1px] ${theme ? "bg-dark" : "bg-light"}`}>
//       <div className="mt-[200px] mx-[48px] mb-[68px]">
//         <h1 className="text-[50px] mb-[10px]">Beds</h1>
//         <span className="group flex items-center gap-2 cursor-pointer">
//           <svg
//             className="transition-all duration-300 group-hover:scale-110"
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke={theme ? "white" : "black"}
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//             <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//           </svg>
//           Discover beds design collections
//         </span>
//       </div>

//       <hr />

//       <div className="max-w-[1600px] mx-auto px-2 py-8 ml-[40px] mr-[40px]">

//         <div className="grid grid-cols-4 gap-6 auto-rows-[300px] ">

//           {dataToShow.length === 0 && (
//             <p className="col-span-4 text-center text-gray-500">
//               No products found
//             </p>
//           )}

//           {/* 1-ci setir */}
//           {dataToShow.slice(0, 4).map(product => (
//             <ProductCard
//             category="beds"
            
//               key={product.id}
//               product={product}
//               selectedOptions={selectedOptions}
//               onSelect={handleSelectOption}

//             />
//           ))}

//           {/* 2–3-cü setir video */}
//           {!search && (
//             <div className="col-span-2 row-span-2">
//               <img src="https://cdn.media.amplience.net/i/boconcept/cbadd472-e304-44f8-a8c0-b2e1005e6d0b?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.41007006%2C0.50418043%2C0.125%2C0.16666667&scaleFit=poi" className="w-full h-full object-cover" />
//             </div>
//           )}

//           {/* 2-ci setir sağ */}
//           {dataToShow.slice(4, 6).map(product => (
//             <ProductCard key={product.id} product={product} category="bedroom furniture"
//               selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//           ))}

//           {/* 3-cü setir sağ */}
//           {dataToShow.slice(6, 8).map(product => (
//             <ProductCard key={product.id} product={product} category="bedroom furniture"
//               selectedOptions={selectedOptions} onSelect={handleSelectOption} />
//           ))}


//         </div>


//       </div>
//     </div>
//   );
// }

// export default FurnitureBeds;


import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { useOutletContext } from "react-router";
import MainContext from "../context/context";
import { Helmet } from "react-helmet";


function FurnitureBeds() {
  const { search } = useOutletContext();
  const [beds, setBeds] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const filteredBeds = beds.filter(beds =>
    beds.title.toLowerCase().includes(search.toLowerCase())
  );

  const dataToShow = search ? filteredBeds : beds;

  useEffect(() => {
    fetch("http://localhost:3002/beds")
      .then(res => res.json())
      .then(data => setBeds(data))
  }, []);

  const handleSelectOption = (id, color) => {
    setSelectedOptions(prev => ({ ...prev, [id]: color }));
  };
  let { theme } = useContext(MainContext)


  return (
    <div className={`pt-[1px] ${theme ? "bg-dark" : "bg-light"}`}>
       <Helmet>
        <title>Beds</title>
        <link rel="icon" type="image/svg+xml" href="https://serrafurniture.com/cdn/shop/products/HH222RED6FTTALLBED_e134febc-c331-4b41-996a-0b0744ceb28d_1200x1200.png?v=1676640633" />
      </Helmet>
      {/* Header Section - Responsive */}
      <div className="mt-32 sm:mt-40 md:mt-[200px] mx-4 sm:mx-6 md:mx-[48px] mb-8 sm:mb-12 md:mb-[68px]">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] mb-2 sm:mb-3 md:mb-[10px] font-bold">Beds</h1>
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
          Discover beds design collections
        </span>
      </div>

      <hr className={`${theme ? "border-gray-700" : "border-gray-200"}`} />

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] py-6 sm:py-8">
        
     
        <div className="block md:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {dataToShow.length === 0 && (
              <p className="col-span-full text-center text-gray-500">
                No products found
              </p>
            )}

            {dataToShow.slice(0, 2).map(product => (
              <ProductCard
                category="beds"
                key={product.id}
                product={product}
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}

       
            {!search && (
              <div className="col-span-full h-[250px] sm:h-[350px]">
                <img 
                  src="https://cdn.media.amplience.net/i/boconcept/cbadd472-e304-44f8-a8c0-b2e1005e6d0b?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.41007006%2C0.50418043%2C0.125%2C0.16666667&scaleFit=poi" 
                  className="w-full h-full object-cover rounded-lg" 
                  alt="Bedroom"
                />
              </div>
            )}

          
            {dataToShow.slice(2).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                category="beds"
                selectedOptions={selectedOptions}
                onSelect={handleSelectOption}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-6 auto-rows-[370px]">
          {dataToShow.length === 0 && (
            <p className="col-span-4 text-center text-gray-500">
              No products found
            </p>
          )}

          {dataToShow.slice(0, 4).map(product => (
            <ProductCard
              category="beds"
              key={product.id}
              product={product}
              selectedOptions={selectedOptions}
              onSelect={handleSelectOption}
            />
          ))}

      
          {!search && (
            <div className="col-span-2 row-span-2">
              <img 
                src="https://cdn.media.amplience.net/i/boconcept/cbadd472-e304-44f8-a8c0-b2e1005e6d0b?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&h=1440&poi=0.41007006%2C0.50418043%2C0.125%2C0.16666667&scaleFit=poi" 
                className="w-full h-full object-cover" 
                alt="Bedroom"
              />
            </div>
          )}

          {dataToShow.slice(4, 6).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              category="beds"
              selectedOptions={selectedOptions} 
              onSelect={handleSelectOption} 
            />
          ))}

         
          {dataToShow.slice(6, 8).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              category="beds"
              selectedOptions={selectedOptions} 
              onSelect={handleSelectOption} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FurnitureBeds;
