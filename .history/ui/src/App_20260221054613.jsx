import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import MainContext from "../src/user/context/context"
import { route } from "./routes/router";
import './i18n';
import { connect } from "react-redux";

function App({ dispatch }) {
  const [theme, setTheme] = useState(false);
  
  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setTheme(true);
    }
  }, []);

  useEffect(() => {
    
    fetch(`http://localhost:3002/collection`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: json,
        });
      });


    fetch(`http://localhost:3002/sofaproducts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_SOFAS",
          payload: json,
        });
      });
  }, [dispatch]);

  
    fetch(`http://localhost:3002/chairs`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "SET_CHAIRS",
          payload: json,
        });
      });
  }, [dispatch]);

  return (
    <MainContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={route} />
    
    </MainContext.Provider>
  );
}

export default connect()(App);