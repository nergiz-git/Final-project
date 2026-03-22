import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./slider.css"
import { useTranslation } from "react-i18next";

function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/otherproducts")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  return (
    <div className="ml-[20px]">
      <h2 className="text-center font-bold text-[22px] mb-4">{t("whatAreYouLookingFor")}</h2>
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-none">
        {products.map(item => (
          <Link
            to={`/${item.slug}`}
            key={item.id}
            className="min-w-[280px] flex-shrink-0 bg-white rounded-lg shadow-md"
          >

            <img
              src={item.img}
              className="w-full h-52 object-cover rounded-t-lg"
            />
            <h2 className="text-center mt-3 text-lg font-semibold text-black px-2">
              {item.title[i18n.language]}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Slider;
