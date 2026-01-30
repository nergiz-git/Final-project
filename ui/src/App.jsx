// import { useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import { RouterProvider, useLocation } from "react-router-dom";
// import MainContext from "../src/user/context/context"
// import { route } from "./routes/router";
// import './i18n';
// import { connect } from "react-redux";



// function App({dispatch}) {
//   const [theme, setTheme] = useState(false);
//   useEffect(() => {
//     const mode = localStorage.getItem("theme");
//     if (mode === "dark") {
//       setTheme(true);
//     }
//   }, []);

//    useEffect(() => {
//     fetch(`http://localhost:3002/collection`)
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({
//           type: "SET_PRODUCTS",
//           payload: json,
//         });
//       });
//   }, [dispatch]);

  
  

//   return (
//     <MainContext.Provider value={{ theme, setTheme }}>
//       <RouterProvider router={route} />
//       <ToastContainer
//         position="top-right"
//         autoClose={2000}
//         theme="colored"
//       />
//     </MainContext.Provider>
//   );
// }

// export default connect()(App);



import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import MainContext from "../src/user/context/context"
import { route } from "./routes/router";
import './i18n';
import { connect } from "react-redux";

function App({dispatch}) {
  const [theme, setTheme] = useState(false);
  
  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    // Collection yüklə
    fetch(`http://localhost:3002/collection`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: json,
        });
      });

    // Sofas yüklə ← YENİ
    fetch(`http://localhost:3002/sofas`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_SOFAS",
          payload: json,
        });
      });
  }, [dispatch]);

  return (
    <MainContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </MainContext.Provider>
  );
}

export default connect()(App);