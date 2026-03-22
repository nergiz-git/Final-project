import { useContext, useEffect, useState } from "react";
import "./swiper.css";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router";
import MainContext from "../context/context";

function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();
  let { theme, setTheme } = useContext(MainContext);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleSelectOption = (productId, color) => {
    setSelectedOptions(prev => ({ ...prev, [productId]: color }));
  };

  return (
    <div className={`my-8 cursor-pointer ${theme ? "bg-dark" : "bg-light"}`}>
      <h3 className={`text-[27px] text-center mb-6 font-semibold ${theme ? "text-gray-200" : "text-[#1D1D1B]"}`}>
        Customise Imola
      </h3>

      <div className="scrollbar-none overflow-auto">
        <div className="flex gap-2">
          {products.map(products => (
            <div
              key={products.id}
              className="flex-shrink-0 w-[360px] h-[450px] p-5 ml-[25px] cursor-pointer"
              // onClick={() => navigate(`/chairs/${products.id}`)}
            >

              <ImageSlider images={products.images} />

              <h3 onClick={() => navigate(`/chairs/${products.id}`)}
               className={`mt-3 text-[14px] ${theme ? "text-gray-200" : "text-[#2E2E2E]"}`}>
                {products.title}
              </h3>

              <p onClick={() => navigate(`/chairs/${products.id}`)}
               className={`text-[12px] ${theme ? "text-gray-400" : "text-[#767676]"}`}>
                {products.materials}
              </p>

              <div className="flex items-center gap-2 mt-2">
                {products.options.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectOption(products.id, color)}
                    className={`w-3 h-3 rounded-full cursor-pointer border-2 ${selectedOptions[products.id] === color
                      ? "border-black"
                      : "border-transparent"
                      }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span className={`text-[12px] cursor-pointer hover:text-black ${theme ? "text-gray-200" : "text-[#2E2E2E]"}`}>
                  + more options
                </span>
              </div>
              <div className="mt-[10px]">
                <p className={`text-[12px] ${theme ? "text-gray-400" : "text-gray-500"}`}>Rec. retail price</p>

                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold">
                    ${products.price}
                  </span>

                  <span className={`text-[13px] line-through ${theme ? "text-gray-500" : "text-gray-400"}`}>
                    Before ${products.oldPrice}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductSlider