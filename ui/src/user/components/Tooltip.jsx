import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Tooltip({ category, productId, onClose }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/${category}/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [category, productId]);

  if (!product) return null;

  return (
<div
  className="absolute top-6 left-1/2 -translate-x-1/2 
             bg-white shadow-xl rounded-lg 
             p-3 w-64 z-50 cursor-pointer"
  onClick={() => {
    if (category === "chairs") {
      navigate(`/chairsdetail/${productId}`);
    } else if (category === "tables") {
      navigate(`/tablesdetail/${productId}`);
    }
  }}
>

  <div className="flex gap-3 items-center">
    {product?.images?.length > 0 && (
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-20 h-20 min-w-[66px] p-[10px] object-contain rounded-md bg-gray-100"
      />
    )}
    <div>
      <h4 className="text-sm font-semibold">
         {product.title.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ))}
      </h4>
      <p className="text-xs text-gray-600 mt-[10px]">Rec.retail price</p>
      <p className="text-xs text-gray-600 mt-1">
        ${product.price}
      </p>
    </div>

  </div>
</div>

  );
}


export default Tooltip