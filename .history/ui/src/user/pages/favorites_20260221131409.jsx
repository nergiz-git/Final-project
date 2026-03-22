import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { HiShoppingBag } from "react-icons/hi";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import { MdRemoveShoppingCart } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import "./Favorites.css";
import { Bounce, toast } from "react-toastify";
import MainContext from "../context/context";
import collectionData from "../../data.json";
function Favorites({ products, sofas, chairs, beds, tables, favorites, basket, dispatch }) {
  const color = "#000";
  const loading = true;
  const override = {
    display: "block",
    margin: "0 auto",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    document.title = "Favorites";
  }, []);


  const allProducts = [...products, ...sofas, ...chairs, ...beds, ...tables, ...collectionData];

  const removefavorit = (id, category) => {
    const updated = favorites.filter(
      (f) => !(String(f.id) === String(id) && f.category === category)
    );
    dispatch({ type: "SET_Favorites", payload: updated });
    localStorage.setItem("favorites", JSON.stringify(updated));
    toast.success("Məhsul favoritlərdən silindi", { position: "top-center", autoClose: 2000, transition: Bounce });
  };


  const favorittocard = (id, category) => {
    if (!localStorage.getItem("userId")) {
      toast.warning("Səbətə əlavə etmək üçün qeydiyyatdan keçin", { position: "top-center", autoClose: 2000, theme: "colored", transition: Bounce });
      return;
    }
    const itemIndex = basket.findIndex(
      (item) => String(item.id) === String(id) && item.category === category
    );
    if (itemIndex === -1) {
      const updatedBasket = [...basket, { id, count: 1, category }];
      dispatch({ type: "SET_BASKET", payload: updatedBasket });
      localStorage.setItem("basket", JSON.stringify(updatedBasket));
      toast.success("Məhsul səbətə əlavə olundu 🛒", { position: "top-center", autoClose: 2000, transition: Bounce });
    }
  };

  const favoritremovecard = (id, category) => {
    const updatedBasket = basket.filter(
      (item) => !(String(item.id) === String(id) && item.category === category)
    );
    dispatch({ type: "SET_BASKET", payload: updatedBasket });
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    toast.success("Məhsul səbətdən silindi", { position: "top-center", autoClose: 2000, transition: Bounce });
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let { theme, setTheme } = useContext(MainContext);
  useEffect(() => {
    document.body.className = theme ? "dark" : "";
  }, [theme]);

  return (
    <section className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="banner">
        <div className="baner-text">
          <div
            className={
              toggleState === 1 ? "banner-col active-baner" : "banner-col"
            }
            onMouseEnter={() => toggleTab(1)}
          >
            <div className="ban-text">
              <h1>LIVING</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "banner-col active-baner-1" : "banner-col"
            }
            onMouseEnter={() => toggleTab(2)}
          >
            <div className="ban-text">
              <div className="po-text">
                <h1>BEDROOM</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "banner-col active-baner-2" : "banner-col"
            }
            onMouseEnter={() => toggleTab(3)}
          >
            <div className="ban-text">
              <h1>DINING</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? "banner-col active-baner-3" : "banner-col"
            }
            onMouseEnter={() => toggleTab(4)}
          >
            <div className="ban-text">
              <h1>KİTCHEN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 5 ? "banner-col active-baner-4" : "banner-col"
            }
            onMouseEnter={() => toggleTab(5)}
          >
            <div className="ban-text">
              <h1>STORAGE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
        </div>
        <div className="banner-images">
          <div
            className={toggleState === 1 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1618221312573-404f9a52798d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80Z"
              alt=""
            />
          </div>
          <div
            className={toggleState === 2 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1632119289059-793dd347950f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 3 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1616486645825-5f8cf98b4053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 4 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1633109870201-318921e3f992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 5 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1656646424826-c50ece5d75ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="fov-center">
        <h1>My Favorites</h1>
        <p>Here you can add your favorite products according to the basket.</p>
      </div>

      <div className="container">
        <div className="fov-search">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <div className="fov-search-icon">
            <RiSearchLine />
          </div>
        </div>

        {allProducts.length ? (
          filteredFavorites.length ? (
            <div className="favorite">
              {filteredFavorites.map((favorite) => {

                const product = allProducts.find(
                  (p) => String(p.id) === String(favorite.id) && p.category === favorite.category
                );

                if (!product) {
                  console.warn("Product not found for favorite:", favorite);
                  return null;
                }
                const inBasket = basket.find(
                  (item) => String(item.id) === String(favorite.id) && item.category === favorite.category
                );

                return (
                  <div className={`favorit-box ${product.category === 'sofa' ? 'sofa-item' : ''}`}
                    key={favorite.id}>
                    <div className="fovorite-img">

                      {/* <img
                        src={product.images?.[0] || product.sofaImages?.left?.natural?.beige || ""}
                        alt={product.name || product.title} className="mt-[50px] "   style={{ width: "95px", marginTop: "100px" }}
                      /> */}
                      <img
                        src={product.images?.[0] || product.sofaImages?.left?.natural?.beige || ""}
                        alt={product.name || product.title}
                        className="mt-[50px]"
                        style={{
                          width: product.category === "chairs" ? "95px" : "135px",
                          marginLeft: product.category === "chairs" ? "36px" : "",
                          marginTop: product.category === "chairs" ? "36px" : "",
                          marginTop: "100px"
                        }}
                      />
                      <span onClick={() => removefavorit(favorite.id, favorite.category)}
                        style={{
                          top: product.category === 'sofa' ? '-85px' : '10px'
                        }}
                      >
                        <VscClose />
                      </span>
                    </div>
                    <div className="favorite-text">
                      <h1>{(product.name || product.title).slice(0, 15)}</h1>
                      <div className="fov-titl">
                        <p>${product.price}</p>
                        {inBasket ? (
                          <button
                            onClick={() => favoritremovecard(favorite.id, favorite.category)}
                            className="fovorite-btn"
                          >
                            <MdRemoveShoppingCart />
                          </button>
                        ) : (
                          <button
                            onClick={() => favorittocard(favorite.id, favorite.category)}
                            className="fovorite-btn"
                          >
                            <HiShoppingBag />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-favorit">
              <img src="./src/assets/empty1.png" alt="" />
              <h1>No favorites found</h1>
              <p>Use the search or add products to your favorites list.</p>
              <Link to="/products">
                <button>Go Shop</button>
              </Link>
            </div>
          )
        ) : (
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products,
  sofas: state.sofas || [],
  chairs: state.chairs || [],
  beds: state.beds || [],
  tables: state.tables || [],
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);




