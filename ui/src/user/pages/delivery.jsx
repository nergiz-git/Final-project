// import React, { useContext, useEffect } from 'react'

// import Service from '../components/service';
// import MainContext from '../context/context';
// import { useTranslation } from 'react-i18next';

// function Delivery() {
//    let { theme } = useContext(MainContext)
//    useEffect(() => {
//      document.body.className = theme ? "dark" : "";
//    }, [theme]);
//    const { t } = useTranslation();
//     return (
//         <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
//             <div className="px-[46px] pb-[48px] pt-[48px] mt-[150px]">
//                 <div className="relative h-[400px] overflow-hidden">
//                     <img
//                         src="https://cdn.media.amplience.net/i/boconcept/3bc48911-2830-4293-adf0-ad44002c19c7?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&%24auto-poi%24="
//                         alt=""
//                         className="absolute inset-0 w-full h-full object-cover  object-[50%_45%]"
//                     />
//                     <div className="absolute inset-0 bg-black/55"></div>
//                     <div className="absolute inset-0 flex items-center justify-center text-white text-center">
//                         <h1 className="text-4xl font-bold">
//                             {t('delivery_time')}
//                         </h1>
//                     </div>
//                 </div>
//                 <div className="flex justify-center items-center mt-[40px]">
//                     <p className='flex justify-center items-center w-[680px] text-[18px]'>{t('intro_text')}</p>
//                 </div>
//             </div>

//             <div className="py-[80px]">
//                 <div className="ml-[350px] text-center w-[850px]">
//                     <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[30px] font-bold`}>{t('estimated_delivery')}</h2>
//                     <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-[16px]`}>{t('contact_store')}</p>
//                     <span className="group flex items-center justify-center gap-2 cursor-pointer py-[20px] ">
//                         <svg
//                             className="transition-all duration-300 group-hover:scale-110"
//                             width="22"
//                             height="22"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke={theme ? "white" : "black"}
//                             strokeWidth="1.5"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         >
//                             <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                             <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`}
//                                 d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//                         </svg>
//                         Contact local store
//                     </span>
//                 </div>
//                 <div className="flex gap-10 px-[30px]">
//                     <div className="w-1/3">
//                         <img src="https://cdn.media.amplience.net/i/boconcept/398e08a5-9b52-4855-92f8-ad44002c198e?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" alt="Product 1" className="w-full h-[450px]  object-cover mb-3" />
//                         <h3 className="text-xl font-semibold">{t('board_furniture_title')}</h3>
//                         <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t('board_furniture_text')}</p>

//                     </div>

//                     <div className="w-1/3">
//                         <img src="https://cdn.media.amplience.net/i/boconcept/6fa04268-7de2-4771-81bd-ad44012ce25e?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" alt="Product 2" className="w-full h-[450px] object-cover mb-3" />
//                         <h3 className="text-xl font-semibold">{t('upholstery_furniture_title')}</h3>
//                         <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t('upholstery_furniture_text')}</p>

//                     </div>

//                     <div className="w-1/3">
//                         <img src="https://cdn.media.amplience.net/i/boconcept/164f96ff-1adb-4987-844d-afd900707830?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" alt="Product 2" className="w-full h-[450px] object-cover mb-3" />
//                         <h3 className="text-xl font-semibold">{t('chairs_title')}</h3>
//                         <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t('chairs_text')}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex justufy-center items-center ml-[300px]  mt-[50px]">
//                 <div className="w-[450px]">
//                     <span className="font-bold text-[30px]">{t('handling_packaging_title')}</span>
//                     <p>{t('handling_packaging_text')}</p>
//                 </div>
//                 <div>
//                     <img className="w-[440px] h-[440px] ml-[30px]" src="https://cdn.media.amplience.net/i/boconcept/292b8c85-3128-4638-bb92-aecf00981374?locale=*&w=768&fmt=auto&upscale=false&sm=c&qlt=100&h=768&poi=0.3877622%2C0.4608193%2C0.125%2C0.18726592&scaleFit=poi" alt="" />
//                 </div>
//             </div>

//          <Service/>
            
//         </div>
//     )
// }

// export default Delivery


import React, { useContext, useEffect } from 'react'

import Service from '../components/service';
import MainContext from '../context/context';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

