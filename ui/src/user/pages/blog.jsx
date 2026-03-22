import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MainContext from "../context/context";
// import './styles.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";

function Blog() {
  let { theme } = useContext(MainContext);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.className = theme ? "dark" : "";
  }, [theme]);

  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:3002/cards", {
      signal: controller.signal,
    })
      .then((a) => a.json())
      .then((a) => setData(a));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <Helmet>
        <title>Blog</title>
        <link rel="icon" type="image/svg+xml" href="https://theelora.com/wp-content/uploads/2023/12/cropped-android-chrome-512x512-1-270x270.png" />
      </Helmet>
      <section className="mainsec__header">
        <div className="container">
          <div className="whitebox__sec">
            <h1>{t("PageTitle")}</h1>
            <p>{t("breadcrumb")}</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="yazicilar">
            <div className="yazici">
              <div className="yazici_img">
                <img
                  src="https://i.pinimg.com/736x/c0/6e/d0/c06ed026b6a1a8563340a614d577a756.jpg"
                  alt=""
                />
              </div>
              <div className="yazici_adi">
                <h3>Anna Torv</h3>
              </div>
            </div>
            <div className="yazici">
              <div className="yazici_img">
                <img
                  src="https://i.pinimg.com/736x/41/06/bc/4106bc059ec6b52bae0384be355efe63.jpg"
                  alt=""
                />
              </div>
              <div className="yazici_adi">
                <h3>David Paulsen</h3>
              </div>
            </div>
            <div className="yazici">
              <div className="yazici_img">
                <img
                  src="https://i.pinimg.com/564x/02/bb/91/02bb91e7384431515474e44f3d952120.jpg"
                  alt=""
                />
              </div>
              <div className="yazici_adi">
                <h3>Paul Rudd</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="swiper__secmain">
        <div className="container">
          {/* <div className="post-blog">
      <h1>Latest Post</h1>
     
     </div> */}
        </div>

        <Swiper
          // slidesPerView={1}
          spaceBetween={80}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper__sec"
        >
          <SwiperSlide>
            <div className={` bigswiper__sec ${theme ? "bg-dark" : "bg-light"}`}>
              <div className="swiperimage__sec">
                <img src="./src/assets/collection1.png" alt="" />
              </div>
              <div className="swipertext__sec">
                <h1>{t("swiper.slide1.title")}</h1>
                <p>
                  {t("swiper.slide1.text")}
                </p>
                <button>{t("swiper.slide1.button")}</button>
                <p>
                  "{t("swiper.slide1.quote")}"
                </p>
                <h4>{t("swiper.slide1.author")}</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className={` bigswiper__sec ${theme ? "bg-dark" : "bg-light"}`}>
              <div className="swipertext__sec extra__sec">
                <h3>{t("swiper.slide2.title")}</h3>
                <p>
                  {t("swiper.slide2.text")}
                </p>
                <button>{t("swiper.slide2.button")}</button>
                <p>
                  "{t("swiper.slide2.quote")}"
                </p>
                <h4>{t("swiper.slide2.author")}</h4>
              </div>
              <div className="swiperimage__sec">
                <img src="./src/assets/collection3.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={` bigswiper__sec ${theme ? "bg-dark" : "bg-light"}`}>
              <div className="swiperimage__sec">
                <img src="./src/assets/bc2.jpeg" alt="" />
              </div>
              <div className="swipertext__sec">
                <h1>{t("swiper.slide3.title")}</h1>
                <p>
                  {t("swiper.slide3.text")}
                </p>
                <button>{t("swiper.slide3.button")}</button>
                <p>
                  "{t("swiper.slide3.quote")}"
                </p>
                <h4>{t("swiper.slide3.author")}</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="blogs">
        <div className="container">
          <h2>{t("blogSection.title")}</h2>
          <div className="blogs__list">
            {data.map((a) => (
              <div className="blog" key={a.id}>
                <div className="product__image">
                  <img src={a.image} alt="" />
                  <span className="minicard__onimage">{a.category}</span>
                </div>
                <div className="blog_text">
                  <h1>{a.header.slice(0, 50)}</h1>
                  <div className="foot-notesec">
                    <p>{t("blogSection.date")}</p>
                    <Link to={`/blog/${a.id}`}>
                      <div className="yonlendir">
                        <FiChevronRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
