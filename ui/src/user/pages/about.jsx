import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import "./about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import ScrollToTop from "react-scroll-to-top";
import VdeoAbout from "../components/vdeoAbout";
import MainContext from "../context/context";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function About() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   document.title = 'About';
  // }, []);
  let { theme } = useContext(MainContext)
  useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);

  return (
    <div className={`${theme ? "bg-dark" : "bg-light"}`}>
      <Helmet>
        <title>About</title>
        <link rel="icon" type="image/svg+xml" href="https://theelora.com/wp-content/uploads/2023/12/cropped-android-chrome-512x512-1-270x270.png" />
      </Helmet>
      <div className="header" >
        <ScrollToTop smooth top="20" width="20" height="20" color="#fff"/>
        <div className="container">
          <div className="header-content">
            <h1>Lumira Furniture</h1>
            <p>
             {t("headerDescription")}
            </p>
            <Link to="/products"><button>{t("seeCollection")}</button></Link>
          </div>
        </div>
      </div>
      
      <section>
        <div className="container">
          <div className="section2-sing">
            <div className="section2-img">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: true,
                }}
                navigation={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide><img src="https://images.unsplash.com/photo-1557592722-a0a649c8c5c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1600488999593-83309d5d766e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1533008093099-e2681382639a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzg0fHxmdXJuaXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1553855994-da8397e155c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://images.unsplash.com/photo-1632935187086-49a9d8027292?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80" alt="" /></SwiperSlide>
              </Swiper>
            </div>

            <div className="section2-details">
              <p className={`section2-title ${theme ? "!text-[white]" : "!text-[#000]"}`}>{t("sectionTitle")}</p>
              <p className="section2-description">
                {t("sectionDescription")}
              </p>
            </div>
          </div>

          <div className="video-sec">
            <h1>{t("videoTitle")}</h1>
            <VdeoAbout/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
