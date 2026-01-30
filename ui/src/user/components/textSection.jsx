import React, { useContext } from "react";
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaPinterest} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom"
import MainContext from "../context/context";

function TextSection() {
  let { theme, setTheme } = useContext(MainContext);
    const { t } = useTranslation();
  return (
    < div  className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="contact-img">
        <div className="contact-anime-text">
         <h1>{t("follow")}
            <span className="media-text" style={{ fontWeight: 'bold' }}>
  <TypeAnimation
    sequence={[
      'Instagram',
      1000,
      'Facebook',
      1000,
      'Twitter',
      1000,
      'Pinterest',
      1000,
      'Linkedin',
      1000,
    ]}
    speed={70}
    repeat={Infinity}
    cursor={true}
  />
</span>

            
            
             </h1> 
         <p>{t("subtitle")}</p>
        </div>
        <div className="contact-anime-img">
          <div className="anime-icons">
           <span > <FaFacebookF/> </span> 
          <span> <FaInstagram/> </span> 
          <span> <FaLinkedinIn/> </span> 
          <span> <FaTwitter/> </span> 
          <span> <FaPinterest/></span> 
          </div>
          <img className="emil-ico" src="../src/assets//email-icon.png" alt="" />
        </div>
        <img className="wave" src="../src/assets/arxas.png" alt="" />
        

      </div>
      <div className="section-form">


        <div className="container">
          <div className="center-text">
            <h1  className={` ${theme ? "text-[white]" : "text-[#000000]"}`}>{t("helpTitle")}</h1>
            <p  className={` ${theme ? "text-[white]" : "text-[#000000]"}`}>
              {t("helpText")}{" "}
            </p>
          </div>
          <div className="contactt">
            <div className="contact-col">
              <span>
                <img src="../src/assets/tel.svg" alt="tel" />
              </span>
              <div className="contact-about">
                <h3>{t("phone")}</h3>
                <p>(62) 1829017</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
                <img src="../src/assets/mail.svg" alt="mail" />
              </span>
              <div className="contact-about" >
                <h3>{t("email")}</h3>
                <p>Hello@Lumira.com</p>
              </div>
            </div>
            <div className="contact-col">
              <span>
                <img src="../src/assets/konum.svg" alt="konum" />
              </span>
              <div className="contact-about">
                <h3>{t("address")}</h3>
                <p>John Bucarest St. 199</p>
              </div>
            </div>
          </div>
            </div>
   
            <div className="container">
          <div className="center-text">
            <h1>{t("talkTitle")}</h1>
            <p>
              {t("talkText")}
            </p>
          </div>
      </div>
       
      </div>
      
    </div>
  );
}

export default TextSection
