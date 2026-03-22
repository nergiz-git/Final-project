// import React, { useContext, useEffect, useState } from "react";
// import { HiOutlineSearch } from "react-icons/hi";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import SidebarMenu from "../components/sidebarmenu.jsx"
// import { FaUserCircle } from "react-icons/fa";
// import Svg360withlink from "../components/svg360withlink.jsx";
// import { FaMoon, FaSun } from "react-icons/fa6";
// import MainContext from "../context/context";
// import LanguageDropdown from "../components/languageDropdown.jsx";
// import { TbHeartFilled } from "react-icons/tb";
// import { useSelector } from "react-redux";
// import { useTranslation } from 'react-i18next';

// function Navbar({ search, setSearch }) {
// const { t } = useTranslation();
//   const basket = useSelector(state => state.basket || []);

// const basketCount = basket.reduce(
//   (total, item) => total + (item.count || 1),
//   0
// );
//   let Navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [bool, setBool] = useState(false);
//   useEffect(() => {
//     let userId = localStorage.getItem("userId");
//     if (userId) {
//       setBool(true);
//     }
//   })

//   const logOut = () => {
//     localStorage.removeItem("userId");
//     Navigate("/login");
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 2) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const location = useLocation();
//   const isHome = location.pathname === "/";
//   const isLoginPage = location.pathname === "/";


//   let { theme, setTheme } = useContext(MainContext);
//   const changeTheme = () => {
//     setTheme(!theme);
//     if (theme) {
//       localStorage.setItem("theme", "light");
//     } else if (!theme) {
//       localStorage.setItem("theme", "dark");
//     }
//   };



//   return (
//     <>
//       {/* NORMAL NAVBAR (SEHIFE ACILANDA) */}
//       {!isScrolled && (
//         <>
//           <div className="bg-[#3a5041] h-[51px] flex items-center justify-center uppercase text-white" >
//             <h2>
//               {t("springSeasonSale")}
//             </h2>
//           </div>

//           <nav
//             className={`fixed top-16 left-0 w-full z-1000 px-[25px] py-[80px] flex items-center justify-between transition-all duration-500
//                 ${theme ? "text-gray-200" : "text-[#1D1D1B]"}`
//             }>

//             <div className="flex items-center gap-6 ">
//               <SidebarMenu className="w-6 h-6 cursor-pointer" />
//               <div className="absolute top-5 left-5 flex items-center space-x-2 cursor-pointer mx-[30px]">
//                 <Svg360withlink isLoginPage={isLoginPage} />

//               </div>
//               <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10  shadow-2xl mb-[120px] ">
//                 <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
//                   Lumira
//                 </Link>
//               </div>
//               <div className="absolute top-5 right-10 flex items-center space-x-2 cursor-pointer gap-3">
//                 <Link to={"/cart"} className="relative">
//                   <HiOutlineShoppingBag className={`w-6 h-6 ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
//                   <span className="w-[18px] h-[18px] bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-1px] left-[10px] text-white text-[12px] font-sans">
//                     {basketCount ? `${basketCount}` : "0"}
//                   </span>
//                 </Link>

//                 <Link to={"/favorites"}>
//                   <TbHeartFilled className={`w-6 h-6 text-[#b58269] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />

//                 </Link>

//                 {
//                   bool ? <NavLink className={` text-[16px] cursor-pointer ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
//                     }`} to="/login" onClick={logOut}>
//                     Logout
//                   </NavLink>
//                     :
//                     <NavLink to="/login">
//                       <FaUserCircle className={`w-[24px] h-[24px] cursor-pointer ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
//                     </NavLink>
//                 }
//                 <span className="cursor-pointer" onClick={changeTheme}>
//                   {theme ? <FaMoon size={20} /> : <FaSun size={20} />}
//                 </span>
//                 <LanguageDropdown />
//               </div>

//                <div className={`flex items-center border-b mt-[-40px] cursor-pointer ${isLoginPage ? "border-white" : theme ? "border-gray-200" : "border-[#1D1D1B]"}`}>
//               <input
//                 type="text"
//                 placeholder={t("whatCanWeHelpYouFind")}
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className={`bg-transparent outline-none w-[350px] mt-[30px] ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-[white]"}`}
//               />

//               <HiOutlineSearch className={`w-5 h-5 mt-[20px] ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
//             </div>
//             </div>

