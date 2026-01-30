// import React, { useContext } from 'react';
// import ImageSlider from './ImageSlider';
// import { useNavigate } from 'react-router';
// import MainContext from '../context/context';
// import { connect } from "react-redux";
// import { TbHeartFilled, TbHeart } from "react-icons/tb";
// import { HiShoppingBag } from "react-icons/hi";
// import { MdRemoveShoppingCart } from "react-icons/md";
// import { Bounce, toast } from "react-toastify";

// function ProductCard({ product, selectedOptions = {}, onSelect, category, favorites, basket, dispatch }) {
//     const navigate = useNavigate();
//     const selectedColor = selectedOptions[product.id];
//     const images = product.images || [];
//     let { theme } = useContext(MainContext);

// const goToDetail = () => {
//     if (category === "beds") {
//         navigate(`/beds/${product.id}`); 
//     } else if (category === "sofas") {
//         navigate(`/sofas/${product.id}`); 
//     }
// };
//     const addfavorites = (id, title) => {
//         const newFavorites = [...favorites, { id: id, name: title }];
//         dispatch({
//             type: "SET_Favorites",
//             payload: newFavorites,
//         });
//         localStorage.setItem("favorites", JSON.stringify(newFavorites));
//         toast.success("Məhsul favoritlərə əlavə olundu ❤️", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "light",
//             transition: Bounce,
//         });
//     };

//     const removefavorites = (id) => {
//         const updatedFavorites = favorites.filter(
//             (favorit) => favorit && favorit.id !== id
//         );
//         dispatch({
//             type: "SET_Favorites",
//             payload: updatedFavorites,
//         });
//         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//         toast.success("Məhsul favoritlərdən silindi", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "light",
//             transition: Bounce,
//         });
//     };

//     const addToCart = (id) => {
//         const itemIndex = basket.findIndex((item) => String(item.id) === String(id));
//         if (itemIndex === -1) {
//             const updatedBasket = [...basket, { id: id, count: 1 }];
//             dispatch({ type: "SET_BASKET", payload: updatedBasket });
//             localStorage.setItem("basket", JSON.stringify(updatedBasket));
//             toast.success("Məhsul səbətə əlavə olundu 🛒", {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 theme: "light",
//                 transition: Bounce,
//             });
//         }
//     };

//     const removeFromCart = (id) => {
//         const updatedBasket = basket.filter((item) => String(item.id) !== String(id));
//         dispatch({ type: "SET_BASKET", payload: updatedBasket });
//         localStorage.setItem("basket", JSON.stringify(updatedBasket));
//         toast.success("Məhsul səbətdən silindi", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "light",
//             transition: Bounce,
//         });
//     };

//     const infavorite = favorites?.find((a) => a && String(a.id) === String(product.id));
//     const inBasket = basket?.find((a) => a && String(a.id) === String(product.id));

//     return (
//         <div className="flex flex-col cursor-pointer h-[322px] relative group">
     
//             <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       
//                 {infavorite ? (
//                     <TbHeartFilled
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             removefavorites(product.id);
//                         }}
//                         className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
//                     />
//                 ) : (
//                     <TbHeart
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             addfavorites(product.id, product.title);
//                         }}
//                         className={`text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1 ${
//                             theme ? "text-black" : "text-black"
//                         }`}
//                     />
//                 )}

       
//                 {inBasket ? (
//                     <MdRemoveShoppingCart
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             removeFromCart(product.id);
//                         }}
//                         className="text-red-500 text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
//                     />
//                 ) : (
//                     <HiShoppingBag
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             addToCart(product.id);
//                         }}
//                         className="text-green-600 text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1"
//                     />
//                 )}
//             </div>

//             {product.isNew ? (
//                 <ImageSlider images={images} />
//             ) : (
//                 <div className="w-full h-[380px] bg-[#F4F4F4] flex items-center justify-center overflow-hidden">
//                     <img
//                         src={images[0]}
//                         alt={product.title}
//                         className="max-w-full"
//                     />
//                 </div>
//             )}

//             <h3
//                 onClick={goToDetail}
//                 className={`mt-3 text-[14px] cursor-pointer ${
//                     theme ? "text-gray-200" : "text-[#2E2E2E]"
//                 }`}
//             >
//                 {product.title}
//             </h3>

//             <p
//                 onClick={goToDetail}
//                 className={`text-[12px] ${theme ? "text-gray-400" : "text-[#767676]"}`}
//             >
//                 {product.materials}
//             </p>

//             <div onClick={goToDetail} className="flex items-center gap-2 mt-2">
//                 {product.options?.map((color, i) => (
//                     <div
//                         key={i}
//                         onClick={(e) => {
//                             e.stopPropagation();
//                             onSelect(product.id, color);
//                         }}
//                         className={`w-3 h-3 rounded-full cursor-pointer border-2 ${
//                             selectedOptions[product.id] === color
//                                 ? "border-black"
//                                 : "border-transparent"
//                         }`}
//                         style={{ backgroundColor: color }}
//                     />
//                 ))}

