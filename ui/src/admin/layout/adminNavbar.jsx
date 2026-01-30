import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";

import SidebarMenu from "../../user/components/sidebarmenu";
import Svg360withlink from "../../user/components/svg360withlink";
import SearchOverlay from "../../user/components/SearchOverlay.jsx";

function AdminNavbar({ search, setSearch }) {
  let Navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    let adminId = localStorage.getItem("adminId");
    if (adminId) {
      setBool(true);
    }
  })

  const logOut = () => {
     localStorage.removeItem("adminId");
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
  const isLoginPage = location.pathname === "/";

 

  return (
    <>
      {/* NORMAL NAVBAR (SEHIFE ACILANDA) */}
      {!isScrolled && (
        <>
          <div className="bg-[#3a5041] h-[51px] flex items-center justify-center uppercase text-white">
            <h2>
              spring seaSon sale | 20% off entire store | Free Premium UK Delivery
            </h2>
          </div>
          <nav
            className={`fixed top-16 left-0 w-full z-1000 px-[25px] py-[80px] flex items-center justify-between transition-all duration-500
           ${isLoginPage ? "text-white" : "text-[#1D1D1B]"}`}>
            <div className="flex items-center gap-6 ml-[20px]">
              {/* <SidebarMenu className="w-6 h-6 cursor-pointer" /> */}
              <div className="absolute top-5 left-5 flex items-center space-x-2 cursor-pointer mx-[30px]">
                <Svg360withlink isLoginPage={isLoginPage} />

              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10  shadow-2xl mb-[120px] ">
                <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Lumira
                </Link>
              </div>
              <div className="absolute top-5 right-10 flex items-center space-x-2 cursor-pointer gap-3">
                <HiOutlineShoppingBag
                  className={`w-6 h-6 ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                    }`}
                />
                {
                  bool ? <NavLink className={` text-[16px cursor-pointer ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                    }`} to="/login" onClick={logOut}>
                    Logout
                  </NavLink>
                    :
                    <NavLink to="/login">
                      <FaUserCircle
                        className={`w-[24px] h-[24px] cursor-pointer ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                          }`}
                      />
                    </NavLink>
                }


              </div>
              <NavLink to="/admin" className={`text-[20px] 
               ${isLoginPage ? "text-white" : "text-[#1D1D1B]"}`}
              >AllProducts</NavLink>

              <NavLink to="/admin/create" className={`text-[18px] 
               ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                }`}
              >Products</NavLink>

              
            </div>
            <div
              className={`flex items-center border-b mt-[-40px] cursor-pointer
               ${isLoginPage ? "border-white" : "border-[#1D1D1B]"}`}>
              <input
                type="text"
                placeholder="What can we help you find?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`bg-transparent outline-none w-[450px]  text-[18px]
                   ${isLoginPage
                    ? "text-[#8B8C8B] placeholder-[#8B8C8B]"
                    : "text-black placeholder-white"
                  }`}
              />
              <HiOutlineSearch
                className={`w-5 h-5 ml-2 ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                  }`}
              />
            </div>
          </nav>
        
        </>
      )}

      {/* SCROLL OLANDAN SONRA GORUNEN NAV */}
      {isScrolled && (
        <nav className="fixed top-0 left-0 w-full z-50 px-[60px] py-[25px] flex items-center justify-between bg-[#EEEDEB] text-black transition-all duration-500 shadow-md">


          <div className="flex items-center gap-6">
            <SidebarMenu className="w-6 h-6 cursor-pointer" />
            <NavLink to="/admin" className={`text-[20px] 
               ${isLoginPage ? "text-white" : "text-[#1D1D1B]"}`}
              >AllProducts</NavLink>

              <NavLink to="/admin/create" className={`text-[18px] 
               ${isLoginPage ? "text-white" : "text-[#1D1D1B]"
                }`}
              >Products</NavLink>

          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bg-[#BFC1C2] backdrop-blur-md rounded-[50px] px-10  shadow-2xl ">
            <Link to={"/"} className="font-lumira text-[#3a5041] text-4xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lumira
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center border-b border-[#7B7B7B] pb-1">
              <input
                type="text"
                placeholder="What can we help you find?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none w-[350px] text-black placeholder:text-[#7B7B7B]"
              />
              <HiOutlineSearch className="w-5 h-5 ml-2 text-[#7B7B7B] " />
            </div>
            <HiOutlineShoppingBag className="w-6 h-6 cursor-pointer text-[#7B7B7B]" />
            {
                  bool ? <NavLink className="w-[24px] h-[24px] cursor-pointer text-[#7B7B7B]" to="/login" onClick={logOut}>
                    Logout
                  </NavLink>
                    :
                    <NavLink to="/login">
                      <FaUserCircle className="w-[24px] h-[24px] cursor-pointer text-[#7B7B7B]"
                      />
                    </NavLink>
                }
          </div>

        </nav>
      )}
    </>
  );
}

export default AdminNavbar;
