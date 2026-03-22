
import React, { useContext, useEffect, useRef } from 'react';
import ImageSlider from './ImageSlider';
import { useNavigate } from 'react-router';
import MainContext from '../context/context';
import { connect } from "react-redux";
import { TbHeartFilled, TbHeart } from "react-icons/tb";
import { HiShoppingBag } from "react-icons/hi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

function ProductCard({ product, selectedOptions = {}, onSelect, category, favorites, basket, dispatch }) {
    const navigate = useNavigate();
    const selectedColor = selectedOptions[product.id];
    const images = product.images || [];
    let { theme } = useContext(MainContext);

    // const toastTriggered = useRef({
    //     addCart: false,
    //     removeCart: false,
    //     addFav: false,
    //     removeFav: false
    // });

    // const isUserLoggedIn = () => {
    //     return localStorage.getItem("userId") !== null;
    // };

    const goToDetail = () => {
        if (category === "beds") {
            navigate(`/beds/${product.id}`);
        } else if (category === "sofas") {
            navigate(`/sofas/${product.id}`);
        } else if (category === "chairs") {
            navigate(`/chairsdetail/${product.id}`);
        } else if (category === "tables") {
            navigate(`/tablesdetail/${product.id}`);
        }
    };

    // ✅ BASKET DƏYIŞƏNDƏ TOAST GÖSTƏR
    useEffect(() => {
        if (toastTriggered.current.addCart) {
            toast.success("Məhsul səbətə əlavə olundu 🛒", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });
            toastTriggered.current.addCart = false;
        }
        
        if (toastTriggered.current.removeCart) {
            toast.info("Məhsul səbətdən silindi", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });
            toastTriggered.current.removeCart = false;
        }
    }, [basket]);

    // ✅ FAVORITES DƏYIŞƏNDƏ TOAST GÖSTƏR
    // useEffect(() => {
    //     if (toastTriggered.current.addFav) {
    //         toast.success("Məhsul favoritlərə əlavə olundu ❤️", {
    //             position: "top-center",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         toastTriggered.current.addFav = false;
    //     }
        
    //     if (toastTriggered.current.removeFav) {
    //         toast.info("Məhsul favoritlərdən silindi", {
    //             position: "top-center",
    //             autoClose: 1000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             theme: "light",
    //             transition: Bounce,
    //         });
    //         toastTriggered.current.removeFav = false;
    //     }
    // }, [favorites]);

    // const addfavorites = (id, title) => {
    //     if (!isUserLoggedIn()) {
    //         // ✅ DƏRHAL TOAST ÇIXIR (useEffect-siz)
    //         toast.warning("Favoritlərə əlavə etmək üçün qeydiyyatdan keçin", {
    //             position: "top-center",
    //             autoClose: 2000,
    //             theme: "colored",
    //             transition: Bounce,
    //         });
    //         return;
    //     }

    //     const newFavorites = [...favorites, { id: id, name: title }];
    //     toastTriggered.current.addFav = true;
    //     dispatch({
    //         type: "SET_Favorites",
    //         payload: newFavorites,
    //     });
    //     localStorage.setItem("favorites", JSON.stringify(newFavorites));
        
    // };

    // const removefavorites = (id) => {
    //     const updatedFavorites = favorites.filter(
    //         (favorit) => favorit && favorit.id !== id
    //     );
    //     toastTriggered.current.removeFav = true;
    //     dispatch({
    //         type: "SET_Favorites",
    //         payload: updatedFavorites,
    //     });
    //     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // };

    // const addToCart = (id) => {
    //     if (!isUserLoggedIn()) {
    //         // ✅ DƏRHAL TOAST ÇIXIR (useEffect-siz)
    //         toast.warning("Səbətə əlavə etmək üçün qeydiyyatdan keçin", {
    //             position: "top-center",
    //             autoClose: 2000,
    //             theme: "colored",
    //             transition: Bounce,
    //         });
    //         return;
    //     }

    //     const itemIndex = basket.findIndex((item) => String(item.id) === String(id));
    //     if (itemIndex === -1) {
    //         const updatedBasket = [...basket, { id: id, count: 1 }];
    //         toastTriggered.current.addCart = true;
    //         dispatch({ type: "SET_BASKET", payload: updatedBasket });
    //         localStorage.setItem("basket", JSON.stringify(updatedBasket));
    //     }
    // };

    // const removeFromCart = (id) => {
    //     const updatedBasket = basket.filter((item) => String(item.id) !== String(id));
    //     toastTriggered.current.removeCart = true;
    //     dispatch({ type: "SET_BASKET", payload: updatedBasket });
    //     localStorage.setItem("basket", JSON.stringify(updatedBasket));
    // };

    // const infavorite = favorites?.find((a) => a && String(a.id) === String(product.id));
    // const inBasket = basket?.find((a) => a && String(a.id) === String(product.id));

    return (
        <div className="flex flex-col cursor-pointer h-auto md:h-[422px] relative group">
            {/* <div className="absolute top-2 right-2 z-10 flex gap-1.5 sm:gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                {infavorite ? (
                    <TbHeartFilled
                        onClick={(e) => {
                            e.stopPropagation();
                            removefavorites(product.id);
                        }}
                        className="text-red-500 text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
                    />
                ) : (
                    <TbHeart
                        onClick={(e) => {
                            e.stopPropagation();
                            addfavorites(product.id, product.title);
                        }}
                        className="text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1 text-black"
                    />
                )}

                {inBasket ? (
                    <MdRemoveShoppingCart
                        onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(product.id);
                        }}
                        className="text-red-500 text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
                    />
                ) : (
                    <HiShoppingBag
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product.id);
                        }}
                        className="text-green-600 text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
                    />
                )}
            </div> */}

            {product.isNew ? (
               <ImageSlider images={images} />
            ) : (
                <div className="w-full h-[250px] sm:h-[300px] md:h-[380px] bg-[#F4F4F4] flex items-center justify-center overflow-hidden rounded-lg md:rounded-none">
                    <img
                        src={images[0]}
                        alt={product.title}
                        className="max-w-full object-contain"
                    />
                </div>
            )}

            <h3
                onClick={goToDetail}
                className={`mt-2 sm:mt-3 text-xs sm:text-sm md:text-[14px] cursor-pointer font-medium ${theme ? "text-gray-200" : "text-[#2E2E2E]"}`}
            >
                {product.title}
            </h3>

            <p
                onClick={goToDetail}
                className={`text-[10px] sm:text-xs md:text-[12px] mt-0 ${theme ? "text-gray-400" : "text-[#767676]"}`}
            >
                {product.materials}
            </p>

            <div onClick={goToDetail} className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-0">
                {product.options?.map((color, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(product.id, color);
                        }}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer  ${
                            selectedOptions[product.id] === color ? "border-black" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color, border: "1px solid black" }}
                    />
                ))}

                <span className={`text-[10px] sm:text-xs md:text-[12px] cursor-pointer hover:text-black ${theme ? "text-gray-200" : "text-[#2E2E2E]"}`}>
                    + more options
                </span>
            </div>

            <p className="text-[10px] sm:text-xs md:text-[12px] text-[#767676] mt-1.5 sm:mt-1">
                Rec. retail price
            </p>
            <div className="flex items-center gap-1.5 sm:gap-2">
                <p onClick={goToDetail} className="text-xs sm:text-sm md:text-[12px] font-bold">
                    {product.price}
                </p>
                <p className={`text-[10px] sm:text-xs md:text-[12px] line-through ${theme ? "text-gray-400" : "text-[#767676]"}`}>
                    Before ${product.oldPrice}
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    favorites: state.favorites || [],
    basket: state.basket || []
});

export default connect(mapStateToProps)(ProductCard);