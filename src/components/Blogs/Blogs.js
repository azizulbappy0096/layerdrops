import React from "react";
import { ArticleCard } from "../Articles/Articles";
import "./Blogs.css";

function Blogs() {
  return (
    <>
      <div className="blogs-banner">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-8 text-center text-md-start">
              <h1 className="text-white cta-title"> Blog Posts </h1>
            </div>
            <div className="col-12 col-md-4 ">
              <ul className="breadcrumbs list-unstyled rounded-pill mx-auto my-4">
                <li className="breadcrumb__item text-capitalize">
                  <a href="/"> Home </a>
                </li>
                <li className="breadcrumb__item text-capitalize current">
                  <a href="/"> Blogs </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5" >
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <ArticleCard
              author="admin"
              publishedAt="4 Aug"
              commentsCount={2}
              title="Checkout pre launch mobile app
marketing pitfalls"
              link="#"
              img="/img/article/blog-1-1.jpg"
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <ArticleCard
              author="admin"
              publishedAt="4 Aug"
              commentsCount={2}
              title="Checkout pre launch mobile app
marketing pitfalls"
              link="#"
              img="/img/article/blog-1-2.jpg"
            />
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <ArticleCard
              author="admin"
              publishedAt="4 Aug"
              commentsCount={2}
              title="Checkout pre launch mobile app
marketing pitfalls"
              link="#"
              img="/img/article/blog-1-2.jpg"
            />
          </div>
        </div>
      </div>
      <div className="my-5 footer-upper">
        <h2 className=" cta-title text-center text-white">
          Looking for new <br />
          projects?
        </h2>
        <div className="banner__btn-two text-capitalize mt-5 text-center">
          <a href="#" className="py-3 px-5 rounded-pill fw-bold">
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default Blogs;
