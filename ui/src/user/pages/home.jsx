// import React, { useEffect, useState, useContext } from "react";
// import image1 from "../../assets/image1.webp"
// import image2 from "../../assets/image2.webp"
// import image3 from "../../assets/image3.webp"
// import image4 from "../../assets/image4.webp"
// import video1 from "../../assets/video1.mp4";
// import video2 from "../../assets/video2.mp4";
// import video3 from "../../assets/video3.mp4";
// import image10 from "../../assets/image10.webp"
// import image11 from "../../assets/image11.webp"
// import image12 from "../../assets/image12.webp"
// import Slider from "../components/slider"
// import Swiper from "../components/productSlider";
// import { Link, useOutletContext } from "react-router";
// import ChatMessage from "../components/chatMessage";
// import ScrollToTop from "react-scroll-to-top";
// import "../components/chatMessage.css";
// import ProductCard from "../components/productCard";
// import SearchOverlay from "../components/SearchOverlay";
// import MainContext from "../context/context";
// import { useTranslation } from "react-i18next";


// function Home() {
//   const [products, setProducts] = useState([]);
//   const { search, setSearch, allProducts } = useOutletContext();

//   let { theme } = useContext(MainContext)


//   useEffect(() => {
//     fetch("http://localhost:3002/category")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   useEffect(() => {
//     if (search) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [search]);
//   const { t } = useTranslation();
//   return (
//     <div className={`w-full ${theme ? "bg-dark" : "bg-light"}`}>
//       <div className="relative w-full h-[600px]  aspect-[16/9] overflow-hidden">
//         <video className="absolute inset-0 w-full h-[600px] object-cover" autoPlay muted loop >
//           <source src={video1} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div className="absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
//           <div
//             className="opacity-0"
//             style={{
//               animation: `fadeInAfterTitle 0.8s ease forwards`,
//               animationDelay: "0.1s",
//             }}
//           >
//             <h5 className="text-[20px] mb-2">{t("saveOnDesign")}</h5>
//           </div>
//           <h1 className="text-4xl font-bold flex justify-center overflow-hidden">
//             {"SALE EKSTRAORDINÆR Now on".split("").map((char, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-clip-text text-transparent"
//                 style={{
//                   backgroundImage: "linear-gradient(90deg,#8B8C8B,#ffffff,#8B8C8B)",
//                   backgroundSize: "200% 100%",
//                   backgroundPosition: "50% 50%",
//                   animation: `revealLetter 1s ease forwards`,
//                   animationDelay: `${index * 0.05}s`,
//                 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </span>
//             ))}
//           </h1>
//           <div
//             className="opacity-0"
//             style={{
//               animation: `fadeInAfterTitle 0.8s ease forwards`,
//               animationDelay: "0.1s",
//             }}
//           >
//             <button className="bg-white text-black mt-4 rounded-lg px-3 py-2 mx-auto inline-flex items-center gap-2 group cursor-pointer">
//               {t("shopTheSale")}
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="black"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className="group-hover:fill-black transition-colors duration-300" cx="12" cy="12" r="10" />
//                 <path className="group-hover:stroke-white transition-colors duration-300" d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//             </button>
//           </div>
//           <style>
//             {`
//       @keyframes revealLetter {
//         0% { background-size: 0% 100%; background-position: 50% 50%; }
//         100% { background-size: 200% 100%; background-position: 50% 50%; }
//       }

//       @keyframes fadeInAfterTitle {
//         0% { opacity: 0; transform: translateY(20px); }
//         100% { opacity: 1; transform: translateY(0); }
//       }
//     `}
//           </style>
//         </div>
//       </div>
//       <SearchOverlay />
//       <div className="mt-[100px]">
//         <Slider />
//       </div>