//           </nav>
//         </>
//       )}

//       {/* SCROLL OLANDAN SONRA GORUNEN NAV */}
//       {isScrolled && (
//         <nav className={`fixed top-0 left-0 w-full z-50 px-[60px] py-[25px] flex items-center justify-between transition-all duration-500 shadow-md
//     ${theme ? "bg-dark text-gray-200" : "bg-light text-[#1D1D1B]"}`}>

//           <div className="flex items-center gap-6 text-[red]">
//             <SidebarMenu className="w-6 h-6 cursor-pointer" />


//               <div className={`flex items-center border-b pb-1 ${theme ? "border-gray-600" : "border-[#7B7B7B]"}`}>
//               <input
//                 type="text"
//                 placeholder={t("whatCanWeHelpYouFind")}
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className={`bg-transparent outline-none w-[350px] ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-[#7B7B7B]"}`}
//               />
//               <HiOutlineSearch className={`w-5 h-5 ml-2 ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
//             </div>
//           </div>

//           <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10 shadow-2xl">
//             <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
//               Lumira
//             </Link>
//           </div>

//           <div className="flex items-center gap-6">
//             <Link to={"/cart"} className="relative">
//               <HiOutlineShoppingBag className={`w-6 h-6 cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
//               <span className="w-[18px] h-[18px] bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-1px] left-[10px] text-white text-[12px] font-sans">
//                     {basketCount ? `${basketCount}` : "0"}
//                   </span> 
//             </Link>
//             <Link to={"/favorites"}>
//               <TbHeartFilled className={`w-6 h-6 cursor-pointer text-[#b58269] ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
//             </Link>
//             {bool ? (
//               <NavLink className={`text-[16px] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} to="/login" onClick={logOut}>
//                 Logout
//               </NavLink>
//             ) : (
//               <NavLink to="/login">
//                 <FaUserCircle className={`w-[24px] h-[24px] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
//               </NavLink>
//             )}

//             <span className="cursor-pointer" onClick={changeTheme}>
//               {theme ? <FaMoon size={20} /> : <FaSun size={20} />}
//             </span>
//             <LanguageDropdown />
//           </div>

//         </nav>
//       )}

