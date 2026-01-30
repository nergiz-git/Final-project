import { useState, useEffect, useContext } from "react";
import "./Faq.css";
import ScrollToTop from "react-scroll-to-top";
import MainContext from "../context/context";
import { useTranslation } from "react-i18next";
function Faq() {
  useEffect(() => {
    document.title = 'FAQ ';
  }, []);
  let { theme } = useContext(MainContext)
    const { t } = useTranslation();
     useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);


  return (
    <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="faq-header">
        <div className="container">
          <div className="faq-con-hed">
            <div className="faq-hedar-text">
              <h1 data-text={t("faqHeader")}>{t("faqHeader")}</h1>

            </div>
            <div className="faq-headar-img">
              <img src="./src/assets/sual3.png" alt="" />
            </div>
          </div>

        </div>

      </div>
      <ScrollToTop smooth top="20" width="20" height="20" color="#fff" />

      <div className="container">
        <div className="faq-title">
          <h1>{t("frequentlyAskedQuestions")}</h1>
        </div>
        <div id="faq">
          <ul>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q1")}</h2>
              <p>
                {t("a1")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q2")}</h2>
              <p>
                {t("a2")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q3")}</h2>
              <p>
                {t("a3")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q4")}</h2>
              <p>
               {t("a4")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q5")}</h2>
              <p>
               {t("a5")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q6")}</h2>
              <p>
               {t("a6")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q7")}</h2>
              <p>
                 {t("a7")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q8")}</h2>
              <p>
               {t("a8")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q9")}</h2>
              <p>
                {t("a9")}
              </p>
            </li>
            <li>
              <input type="checkbox" defaultChecked />
              <i></i>
              <h2>{t("q10")}</h2>
              <p>
                {t("a10")}
              </p>
            </li>

            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faq;
