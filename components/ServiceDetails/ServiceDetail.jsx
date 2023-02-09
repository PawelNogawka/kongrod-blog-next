import React from "react";
import Image from "next/image";


const ServiceDetail = ({ service }) => {

  return (
    <section id="service-details" className="service-details section-padding">
      <div className="container container--p0">
        <div className="service-details__container">
         <Image src={service.imageSrc ? service.imageSrc : ""} width={500} height={270} alt="usługa stolarska"  />
          <h1 className="service-details__heading">{service.title ? service.title : 'tytuł'}</h1>
          <p className="service-details__desc">{service.description ? service.description : ""}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
