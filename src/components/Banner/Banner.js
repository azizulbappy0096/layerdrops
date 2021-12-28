import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img
        src="/img/banner/banner-1-1-moc.png"
        alt="banner-moc"
        className="banner__img-moc"
      />
      <img
        src="/img/banner/globe-1-1.png"
        alt="globe-moc"
        className="banner__img-globe"
      />
      <img
        src="/img/banner/rocket-1-1.png"
        alt="rocket-moc"
        className="banner__img-rocket"
      />
      <span className="banner__shape-1"></span>
      <span className="banner__shape-2"></span>
      <span className="banner__shape-3"></span>
      <span className="banner__shape-4"></span>
      <span className="banner__shape-5"></span>
      <div className="container">
        <div className="row position-relative" style={{ zIndex: 10 }}>
          <div className="col-lg-6 banner__content">
            <div className="banner__btn text-uppercase ps-3 rounded-pill overflow-hidden">
              <span className="py-2 pe-3 text-white">
                {" "}
                WELCOME TO SEO BUSINESS{" "}
              </span>
              <a href="#" className="py-2 px-3">
                {" "}
                Free Trial{" "}
              </a>
            </div>

            <h3 className="banner__title text-white my-4">
              {" "}
              Boost your web traffic & rank with lums{" "}
            </h3>
            <div className="banner__btn-two text-capitalize my-2">
              <a href="#" className="py-3 px-5 rounded-pill fw-bold">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
