import React, { useState } from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Circle = ({ counter, name }) => {
  return (
    <div className="testimonials__circle">
      <span className="testimonials__circle-dot1"></span>
      <span className="testimonials__circle-dot2"></span>
      <span className="testimonials__circle-dot3"></span>
      <h3>
        <CountUp end={counter} duration={5} />
      </h3>
      <p className="text-uppercase"> {name} </p>
    </div>
  );
};

function Testimonials() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-12 my-5">
          <Slider {...settings}>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
            <div>
              <img
                className="w-auto my-0 mx-auto"
                src="/img/testimonials/brand-1-1.png"
                alt="brand-1-1"
              />
            </div>
          </Slider>
        </div>
        <hr className="mt-5" />
      </div>

      <div className="container my-3">
        <div className="row">
          <h2 className="cta-title text-center my-5 pb-2">
            Over 2200 projects
            <br /> completed
          </h2>

          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <Circle counter="4789" name="projects" />
          </div>
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <Circle counter="6400" name="CUSTOMERS" />
          </div>
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <Circle counter="960" name="SUCCESS" />
          </div>
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <Circle counter="448" name="AWARDS" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
