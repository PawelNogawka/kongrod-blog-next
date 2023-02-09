import React from "react";
import Link from "next/link";
import Image from "next/image";

import woodenHouse from "../../public/icons/dom-z-drewna.svg";
import garrage from "../../public/icons/garaz-samochodowy.svg";
import tarrace from "../../public/icons/taras-z-drewna-odkryty.svg";
import bower from "../../public/icons/altana-ogrodowa-zamknieta.svg";
import stairs from "../../public/icons/schody-z-drewna.svg";
import renovation from "../../public/icons/renowacje-starych-domow.svg";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container container--p0">
        <h2 className="section-heading">nasza oferta</h2>
        <div className="services__container">
          <div className="services__box">
            <Image
              src={woodenHouse}
              alt="konstrukcja szkieletowa"
              className="offers__icon"
              width={70}
            />
            <h3 className="services__name">konstrukcje szkieletowe</h3>
            <p className="services__content">
              wykonujemy w tej technologi takie obiekty jak: domki letniskowe do
              35m2, domy, garaże wolnostojące, pomieszczenia gospodarcze, możemy
              także wykonać inne projekty w tej technologii.
            </p>
            <Link href="/uslugi/konstrukcje-szkieletowe" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
          <div className="services__box">
            <Image
              src={garrage}
              alt="drewniane garaże samochodowe"
              className="offers__icon"
              width={70}
            />
            <h3 className="services__name">wiaty garażowe</h3>
            <p className="services__content">
              budujemy wiaty garażowe w różnych wymiarach od jednostanowiskowych
              do trzy i więcej stanowisk wolno stojące, a także przyłączone do
              innego obiektu. jest możliwość dobudowania pomieszczenia
              gospodarczego.
            </p>
            <Link href="/uslugi/wiaty-garazowe" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
          <div className="services__box">
            <Image src={bower}  alt="zamkniete altany ogrodowe" width={70}/>
            <h3 className="services__name">Altany , Pergole</h3>
            <p className="services__content">
              altanki wykonujemy w wielu wariantach od tradycyjnych po
              nowoczesne pergole z ażurami, drzwiami przesuwnymi, kryte dachówką
              blachodachówką czy też poliwęglanem, możliwości dopasowania jest
              ogromna.
            </p>
            <Link href="/uslugi/altany-pergole" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
          <div className="services__box">
            <Image src={tarrace} alt="tarasy drewniane" width={70} />
            <h3 className="services__name">tarasy</h3>
            <p className="services__content">
              wykonujemy tarasy z rodzimych gatunków drewna ( modrzew
              europejski) a także z gatunków egzotycznych.
            </p>
            <Link href="/uslugi/tarasy" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
          <div className="services__box">
          <Image
              src={stairs}
              alt="drewniane schody"
              className="offers__icon"
              width={70}
            />
            <h3 className="services__name">Schody drewniane</h3>
            <p className="services__content">
              wykonujemy schody wewnętrzne samonośne lub na beton z szlachetnych
              gatunków drewna typu dąb, jesio
            </p>
            <Link href="/uslugi/schody-drewniane" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
          <div className="services__box">
           <Image  src={renovation}   alt="renowacje dachów drewnianych" width={70}/>
            <h3 className="services__name">Renowacje budynków</h3>
            <p className="services__content">
              Zajmujemy się renowacją starych budynków drewnianych.
            </p>
            <Link href="/uslugi/renowacje-budynkow" className="btn btn--outlined">
              czytaj więcej
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
