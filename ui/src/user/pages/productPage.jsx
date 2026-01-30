import "./ProductPage.css";
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../components/singleCard";
import Review from "../components/Review";
import { connect } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import ScrollToTop from "react-scroll-to-top";
import MainContext from "../context/context";
function ProductPage({ dispatch }) {
  useEffect(() => {
    document.title = 'Single product';
  }, []);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3002/collection/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);


  let { theme, setTheme } = useContext(MainContext);
   useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);

  return (
    <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
      <div className="container">
      <ScrollToTop smooth top="1000" width="20" height="20" color="#fff"/>
        <SingleCard props={data} />
        <div className="section2-sing">
          <div className="section2-img">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}


              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,

              }}
              navigation={true}



              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1587401198681-2c762ab72bd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1609644124044-94dc4301872e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1606246481699-f16245882373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></SwiperSlide>
              <SwiperSlide> <img src="https://images.unsplash.com/photo-1515275844947-c28f9c617443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" /></SwiperSlide>


            </Swiper>
          </div>
          <div className="section2-details">
            <p className="section2-title">Cast Aluminium Furniture</p>
            <p className="section2-description">
              Lumira furniture are designed and produced with you, the customer, in mind, so we made everything easy: Within 4 weeks from ordering a piece, it will arrive at your home, flat packed. You will find out that assembling the piece is simple, intuitive and fast, with no tools needed. And if you have to move to a new place, a Meridian furniture is easily disassembled and reassembled.
            </p>
          </div>
        </div>
        <div className="ask-qust">


          <div className="accordion-name">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="accordion-wrapper">
            <div className="accordion">
              <input type="radio" name="radio-a" id="check1" defaultChecked />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`}  htmlFor="check1">
                Can I return my furniture?
              </label>
              <div className="accordion-content">
                <p>
                  In the unlikely event that you wish to return your furniture,
                  Sabai Living offer a 30-day returns policy. However, you will be
                  charged an administrative fee to cover this. Your refund will be
                  processed as soon as the product has been returned to our
                  warehouse and has been thoroughly checked for any damage or
                  quality issues. Sabai Living can only issue refunds for items
                  that are not damaged.
                  <br />
                  <br />
                  What do I do if my item arrives damaged, or if I have received
                  the wrong item? In the unlikely event that you receive a damaged
                  item, please contact us within 24 hours of receiving your order.
                  You can contact us via telephone or email. We will ask you to
                  send photographs and a description of the damage and will then
                  thoroughly investigate. If required, we will repair, replace, or
                  refund your damaged item.
                  <br />
                  <br />
                  If you receive an incorrect item, please report it to us as soon
                  as possible and we will make arrangements for this to be
                  returned and the correct item sent to you.
                </p>
              </div>
            </div>
            <div className="accordion">
              <input type="radio" name="radio-a" id="check2" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check2">
                Can your furniture be left outside?
              </label>
              <div className="accordion-content">
                <p>
                  While aluminum, plastic, concrete and teak materials are ideal
                  for outdoor furniture year-round, materials like iron, steel and
                  wicker can be damaged by wet and cold weather conditions and
                  should not be left outside in the winter.
                </p>
              </div>
            </div>
            <div className="accordion">
              <input type="radio" name="radio-a" id="check3" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check3">
                What does powder coated mean?
              </label>
              <div className="accordion-content">
                <p>
                  Powder coating is a type of coating that is applied as a
                  free-flowing, dry powder. Unlike conventional liquid paint which
                  is delivered via an evaporating solvent, powder coating is
                  typically applied electrostatically and then cured under heat or
                  with ultraviolet light.
                  <br />
                  <br />
                  The powder may be a thermoplastic or a thermoset polymer. It is
                  usually used to create a hard finish that is tougher than
                  conventional paint.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check4" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check4">
                What is thermosetting polymer?
              </label>
              <div className="accordion-content">
                <p>
                  A thermosetting polymer which is also known as a thermoset or
                  thermosetting plastic is a polymer consisting of cross-linked
                  structure or heavily branched molecules.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check5" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check5">
                Are your cushions machine washable?
              </label>
              <div className="accordion-content">
                <p>
                  It all depends on the fabric that your cushions are made of.
                  Some fabrics can be washed in the washing machine. Ask your
                  fabric, furniture store, or furniture manufacturer if your
                  cushions can be washed in the washing machine.
                  <br />
                  <br />
                  The ones that can not be washed will be damaged in the washing
                  machine.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check6" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check6">
                Do the products fade in sunlight?
              </label>
              <div className="accordion-content">
                <p>
                  Ultraviolet rays are one of the causes of fading because they
                  can break down chemical bonds and fade the color in an object.
                  Other major contributors to fading include visible light and
                  solar heat. Some objects may be more prone to this bleaching
                  effect, such as dyed textiles and watercolors.{" "}
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check7" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check7">
                How do I care for my furniture?
              </label>
              <div className="accordion-content">
                <p>
                  4 Easy Care Tips to Keep your Furniture Looking New
                  <br />
                  1.Read the Care Label. <br />
                  If your furniture came with a care label, read it! ... <br />
                  2.Avoid Sun Exposure. Keep your furniture out of the sun,
                  especially directly under windows to avoid fading over time. ...{" "}
                  <br />
                  3.Rotate. ... <br /> 4.Protect Surfaces.
                </p>
              </div>
            </div>

            <div className="accordion">
              <input type="radio" name="radio-a" id="check8" />
              <label className={`accordion-label ${theme ? "text-[white]" : "text-[black]"}`} htmlFor="check8">
                Is the furniture ‘flat packed’ or ‘fully assembled’?
              </label>
              <div className="accordion-content">
                <p>
                  There’s a lot of things to consider before purchasing furniture.
                  Color, design, quality, and quantity are on top of the list.
                  However, one point that you should keep in mind is how you want
                  them to be delivered. When it comes to delivery, pre-assembled
                  or flat pack furniture are two terms you should jot down when
                  purchasing furniture for your new place.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sets-title">
          <h1>Shop Our Other Popular Sets</h1>
        </div>
        <div className="sets">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              570: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1140: {
                slidesPerView: 4,
                spaceBetween: 50,
              },


            }}

            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,

            }}
            navigation={true}

            
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="/src/assets/set1.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
                
              </div>
            </Link></SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="/src/assets/set2.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="/src/assets/set3.png" alt="" />   
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="/src/assets/set4.png" alt="" />
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div> </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="/src/assets/set1.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide> <Link to="/products">
              <div className="set">
                <div className="set-img">
                  <img src="/src/assets/set2.png" alt="" />
                </div>
                <div className="set-details">
                  <p className="set-name">Alma Velvet Armless</p>
                  <p className="set-price">£3,400.00</p>
                  <button>View Set</button>
                </div>
              </div>
            </Link></SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="/src/assets/set3.png" alt="" />
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/products">
                <div className="set">
                  <div className="set-img">
                    <img src="/src/assets/set4.png" alt="" />
                  </div>
                  <div className="set-details">
                    <p className="set-name">Alma Velvet Armless</p>
                    <p className="set-price">£3,400.00</p>
                    <button>View Set</button>
                  </div> </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>


        <Review />
      </div>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(ProductPage);
