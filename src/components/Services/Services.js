import React from "react";
import "./Services.css";

function Card({ Icon, title, description, link }) {
  return (
    <div className="services__card bg-white text-center pt-5">
      <div className="services__icon">
        <Icon />
      </div>
      <div className="services__card-title text-center my-4">
        <a href="#">
          {title.map((data, idx) => {
            if (idx !== title.length - 1) {
              return (
                <>
                  {data} <br />{" "}
                </>
              );
            } else {
              return data;
            }
          })}
        </a>
      </div>
      <p className="services__card-desp text-center mb-4">
        {description.map((data, idx) => {
          return (
            <>
              {data} <br />{" "}
            </>
          );
        })}
      </p>
      <a
        href={link}
        className="services__card-link text-capitalize py-4 fw-bold"
      >
        Read more
      </a>
    </div>
  );
}

const PcIcon = () => {
  return (
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
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};

const Analysis = () => (
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
      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    />
  </svg>
);

const SEO = () => (
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
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

function Services() {
  return (
    <div className="services position-relative">
    <div className="container pt-5 pt-md-0 position-relative">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1 className="services__title">
            Lums can boost <br /> up your web traffic
          </h1>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <Card
              title={["Speed", "Optimization"]}
              Icon={PcIcon}
              description={[
                "There are many variations of",
                "passages of lorem ipsum is",
                "simply free text but majority",
                " have suffered.",
              ]}
              link="#"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            {" "}
            <Card
              title={["Marketing", "Analysis"]}
              Icon={Analysis}
              description={[
                "There are many variations of",
                "passages of lorem ipsum is",
                "simply free text but majority",
                "have suffered.",
              ]}
              link="#"
            />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <Card
              title={["Speed", "Optimization"]}
              Icon={SEO}
              description={[
                "There are many variations of",
                "passages of lorem ipsum is",
                "simply free text but majority",
                " have suffered.",
              ]}
              link="#"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
