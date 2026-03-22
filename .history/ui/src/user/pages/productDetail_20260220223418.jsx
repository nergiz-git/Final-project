import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/context";

import { connect } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { useRef } from "react";
const ProductDetail = ({ favorites, basket, dispatch }) => {

    let { theme } = useContext(MainContext)
    useEffect(() => {
        document.body.className = theme ? "dark" : "";
    }, [theme]);

    const { id } = useParams();
    const cleanId = id.includes("-") ? id.split("-")[1] : id;
    const toastTriggered = useRef({ addCart: false, removeCart: false, addFav: false, removeFav: false });

    const [showDirectionModal, setShowDirectionModal] = useState(false);
    const [showLegModal, setShowLegModal] = useState(false);
    const [showFabricModal, setShowFabricModal] = useState(false);

    const [selectedDirection, setSelectedDirection] = useState("left");
    const [selectedLeg, setSelectedLeg] = useState("natural");
    const [selectedFabric, setSelectedFabric] = useState("beige");

    const showDirectionForIds = ["1", "3", "4", "5", "7", "10", "13", "15"];
    const showLegModalForIds = ["1", "2", "3", "10", "11"];
    const [product, setProduct] = useState(() => {
        const saved = localStorage.getItem(`product_${id}`);
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(!product);

    useEffect(() => {
        setLoading(true);

        fetch(`http://localhost:3002/sofaproducts/${cleanId}`)
            .then(res => {
                if (!res.ok) throw new Error("Not found");
                return res.json();
            })
            .then(data => {
                setProduct(data);
                localStorage.setItem(`product_${cleanId}`, JSON.stringify(data));
                setLoading(false);
            })
            .catch(() => {
                setProduct(null);
                setLoading(false);
            });
    }, [cleanId]);



    
    const isUserLoggedIn = () => localStorage.getItem("userId") !== null;

    useEffect(() => {
        if (toastTriggered.current.addCart) {
            toast.success("Məhsul səbətə əlavə olundu 🛒", { position: "top-center", autoClose: 1000, transition: Bounce });
            toastTriggered.current.addCart = false;
        }
        if (toastTriggered.current.removeCart) {
            toast.info("Məhsul səbətdən silindi", { position: "top-center", autoClose: 1000, transition: Bounce });
            toastTriggered.current.removeCart = false;
        }
    }, [basket]);

    useEffect(() => {
        if (toastTriggered.current.addFav) {
            toast.success("Məhsul favoritlərə əlavə olundu ❤️", { position: "top-center", autoClose: 1000, transition: Bounce });
            toastTriggered.current.addFav = false;
        }
        if (toastTriggered.current.removeFav) {
            toast.info("Məhsul favoritlərdən silindi", { position: "top-center", autoClose: 1000, transition: Bounce });
            toastTriggered.current.removeFav = false;
        }
    }, [favorites]);

    const infavorite = favorites?.find(a => a && String(a.id) === String(product?.id));
    const inBasket = basket?.find(a => a && String(a.id) === String(product?.id));

    const handleAddToFav = () => {
        if (!isUserLoggedIn()) {
            toast.warning("Favoritlərə əlavə etmək üçün qeydiyyatdan keçin", { position: "top-center", autoClose: 2000, theme: "colored", transition: Bounce });
            return;
        }
        if (infavorite) {
            const updated = favorites.filter(a => a && String(a.id) !== String(product.id));
            toastTriggered.current.removeFav = true;
            dispatch({ type: "SET_Favorites", payload: updated });
            localStorage.setItem("favorites", JSON.stringify(updated));
        } else {
            const updated = [...favorites, { id: product.id, name: product.name }];
            toastTriggered.current.addFav = true;
            dispatch({ type: "SET_Favorites", payload: updated });
            localStorage.setItem("favorites", JSON.stringify(updated));
        }
    };

    // const handleAddToCart = () => {
    //     if (!isUserLoggedIn()) {
    //         toast.warning("Səbətə əlavə etmək üçün qeydiyyatdan keçin", { position: "top-center", autoClose: 2000, theme: "colored", transition: Bounce });
    //         return;
    //     }
    //     if (inBasket) {
    //         const updated = basket.filter(a => String(a.id) !== String(product.id)  && a.category === "sofas");
    //         toastTriggered.current.removeCart = true;
    //         dispatch({ type: "SET_BASKET", payload: updated });
    //         localStorage.setItem("basket", JSON.stringify(updated));
    //     } else {
    //         const updated = [...basket, { id: product.id, count: 1 }];
    //         toastTriggered.current.addCart = true;
    //         dispatch({ type: "SET_BASKET", payload: updated });
    //         localStorage.setItem("basket", JSON.stringify(updated));
    //     }
    // };

     if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    const fabrics = product.fabrics || [];
    const legOptions = product.legOptions || [];
    const directionOptions = product.directionOptions || [];
    return (
        <div className={`${theme ? "bg-dark" : "bg-light"}`}>
            <div className="max-w-7xl mx-auto p-6 mt-[260px] relative">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT */}
                    <div className="lg:flex-1 mt-[106px]">
                        <div className="bg-gray-50 p-[60px] overflow-hidden">
                            <img
                                src={product.sofaImages?.[selectedDirection]?.[selectedLeg]?.[selectedFabric]}
                                alt={product.name}
                                className="w-full object-contain"
                            />
                        </div>

                    </div>

                    <div className="lg:w-[400px] space-y-6">
                        <h1 className="text-5xl font-bold">{product.name}</h1>

                        <p className="text-gray-500 capitalize">
                            {product.name} sofa with chaise longue {selectedDirection}
                        </p>


                        {showDirectionForIds.includes(product.id.toString()) && (
                            <button
                                onClick={() => setShowDirectionModal(true)}
                                className="w-full flex justify-between p-4 border rounded-lg"
                            >
                                <span className="capitalize">{selectedDirection}</span>
                                <span className="text-sm text-gray-500">Change</span>
                            </button>
                        )}


                        {showLegModalForIds.includes(product.id.toString()) && (
                            <button
                                onClick={() => setShowLegModal(true)}
                                className="w-full flex justify-between p-4 border rounded-lg"
                            >
                                <span>
                                    Leg: {legOptions.find(l => l.id === selectedLeg)?.name}
                                </span>
                                <span className="text-sm text-gray-500">Change</span>
                            </button>
                        )}


                        <button
                            onClick={() => setShowFabricModal(true)}
                            className="w-full flex justify-between p-4 border rounded-lg"
                        >
                            <span>
                                Upholstery: {fabrics.find(f => f.id === selectedFabric)?.name}
                            </span>
                            <span className="text-sm text-gray-500">Change</span>
                        </button>


                        <div className="mt-[40px]">
                            <p className="text-sm text-gray-500">Rec. retail price</p>
                            <span className="text-4xl font-bold">${product.price}</span>
                            <p className="text-sm text-gray-400 line-through">
                                Before ${product.oldPrice}
                            </p>
                        </div>

                        {/* <button className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg">
                            Add to cart
                        </button>
                        <button className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg">
                            Add to fav
                        </button> */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg"
                        >
                            {inBasket ? "Səbətdən sil 🛒" : "Add to cart"}
                        </button>

                        <button
                            onClick={handleAddToFav}
                            className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg"
                        >
                            {infavorite ? "❤️ Favoritlərdən sil" : "Add to fav"}
                        </button>

                        <p className="text-sm text-gray-600">
                            Expected delivery 10-12 weeks
                        </p>
                    </div>
                </div>


                {showDirectionModal && showDirectionForIds.includes(product.id.toString()) && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setShowDirectionModal(false)}
                        />
                        <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 p-6">
                            <h3 className="text-lg font-medium mb-4">Sofa direction</h3>
                            {directionOptions.map(dir => (
                                <button
                                    key={dir.id}
                                    onClick={() => {
                                        setSelectedDirection(dir.id);
                                        setShowDirectionModal(false);
                                    }}
                                    className={`w-full p-4 border mb-3 ${selectedDirection === dir.id ? "border-black" : "border-gray-200"
                                        }`}
                                >
                                    {dir.name}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                {showLegModal && showLegModalForIds.includes(product.id.toString()) && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setShowLegModal(false)}
                        />
                        <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 p-6">
                            <h3 className="text-lg font-medium mb-4">Leg type</h3>
                            {legOptions.map(leg => (
                                <button
                                    key={leg.id}
                                    onClick={() => {
                                        setSelectedLeg(leg.id);
                                        setShowLegModal(false);
                                    }}
                                    className={`w-full p-4 border mb-3 ${selectedLeg === leg.id ? "border-black" : "border-gray-200"
                                        }`}
                                >
                                    {leg.name}
                                </button>
                            ))}
                        </div>
                    </>
                )}

                {showFabricModal && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setShowFabricModal(false)}
                        />
                        <div className="fixed top-0 right-0 w-96 h-full bg-white z-50 p-6 overflow-auto">
                            <h3 className="text-lg font-medium mb-4">Choose Fabric</h3>

                            <div className="grid grid-cols-2 gap-4">
                                {fabrics.map(fabric => (
                                    <div
                                        key={fabric.id}
                                        onClick={() => {
                                            setSelectedFabric(fabric.id);
                                            setShowFabricModal(false);
                                        }}
                                        className={`border p-2 cursor-pointer ${selectedFabric === fabric.id ? "border-black" : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={fabric.image}
                                            alt={fabric.name}
                                            className="w-full h-20 object-cover"
                                        />
                                        <p className="text-sm">{fabric.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    favorites: state.favorites || [],
    basket: state.basket || []
});

export default connect(mapStateToProps)(ProductDetail);
