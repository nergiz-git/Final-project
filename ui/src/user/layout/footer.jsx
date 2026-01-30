// import React, { useContext } from "react";
// import footerimg1 from "../../assets/footerimg1.webp";
// import footerimg2 from "../../assets/footerimg2.webp";
// import payimg from "../../assets/payimg.svg"
// import circleimg from "../../assets/circleimg.svg"
// import visaimg from "../../assets/visaimg.svg"
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaPinterestP,
//     FaYoutube,
// } from "react-icons/fa";
// import MainContext from "../context/context";
// import { useTranslation } from "react-i18next";

// function Footer() {
//     let { theme } = useContext(MainContext);
//         const { t } = useTranslation();
//     return (
//         <footer className={`w-full ${theme ? "bg-dark" : "bg-light "} `}>
//             <div className="relative h-[230px] z-0 top-[60px]">
//                 <div className={`absolute top-1/2 left-0 w-full h-[1px] ${theme ? "bg-gray-600" : "bg-gray-300"} -translate-y-1/2 z-0`}></div>
//                 <div className={`absolute top-1/2 right-[30px] w-[800px] h-[230px] ${theme ? "bg-gray-800" : "bg-[#EBEBEB]"} rounded-lg px-[40px] py-[30px] -translate-y-1/2 z-10`}>
//                     <div className="flex gap-[50px]">
//                         <div>
//                             <img
//                                 src={footerimg1}
//                                 alt="fabric"
//                                 className="w-[350px] h-[140px] object-cover rounded-lg mb-[10px]"
//                             />
//                             <p className={`${theme ? "text-gray-200" : "text-gray-900"} font-bold`}>
//                                {t("getFreeFabricSamples")}
//                             </p>
//                         </div>

//                         <div>
//                             <img
//                                 src={footerimg2}
//                                 alt="help"
//                                 className="w-[350px] h-[140px] object-cover rounded-lg mb-[10px]"
//                             />
//                             <p className={`${theme ? "text-gray-200" : "text-gray-900"} font-bold`}>
//                                 {t("needHelp")}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="max-w-[1400px] mx-auto px-6 py-16 flex justify-between">
//                 <ul className="space-y-3 text-[18px]">
//                     <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("customerService")}</li>
//                     <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("findAStore")}</li>
//                     <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("aboutBoConcept")}</li>
//                     <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("pressLounge")}</li>
//                     <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("career")}</li>
//                 </ul>

//                 <div className="max-w-[420px]">
//                     <h3 className={`${theme ? "text-gray-200" : "text-gray-900"} text-[22px] font-semibold mb-3`}>
//                         {t("newsletterTitle")}
//                     </h3>

//                     <p className={`${theme ? "text-gray-400" : "text-gray-600"} text-sm mb-6`}>
//                        {t("newsletterDescription")}
//                     </p>

//                     <button className="bg-black text-white px-6 py-3 rounded-md flex items-center gap-3 hover:opacity-90">
//                         {t("signUpHere")}
//                         <span className="text-lg">→</span>
//                     </button>

//                     <div className="mt-8">
//                         <p className={`${theme ? "text-gray-300" : "text-gray-600"} text-sm mb-3`}>{t("followUs")}</p>
//                         <div className="flex gap-4">
//                             <SocialIcon icon={<FaFacebookF />} theme={theme} />
//                             <SocialIcon icon={<FaInstagram />} theme={theme} />
//                             <SocialIcon icon={<FaPinterestP />} theme={theme} />
//                             <SocialIcon icon={<FaYoutube />} theme={theme} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className={`w-full h-[1px] ${theme ? "bg-gray-600" : "bg-gray-300"}`}></div>

//             <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center text-sm">
//                 <p className={`${theme ? "text-gray-400" : "text-gray-600"}`}>
//                     {t("allPricesInfo")}
//                 </p>

//                 <div className="flex gap-6">
//                     <a href="/cookies" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("cookieInfo")}</a>
//                     <a href="/terms" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("termsConditions")}</a>
//                     <a href="/privacy" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("privacyPolicy")}</a>
//                 </div>

//                 <div className="flex gap-2">
//                     <img src={payimg} alt="" className="w-[35px] h-[24px] object-cover mb-[10px]" />
//                     <img src={circleimg} alt="" className="w-[35px] h-[24px] object-cover mb-[10px]" />
//                     <img src={visaimg} alt="" className="w-[35px] h-[24px] object-cover mb-[10px]" />
//                 </div>
//             </div>
//         </footer>
//     );
// }

// function SocialIcon({ icon, theme }) {
//     return (
//         <div className={`w-10 h-10 border rounded-full flex items-center justify-center transition cursor-pointer
//             ${theme ? "hover:bg-gray-200 hover:text-black border-gray-400" : "hover:bg-black hover:text-white border-gray-300"}`}>
//             {icon}
//         </div>
//     );
// }

// export default Footer;




import React, { useContext } from "react";
import footerimg1 from "../../assets/footerimg1.webp";
import footerimg2 from "../../assets/footerimg2.webp";
import payimg from "../../assets/payimg.svg"
import circleimg from "../../assets/circleimg.svg"
import visaimg from "../../assets/visaimg.svg"
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaYoutube,
} from "react-icons/fa";
import MainContext from "../context/context";
import { useTranslation } from "react-i18next";

