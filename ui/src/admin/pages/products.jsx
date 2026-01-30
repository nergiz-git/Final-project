import React, { useState } from 'react'
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CreateProduct() {
  const [newPro, setNewPro] = useState({
    title: "",
    materials: "",
    price: "",
    oldPrice: "",
    images: [],
    options: ["#000000", "#5E3E34", "#152D81"],
  });

  const addProduct = (e) => {
    e.preventDefault()


    if (newPro.images.length === 0 || !newPro.title || !newPro.price) {
      toast.error("Zəhmət olmasa bütün sahələri doldurun!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        transition: Bounce,
      });

      return;
    }

    fetch("http://localhost:3002/sofas", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPro)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Məhsul əlavə edildi:", data);
        toast.success("Məhsul əlavə edildi", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          transition: Bounce,
        });


        setNewPro({
          title: "",
          materials: "",
          price: "",
          oldPrice: "",
          images: []
        });

        document.querySelector('input[type="file"]').value = "";
      })
      .catch(error => console.error("Xəta:", error));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert("Zəhmət olmasa yalnız şəkil faylı seçin!");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewPro(prev => ({
        ...prev,
        images: [reader.result]
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col gap-[20px] items-center py-8">
        <h1 className="text-[30px] text-green-900 text-center font-bold mt-[150px]">
          Create Product
        </h1>

        <form className="w-[400px] flex flex-col gap-[20px]" onSubmit={addProduct}>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Şəkil seçin:
            </label>
            <input
              type="file"
              accept="image/*"
              className="border-[1px] border-solid border-teal-700 py-[10px] px-[20px] w-full rounded"
              onChange={handleImage}
            />
          </div>


          {newPro.images.length > 0 && (
            <div className="w-full border-[2px] border-solid border-teal-700 rounded-lg overflow-hidden">
              <img
                src={newPro.images[0]}
                alt="Preview"
                className="w-full h-[250px] object-cover"
              />
            </div>
          )}


          <input
            type="text"
            value={newPro.title}
            className="border-[1px] border-solid border-teal-700 py-[10px] px-[20px] w-full rounded"
            placeholder="Title"
            onChange={(e) => setNewPro({ ...newPro, title: e.target.value })}
          />

          <input
            type="text"
            value={newPro.materials}
            className="border-[1px] border-solid border-teal-700 py-[10px] px-[20px] w-full rounded"
            placeholder="Materials"
            onChange={(e) => setNewPro({ ...newPro, materials: e.target.value })}
          />
          <input
            type="number"
            value={newPro.price}
            className="border-[1px] border-solid border-teal-700 py-[10px] px-[20px] w-full rounded"
            placeholder="Price"
            onChange={(e) => setNewPro({ ...newPro, price: e.target.value })}
          />

          <input
            type="number"
            value={newPro.oldPrice}
            className="border-[1px] border-solid border-teal-700 py-[10px] px-[20px] w-full rounded"
            placeholder="Old Price"
            onChange={(e) => setNewPro({ ...newPro, oldPrice: e.target.value })}
          />

          <button
            type="submit"
            className="border-[1px] border-solid border-blue-700 bg-blue-500 text-white py-[10px] rounded hover:bg-blue-700 cursor-pointer duration-[0.4s] font-medium"
          >
            Add Product
          </button>
        </form>
      </div></>

  )
}

export default CreateProduct
