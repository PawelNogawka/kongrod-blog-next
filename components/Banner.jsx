import React from "react";
import Link from "next/link";

import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = ({ title,subtitle,btnText, link, image ,direct }) => {

  return (
    <section className={`banner banner--${direct}`}>
      <div className="container container--p0">
        <div className="banner__wrapper">
          <div className="banner__header">
            <h1 className="banner__heading">{title}</h1>
            <p className="banner__subtitle">{subtitle}</p>
            <Link href={link} className="btn" scroll={false}>
              {btnText}
            </Link>
          </div>
          <Link href={link} className="banner__arrow" scroll={false}>
            <FaAngleDoubleDown className="banner__arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
