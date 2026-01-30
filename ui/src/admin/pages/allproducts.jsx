import React, { useEffect, useState } from "react";
import video4 from "../../assets/video4.mp4";
import sofa1 from "../../assets/sofa1.webp";
import AdminProduct from "../components/adminProduct";

function AllProducts() {

  const [sofas, setSofas] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
;

  

  useEffect(() => {
    fetch("http://localhost:3002/sofas")
      .then(res => res.json())
      .then(data => setSofas(data))
  }, []);

  const handleSelectOption = (id, color) => {
    setSelectedOptions(prev => ({ ...prev, [id]: color }));
  };

  return (
    <>
      <div className="mt-[160px] mx-[48px] mb-[48px]">
        <h1 className="text-[50px]">Sofas</h1>
      </div>

      <hr />

      <div className="max-w-[1600px] mx-auto px-2 py-8 ml-[40px] mr-[40px]">
        {/* 🔥 ƏSAS GRID */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[300px] ">


          {/* 1-ci setir */}
          {sofas.slice(0, 4).map(product => (
            <AdminProduct
              key={product.id}
              product={product}
              selectedOptions={selectedOptions}
              onSelect={handleSelectOption}
              sofas ={sofas}
              setSofas={setSofas}
            />
          ))}

          {/* 2–3-cü setir video */}
        
            <div className="col-span-2 row-span-2">
              <video src={video4} autoPlay muted loop className="w-full h-full object-cover" />
            </div>
         

          {/* 2-ci setir sağ */}
          {sofas.slice(4, 6).map(product => (
            <AdminProduct key={product.id} product={product}
              selectedOptions={selectedOptions} onSelect={handleSelectOption} sofas ={sofas} setSofas={setSofas}/>
          ))}

          {/* 3-cü setir sağ */}
          {sofas.slice(6, 8).map(product => (
            <AdminProduct key={product.id} product={product}
              selectedOptions={selectedOptions} onSelect={handleSelectOption} sofas ={sofas} setSofas={setSofas} />
          ))}

          {/* 4-cü setir */}
          {sofas.slice(8, 12).map(product => (
            <AdminProduct key={product.id} product={product}
              selectedOptions={selectedOptions} onSelect={handleSelectOption} sofas ={sofas}
              setSofas={setSofas} />
          ))}

          {/* 5-ci setir sol */}
          {sofas.slice(12, 14).map(product => (
            <AdminProduct key={product.id} product={product}
              selectedOptions={selectedOptions} onSelect={handleSelectOption} sofas ={sofas}
              setSofas={setSofas} />
          ))}

          {/* 5–6-cı setir sağ şəkil */}
      
            <div className="col-span-2 row-span-2">
              <img src={sofa1} className="w-full h-full object-cover" />
            </div>
  

          {/* 6-cı setir sol */}
          {sofas.slice(14, 16).map(product => (
            <AdminProduct key={product.id} product={product}
              selectedOptions={selectedOptions} onSelect={handleSelectOption} sofas ={sofas}
              setSofas={setSofas} />
          ))}

        </div>


      </div>
    </>
  );
}

export default AllProducts
