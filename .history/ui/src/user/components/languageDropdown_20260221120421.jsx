import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown } from "react-icons/io5";
import MainContext from "../context/context";

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  let { theme, setTheme } = useContext(MainContext);
  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" }
  ];

  const currentLang = languages.find(
    (lang) => lang.code === i18n.language
  );

  const handleChangeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);         
    localStorage.setItem("lang", langCode);   
    setOpen(false);                          
  };
  return (
    <>
    <div className="relative">
   
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 border px-[10px]  py-1 rounded mr-[-30px]"
      >
        {currentLang?.label}
        <IoChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2  pl-[10px] pr-[46px] mr-[-29px]  w-full bg-white border rounded shadow z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`block w-full text-left px-1 py-2 text-[black] hover:bg-gray-100 ${i18n.language === lang.code ? "font-bold" : ""
                }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
    </>
    
  );
}

export default LanguageDropdown;
