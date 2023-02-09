import React from "react";
import Image from "next/image";
import Link from 'next/link'

import { GiHammerNails } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { GiDiploma } from "react-icons/gi";

import aboutImg from "../../public/wykonywanie-drewnianych-podlog.jpg";

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container container--p0">
        <h2 className="section-heading">o nas</h2>
        <div className="about__container">
          <div className="about__features">
            <div className="about__feature-box">
              <GiHammerNails />
              <b className="about__feature-amount">100+</b>
              <p className="about__feature-title">Wykonanych projektow</p>
            </div>
            <div className="about__feature-box">
              <MdPeopleAlt />
              <b className="about__feature-amount">150+</b>
              <p className="about__feature-title">Zadowolonych klientów</p>
            </div>
            <div className="about__feature-box">
              <RxCalendar />
              <b className="about__feature-amount">10+</b>
              <p className="about__feature-title">Lat doświadczenia</p>
            </div>
            <div className="about__feature-box">
              <GiDiploma />
              <b className="about__feature-amount">10+</b>
              <p className="about__feature-title">Szkoleń i certyfikatów</p>
            </div>
          </div>
          <div className="about__row">
            <div className="about__img-box">
              <Image src={aboutImg} alt="drewniane podłogi" width="600" />
            </div>
            <div className="about__content-box">
              <h3 className="about__content-title">
                Jesteśmy firmą z długoletnim doświadczeniem, mamy za sobą wiele
                realizacji, które zachwyciły naszych klientów. Pracujemy z pasją
                i jesteśmy zorientowani na potrzeby klienta.
              </h3>
              <p className="about__content-text">
                Zajmiemy się Twoim projektem od planowania, przez
                zaprojektowanie po przygotowanie wszelkich niezbędnych prac,
                takich jak przygotowanie fundamentów, montaż pokryć dachowych,
                montaż elektryki, czy innych instalacji, tak aby klient nie
                musiał się niczym przejmować. Wykonujemy konstrukcje
                szkieletowe, wiaty garażowe, tarasy, altany oraz pergole, schody
                , również zajmujemy się renowacją domów drewnianych.
              </p>
              <Link href='/' className="btn">zadaj pytanie</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
