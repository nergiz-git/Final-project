import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../context/context";

const ChairsDetail = () => {

    let { theme } = useContext(MainContext)
   useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);
    const { id } = useParams();
    const [showLegModal, setShowLegModal] = useState(false);
    const [selectedLeg, setSelectedLeg] = useState("dark");
    const [activeImageType, setActiveImageType] = useState(null);

    const [product, setProduct] = useState(() => {
        const saved = localStorage.getItem(`product_${id}`);
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(!product);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3002/chairs/${id}`)
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
            if (product.fabricsImages && product.chairsImages) {
                setActiveImageType('fabric'); 
            } else if (product.fabricsImages) {
                setActiveImageType('fabric');
            } else if (product.chairsImages) {
                setActiveImageType('leg');
            }
        }
    }, [product]);

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    const legOptions = product.legOptions || [];
    const hasLeg = !!product.chairsImages;

    let imageSrc;
    if (activeImageType === 'leg' && hasLeg) {
        imageSrc = product.chairsImages?.[selectedLeg]?.[0];
    } else {
        imageSrc = product.images?.[0];
    }
  
    return (
        <div className={`${theme ? "bg-dark" : "bg-light"}`}>
        <div className="max-w-7xl mx-auto p-6 mt-[260px] relative">
            <div className="flex flex-col lg:flex-row gap-8">

             
                <div className="lg:flex-1">
                    <div className="p-[90px] w-[470px] mt-[-85px]  overflow-hidden mx-auto">
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

          
                    {product.chairsImages && (
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

                    <button className="w-full bg-black text-white py-3 rounded-lg">
                        Add to cart
                    </button>

                    <p className="text-sm text-gray-600">
                        Expected delivery 10-12 weeks
                    </p>
                </div>
            </div>

    
            {showLegModal && product.chairsImages && (
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

export default ChairsDetail;