import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return product?.images ? (
    <>
      <div className="head">
        <Swiper
          spaceBetween={4}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {product.images.map((a, i) => (
            <SwiperSlide key={i}>
              <img src={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="additional-imgs">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={5}
          slidesPerView={3}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {product.images.map((a, i) => (
            <SwiperSlide key={i}>
              <img src={a} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  ) : null;
}
