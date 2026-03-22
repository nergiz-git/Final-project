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

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    const fabrics = product.fabrics || [];
    const legOptions = product.legOptions || [];
    const directionOptions = product.directionOptions || [];


    const toastTriggered = useRef({ addCart: false, removeCart: false, addFav: false, removeFav: false });
    const isUserLoggedIn = () => localStorage.getItem("userId") !== null;
    
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

                        <button className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg">
                            Add to cart
                        </button>
                        <button className="w-full bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 rounded-lg">
                            Add to fav
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

export default ProductDetail;
