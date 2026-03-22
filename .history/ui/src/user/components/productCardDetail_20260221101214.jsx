import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductCardDetail() {
    const { id } = useParams();
    const [showFabricModal, setShowFabricModal] = useState(false);
    const [selectedFabric, setSelectedFabric] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    // LocalStorage + Loading state
    const [product, setProduct] = useState(() => {
        const saved = localStorage.getItem(`product_${id}`);
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(!product);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3002/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                localStorage.setItem(`product_${id}`, JSON.stringify(data));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    useEffect(() => {
        if (product?.chairImages && !selectedFabric) {

            const firstImageKey = Object.keys(product.chairImages)[0];
            setSelectedFabric(firstImageKey);
        }
    }, [product]);

    if (loading) return <p className="text-center mt-20">Loading...</p>;
    if (!product) return <p className="text-center mt-20">Product not found</p>;

    const fabrics = product.fabrics || [];

    return (
        <div className="max-w-7xl mx-auto p-6 mt-[260px] relative">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:flex-1">
                    <div className=" p-[60px] overflow-hidden">
                        {/* <img
                            src={product.chairImages?.[selectedFabric]}
                            alt={product.name}
                            className="w-full object-contain h-[300px]  "
                        /> */}
                        <img
                            src={
                                selectedFabric
                                    ? product.chairImages?.[selectedFabric]
                                    : product.images[selectedImage]
                            }
                            alt={product.title}
                            className="w-full object-contain h-[400px]"
                        />

                    </div>
                    
                </div>


                <div className="lg:w-[400px] space-y-6">
                    <h1 className="text-5xl font-bold">{product.name}</h1>

                    <p className="text-gray-500 capitalize">
                        {product.name} chair
                    </p>

                    <button
                        onClick={() => setShowFabricModal(true)}
                        className="w-full flex justify-between p-4 border rounded-lg"
                    >
                        <span>
                            Upholstery: {fabrics.find(f => f.id === selectedFabric)?.name || 'Select'}
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

                    <button className="w-full bg-black text-white py-3 rounded-lg">
                        Add to cart
                    </button>

                    <p className="text-sm text-gray-600">
                        Expected delivery 10-12 weeks
                    </p>
                </div>
            </div>


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
    );
};

export default ProductCardDetail;