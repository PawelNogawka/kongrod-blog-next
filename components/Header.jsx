import React, { useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/kongrod-stolarnia-logo.svg";

import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const categories = [
  { name: "narzedzia", slug: "/blog/kategorie/narzedzia" },
  { name: "techniki", slug: "/blog/kategorie/techniki" },
  { name: "inspiracje", slug: "/blog/kategorie/inspiracje-stolarskie" },
  { name: "materiały", slug: "/blog/kategorie/materialy" },
];

const sections = [
{ name: "o nas", slug: "/#about" },
{ name: "oferta", slug: "/#services" },
{ name: "dlaczego my?", slug: "/#features" },
{ name: "blog", slug: "/blog" },
{ name: "B2B", slug: "/wspolpraca-biznesowa" },
];

const Header = () => {
  const [active, setActive] = useState(false);

  const navRef = useRef(null);
  const headRef = useRef(null);

  const router = useRouter();
  const currentPath = router.pathname;

  const links = currentPath.startsWith("/blog" ) ? categories : sections

   

  useEffect(() => {
    const headerEl = headRef.current;

    if (currentPath.startsWith("/blog")) {
      headerEl.classList.add("header--active");
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        if (currentPath === "/" || currentPath === "") {
          headerEl.classList.remove("header--active");
        }
      } else {
        headerEl.classList.add("header--active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPath]);

  const handleButtonClick = (e) => {
    navRef.current.classList.toggle("mobile-nav--active");
    e.target.classList.toggle("mobile-nav__burger--active");
    setActive((prevStat) => !prevStat);
  };

  const handleLinkClick = () => {
    setActive(false);
    navRef.current.classList.remove("mobile-nav--active");
  };

  return (
    <header ref={headRef} className="header">
      <div className="container container--p0">
        <div className="header__wrapper">
          <Link href="/" className="header__logo">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="logo firmy stolarskiej kogrod"
              className="header__logo-icon"
            />
            <span>konGrod</span>
          </Link>
          <nav className="desktop-nav">
            <ul className="desktop-nav__list">
              <li className="desktop-nav__item">
                <Link
                  href="/"
                  className="desktop-nav__link"
                >
                  strona główna
                </Link>
              </li>
              {links.map((item) => (
                <li key={item.name} className="desktop-nav__item">
                  <Link
                    href={`${item.slug}`}
                    className="desktop-nav__link"
                    scroll={currentPath === '/' ? false : true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="desktop-nav__item">
                <Link href="#contact" className="desktop-nav__link desktop-nav__link--contact" scroll={currentPath === '/' ? false : true}>
                  kontakt
                </Link>
              </li>
            </ul>
          </nav>

          <nav ref={navRef} className="mobile-nav">
            <button onClick={handleButtonClick} className="mobile-nav__burger">
              {!active ? (
                <RiMenu4Fill className="mobile-nav__icon" />
              ) : (
                <AiOutlineClose className="mobile-nav__icon" />
              )}
            </button>
            <ul className="mobile-nav__list">
              <li className="mobile-nav__item">
                <Link
                  onClick={handleLinkClick}
                  href="/"
                  className="mobile-nav__link"
                >
                  strona firmowa
                </Link>
              </li>
              {categories.map((item) => (
                <li key={item.name} className="mobile-nav__item">
                  <Link
                    onClick={handleLinkClick}
                    href={`${item.slug}`}
                    className="mobile-nav__link"
                    scroll={currentPath === '/' ? false : true}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mobile-nav__item">
                <Link
                  onClick={handleLinkClick}
                  href="#contact"
                  className="mobile-nav__link"
                >
                  kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
