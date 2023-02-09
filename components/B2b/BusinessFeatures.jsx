import React from "react";

import Image from "next/image";

import image1 from "../../public/icons/rozwoj-jako-stolarz.svg";
import image2 from "../../public/icons/optymalizacja-pracy-stolarza.svg";
import image3 from "../../public/icons/przychod-ze-stolarstwa.svg";
import image4 from "../../public/icons/nauka-stolarstwa.svg";
import image5 from "../../public/wspolpraca-biznesowa-stolarstwo.jpg";

const BusinessFeatures = () => {
  return (
    <section id='about-b2b' className="about-b2b section-padding">
        <h2 className="section-heading">dlaczego współpraca jest ważna?</h2>
      <div className="container container--p0">
        <div className="about-b2b__container">
          <div className="about-b2b__advantage">
            <Image
              src={image1}
              alt="rozwój stolarski"
              className="about-b2b__icon"
              width="60"
            />
            <h3 className="about-b2b__name">rozwój</h3>
          </div>
          <div className="about-b2b__advantage">
            <Image
              src={image4}
              alt="nauka stolarstwa"
              className="about-b2b__icon"
              width="60"
            />
            <h3 className="about-b2b__name">nauka</h3>
          </div>
          <div className="about-b2b__advantage">
            <Image
              src={image3}
              alt="przychód stolarski"
              className="about-b2b__icon"
              width="60"
            />
            <h3 className="about-b2b__name">przychód</h3>
          </div>
          <div className="about-b2b__advantage">
            <Image
              src={image2}
              alt="optymalizacja pracy stolarskiej"
              className="about-b2b__icon"
              width="60"
            />
            <h3 className="about-b2b__name">optymalizacja</h3>
          </div>
        </div>
        <div className="about-b2b__description-box">
            <div className="about-b2b__img-box">
              <Image
                src={image5}
                alt="współpraca biznesowa ze stolarzem"
                className="about-b2b__img"
                width='600'
              />
            </div>
            <div className="about-b2b__description-txt">
              <p className="about-b2b__info about-b2b__info--dark">
                Chcemy rozwijać się na wszelkie możliwe sposoby, dlatego
                poszukujemy możliwości
              współpracy biznesowej z innymi firmami.
                Oferujemy uczciwe podejście do wykonywanych zadań i zawsze
                podchodzimy do pracy z pełnym profesjonalizmem i zaangażowaniem,
                i tego samego wymagamy od innych.
              </p>
              <p className="about-b2b__info about-b2b__info--light">
                Zachęcamy do zapoznania się z ofertą przedstawioną poniżej oraz
                do kontaktu. Jesteśmy również otwarci na bardzo wiele ciekawych
                możliwości więc prosimy śmiało wychodzić z propozycjami
                współpracy.
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