function Delivery() {
   let { theme } = useContext(MainContext)
   useEffect(() => {
     document.body.className = theme ? "dark" : "";
   }, [theme]);
   const { t } = useTranslation();
    return (
        <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
            <Helmet>
        <title>Delivery</title>
        <link rel="icon" type="image/svg+xml" href="https://theelora.com/wp-content/uploads/2023/12/cropped-android-chrome-512x512-1-270x270.png" />
      </Helmet>
            {/* Hero Section */}
            <div className="px-4 sm:px-8 md:px-[46px] pb-[48px] pt-[48px] mt-[80px] md:mt-[120px] lg:mt-[150px]">
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg md:rounded-none">
                    <img
                        src="https://cdn.media.amplience.net/i/boconcept/3bc48911-2830-4293-adf0-ad44002c19c7?locale=*&w=1920&fmt=auto&upscale=false&sm=c&qlt=75&%24auto-poi%24="
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-[50%_45%]"
                    />
                    <div className="absolute inset-0 bg-black/55"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {t('delivery_time')}
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-[30px] md:mt-[40px]">
                    <p className='flex justify-center items-center w-full max-w-[680px] text-[14px] sm:text-[16px] md:text-[18px] text-center px-4'>
                        {t('intro_text')}
                    </p>
                </div>
            </div>

            {/* Estimated Delivery Section */}
            <div className="py-[40px] md:py-[60px] lg:py-[80px] px-4">
                <div className="mx-auto text-center max-w-[850px] lg:ml-[350px] lg:w-[850px]">
                    <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[24px] sm:text-[28px] md:text-[30px] font-bold px-4`}>
                        {t('estimated_delivery')}
                    </h2>
                    <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-[14px] sm:text-[15px] md:text-[16px] px-4 mt-2`}>
                        {t('contact_store')}
                    </p>
                    <span className="group flex items-center justify-center gap-2 cursor-pointer py-[20px]">
                        <svg
                            className="transition-all duration-300 group-hover:scale-110"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={theme ? "white" : "black"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
                            <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`}
                                d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
                        </svg>
                        <span className="text-sm sm:text-base">Contact local store</span>
                    </span>
                </div>

                {/* Products Grid */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-[30px] mt-8">
                    {/* Product 1 */}
                    <div className="w-full md:w-1/3">
                        <img 
                            src="https://cdn.media.amplience.net/i/boconcept/398e08a5-9b52-4855-92f8-ad44002c198e?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" 
                            alt="Product 1" 
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover mb-3 rounded-lg" 
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">{t('board_furniture_title')}</h3>
                        <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>
                            {t('board_furniture_text')}
                        </p>
                    </div>

                    {/* Product 2 */}
                    <div className="w-full md:w-1/3">
                        <img 
                            src="https://cdn.media.amplience.net/i/boconcept/6fa04268-7de2-4771-81bd-ad44012ce25e?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" 
                            alt="Product 2" 
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover mb-3 rounded-lg" 
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">{t('upholstery_furniture_title')}</h3>
                        <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>
                            {t('upholstery_furniture_text')}
                        </p>
                    </div>

                    {/* Product 3 */}
                    <div className="w-full md:w-1/3">
                        <img 
                            src="https://cdn.media.amplience.net/i/boconcept/164f96ff-1adb-4987-844d-afd900707830?locale=*&w=1024&fmt=auto&upscale=false&sm=c&qlt=75&h=1024&%24auto-poi%24=" 
                            alt="Product 3" 
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover mb-3 rounded-lg" 
                        />
                        <h3 className="text-lg sm:text-xl font-semibold">{t('chairs_title')}</h3>
                        <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>
                            {t('chairs_text')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Handling & Packaging Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center px-4 sm:px-8 md:px-[30px] lg:ml-[300px] mt-[30px] md:mt-[50px] gap-6 lg:gap-0">
                <div className="w-full lg:w-[450px] text-center lg:text-left">
                    <span className="font-bold text-[24px] sm:text-[28px] md:text-[30px] block mb-4">
                        {t('handling_packaging_title')}
                    </span>
                    <p className="text-sm sm:text-base px-4 lg:px-0">
                        {t('handling_packaging_text')}
                    </p>
                </div>
                <div className="w-full lg:w-auto flex justify-center">
                    <img 
                        className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[440px] h-auto lg:w-[440px] lg:h-[440px] lg:ml-[30px] object-cover rounded-lg" 
                        src="https://cdn.media.amplience.net/i/boconcept/292b8c85-3128-4638-bb92-aecf00981374?locale=*&w=768&fmt=auto&upscale=false&sm=c&qlt=100&h=768&poi=0.3877622%2C0.4608193%2C0.125%2C0.18726592&scaleFit=poi" 
                        alt="Handling packaging" 
                    />
                </div>
            </div>

            <Service/>
            
        </div>
    )
}

export default Delivery