//       <div className="relative w-full h-[500px] overflow-hidden mt-[60px]">
//         <video className="w-full h-[500px] object-cover" autoPlay muted loop>
//           <source src={video2} type="video/mp4" />
//         </video>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
//           <h2 className="text-2xl">{t("elegantSettings")}</h2>
//           <h3 className="text-5xl font-bold">{t("festiveDining")}</h3>
//           <button className="bg-white text-black mt-4 rounded-lg px-6 py-2 mx-auto inline-flex items-center gap-2 group cursor-pointer">
//             {t("discoverMore")}
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="black"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className="group-hover:fill-black transition-colors duration-300" cx="12" cy="12" r="10" />
//               <path className="group-hover:stroke-white transition-colors duration-300" d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className="relative w-full mt-20">
//         <div className="mb-12 text-center">
//           <h6 className={`text-lg ${theme ? "text-gray-300" : "text-gray-500"}`}>{t("keyTrends2026")}</h6>
//           <h2 className="text-4xl font-bold">{t("newIdeasHome")}</h2>
//           <span className={`${theme ? "text-gray-200" : "text-gray-600"} mt-1 block`}>{t("beInspired")}</span>
//         </div>

//         <div className="flex gap-10 mx-5">
//           <div className="w-1/2">
//             <img src={image10} alt="Product 1" className="w-full h-[500px]  object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{t("mindfulCalm")}</h3>
//             <p className={`${theme ? "text-gray-300" : "text-gray-500"}`}>{t("tactileFabrics")}</p>
//             <span className="group flex items-center gap-2 cursor-pointer">
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke={theme ? "white" : "black"}
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                 <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//               {t("learnMore")}
//             </span>
//           </div>

//           <div className="w-1/2">
//             <img src={image11} alt="Product 2" className="w-full h-[500px] object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{t("yourHomeYourStory")}</h3>
//             <p className={` ${theme ? "text-gray-300" : "text-gray-500"}`}>{t("openStorage")}</p>
//             <span className="group flex items-center gap-2 cursor-pointer">
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke={theme ? "white" : "black"}
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                 <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//               {t("learnMore")}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center py-[200px] text-center gap-4">
//         <h2 className="font-bold text-3xl">{t("endlessPossibilities")}</h2>
//         <p className="w-[805px]">{t("customCollections")}</p>
//         <div className="flex gap-8">
//           <span className="group flex items-center gap-2 cursor-pointer">
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={theme ? "white" : "black"}
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//               <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//             {t("learnMoreFabrics")}
//           </span>
//           <span className="group flex items-center gap-2 cursor-pointer">
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={theme ? "white" : "black"}
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//               <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//             {t("learnMoreFabrics")}
//           </span>
//         </div>
//         <img src={image12} alt="" className="w-full max-w-[1300px]  object-cover" />
//       </div>
//       <Swiper />
//       <div className="px-[46px] pb-[48px] pt-[48px]">
//         <div className="relative h-[500px] overflow-hidden">
//           <img
//             src={image1}
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover  object-[50%_85%]"
//           />
//           <div className="absolute inset-0 bg-black/55"></div>
//           <div className="absolute inset-0 flex items-center justify-center text-white text-center">
//             <h1 className="text-4xl font-bold">
//               {t("beInspiredInStore")}
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="py-[80px]">
//         <div className="ml-[400px] w-[850px]">
//           <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[32px] font-bold mb-[4px]`}>{t("beInspiredInStore")}</h2>
//           <p className={`${theme ? "text-gray-300" : "text-[#545454]"}`}>{t("weHelpedThousands")}</p>
//           <span className="group flex items-center gap-2 cursor-pointer px-[12px] py-[20px]">
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={theme ? "white" : "black"}
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//               <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//             {t("getInTouch")}
//           </span>
//         </div>

//         <div className="px-[270px] pb-[48px] pt-[48px]">
//           <div className="relative h-[500px] overflow-hidden">
//             <video controls className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
//               <source src={video3} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       </div>

//       <div className="text-center pb-[20px]">
//         <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[28px] font-bold`}>{t("discoverRealHomes")}</h3>
//         <p className={`${theme ? "text-gray-300" : "text-[#545454]"}`}>{t("pastAndCurrentProjects")}</p>
//       </div>
//       <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none px-[40px] ">
//         {products.map(item => (
//           <Link
//             to={`/product/${item.id}`}
//             key={item.id}
//             className=" flex-shrink-0  "
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-[300px] h-90 object-cover  "
//             />
//             <h2 className=" mt-3 text-lg font-semibold text-black">
//               {item.title}
//             </h2>
//           </Link>
//         ))}
//       </div>

