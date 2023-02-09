import React from "react";
import Image from "next/image";

const ServiceDetail = ({ service }) => {
  const { imageSrc, title, description } = service;

  return (
    <section id="service-details" className="service-details section-padding">
      <div className="container container--p0">
        <div className="service-details__container">
          <Image src={imageSrc} width={500} height={270}  />
          <h1 className="service-details__heading">{title}</h1>
          <p className="service-details__desc">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
