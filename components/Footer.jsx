import React from "react";
import Link from "next/link";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <h4 className="footer__social-heading">Śledź nasze projekty na:</h4>
        <div className="footer__social-icons">
          <Link href="https://pl-pl.facebook.com/KonGrod.eu/">
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com/kongrod_garden_carpentry/">
            <AiFillInstagram />
          </Link>
        </div>
      </div>
      <div className="footer__nav">
        <Link href="#about" className="footer__link">
          o nas
        </Link>
        <Link href="#offers" className="footer__link">
          oferta
        </Link>
        <Link href="#features" className="footer__link">
          dlaczego my?
        </Link>
        <Link href="#projects" className="footer__link">
          realizacje
        </Link>
        <Link href="./b2b.html" className="footer__link">
          B2B
        </Link>
        <Link href="#contact" className="footer__link">
          Kontakt
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
