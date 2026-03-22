
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Verticalslider from "./verticalslider";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import MainContext from "../context/context";
import { TbHeartFilled } from "react-icons/tb";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import LanguageDropdown from "./languageDropdown";

function SidebarMenu() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (active === "furniture") {
            fetch("http://localhost:3002/furniture")
                .then(res => res.json())
                .then(data => setItems(data));
        } else if (active === "collections") {
            fetch("http://localhost:3002/collections")
                .then(res => res.json())
                .then(data => setItems(data));
        } else {
            setItems([]);
        }
    }, [active]);


    const logOut = () => {
    localStorage.removeItem("userId");
    Navigate("/login");
  }

    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        let userId = localStorage.getItem("userId");
        if (userId) {
            setBool(true);
        }
    })

    useEffect(() => {
        setOpen(false);
        setActive(null);
    }, [location.pathname]);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 2);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

   
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    let { theme, setTheme } = useContext(MainContext);
    const isHome = location.pathname === "/";
    const hamburgerColor = scrolled
        ? "text-[#5E5E5E]"
        : isHome
            ? "text-white"
            : theme
                ? "text-white"
                : "text-[#1D1D1B]";



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
            <button onClick={() => setOpen(true)} className="ml-4 sm:ml-6 md:ml-[30px] cursor-pointer z-10">
                <RxHamburgerMenu
                    className={`text-lg sm:text-xl md:text-[20px] mt-[5px] transition-colors duration-300 ${hamburgerColor}`}
                />
            </button>

            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={() => {
                        setOpen(false);
                        setActive(null);
                    }}
                />
            )}

            <div
                className={`
                    fixed top-0 left-0 h-full text-black z-50
                    transition-all duration-300 ease-in-out
                    ${theme ? "bg-dark text-white" : "bg-light text-black"}
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    ${active
                        ? "w-full sm:w-[500px] md:w-[700px]"
                        : "w-full sm:w-[320px] md:w-[350px]"
                    }
                    overflow-y-auto
                `}
            >
                {/* Header */}
                <div className={`flex justify-between items-center p-4 sm:p-5 md:p-6 border-b ${theme ? "border-gray-700" : "border-gray-200"}`}>
                    <h2 className="font-semibold text-base sm:text-lg md:text-xl">
                        {active ? "Furniture" : "Menu"}
                    </h2>

                    <button
                        onClick={() => {
                            setOpen(false);
                            setActive(null);
                        }}
                        className="text-xl sm:text-2xl cursor-pointer hover:opacity-70 transition-opacity"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row h-full">
                    {/* Main Menu */}
                    <ul
                        className={`
                            w-full md:w-[350px] 
                            p-4 sm:p-5 md:p-6 
                            space-y-3 sm:space-y-4
                            ${active && !window.matchMedia('(max-width: 768px)').matches ? "border-r" : ""} 
                            ${theme ? "border-gray-700" : "border-gray-300"}
                            ${active && window.matchMedia('(max-width: 768px)').matches ? "hidden" : "block"}
                        `}
                    >
                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] flex justify-between items-center py-1"
                            onClick={() => setActive("furniture")}
                        >
                            Furniture
                            <IoIosArrowForward className="text-base sm:text-lg" />
                        </li>

                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] py-1"
                            onClick={() => {
                                navigate("products");
                                setOpen(false);
                            }}
                        >
                            Collection
                        </li>

                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] py-1"
                            onClick={() => {
                                navigate("about");
                                setOpen(false);
                            }}
                        >
                            About
                        </li>

                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] py-1"
                            onClick={() => {
                                navigate("faq");
                                setOpen(false);
                            }}
                        >
                            FAQ
                        </li>

                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] py-1"
                            onClick={() => {
                                navigate("blog");
                                setOpen(false);
                            }}
                        >
                            Blog
                        </li>

                        <li
                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] flex justify-between items-center py-1"
                            onClick={() => setActive("service")}
                        >
                            Customer Service
                            <IoIosArrowForward className="text-base sm:text-lg" />
                        </li>

                        <li className="cursor-pointer hover:underline text-sm sm:text-base md:text-[18px] py-1"
                        
                         onClick={() => navigate("findstore")}>
                            Find a store
                        </li>
                    </ul>
                    {/* Mobile-only actions (favorites, login/logout, theme) */}
                    <div className="flex flex-col gap-4 p-4 border-t mt-4 md:hidden">
                        <Link to={"/favorites"}>
                            <TbHeartFilled className="w-5 h-5 text-[#b58269] cursor-pointer" />
                        </Link>

                        {bool ? (
                            <NavLink
                                className="text-sm cursor-pointer text-[#1D1D1B]"
                                to="/login"
                                onClick={logOut}
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink to="/login">
                                <FaUserCircle
                                    className={`w-5 h-5 cursor-pointer ${theme ? "text-gray-200" : "text-[#1D1D1B]"}`}
                                />
                            </NavLink>
                        )}

                        <span className="cursor-pointer" onClick={changeTheme}>
                            {theme ? <FaMoon size={18} /> : <FaSun size={18} />}
                        </span>

                        <LanguageDropdown />
                    </div>



                    {/* Submenu */}
                    {active && (
                        <div className={`
                            w-full md:w-auto md:flex-1 
                            p-4 sm:p-5 md:p-6 
                            ${window.matchMedia('(max-width: 768px)').matches ? "block" : ""}
                        `}>
                            <button
                                className="mb-4 hover:underline flex items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base"
                                onClick={() => setActive(null)}
                            >
                                <IoIosArrowBack className="text-base sm:text-lg cursor-pointer" />
                                Back
                            </button>

                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
                                {active === "furniture" && "Furniture"}
                                {active === "collections" && "Collections"}
                                {active === "rooms" && "Rooms"}
                                {active === "service" && "Customer Service"}
                                {active === "beconcept" && "Beconcept"}
                                {active === "professionals" && "Professionals"}
                            </h2>

                            <div className="space-y-3 sm:space-y-4">
                                {active === "furniture" && (
                                    <Verticalslider
                                        items={items}
                                        slidesPerView={window.innerWidth < 640 ? 2 : window.innerWidth < 768 ? 2 : 5}
                                        height={window.innerWidth < 640 ? "350px" : window.innerWidth < 768 ? "400px" : "500px"}
                                        onItemClick={(item) => {
                                            navigate(item.path);
                                            setOpen(false);
                                            setActive(null);
                                        }}
                                    />
                                )}

                                {active === "service" && (
                                    <ul className="space-y-3 sm:space-y-4">
                                        <li
                                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1"
                                            onClick={() => {
                                                navigate("/contact");
                                                setOpen(false);
                                                setActive(null);
                                            }}
                                        >
                                            Contact
                                        </li>
                                        <li
                                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1"
                                            onClick={() => {
                                                navigate("/delivery");
                                                setOpen(false);
                                                setActive(null);
                                            }}
                                        >
                                            Delivery
                                        </li>
                                        <li
                                            className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1"
                                            onClick={() => {
                                                navigate("/productcare");
                                                setOpen(false);
                                                setActive(null);
                                            }}
                                        >
                                            Product care
                                        </li>
                                        <li className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1">
                                            Assembly instructions
                                        </li>
                                        <li className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1">
                                            Warranty
                                        </li>
                                        <li className="cursor-pointer hover:underline text-sm sm:text-base md:text-lg py-1">
                                            Legal
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SidebarMenu; 