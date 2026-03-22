import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/context";
import { connect } from "react-redux";
import { Bounce, toast } from "react-toastify";
import { useRef } from "react";
const TablesDetail = ({ favorites, basket, dispatch }) => {

    let { theme } = useContext(MainContext)
   useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);
    const { id } = useParams();
    const [showLegModal, setShowLegModal] = useState(false);
    const [selectedLeg, setSelectedLeg] = useState("gray");
    const [activeImageType, setActiveImageType] = useState(null);

    const [product, setProduct] = useState(() => {
        const saved = localStorage.getItem(`product_${id}`);
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(!product);
    const toastTriggered = useRef({ addCart: false, removeCart: false, addFav: false, removeFav: false });
    
    const isUserLoggedIn = () => localStorage.getItem("userId") !== null;
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3002/tables/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                localStorage.setItem(`product_${id}`, JSON.stringify(data));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        if (product) {
            if (product.fabricsImages && product.tablesImages) {
                setActiveImageType('fabric'); 
            } else if (product.fabricsImages) {
                setActiveImageType('fabric');
            } else if (product.tablesImages) {
                setActiveImageType('leg');
            }
        }
    }, [product]);

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
    const infavorite = favorites?.find(a => a && String(a.id) === String(product?.id) && a.category === "tables");
    const inBasket = basket?.find(a => a && String(a.id) === String(product?.id) && a.category === "tables");
    
    const handleAddToFav = () => {
        if (!isUserLoggedIn()) {
            toast.warning("Favoritlərə əlavə etmək üçün qeydiyyatdan keçin", { position: "top-center", autoClose: 2000, theme: "colored", transition: Bounce });
            return;
        }
        if (infavorite) {
            const updated = favorites.filter(a => a && String(a.id) !== String(product.id)&& a.category === "tables");
            toastTriggered.current.removeFav = true;
            dispatch({ type: "SET_Favorites", payload: updated });
            localStorage.setItem("favorites", JSON.stringify(updated));
        } else {
            // const updated = [...favorites, { id: product.id, name: product.name, category: "tables" }];
             const updated = [...favorites, { id: product.id, name: product.heading || product.name, category: "beds" }];
            toastTriggered.current.addFav = true;
            dispatch({ type: "SET_Favorites", payload: updated });
            localStorage.setItem("favorites", JSON.stringify(updated));
        }
    };
    
    const handleAddToCart = () => {
        if (!isUserLoggedIn()) {
            toast.warning("Səbətə əlavə etmək üçün qeydiyyatdan keçin", { position: "top-center", autoClose: 2000, theme: "colored", transition: Bounce });
            return;
        }
        if (inBasket) {
            const updated = basket.filter(a => String(a.id) !== String(product.id)&& a.category === "tables");
            toastTriggered.current.removeCart = true;
            dispatch({ type: "SET_BASKET", payload: updated });
            localStorage.setItem("basket", JSON.stringify(updated));
        } else {
            const updated = [...basket, { id: product.id, count: 1, category: "tables" }];
            toastTriggered.current.addCart = true;
            dispatch({ type: "SET_BASKET", payload: updated });
            localStorage.setItem("basket", JSON.stringify(updated));
        }
    };

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    const legOptions = product.legOptions || [];
    const hasLeg = !!product.tablesImages;

    let imageSrc;
    if (activeImageType === 'leg' && hasLeg) {
        imageSrc = product.tablesImages?.[selectedLeg]?.[0];
    } else {
        imageSrc = product.images?.[0];
    }
  
    return (
        <div className={`${theme ? "bg-dark" : "bg-light"}`}>
        <div className="max-w-7xl mx-auto p-6 mt-[260px] relative">
            <div className="flex flex-col lg:flex-row gap-8">

             
                <div className="lg:flex-1">
                    <div className="p-0 w-[550px] mt-[50px]  overflow-hidden mx-auto">
                        <img
                            src={imageSrc}
                            alt={product.name}
                            className="w-full object-contain"
                        />
                    </div>
                </div>

                <div className="lg:w-[400px] space-y-6">
                    <h1 className="text-5xl font-bold">{product.heading}</h1>

                    <p className="text-gray-500 capitalize">
                        {product.title}
                    </p>

          
                    {product.tablesImages && (
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

                    <div className="mt-[40px]">
                        <p className="text-sm text-gray-500">Rec. retail price</p>
                        <span className="text-4xl font-bold">${product.price}</span>
                        <p className="text-sm text-gray-400 line-through">
                            Before ${product.oldPrice}
                        </p>
                    </div>

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

    
            {showLegModal && product.tablesImages && (
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
                                    setActiveImageType('leg'); 
                                    setShowLegModal(false);
                                }}
                                className={`w-full p-4 border mb-3 ${
                                    selectedLeg === leg.id ? "border-black" : "border-gray-200"
                                }`}
                            >
                                {leg.name}
                            </button>
                        ))}
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

export default connect(mapStateToProps)(TablesDetail);