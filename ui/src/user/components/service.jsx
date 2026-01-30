import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../context/context';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Service() {
    let { theme } = useContext(MainContext)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3002/service")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

       const { t } = useTranslation();
        const { i18n } = useTranslation();
    return (
        <>
            <div className="text-center pb-[20px] mt-[140px]">
                <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[28px] font-bold`}>{t("heading")}</h3>

            </div>
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none px-[40px] mb-[60px] ">
                {products.map(item => (
                    <Link
                        key={item.id}
                        className=" flex-shrink-0 "
                         to={item.path}

                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-[300px] h-90 object-cover  "
                        />
                        <h2 className={`mt-3 text-[23px] font-semibold ${theme ? "text-[white]" : "text-[#000000]"}`}>
                            {item.title[i18next.language]}
                        </h2>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Service