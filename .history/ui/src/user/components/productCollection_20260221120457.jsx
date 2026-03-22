

import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { TbHeartFilled, TbHeart } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { connect } from "react-redux";
import { Bounce, toast } from "react-toastify";

function ProductCollection({ props, favorites, dispatch }) {
  
 
  const isUserLoggedIn = () => {
    return localStorage.getItem("userId") !== null;
  };

  const addfavorites = (id, name,category) => {
    // ✅ QEYDIYYAT YOXLAMA
    if (!isUserLoggedIn()) {
      toast.warning("Favoritlərə əlavə etmək üçün qeydiyyatdan keçin", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    const newFavorites = [...favorites, { id: id, name: name,category: category }];
    dispatch({
      type: "SET_Favorites",
      payload: newFavorites,
    });
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    
    toast.success("Məhsul favoritlərə əlavə olundu ❤️", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const removefavorites = (id) => {
    const updatedFavorites = favorites.filter((favorit) => favorit.id !== id);
    dispatch({
      type: "SET_Favorites",
      payload: updatedFavorites,
    });
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
    toast.info("Məhsul favoritlərdən silindi", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const infavorite = favorites.find((a) => a.id == props.id);

  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={props.images[0]} alt="" />
          <div className="overlay">
            <Link to={`/product/${props.id}`}>
              <AiOutlineSearch style={{ marginTop: "15px" }} />
            </Link>
            <div className="heart_icon_products">
              {infavorite ? (
                <TbHeartFilled
                  onClick={() => removefavorites(props.id)}
                />
              ) : (
                <TbHeart onClick={() => addfavorites(props.id, props.name,props.category)} />
              )}
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="title">
            <h1>{props.name.slice(0, 23)}</h1>
          </div>
          <div className="price">
            <p>${props.price} </p>
            <p className="before">${props.prevprice} </p>
            <p className="endirim">40% OFF</p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites || [],
});

export default connect(mapStateToProps)(ProductCollection);