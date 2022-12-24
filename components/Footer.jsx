import React from "react";

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-media">
        <span>Znajdż nas na:</span>
        <a
          href="https://www.instagram.com/kongrod_garden_carpentry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="footer__social-icon" />
        </a>
        <a
          href="https://pl-pl.facebook.com/KonGrod.eu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="footer__social-icon" />
        </a>
      </div>
      <p className="footer__rights">
        <AiOutlineCopyrightCircle className="footer__copyright-icon" />| 2023
        KonGrod
      </p>
    </footer>
  );
};

export default Footer;
