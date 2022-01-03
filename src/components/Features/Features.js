import React from "react";
import "./Features.css";

const TikIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const BusinessStrategy1 = () => (
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
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
    />
  </svg>
);

const BusinessStrategy2 = () => (
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
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

function Features() {
  return (
    <div className="features pb-5">
      <div className="cta__one">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-img position-relative">
                <img
                  src="/img/features/cta-1-1.jpg"
                  alt="cta-1-1"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="cta-title">
                Discover more new features
              </h2>
              <p className="cta-text my-4">
                Duis aute irure dolor in rlorem ipsum is simply free text is not
                eprehen available in the new market derit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="cta-list list-unstyled my-4">
                <li className="my-2">
                  {" "}
                  <TikIcon /> Refresing to get such a personal touch.{" "}
                </li>
                <li className="my-2">
                  {" "}
                  <TikIcon /> Duis aute irure dolor in reprehenderit in
                  voluptate.{" "}
                </li>
                <li className="my-2">
                  {" "}
                  <TikIcon /> Velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                </li>
              </ul>
              <div className="banner__btn-two text-capitalize mt-5">
                <a href="#" className="py-3 px-5 rounded-pill fw-bold">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta__two position-relative">
        <img
          className="cta__two-img"
          src="/img/features/cta-moc-1-1.png"
          alt="cta-moc-1-1"
        />

        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-6">
              <h2 className="cta-title">
                Discover more new features
              </h2>
              <div className="mt-5 d-flex flex-column flex-md-row align-items-center align-items-md-start">
                <div className="cta-card__icon">
                    <BusinessStrategy1 />
                </div>
                <div className="cta-card__content ms-md-4 text-center text-md-start">
                    <h3 className="cta-card__title"> Business Strategy </h3>
                    <p className="cta-text mt-3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make. </p>
                </div>
              </div>

              <div className="mt-4 d-flex flex-column flex-md-row align-items-center align-items-md-start">
                <div className="cta-card__icon">
                    <BusinessStrategy2 />
                </div>
                <div className="cta-card__content ms-md-4 text-center text-md-start">
                    <h3 className="cta-card__title"> Business Strategy </h3>
                    <p className="cta-text mt-3"> Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make. </p>
                </div>
              </div>

              <div className="banner__btn-two text-capitalize mt-5">
                <a href="#" className="py-3 px-5 rounded-pill fw-bold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
