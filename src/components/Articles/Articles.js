import React from "react";
import "./Articles.css";

const ArticleCard = ({
  author,
  publishedAt,
  commentsCount,
  title,
  link,
  img,
}) => {
  return (
    <div className="article__card">
      <div className="article__img overflow-hidden">
        <img className="w-100" src={img} alt={title} />
        <a href={link} className="text-capitalize">
          Read more
        </a>
      </div>
      <div className="article__card-content mt-4">
        <div className="article__card-meta d-flex align-items-center">
          <a href={link}>By {author}</a>
          <span className="mx-2">.</span>
          <a href={link}>{publishedAt}</a>
          <span className="mx-2">.</span>
          <a href={link}>{commentsCount} comments</a>
        </div>
        <h3 className="article__card-title mt-2">
          <a href={link}>{title}</a>
        </h3>
      </div>
    </div>
  );
};

function Article() {
  return (
      <>
    <div className="container my-5">
      <h2 className="cta-title text-center my-5 pb-2">
        Check out our latest
        <br /> news & articles
      </h2>
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

export default Article;