//       <div className="py-[80px]">
//         <div className="ml-[350px] text-center w-[850px]">
//           <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[30px] font-bold`}>{t("styleAdvice")}</h2>
//           <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-[16px]`}>{t("everythingYouNeed")}</p>
//           <span className="group flex items-center justify-center gap-2 cursor-pointer py-[20px] ">
//             <svg
//               className="transition-all duration-300 group-hover:scale-110"
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke={theme ? "white" : "black"}
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//               <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`}
//                 d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//             </svg>
//             {t("beInspired")}
//           </span>
//         </div>
//         <div className="flex gap-10 px-[30px]">
//           <div className="w-1/3">
//             <img src={image2} alt="Product 1" className="w-full h-[450px]  object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{t("mindfulCalm")}</h3>
//             <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("tactileFabrics")}</p>
//             <span className="group flex items-center gap-2 cursor-pointer text-[12px] ">
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke={theme ? "white" : "black"}
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                 <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//               {t("readMore")}
//             </span>
//           </div>

//           <div className="w-1/3">
//             <img src={image3} alt="Product 2" className="w-full h-[450px] object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{t("howToChooseDiningChair")}</h3>
//             <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("diningChairGuide")}</p>
//             <span className="group flex items-center gap-2 cursor-pointer text-[12px] ">
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke={theme ? "white" : "black"}
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                 <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`}
//                   d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//               {t("readMore")}
//             </span>
//           </div>

//           <div className="w-1/3">
//             <img src={image4} alt="Product 2" className="w-full h-[450px] object-cover mb-3" />
//             <h3 className="text-xl font-semibold">{t("diningTableGuide")}</h3>
//             <p className={` mb-2 ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("diningTableGuideText")}</p>
//             <span className="group flex items-center gap-2 cursor-pointer text-[12px] ">
//               <svg
//                 className="transition-all duration-300 group-hover:scale-110"
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke={theme ? "white" : "black"}
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle className={`transition-colors duration-300 ${theme ? "group-hover:fill-white" : "group-hover:fill-black"}`} cx="12" cy="12" r="10" />
//                 <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
//               </svg>
//               {t("readMore")}
//             </span>
//           </div>
//         </div>
//       </div>
//       <ChatMessage />
//       <ScrollToTop smooth top="300" width="20" height="20" color="#fff" />


//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState, useContext } from "react";
import image1 from "../../assets/image1.webp"
import image2 from "../../assets/image2.webp"
import image3 from "../../assets/image3.webp"
import image4 from "../../assets/image4.webp"
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import image10 from "../../assets/image10.webp"
import image11 from "../../assets/image11.webp"
import image12 from "../../assets/image12.webp"
import Slider from "../components/slider"
import Swiper from "../components/productSlider";
import { Link, useOutletContext } from "react-router";
import ChatMessage from "../components/chatMessage";
import ScrollToTop from "react-scroll-to-top";
import "../components/chatMessage.css";
import ProductCard from "../components/productCard";
import SearchOverlay from "../components/SearchOverlay";
import MainContext from "../context/context";
import { useTranslation } from "react-i18next";


