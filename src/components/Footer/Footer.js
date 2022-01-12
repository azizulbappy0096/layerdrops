import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container footer">
      <div className="row d-flex justify-content-between align-items-start">
        <div className="col-6 col-lg-2 mb-3 footer__widget">
          <a href="#">
            <img src="/img/logo-dark.png" alt="logo-dark" />
          </a>
        </div>

        <div className="col-6 col-lg-2 mb-3 footer__widget">
          <h4 className="footer__widget-title">Explore</h4>
          <ul className="widget__list list-unstyled mt-4">
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> About </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Our Team </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Features </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Features </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> How It Works </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3 footer__widget">
          <h4 className="footer__widget-title">Services</h4>
          <ul className="widget__list list-unstyled mt-4">
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Speed Optimization </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#">Marketing Analysis </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> SEO and Backlinks </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Content Marketing </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3 footer__widget">
          <h4 className="footer__widget-title">Links</h4>
          <ul className="widget__list list-unstyled mt-4">
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Help </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Support </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Clients </a>{" "}
            </li>
            <li className="text-capitalize my-3">
              {" "}
              <a href="#"> Contacts </a>{" "}
            </li>
          </ul>
        </div>
        <div className="col-6 col-lg-3 mb-3 footer__widget">
          <h4 className="footer__widget-title">Subscribe</h4>
          <div className="footer__widget-subscribe rounded-pill mt-4">
            <input type="email" placeholder="Email address" />
            <button className="subscribe-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
        <hr className="my-5" />
    <div className="row">
        <div className="col-md-6 col-12 text-center text-lg-start">
            <p className="footer__copyright">© copyright 2019 by <a href="#">Layerdrops.com</a></p>
        </div>
    </div>

    </div>
  );
}

export default Footer;
