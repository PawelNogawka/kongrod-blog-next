import React from "react";
import Image from "next/image";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiHandTruck } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";
import { GiToolbox } from "react-icons/gi";
import { AiFillCheckCircle } from "react-icons/ai";

import plan from "../../public/icons/plan.svg";
import advise from "../../public/icons/doradzimy.svg";
import home from "../../public/icons/projekt-domu.svg";
import transport from "../../public/icons/transport-materialow.svg";
import montage from "../../public/icons/montaż-elementow.svg";
import optymalize from "../../public/icons/optymalizacja.svg";
import featureImg from "../../public/projektowanie-konstrukcji-szkieletowych.jpg";

const Features = () => {
  return (
    <section id="features" className="features section-padding">
      <h2 className="section-heading">dlaczego my?</h2>
      <div className="container container--p0">
        <div className="features__container">
          <div className="features__boxes-container">
            <div className="features__box features__box--border-one">
              <Image src={plan} alt="plan działania" width={70} />
              <p className="features__text">przygotujemy plan</p>
            </div>
            <div className="features__box features__box--border-two">
              <Image
                src={advise}
                alt="=doradzimy wybór technologii"
                width={70}
              />
              <p className="features__text">doradzimy</p>
            </div>
            <div className="features__box features__box--border-three">
              <Image src={home} alt="projekt domu" width={70} />
              <p className="features__text">zaprojektujemy</p>
            </div>
            <div className="features__box features__box--border-four">
              <Image
                src={transport}
                alt="transport materiałów drewnianych"
                width={70}
              />
              <p className="features__text">przywieziemy</p>
            </div>
            <div className="features__box features__box--border-five">
              <Image
                src={montage}
                alt="montaż materiałów z drewna"
                width={70}
              />
              <p className="features__text">zamontujemy</p>
            </div>
            <div className="features__box features__box--border-six">
              <Image
                src={optymalize}
                alt="optymalizacja procesu budowy domu drewnianego"
                width={70}
              />
              <p className="features__text">zoptymalizujemy</p>
            </div>
          </div>
          <div className="features__row">
            <div className="features__img-box">
              <Image
                src={featureImg}
                alt="konstrukcje szkieletowe"
                width="600"
              />
            </div>
            <div className="features__row-content">
              <h3 className="features__title">
                Kochamy to co robimy , dlatego podchodzimy z pełnym
                zaangażowaniem i profesjonalizmem do wszystkich zleceń.{" "}
              </h3>
              <p className="features__txt">
                Dzięki doświadczeniu jakie posiada nasz zespół nie boimy się
                nowych wyzwań i podejmiemy się wszelkich realizacji, a nasi
                klienci cieszą się własnymi tarasami, altanami oraz innymi
                projektami. Nasze realizacje wykonujemy na terenie rabki zdrój
                oraz okolicach, ale jesteśmy gotowi na dalsze wyjazdy, aby
                zbudować coś wyjątkowego.{" "}
              </p>
              <div className="features__features">
                <div className="features__feature">
                  <AiFillCheckCircle />
                  <p className="features__feature-txt">
                    Pasja i doświadczenie.
                  </p>
                </div>
                <div className="features__feature">
                  <AiFillCheckCircle />
                  <p className="features__feature-txt">
                    Umiejętność łączenia tradycji z nowoczesnością.
                  </p>
                </div>
                <div className="features__feature">
                  <AiFillCheckCircle />
                  <p className="features__feature-txt">
                    Wysokiej jakości materiały.
                  </p>
                </div>
                <div className="features__feature">
                  <AiFillCheckCircle />
                  <p className="features__feature-txt">
                    Terminowość oraz indywidualne podejście do klienta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
