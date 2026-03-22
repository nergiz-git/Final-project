// import React, { useEffect, useState } from 'react'
// import Navbar from './navbar'
// import {Outlet} from "react-router"
// import Footer from './footer'
// import ScrollToTop from '../components/ScrollToTop';


// function Layout() {
//   const [search, setSearch] = useState("");
// const [allProducts, setAllProducts] = useState([]);

// useEffect(() => {
//   Promise.all([
//     fetch("http://localhost:3002/sofas").then(r => r.json()),
//   ]).then(([sofas]) => {
//     setAllProducts([
//       ...sofas.map(p => ({ ...p, type: "sofa" })),
//       // ...chairs.map(p => ({ ...p, type: "chair" })),
//       // ...rooms.map(p => ({ ...p, type: "room" })),
//     ]);
//   });
// }, []);

//   return (
//     <>
//     <ScrollToTop/>
//     <Navbar search={search} setSearch={setSearch}/>
//     <Outlet context={{ search, setSearch, allProducts}}/>
//     <Footer/>
//     </>
//   )
// }

// export default Layout











import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import { Outlet } from "react-router"
import Footer from './footer'
import ScrollToTop from '../components/ScrollToTop';
import { ToastContainer } from "react-toastify"; // ← ƏLAVƏ EDİN
import "react-toastify/dist/ReactToastify.css"; // ← ƏLAVƏ EDİN

function Layout() {
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3002/sofas").then(r => r.json()),
    ]).then(([sofas]) => {
      setAllProducts([
        ...sofas.map(p => ({ ...p, type: "sofa" })),
      ]);
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar search={search} setSearch={setSearch} />
      <Outlet context={{ search, setSearch, allProducts }} />
      <Footer />
      
      {/* ✅ TOASTCONTAINER BURDA */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default Layout