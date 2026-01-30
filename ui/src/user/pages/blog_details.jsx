import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Blog_details.css'
import MainContext from "../context/context";

function Blog_details() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3002/cards/${id}`)
            .then((a) => a.json())
            .then((a) => setData(a));
    }, []);

      let { theme, setTheme } = useContext(MainContext);
   useEffect(() => {
  document.body.className = theme ? "dark" : "";
}, [theme]);

    return (
        <div className={` ${theme ? "bg-dark" : "bg-light"}`}>
            <section className="image__main">
                <div className="conteiner">
                    <div className="bigimage mt-[150px]">
                    </div>
                </div>
            </section>
            <section className="text__main">
                <div className="container">
                    <div className="text_center_blog">
                        <h1>{data.header}</h1>
                    </div>
                    <div className="blog_detls">

                        <div className="blog_own">

                            <div className="blog__info">

                                <div className="blog_info_img">
                                    <img src="https://img.freepik.com/premium-photo/living-room-with-large-couch-coffee-table_865967-34529.jpg" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="blog_two">
                            <div className="blog_center"><h2>
                                Latest News
                            </h2>
                            </div>
                            <div className="news_blogs">
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="section_blog_2">
                        <p className="sec-blog-text">{data.descript1}</p>

                        <div className="info__card">

                            <img src="./src/assets/Content.svg" alt="" />

                        </div>

                        <h2 className="qust1">{data.question1}</h2>
                        <p className="qust2">{data.answer1}</p>

                        <h2 className="qust1">{data.question2}</h2>
                        <p className="qust2">{data.answer2}</p>
                    </div>

                </div>
            </section>
            <section className="author__section">
                <div className="container">
                    <div className="author__sectionfoot">
                        <div className="author__image">
                            <img src="https://www.shutterstock.com/shutterstock/photos/1877830492/display_1500/stock-vector-graphic-designer-creating-logo-design-using-computer-software-sitting-at-desk-vector-flat-1877830492.jpg" alt="" />
                        </div>
                        <div className="author__text">
                            <h1>{data.author}</h1>
                            <h6>Dizayner</h6>
                            <p>{data.designer_about}</p>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Blog_details