function Home() {
  const [products, setProducts] = useState([]);
  const { search, setSearch, allProducts } = useOutletContext();

  let { theme } = useContext(MainContext)


  useEffect(() => {
    fetch("http://localhost:3002/category")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    if (search) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [search]);
  const { t } = useTranslation();
  return (
    <div className={`w-full ${theme ? "bg-dark" : "bg-light"}`}>
      {/* Hero Video Section - Responsive */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] aspect-[16/9] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-1/2 sm:top-60 md:top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 w-full">
          <div
            className="opacity-0"
            style={{
              animation: `fadeInAfterTitle 0.8s ease forwards`,
              animationDelay: "0.1s",
            }}
          >
            <h5 className="text-sm sm:text-lg md:text-[20px] mb-2">{t("saveOnDesign")}</h5>
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold flex justify-center overflow-hidden flex-wrap">
            {"SALE EKSTRAORDINÆR Now on".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg,#8B8C8B,#ffffff,#8B8C8B)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "50% 50%",
                  animation: `revealLetter 1s ease forwards`,
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <div
            className="opacity-0"
            style={{
              animation: `fadeInAfterTitle 0.8s ease forwards`,
              animationDelay: "0.1s",
            }}
          >
            <button className="bg-white text-black mt-4 rounded-lg px-3 py-2 text-sm sm:text-base mx-auto inline-flex items-center gap-2 group cursor-pointer">
              {t("shopTheSale")}
              <svg
                className="transition-all duration-300 group-hover:scale-110"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle className="group-hover:fill-black transition-colors duration-300" cx="12" cy="12" r="10" />
                <path className="group-hover:stroke-white transition-colors duration-300" d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
              </svg>
            </button>
          </div>
          <style>
            {`
      @keyframes revealLetter {
        0% { background-size: 0% 100%; background-position: 50% 50%; }
        100% { background-size: 200% 100%; background-position: 50% 50%; }
      }

      @keyframes fadeInAfterTitle {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}
          </style>
        </div>
      </div>
      <SearchOverlay />
      
      {/* Slider Section */}
      <div className="mt-12 sm:mt-16 md:mt-[100px]">
        <Slider />
      </div>

      {/* Second Video Section - Responsive */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mt-8 sm:mt-12 md:mt-[60px]">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={video2} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl">{t("elegantSettings")}</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-2">{t("festiveDining")}</h3>
          <button className="bg-white text-black mt-4 rounded-lg px-4 sm:px-6 py-2 text-sm sm:text-base mx-auto inline-flex items-center gap-2 group cursor-pointer">
            {t("discoverMore")}
            <svg
              className="transition-all duration-300 group-hover:scale-110"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle className="group-hover:fill-black transition-colors duration-300" cx="12" cy="12" r="10" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Key Trends Section - Responsive */}
      <div className="relative w-full mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-0">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h6 className={`text-sm sm:text-base md:text-lg ${theme ? "text-gray-300" : "text-gray-500"}`}>{t("keyTrends2026")}</h6>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">{t("newIdeasHome")}</h2>
          <span className={`${theme ? "text-gray-200" : "text-gray-600"} mt-1 block text-sm sm:text-base`}>{t("beInspired")}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mx-0 md:mx-5">
          <div className="w-full md:w-1/2">
            <img src={image10} alt="Product 1" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold">{t("mindfulCalm")}</h3>
            <p className={`text-sm sm:text-base ${theme ? "text-gray-300" : "text-gray-500"}`}>{t("tactileFabrics")}</p>
            <span className="group flex items-center gap-2 cursor-pointer mt-2">
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
                <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
              </svg>
              <span className="text-sm sm:text-base">{t("learnMore")}</span>
            </span>
          </div>

          <div className="w-full md:w-1/2">
            <img src={image11} alt="Product 2" className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold">{t("yourHomeYourStory")}</h3>
            <p className={`text-sm sm:text-base ${theme ? "text-gray-300" : "text-gray-500"}`}>{t("openStorage")}</p>
            <span className="group flex items-center gap-2 cursor-pointer mt-2">
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
                <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
              </svg>
              <span className="text-sm sm:text-base">{t("learnMore")}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Endless Possibilities Section - Responsive */}
      <div className="flex flex-col items-center py-12 sm:py-16 md:py-[200px] text-center gap-4 px-4 sm:px-6">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">{t("endlessPossibilities")}</h2>
        <p className="w-full max-w-[805px] text-sm sm:text-base ">{t("customCollections")}</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <span className="group flex items-center gap-2 cursor-pointer justify-center">
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
              <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
            </svg>
            <span className="text-sm sm:text-base">{t("learnMoreFabrics")}</span>
          </span>
          <span className="group flex items-center gap-2 cursor-pointer justify-center">
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
              <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
            </svg>
            <span className="text-sm sm:text-base">{t("learnMoreFabrics")}</span>
          </span>
        </div>
        <img src={image12} alt="" className="w-full max-w-[1300px] object-cover mt-6" />
      </div>

      {/* Product Swiper */}
      <Swiper />

      {/* Image with Overlay Section - Responsive */}
      <div className="px-4 sm:px-6 md:px-[46px] pb-8 sm:pb-10 md:pb-[48px] pt-8 sm:pt-10 md:pt-[48px]">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg md:rounded-none">
          <img
            src={image1}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[50%_85%]"
          />
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("beInspiredInStore")}
            </h1>
          </div>
        </div>
      </div>

      {/* Inspired Section with Video - Responsive */}
      <div className="py-12 sm:py-16 md:py-[80px] px-4 sm:px-6">
        <div className="mx-auto max-w-[850px] md:ml-[400px] md:w-[850px] text-center md:text-left">
          <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-xl sm:text-2xl md:text-[32px] font-bold mb-2 md:mb-[4px]`}>{t("beInspiredInStore")}</h2>
          <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-sm sm:text-base`}>{t("weHelpedThousands")}</p>
          <span className="group flex items-center justify-center md:justify-start gap-2 cursor-pointer px-0 md:px-[12px] py-4 md:py-[20px]">
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
              <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
            </svg>
            <span className="text-sm sm:text-base">{t("getInTouch")}</span>
          </span>
        </div>

        <div className="px-4 sm:px-8 md:px-[270px] pb-8 sm:pb-10 md:pb-[48px] pt-8 sm:pt-10 md:pt-[48px]">
          <div className="relative h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden rounded-lg md:rounded-none">
            <video controls className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Discover Real Homes Section - Responsive */}
      <div className="text-center pb-4 sm:pb-6 md:pb-[20px] px-4">
        <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-xl sm:text-2xl md:text-[28px] font-bold`}>{t("discoverRealHomes")}</h3>
        <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-sm sm:text-base mt-2`}>{t("pastAndCurrentProjects")}</p>
      </div>
      <div className="flex overflow-x-auto gap-2 sm:gap-3 md:gap-4 pb-4 scrollbar-none px-4 sm:px-6 md:px-[40px]">
        {products.map(item => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="flex-shrink-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[200px] sm:w-[250px] md:w-[300px] h-60 sm:h-72 md:h-90 object-cover rounded-lg md:rounded-none"
            />
            <h2 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-black max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              {item.title}
            </h2>
          </Link>
        ))}
      </div>

      {/* Style Advice Section - Responsive */}
      <div className="py-12 sm:py-16 md:py-[80px] px-4 sm:px-6">
        <div className="mx-auto text-center max-w-[850px] md:ml-[350px] md:w-[850px]">
          <h2 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-xl sm:text-2xl md:text-[30px] font-bold`}>{t("styleAdvice")}</h2>
          <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-sm sm:text-base mt-2`}>{t("everythingYouNeed")}</p>
          <span className="group flex items-center justify-center gap-2 cursor-pointer py-4 md:py-[20px]">
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
            <span className="text-sm sm:text-base">{t("beInspired")}</span>
          </span>
        </div>

        {/* Three Column Layout - Responsive */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 px-0 md:px-[30px]">
          <div className="w-full md:w-1/3">
            <img src={image2} alt="Product 1" className="w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover mb-3 rounded-lg md:rounded-none" />
            <h3 className="text-lg sm:text-xl font-semibold">{t("mindfulCalm")}</h3>
            <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("tactileFabrics")}</p>
            <span className="group flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
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
                <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
              </svg>
              {t("readMore")}
            </span>
          </div>

          <div className="w-full md:w-1/3">
            <img src={image3} alt="Product 2" className="w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover mb-3 rounded-lg md:rounded-none" />
            <h3 className="text-lg sm:text-xl font-semibold">{t("howToChooseDiningChair")}</h3>
            <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("diningChairGuide")}</p>
            <span className="group flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
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
              {t("readMore")}
            </span>
          </div>

          <div className="w-full md:w-1/3">
            <img src={image4} alt="Product 2" className="w-full h-[300px] sm:h-[380px] md:h-[450px] object-cover mb-3 rounded-lg md:rounded-none" />
            <h3 className="text-lg sm:text-xl font-semibold">{t("diningTableGuide")}</h3>
            <p className={`mb-2 text-sm sm:text-base ${theme ? "text-gray-300" : "text-[#3F3F3F]"}`}>{t("diningTableGuideText")}</p>
            <span className="group flex items-center gap-2 cursor-pointer text-xs sm:text-sm">
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
                <path className={`transition-colors duration-300 ${theme ? "group-hover:stroke-black" : "group-hover:stroke-white"}`} d="M 10 12 H 16 M 13 9 L 16 12 L 13 15" />
              </svg>
              {t("readMore")}
            </span>
          </div>
        </div>
      </div>

      <ChatMessage />
      <ScrollToTop smooth top="300" width="20" height="20" color="#fff" />
    </div>
  );
}

export default Home;
