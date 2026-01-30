import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../context/context';
import Service from "../components/service"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function ProductCare() {
    const { theme } = useContext(MainContext);
    const [careProducts, setCareProducts] = useState([]);
    const [proCareProducts, setProCareProducts] = useState([]);
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    useEffect(() => {
        fetch("http://localhost:3002/care")
            .then(res => res.json())
            .then(data => setCareProducts(data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:3002/procare")
            .then(res => res.json())
            .then(data => setProCareProducts(data));
    }, []);

    useEffect(() => {
         document.body.className = theme ? "dark" : "";
       }, [theme]);

    return (
        <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
            <div className="px-[46px] pb-[48px] pt-[48px] mt-[150px]">
                <div className="relative h-[400px] overflow-hidden">
                    <video className="absolute inset-0 w-full h-[600px] object-cover" autoPlay muted loop >
                        <source src="https://cdn.media.amplience.net/v/boconcept/025234c0-b202-4a84-b20d-b09300adef40/webm1080p" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/55"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                        <h1 className="text-4xl font-bold">
                           {t('product_care_title')}
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[40px]">
                    <p className='flex justify-center items-center w-[680px] text-[18px]'>{t('intro_text')}
                        <br />
                        <br />

                        At BoConcept we always strive to ensure the best possible quality for our customers. We control the design and development process for our products and continually perform quality tests according to international standards.</p>
                </div>

            </div>

            <div className="text-center pb-[20px] mt-[80px]">
                <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[28px] font-bold`}>{t('extend_life_title')}</h3>
                <p className={`${theme ? "text-gray-300" : "text-[#545454]"}`}>{t('extend_life_text')}</p>
            </div>
            <div className="px-[40px] mb-[60px]">
                <div className="grid grid-cols-4 gap-6">
                    {proCareProducts.map(item => (
                        <div
                            key={item.id}
                            className="cursor-pointer group"

                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[250px] object-cover"
                            />
                            <h2
                                className={`mt-3 text-[18px] font-semibold transition
                  ${theme ? "text-white" : "text-black"}
                  group-hover:underline`}
                            >
                                {item.title[i18next.language]}
                            </h2>
                            <p>{item.text[i18next.language]}</p>
                        </div>
                    ))}
                </div>
            </div>

             <div className="text-center pb-[20px] mt-[80px]">
                <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[32px] font-bold`}>{t('shop_care_products_title')}</h3>      
            </div>
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none px-[40px] mb-[60px] ">
                {careProducts.map(item => (
                    <div
                        key={item.id}
                        className=" flex-shrink-0  ">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="p-[80px] object-contain w-[330px] h-[320px] bg-[#F4F4F4] "
                        />
                        <p className={`mt-3 text-[16px] font-semibold ${theme ? "text-[white]" : "text-[#000000]"}`}>
                            {item.title[i18next.language]}
                        </p>
                        <p className="text-[12px] text-[#767676] mt-[10px]">Rec. retail price</p>
                        <div className="flex items-center gap-2">
                            <p
                                className="text-[12px] font-bold">
                                ${item.price}
                            </p>

                        </div>
                    </div>
                ))}
            </div>

            <Service />
        </div>
    )
}

export default ProductCare
