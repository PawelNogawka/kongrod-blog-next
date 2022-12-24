import React from "react";

import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container container--p0">
        <div className="banner__wrapper">
          <div className="banner__header">
            <h1 className="banner__heading">stolarnia konGrod - blog</h1>
            <p className="banner__subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
              corrupti!
            </p>
            <a href="#" className="btn">
              exploruj
            </a>
          </div>
          <button className="banner__arrow">
            <FaAngleDoubleDown className="banner__arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