function Footer() {
    let { theme } = useContext(MainContext);
    const { t } = useTranslation();
    return (
        <footer className={`w-full ${theme ? "bg-dark" : "bg-light"}`}>
            {/* Top Section with Images - Responsive */}
            <div className="relative h-auto md:h-[230px] z-0 top-0 md:top-[60px] px-4 md:px-0">
                {/* Horizontal Line - Hidden on Mobile */}
                <div className={`hidden md:block absolute top-1/2 left-0 w-full h-[1px] ${theme ? "bg-gray-600" : "bg-gray-300"} -translate-y-1/2 z-0`}></div>
                
                {/* Images Container - Responsive */}
                <div className={`relative md:absolute top-0 md:top-1/2 right-0 md:right-[30px] w-full md:w-[800px] h-auto md:h-[230px] ${theme ? "bg-gray-800" : "bg-[#EBEBEB]"} rounded-lg px-4 sm:px-6 md:px-[40px] py-6 md:py-[30px] md:-translate-y-1/2 z-10`}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[50px]">
                        <div className="w-full sm:w-1/2">
                            <img
                                src={footerimg1}
                                alt="fabric"
                                className="w-full h-[120px] sm:h-[130px] md:h-[140px] object-cover rounded-lg mb-2 md:mb-[10px]"
                            />
                            <p className={`${theme ? "text-gray-200" : "text-gray-900"} font-bold text-sm md:text-base`}>
                                {t("getFreeFabricSamples")}
                            </p>
                        </div>

                        <div className="w-full sm:w-1/2">
                            <img
                                src={footerimg2}
                                alt="help"
                                className="w-full h-[120px] sm:h-[130px] md:h-[140px] object-cover rounded-lg mb-2 md:mb-[10px]"
                            />
                            <p className={`${theme ? "text-gray-200" : "text-gray-900"} font-bold text-sm md:text-base`}>
                                {t("needHelp")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content - Responsive */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 mt-0 md:mt-0 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
                {/* Links Section */}
                <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-[18px]">
                    <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("customerService")}</li>
                    <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("findAStore")}</li>
                    <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("aboutBoConcept")}</li>
                    <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("pressLounge")}</li>
                    <li className={`hover:underline cursor-pointer ${theme ? "text-gray-300" : "text-gray-800"}`}>{t("career")}</li>
                </ul>

                {/* Newsletter Section */}
                <div className="w-full md:max-w-[420px]">
                    <h3 className={`${theme ? "text-gray-200" : "text-gray-900"} text-xl sm:text-2xl md:text-[22px] font-semibold mb-3`}>
                        {t("newsletterTitle")}
                    </h3>

                    <p className={`${theme ? "text-gray-400" : "text-gray-600"} text-sm mb-4 sm:mb-6`}>
                        {t("newsletterDescription")}
                    </p>

                    <button className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md flex items-center gap-3 hover:opacity-90 text-sm sm:text-base">
                        {t("signUpHere")}
                        <span className="text-lg">→</span>
                    </button>

                    {/* Social Media Icons */}
                    <div className="mt-6 sm:mt-8">
                        <p className={`${theme ? "text-gray-300" : "text-gray-600"} text-sm mb-3`}>{t("followUs")}</p>
                        <div className="flex gap-3 sm:gap-4">
                            <SocialIcon icon={<FaFacebookF />} theme={theme} />
                            <SocialIcon icon={<FaInstagram />} theme={theme} />
                            <SocialIcon icon={<FaPinterestP />} theme={theme} />
                            <SocialIcon icon={<FaYoutube />} theme={theme} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className={`w-full h-[1px] ${theme ? "bg-gray-600" : "bg-gray-300"}`}></div>

            {/* Bottom Footer - Responsive */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 text-xs sm:text-sm">
                {/* Price Info Text */}
                <p className={`${theme ? "text-gray-400" : "text-gray-600"} order-1 md:order-1`}>
                    {t("allPricesInfo")}
                </p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 order-3 md:order-2">
                    <a href="/cookies" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("cookieInfo")}</a>
                    <a href="/terms" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("termsConditions")}</a>
                    <a href="/privacy" className={`hover:underline ${theme ? "text-gray-300" : "text-gray-600"}`}>{t("privacyPolicy")}</a>
                </div>

                {/* Payment Icons */}
                <div className="flex gap-2 order-2 md:order-3">
                    <img src={payimg} alt="Payment" className="w-[30px] sm:w-[35px] h-[20px] sm:h-[24px] object-cover" />
                    <img src={circleimg} alt="Payment" className="w-[30px] sm:w-[35px] h-[20px] sm:h-[24px] object-cover" />
                    <img src={visaimg} alt="Visa" className="w-[30px] sm:w-[35px] h-[20px] sm:h-[24px] object-cover" />
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, theme }) {
    return (
        <div className={`w-9 h-9 sm:w-10 sm:h-10 border rounded-full flex items-center justify-center transition cursor-pointer text-sm sm:text-base
            ${theme ? "hover:bg-gray-200 hover:text-black border-gray-400" : "hover:bg-black hover:text-white border-gray-300"}`}>
            {icon}
        </div>
    );
}

export default Footer;

