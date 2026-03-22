import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/context";

export default function VerticalSlider({ items, slidesPerView = 3, height = "500px", onItemClick }) {
  const navigate = useNavigate();
  const { theme } = useContext(MainContext);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={slidesPerView}
      spaceBetween={3}
      style={{ height:"320px" }}
    >
      {items.map(item => (
        <SwiperSlide key={item.id}>
          <div onClick={() => {
            if (onItemClick) onItemClick(item);
          }}
            className={`
              flex items-center gap-6 rounded p-2 cursor-pointer
              transition-colors
              ${theme
                ? "hover:bg-[white] text-gray-200 hover:text-[black]"
                : "hover:bg-gray-100 text-[#1D1D1B]"
              }
            `}
          >
            <div className="w-[80px] h-[52px] flex items-center justify-center bg-[#EBEBEB] px-[5px] py-[6px] rounded">
              <img src={item.img} alt={item.title} className="w-[70px] h-[40px] !object-contain" />
            </div>
            <span>{item.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
