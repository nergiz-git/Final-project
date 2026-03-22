import { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import MainContext from "../context/context";



function ImageSlider({ images }) {
  const { theme } = useContext(MainContext);

  const [curr, setCurr] = useState(0);
  const startX = useRef(0);
  const deltaX = useRef(0);

  const next = () => {
    setCurr((c) => (c === images.length - 1 ? c : c + 1));
  };

  const prev = () => {
    setCurr((c) => (c === 0 ? c : c - 1));
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    deltaX.current = e.touches[0].clientX - startX.current;
  };

  const onTouchEnd = () => {
    if (deltaX.current > 50) prev();
    else if (deltaX.current < -50) next();
    deltaX.current = 0;
  };

  return (
    <div className="relative w-[350px]  overflow-hidden  mx-auto">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-[250px]  relative">
            <img
              src={img}
              alt=""
              className="absolute inset-0 w-full h-[240px] bg-[#F4F4F4] object-contain p-[60px] object-top"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className={`absolute w-[30px] h-[30px] pl-[6px] left-2 top-1/2 -translate-y-1/2 
    p-1 rounded-full cursor-pointer transition
    ${theme ? "bg-black/70 text-white" : "bg-white/80 text-black"}
  `}
      >
        <IoIosArrowBack />
      </button>

      <button
        onClick={next}
        className={`absolute w-[30px] h-[30px] pl-[6px] right-2 top-1/2 -translate-y-1/2 
    p-1 rounded-full cursor-pointer transition
    ${theme ? "bg-black/70 text-white" : "bg-white/80 text-black"}
  `}
      >
        <IoIosArrowForward />
      </button>

    </div>
  );
}

export default ImageSlider