//                 <span
//                     className={`text-[12px] cursor-pointer hover:text-black ${
//                         theme ? "text-gray-200" : "text-[#2E2E2E]"
//                     }`}
//                 >
//                     + more options
//                 </span>
//             </div>

//             <p className="text-[12px] text-[#767676] mt-[10px]">Rec. retail price</p>
//             <div className="flex items-center gap-2">
//                 <p onClick={goToDetail} className="text-[12px] font-bold">
//                     {product.price}
//                 </p>
//                 <p className={`text-[12px] line-through ${theme ? "text-gray-400" : "text-[#767676]"}`}>
//                     Before ${product.oldPrice}
//                 </p>
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = (state) => ({
//     favorites: state.favorites || [],
//     basket: state.basket || []
// });

// export default connect(mapStateToProps)(ProductCard);


import React, { useContext } from 'react';
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

    const goToDetail = () => {
        if (category === "beds") {
            navigate(`/beds/${product.id}`); 
        } else if (category === "sofas") {
            navigate(`/sofas/${product.id}`); 
        }
    };

    const addfavorites = (id, title) => {
        const newFavorites = [...favorites, { id: id, name: title }];
        dispatch({
            type: "SET_Favorites",
            payload: newFavorites,
        });
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        toast.success("Məhsul favoritlərə əlavə olundu ❤️", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    };

    const removefavorites = (id) => {
        const updatedFavorites = favorites.filter(
            (favorit) => favorit && favorit.id !== id
        );
        dispatch({
            type: "SET_Favorites",
            payload: updatedFavorites,
        });
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        toast.success("Məhsul favoritlərdən silindi", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    };

    const addToCart = (id) => {
        const itemIndex = basket.findIndex((item) => String(item.id) === String(id));
        if (itemIndex === -1) {
            const updatedBasket = [...basket, { id: id, count: 1 }];
            dispatch({ type: "SET_BASKET", payload: updatedBasket });
            localStorage.setItem("basket", JSON.stringify(updatedBasket));
            toast.success("Məhsul səbətə əlavə olundu 🛒", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const removeFromCart = (id) => {
        const updatedBasket = basket.filter((item) => String(item.id) !== String(id));
        dispatch({ type: "SET_BASKET", payload: updatedBasket });
        localStorage.setItem("basket", JSON.stringify(updatedBasket));
        toast.success("Məhsul səbətdən silindi", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Bounce,
        });
    };

    const infavorite = favorites?.find((a) => a && String(a.id) === String(product.id));
    const inBasket = basket?.find((a) => a && String(a.id) === String(product.id));

    return (
        <div className="flex flex-col cursor-pointer h-auto md:h-[322px] relative group">
            {/* Action Icons - Responsive */}
            <div className="absolute top-2 right-2 z-10 flex gap-1.5 sm:gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
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
                        className={`text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform bg-white rounded-full p-1 ${
                            theme ? "text-black" : "text-black"
                        }`}
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
            </div>

            {/* Product Image/Slider - Responsive */}
            {product.isNew ? (
                <ImageSlider images={images} />
            ) : (
                <div className="w-full h-[250px] sm:h-[300px] md:h-[380px] bg-[#F4F4F4] flex items-center justify-center overflow-hidden rounded-lg md:rounded-none">
                    <img
                        src={images[0]}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}

            {/* Product Details - Responsive */}
            <h3
                onClick={goToDetail}
                className={`mt-2 sm:mt-3 text-xs sm:text-sm md:text-[14px] cursor-pointer font-medium ${
                    theme ? "text-gray-200" : "text-[#2E2E2E]"
                }`}
            >
                {product.title}
            </h3>

            <p
                onClick={goToDetail}
                className={`text-[10px] sm:text-xs md:text-[12px] mt-1 ${theme ? "text-gray-400" : "text-[#767676]"}`}
            >
                {product.materials}
            </p>

            {/* Color Options - Responsive */}
            <div onClick={goToDetail} className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                {product.options?.map((color, i) => (
                    <div
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(product.id, color);
                        }}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer border-2 ${
                            selectedOptions[product.id] === color
                                ? "border-black"
                                : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                    />
                ))}

                <span
                    className={`text-[10px] sm:text-xs md:text-[12px] cursor-pointer hover:text-black ${
                        theme ? "text-gray-200" : "text-[#2E2E2E]"
                    }`}
                >
                    + more options
                </span>
            </div>

            {/* Price Section - Responsive */}
            <p className="text-[10px] sm:text-xs md:text-[12px] text-[#767676] mt-1.5 sm:mt-2">
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
