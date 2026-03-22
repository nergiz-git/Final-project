import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from 'react-router';
import ImageSlider from '../../user/components/ImageSlider';
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";



function AdminProduct({ product, selectedOptions = {}, onSelect, sofas, setSofas }) {
    const navigate = useNavigate();
    const selectedColor = selectedOptions[product.id];
    const images = product.images || [];
    const options = product.options || [];
   
    const deleteProduct = () => {
        fetch(`http://localhost:3002/sofas/${product.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                setSofas(sofas.filter((e) => e.id !== data.id))
                toast.success("Məhsul silindi", {
                          position: "top-center",
                          autoClose: 2000,
                          theme: "colored",
                          transition: Bounce,
                        });
            })
    }
    return (
        <>
        <div className="flex flex-col cursor-pointer">
            {product.isNew ? (     
                <ImageSlider images={images} />
            ) : (
           
                <div className="w-full h-[310px] bg-[#F4F4F4] flex items-center justify-center overflow-hidden">
                    <img
                        src={images[0]}
                        alt={product.title}
                        className="max-w-full "
                    />
                </div>

            )}
            <div className="flex justify-between items-center mt-3">
                <h3
                    onClick={() => navigate(`/sofas/${product.id}`)}
                    className="text-[14px] text-[#2E2E2E] cursor-pointer"
                >
                    {product.title}
                </h3>

                {/* <button onClick={deleteProduct}>
                    <CiCircleRemove  className="text-[25px] cursor-pointer text-[red]" />
                </button> */}
                <button onClick={deleteProduct}>
    <FaTrash className="text-[20px] cursor-pointer text-[red]" />
</button>
            </div>

            <p onClick={() => navigate(`/sofas/${product.id}`)}
                className="text-[12px] text-[#767676]">
                {product.materials}
            </p>
            <div onClick={() => navigate(`/sofas/${product.id}`)}
                className="flex items-center gap-2 mt-2">
                {product.options?.map((color, i) => (
                    <div
                        key={i}
                        onClick={() => onSelect(product.id, color)}
                        className={`w-3 h-3 rounded-full cursor-pointer border-2 ${selectedOptions[product.id] === color
                            ? "border-black"
                            : "border-transparent"
                            }`}
                        style={{ backgroundColor: color }}
                    />
                ))}

                <span className="text-[11px] text-[#767676] cursor-pointer hover:text-black">
                    + more options
                </span>
            </div>
            <p className="text-[12px] text-[#767676] mt-[10px]">Rec. retail price</p>
            <div className="flex items-center gap-2">
                <p onClick={() => navigate(`/sofas/${product.id}`)}
                    className="text-[12px] text-[#767676]">
                    {product.price}
                </p>
                <p className="text-[12px] text-[#767676] line-through">
                    Before ${product.oldPrice}
                </p>
            </div>

        </div>
        </>
        
    );
}

export default AdminProduct


