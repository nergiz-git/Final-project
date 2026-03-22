import { useState, useEffect, useContext } from "react";
import Confetti from "react-confetti";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { connect } from "react-redux";
import "./CartPage.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";
import MainContext from "../context/context";

function CartPage({ products, sofas, basket, dispatch }) {
  useEffect(() => {
    document.title = "Cart";
  }, []);

   const allProducts = [...products, ...sofas];
  const Countchange = (id, c) => {
    let tempBasket = [...basket];
    const basketItem = tempBasket.find((b) => String(b.id) === String(id));
    if (!basketItem) return;
    basketItem.count += c;
    if (basketItem.count < 1) basketItem.count = 1;

    dispatch({ type: "SET_BASKET", payload: tempBasket });
    localStorage.setItem("basket", JSON.stringify(tempBasket));
  };

  const removeproduct = (id) => {
    const tempBasket = basket.filter((b) => String(b.id) !== String(id));
    dispatch({ type: "SET_BASKET", payload: tempBasket });
    localStorage.setItem("basket", JSON.stringify(tempBasket));
    toast.success("Məhsul səbətdən silindi", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
  };

  let subtotal = 0;
  // basket.forEach((basketItem) => {
  //   const product = products.find((p) => String(p.id) === String(basketItem.id));
  //   if (product) subtotal += product.price * basketItem.count;
  // });
  basket.forEach((basketItem) => {
  const product = allProducts.find(
    (p) => String(p.id) === String(basketItem.id) && p.category === basketItem.category
  );
  if (product)  {const price = parseFloat(String(product.price).replace(/,/g, ""));
    const total = price * basketItem.count;
  }
});

  const [circle1, setCircle1] = useState(false);

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [crediModal, setCrediModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleCrediModal = () => {
    if (subtotal !== 0) setCrediModal(!crediModal);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleOkButtonClick = () => {
    dispatch({ type: "SET_BASKET", payload: [] });
    localStorage.setItem("basket", JSON.stringify([]));
    setCrediModal(false);
    setContactModal(!contactModal);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitt = (evt) => {
    evt.preventDefault();
    if (!state.number || !state.expiry || !state.cvc || !state.name) {
      setErrorMessage("Please fill in all fields!");
      return;
    }
    setErrorMessage("");
    handleOkButtonClick();
  };


  let { theme, setTheme } = useContext(MainContext);
     useEffect(() => {
    document.body.className = theme ? "dark" : "";
  }, [theme]);

  return (
    <section className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="container">
        {/* <div className="daySale-before">
          <p>
            <span>Home </span> / SHOPPING CART
          </p>
        </div> */}
        <div className="shopping-carts">
          <div className="shopping">
            <div className="shopping-text">
              <h1>Shopping Cart</h1>
              <p>{basket.length} items</p>
            </div>
            <div className="cart-table">
              <div className="table-text">
                <h3>Products</h3>
              </div>
              <div className="table-text2">
                <h3>Quantity</h3>
              </div>
              <div className="table-text3">
                <h3>Total</h3>
              </div>
            </div>
            <div className="cards">
              {allProducts.length ? (
                basket.length ? (
                  basket.map((basketItem) => {
                    const product = allProducts.find(
                      (p) => String(p.id) === String(basketItem.id)&& p.category === basketItem.category
                    );
                    if (!product) return null;
                    const total = product.price * basketItem.count;
                    return (
                      <div className="card-col" key={basketItem.id}>
                        <div className="cart">
                          <div className="cart-img">
                            {/* <img src={product.images[0]} alt={product.name || product.title} /> */}
                            <img 
  src={product.images?.[0] || product.sofaImages?.left?.natural?.beige || ""} 
  alt={product.name || product.title} 
/>
                            <h2>{product.name || product.title}</h2>
                          </div>
                          <div className="cart-operations">
                            <button onClick={() => Countchange(basketItem.id, -1)}>
                              -
                            </button>
                            <div className="amount-style">{basketItem.count}</div>
                            <button onClick={() => Countchange(basketItem.id, 1)}>
                              +
                            </button>
                          </div>
                          <div className="cart-total">${total.toFixed(2)}</div>
                          <div
                            className="cart-remove"
                            onClick={() => removeproduct(basketItem.id)}
                          >
                            <img
                              src="./src/assets/iconsremove.png"
                              alt="Remove"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="no-favorit-cart">
                    <img src="./src/assets/empty2.png" alt="" />
                    <h1>Your cart is empty</h1>
                    <p>
                      Looks like you have not added anything to your cart. Go
                      ahead & explore top categories.
                    </p>
                  </div>
                )
              ) : (
                <h1>loading</h1>
              )}
            </div>
          </div>
          <div className="order">
            <div className="shopping-text">
              <h1>Order Summary</h1>
            </div>
            <div className="order-card">
              <div className="subtotal">
                <h4>Subtotal</h4>
                <h3>{subtotal.toFixed(2)}</h3>
              </div>
              <p>(includes $416.67 20% VAT)</p>
              <div
                className={!circle1 ? "free-shopping clickfree" : "free-shopping"}
                onClick={() => setCircle1(false)}
              >
                <div className="free">
                  <span className={circle1 ? "crucle click" : "crucle"}></span>
                  <h4>Standard Free Shipping</h4>
                </div>
                <h4>£00.00</h4>
              </div>
              <div
                className={circle1 ? "free-shopping clickfree" : "free-shopping"}
                onClick={() => setCircle1(true)}
              >
                <div className="free">
                  <span className={!circle1 ? "crucle click" : "crucle"}></span>
                  <h4>Premium Shipping</h4>
                </div>
                <h4>$118.80</h4>
              </div>
              <div className="subtotal">
                <h4>Total</h4>
                <h3>
                  $
                  {!circle1
                    ? `${subtotal.toFixed(2)}`
                    : `${(subtotal + 118.8).toFixed(2)}`}
                </h3>
              </div>
              <button className="shoppingBtn" onClick={toggleCrediModal}>
                Proceed To Checkout
              </button>
              <img
                src="./src/assets/Groupvisa.svg"
                alt=""
              />
              <p className="free-p">
                Discount prices will be active after entering the checkout process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Card Modal */}
      {crediModal && (
        <div className="creditCard">
          <div className="overlay-contact" onClick={toggleCrediModal}></div>
          <div className="credit-modal">
            <div className="credit-card">
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </div>
            <div className="credit_card_form">
              <form onSubmit={handleSubmitt}>
                <input
                  className="numberinput"
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <div className="card-ex">
                  <input
                    className="numberinput"
                    type="number"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    className="numberinput"
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="crediBtn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {contactModal && (
        <div className="seccess_box">
          <Confetti />
          <div className="overlay-contact" onClick={handleOkButtonClick}></div>
          <div className="suc-box">
            <div className="sucses-icon">
              <AiFillCheckCircle />
            </div>
            <div className="box__text">Thank You!</div>
            <button
              onClick={handleOkButtonClick}
              className="contact-modal-btn"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products,
  sofas: state.sofas || [],
});

export default connect(mapStateToProps)(CartPage);
