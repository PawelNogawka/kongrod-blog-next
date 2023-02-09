import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { GoogleMap, Marker } from "react-google-maps"

import { AiFillPhone } from "react-icons/ai";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Contact = () => {
  const [focused, setFocused] = useState(false);

  const form = useRef();

  const handleFocus = () => {
    setFocused(true);
  };

  const notify = () =>
    toast.success(" Wiadomośc została wysłana!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_97g4cwb",
        "template_iohf70y",
        form.current,
        "Q56G9g-dxMZF7qLri"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          console.log("messagesent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact section-padding">
      <h2 className="section-heading">kontakt</h2>
      <div className="container container--p0">
        <div className="contact__container">
          <div className="contact__top">
          <div className="contact__tile">
              <div className="contact__icon-box">
                <AiFillPhone />
              </div>
              <div className="contact__tile-column">
                <h4 className="contact__tile-name">telefon</h4>
                <Link href="/">+48 576 953 624</Link>
              </div>
            </div>
            <div className="contact__tile">
              <div className="contact__icon-box">
                <AiFillPhone />
              </div>
              <div className="contact__tile-column">
                <h4 className="contact__tile-name">telefon</h4>
                <Link href="/">+48 576 953 624</Link>
              </div>
            </div>
            <div className="contact__tile">
              <div className="contact__icon-box">
                <AiFillPhone />
              </div>
              <div className="contact__tile-column">
                <h4 className="contact__tile-name">telefon</h4>
                <Link href="/">+48 576 953 624</Link>
              </div>
            </div>
          </div>
          <div className="contact__bottom">
            <form ref={form} onSubmit={sendEmail} className="form">
              <h3 className="form__heading">
                Napisz do nas aby dowiedzieć sie więcej
              </h3>
              <div className="form__inputs-container">
                <div className="form__input-box">
                  <label htmlFor="user_name">imię:</label>
                  <input
                    name="user_name"
                    type="text"
                    className="form__input"
                    required
                    onBlur={handleFocus}
                    focused={focused.toString()}
                  />
                  <small className="form__error">
                    Proszę uzupełnić to pole
                  </small>
                </div>
                <div className="form__input-box">
                  <label htmlFor="user_email">email:</label>
                  <input
                    name="user_email"
                    type="email"
                    className="form__input"
                    required
                    onBlur={handleFocus}
                    focused={focused.toString()}
                  />
                  <small className="form__error">
                    Proszę wpisać poprawny adres email
                  </small>
                </div>
                <div className="form__input-box">
                  <label htmlFor="message">wiadomość:</label>
                  <textarea
                    name="message"
                    className="form__txt"
                    required
                    pattern="/^[a-zA-Z]+$/"
                    onBlur={handleFocus}
                    focused={focused.toString()}
                  ></textarea>
                  <small className="form__error">
                    Proszę uzupełnić to pole
                  </small>
                </div>
              </div>
              <button className="btn">wyślij wiadomość</button>
            </form>
          </div>
        </div>
        <iframe
          id="map"
          className="contact__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.5500419886957!2d19.978930015451606!3d49.60623415571252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160a7959074675%3A0x78189eea29727fc0!2sPoniatowskiego%20118%2C%2034-700%20Rabka-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1657284468520!5m2!1spl!2spl"
          width="600"
          height="450"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
