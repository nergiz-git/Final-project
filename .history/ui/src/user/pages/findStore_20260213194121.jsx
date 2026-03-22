import React, { useContext, useEffect } from 'react'
import './Contact.css'
import MainContext from '../context/context';
import { Helmet } from 'react-helmet';
function FindStore() {
     let { theme, setTheme } = useContext(MainContext);
   useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);
  return (
    <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <Helmet>
        <title>Find Store</title>
        <link rel="icon" type="image/svg+xml" href="https://theelora.com/wp-content/uploads/2023/12/cropped-android-chrome-512x512-1-270x270.png" />
      </Helmet>
        <div className="map">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.683754787635!2d-74.74066912426576!3d40.238333171468824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c244f8a5638bd5%3A0xe36d397cc1f35e97!2sMeridian%20Furniture%20Warehouse!5e0!3m2!1sru!2saz!4v1681485194912!5m2!1sru!2saz" 

      height="500"
       allowfullscreen=""
        loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"></iframe> */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11380.917919650221!2d26.0667070871582!3d44.510452799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202e05aa336bd%3A0x544b9928ef3e26b1!2sBoConcept!5e0!3m2!1str!2saz!4v1769384405174!5m2!1str!2saz"
          width="600"
         height="450"
            // style="border:0;" 
            allowfullscreen=""
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
export default  FindStore