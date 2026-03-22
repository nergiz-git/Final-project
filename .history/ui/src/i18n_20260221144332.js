// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import az from "../src/az.json";
// import en from "../src/en.json";
// import ru from "../src/ru.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     az: { translation: az },
//     en: { translation: en },
//     ru: { translation: ru },
//   },
  
//   lng: localStorage.getItem("lang") || "en",
//   // fallbackLng: "ru",
//   interpolation: { escapeValue: false }
// });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import az from "../src/az.json";
import en from "../src/en.json";
import ru from "../src/ru.json";
i18n.use(initReactI18next).init({
  resources: {
    az: { translation: az },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: localStorage.getItem("lang") || "en",
  interpolation: { escapeValue: false }
});

export default i18n;