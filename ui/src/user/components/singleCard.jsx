import React, { useContext, useState } from "react";
import SingleCardSwiper from "./SingleCartSwiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdLock } from "react-icons/md";
import MainContext from "../context/context";
import { useTranslation } from 'react-i18next';
function SingleCard({ props, products, basket, dispatch }) {
    let { theme, setTheme } = useContext(MainContext);
      const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const addBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket, { id: id, count: 1 }],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket, { id: id, count: 1 }])
    );
  };
  const removeBasket = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((basket) => basket.id !== id)],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((basket) => basket.id !== id)])
    );
  };
  const inBasket = basket.find((a) => a.id == props.id);
  return (
    <>
      <div className="single-card-navigation">
        <p>
          <Link to="/">HOME</Link> / <Link to="/products">SIAM </Link> /
        </p>
        <p>{props.category}</p>
      </div>
      <div className="single-card">
        <div className="single__card-cols">
          <div className="images">
            <SingleCardSwiper product={props} />
          </div>
          <div className="cart-text-col">
            <div className="card-title">
              <p>{props.name}</p>
            </div>
            <div className="card-price">
              <p>${props.price}</p>
              <p>${props.prevprice}</p>
              <p>{t("discount")}</p>
            </div>
            <div className="starss">
              <div className="star_div">
                <img src="../src/assets/star.png" alt="" />
                <img src="../src/assets/star.png" alt="" />
                <img src="../src/assets/star.png" alt="" />
                <img src="../src/assets/star.png" alt="" />
                <img src="../src/assets/star.png" alt="" />
              </div>

              <p>{t("stars")}</p>
            </div>

            {inBasket ? (
              <Link to="/cart">
                {" "}
                <button className="singleBtn">{t("addToCard")}</button>
              </Link>
            ) : (
              <Link to="/cart">
                {" "}
                <button
                  className="singleBtn"
                  onClick={() => addBasket(props.id)}
                >
                  {" "}
                  {t("addToCard")}{" "}
                </button>
              </Link>
            )}
            <div className="guaranteed">
              <p>
                {t("guaranteedSafe")} <span></span> <MdLock />
              </p>
            </div>
            <div className="bank">
              <img src="../src/assets/Frame 177.png" alt="" />
              <img src="../src/assets/Frame 178.png" alt="" />
              <img src="../src/assets/Frame 181.png" alt="" />
              <img src="../src/assets/Frame 180.png" alt="" />
            </div>
            <div className={`delivery ${theme ? "bg-[#1F2937] border border-white" : "bg-[#f3f3f3]"}`} >
              <img src="../src/assets/carbon_delivery.png" alt="" />
              <div className="delivery-text">
                <p className={` ${theme ? "text-[white] " : "text-[black]"}`}>{t("freeDeliveryTitle")}</p>
                <p className={` ${theme ? "text-[white] " : "text-[black]"}`} >
                  {t("freeDeliveryText")}
                </p>
              </div>
            </div>
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                {t("tabs.included")}
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                {t("tabs.delivery")}
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                 {t("tabs.dimensions")}
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                {t("tabs.finance")}
              </button>
            </div>
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>{t("content.included.title")}</h2>

                <p>
                  {t("content.included.text")}
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>{t("content.delivery.title")}</h2>

                <p>
                  {t("content.delivery.text")}
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>{t("content.dimensions.title")}</h2>

                <p>
                  {t("content.dimensions.text")}
                </p>
              </div>
              <div
                className={
                  toggleState === 4 ? "t-content  active-content" : "t-content"
                }
              >
                <h2>{t("content.finance.title")}</h2>

                <p>
                  {t("content.finance.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(SingleCard);
