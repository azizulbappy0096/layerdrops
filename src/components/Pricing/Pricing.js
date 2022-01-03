import React from "react";
import "./Pricing.css";

const Card = ({ amount, packType, features, link }) => {
    return(
        <div className="pricing__card pt-5 p-4 tex-center">
                  <div className="pricing__card-header text-center pb-4">
                    <h3> ${Number(amount).toFixed(2)} </h3>
                    <p className="px-4 py-2 rounded-pill mt-2 mb-4 text-uppercase"> {packType} PACK </p>
                  </div>
                  <ul className="pricing__card-list list-unstyled text-center my-5">
                      {features.map((data, idx) => <li key={idx}> {data} </li>)}
                  </ul>
                  <a href={link} className="pricing__card-btn rounded-pill py-3 px-5 text-capitalize"> Choose Plan </a>
                  <span className="pricing__card-tagLine mt-4 mb-3">NO HIDDEN CHARGES</span>
              </div>
    )
}

function Pricing() {
  return (
    <div className="container my-5 position-relative">
      <h2 className="cta-title text-center">
        {" "}
        Pricing plans which <br />
        suits your needs
      </h2>

      <div className="row mt-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <Card amount={20} packType="Basic" features={["Extra features", "Lifetime free support", "Upgrate options", "Full access"]} link="#" />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <Card amount={30} packType="Medium" features={["Extra features", "Lifetime free support", "Upgrate options", "Full access"]} link="#" />
          </div>
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <Card amount={40} packType="ULTIMATE" features={["Extra features", "Lifetime free support", "Upgrate options", "Full access"]} link="#" />
          </div>
      </div>
    </div>
  );
}

export default Pricing;