//     </>
//   );
// }

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SidebarMenu from "../components/sidebarmenu.jsx"
import { FaUserCircle } from "react-icons/fa";
import Svg360withlink from "../components/svg360withlink.jsx";
import { FaMoon, FaSun } from "react-icons/fa6";
import MainContext from "../context/context";
import LanguageDropdown from "../components/languageDropdown.jsx";
import { TbHeartFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function Navbar({ search, setSearch }) {
  const { t } = useTranslation();
  const basket = useSelector(state => state.basket || []);

  const basketCount = basket.reduce(
    (total, item) => total + (item.count || 1),
    0
  );
  let Navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [bool, setBool] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (userId) {
      setBool(true);
    }
  })

  const logOut = () => {
    localStorage.removeItem("userId");
    Navigate("/login");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLoginPage = location.pathname === "/";

  let { theme, setTheme } = useContext(MainContext);
  const changeTheme = () => {
    setTheme(!theme);
    if (theme) {
      localStorage.setItem("theme", "light");
    } else if (!theme) {
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {/* NORMAL NAVBAR (SEHIFE ACILANDA) */}
      {!isScrolled && (
        <>
          {/* Banner - mobilde daha kiçik */}
          <div className="bg-[#3a5041] h-[51px] md:h-[51px] flex items-center justify-center uppercase text-white px-4">
            <h2 className="text-xs sm:text-sm md:text-base text-center">
              {t("springSeasonSale")}
            </h2>
          </div>

          <nav
            className={`fixed top-12 md:top-16 left-0 w-full z-1000 px-4 md:px-[25px] py-4 md:py-[80px] flex flex-col md:flex-row items-center justify-between transition-all duration-500
                ${theme ? "text-gray-200" : "text-[#1D1D1B]"}`
            }>

            {/* Mobile Layout */}
            <div className="md:hidden w-full">
              {/* Top Row - Logo və ikonlar */}
              <div className="flex items-center justify-between w-full mb-4">
                {/* Sol tərəf - Hamburger və SVG360 */}
                <div className="flex items-center gap-2 ml-[-20px]">
                  <SidebarMenu className="w-5 h-5 cursor-pointer" />
                  <Svg360withlink isLoginPage={isLoginPage} />
                </div>

                {/* Mərkəz - Logo */}
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-6 py-1 mr-[44px]">
                    <Link to={"/"} className="font-lumira text-[#3a5041] text-2xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Elora
                    </Link>
                  </div>
                </div>

                {/* Sağ tərəf - Axtarış və Səbət */}
                <div className="flex items-center gap-3">
                  <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
                    <HiOutlineSearch className={`w-5 h-5 ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
                  </button>
                  <Link to={"/cart"} className="relative">
                    <HiOutlineShoppingBag className={`w-5 h-5 ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
                    <span className="w-4 h-4 bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-2px] left-[10px] text-white text-[10px] font-sans">
                      {basketCount ? `${basketCount}` : "0"}
                    </span>
                  </Link>
                </div>
              </div>

              {/* Search Bar - mobile */}
              {mobileSearchOpen && (
                <div className={`flex items-center border-b pb-2 mb-4 ${isLoginPage ? "border-white" : theme ? "border-gray-200" : "border-[#1D1D1B]"}`}>
                  <input
                    type="text"
                    placeholder={t("whatCanWeHelpYouFind")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`bg-transparent outline-none w-full ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-gray-500"}`}
                  />
                </div>
              )}

              {/* Bottom Row - digər ikonlar */}
              {/* <div className="flex items-center justify-center gap-4">
                <Link to={"/favorites"}>
                  <TbHeartFilled className={`w-5 h-5 text-[#b58269] cursor-pointer`} />
                </Link>

                {bool ? (
                  <NavLink className={`text-sm cursor-pointer ${isLoginPage ? "text-white" : "text-[#1D1D1B]"}`} to="/login" onClick={logOut}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <FaUserCircle className={`w-5 h-5 cursor-pointer ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
                  </NavLink>
                )}

                <span className="cursor-pointer" onClick={changeTheme}>
                  {theme ? <FaMoon size={18} /> : <FaSun size={18} />}
                </span>
                
                <LanguageDropdown />
              </div> */}
            </div>

            {/* Desktop Layout - Original */}
            <div className="hidden md:flex items-center gap-6 w-full">
              <SidebarMenu className="w-6 h-6 cursor-pointer" />
              <div className="absolute top-5 left-5 flex items-center space-x-2 cursor-pointer mx-[30px]">
                <Svg360withlink isLoginPage={isLoginPage} />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10 shadow-2xl mb-[120px]">
                <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Elora
                </Link>
              </div>

              <div className="absolute top-5 right-10 flex items-center space-x-2 cursor-pointer gap-3">
                <Link to={"/cart"} className="relative">
                  <HiOutlineShoppingBag className={`w-6 h-6 ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
                  <span className="w-[18px] h-[18px] bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-1px] left-[10px] text-white text-[12px] font-sans">
                    {basketCount ? `${basketCount}` : "0"}
                  </span>
                </Link>

                <Link to={"/favorites"}>
                  <TbHeartFilled className={`w-6 h-6 text-[#b58269] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                </Link>

                {bool ? (
                  <NavLink className={`text-[16px] cursor-pointer ${isLoginPage ? "text-white" : "text-[#1D1D1B]"}`} to="/login" onClick={logOut}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">
                    <FaUserCircle className={`w-[24px] h-[24px] cursor-pointer ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
                  </NavLink>
                )}

                <span className="cursor-pointer" onClick={changeTheme}>
                  {theme ? (
                    <FaMoon size={20} className="text-gray-200" />
                  ) : (
                    <FaSun size={20} className="text-white" />
                  )}
                </span>
                <div className={`${theme ? "text-gray-200" : "text-[#7B7B7B]"}`}>
                <LanguageDropdown />
              </div>
              </div>

              <div className={`flex items-center border-b mt-[-40px] cursor-pointer ${isLoginPage ? "border-white" : theme ? "border-gray-200" : "border-[#1D1D1B]"}`}>
                <input
                  type="text"
                  placeholder={t("whatCanWeHelpYouFind")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`bg-transparent outline-none w-[350px] mt-[30px] ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-[white]"}`}
                />
                <HiOutlineSearch className={`w-5 h-5 mt-[20px] ${isLoginPage ? "text-white" : theme ? "text-gray-200" : "text-[#1D1D1B]"}`} />
              </div>
            </div>
          </nav>
        </>
      )}

      {/* SCROLL OLANDAN SONRA GORUNEN NAV */}
      {isScrolled && (
        <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 md:px-[60px] py-4 md:py-[25px] transition-all duration-500 shadow-md
    ${theme ? "bg-dark text-gray-200" : "bg-light text-[#1D1D1B]"}`}>

          {/* Mobile Scrolled Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between w-full">
              {/* Sol tərəf - Hamburger, SVG360 və Axtarış */}
              <div className="flex items-center gap-2">
                <SidebarMenu className="w-5 h-5 cursor-pointer" />
                <Svg360withlink isLoginPage={isLoginPage} />
                {/* <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
                  <HiOutlineSearch className={`w-5 h-5 ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                </button> */}
              </div>

              {/* Mərkəz - Logo */}
              <div className="bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-6 py-1 mr-[44px]">
                <Link to={"/"} className="font-lumira text-[#3a5041] text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Elora
                </Link>
              </div>

              {/* Sağ tərəf - Səbət və Favorilər */}
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
                  <HiOutlineSearch className={`w-5 h-5 ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                </button>
                <Link to={"/cart"} className="relative">
                  <HiOutlineShoppingBag className={`w-5 h-5 cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                  <span className="w-4 h-4 bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-2px] left-[10px] text-white text-[10px] font-sans">
                    {basketCount ? `${basketCount}` : "0"}
                  </span>
                </Link>

                {/* <Link to={"/favorites"}>
                  <TbHeartFilled className={`w-5 h-5 cursor-pointer text-[#b58269]`} />
                </Link> */}

              </div>
            </div>

            {/* Mobile Search Expanded */}
            {mobileSearchOpen && (
              <div className={`flex items-center border-b pb-2 mt-4 ${theme ? "border-gray-600" : "border-[#7B7B7B]"}`}>
                <input
                  type="text"
                  placeholder={t("whatCanWeHelpYouFind")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`bg-transparent outline-none w-full ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-[#7B7B7B]"}`}
                />
              </div>
            )}

            {/* Mobile Bottom Icons */}
            {/* <div className="flex items-center justify-center gap-4 mt-3">
              {bool ? (
                <NavLink className={`text-sm cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} to="/login" onClick={logOut}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <FaUserCircle className={`w-5 h-5 cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                </NavLink>
              )}

              <span className="cursor-pointer" onClick={changeTheme}>
                {theme ? <FaMoon size={18} /> : <FaSun size={18} />}
              </span>
              
              <LanguageDropdown />
            </div> */}
          </div>

          {/* Desktop Scrolled Layout - Original */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-6">
              <SidebarMenu className="w-6 h-6 cursor-pointer" />

              <div className={`flex items-center border-b pb-1 ${theme ? "border-gray-600" : "border-[#7B7B7B]"}`}>
                <input
                  type="text"
                  placeholder={t("whatCanWeHelpYouFind")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`bg-transparent outline-none w-[350px] ${theme ? "text-gray-200 placeholder-gray-400" : "text-black placeholder-[#7B7B7B]"}`}
                />
                <HiOutlineSearch className={`w-5 h-5 ml-2 ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10 shadow-2xl">
              <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Elora
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <Link to={"/cart"} className="relative">
                <HiOutlineShoppingBag className={`w-6 h-6 cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                <span className="w-[18px] h-[18px] bg-[#b58269] rounded-full flex items-center justify-center absolute bottom-[-1px] left-[10px] text-white text-[12px] font-sans">
                  {basketCount ? `${basketCount}` : "0"}
                </span>
              </Link>

              <Link to={"/favorites"}>
                <TbHeartFilled className={`w-6 h-6 cursor-pointer text-[#b58269] ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
              </Link>

              {bool ? (
                <NavLink className={`text-[16px] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} to="/login" onClick={logOut}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login">
                  <FaUserCircle className={`w-[24px] h-[24px] cursor-pointer ${theme ? "text-gray-200" : "text-[#7B7B7B]"}`} />
                </NavLink>
              )}

              <span className="cursor-pointer" onClick={changeTheme}>
                {theme ? (
                  <FaMoon size={20} className="text-gray-200" />
                ) : (
                  <FaSun size={20} className="text-[#1D1D1B]" />
                )}
              </span>
              <div className={`${theme ? "text-gray-200" : "text-[#7B7B7B]"}`}>
                <LanguageDropdown />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;