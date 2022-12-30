import React, { useRef, useState, useEffect } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/kongrod-stolarnia-logo.svg";

import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const categories = [
  { name: "narzedzia", slug: "narzedzia" },
  { name: "techniki", slug: "techniki" },
  { name: "inspiracje", slug: "inspiracje-stolarskie" },
  { name: "materiały", slug: "materialy" },
];

const Header = () => {
  const [active, setActive] = useState(false);

  const navRef = useRef(null);
  const headRef = useRef(null);

  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const headerEl = headRef.current;

    if (currentPath.startsWith("/kategorie")) {
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
                  href="https://kongrod.pl/"
                  className="desktop-nav__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  strona firmowa
                </Link>
              </li>
              {categories.map((item) => (
                <li key={item.name} className="desktop-nav__item">
                  <Link
                  
                    href={`/kategorie/${item.slug}`}
                    className="desktop-nav__link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="desktop-nav__item">
                <Link href="/" className="desktop-nav__link">
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
                <Link  onClick={handleLinkClick}  href="/" className="mobile-nav__link">
                  strona firmowa
                </Link>
              </li>
              {categories.map((item) => (
                <li key={item.name} className="mobile-nav__item">
                  <Link
                   onClick={handleLinkClick} 
                    href={`/kategorie/${item.slug}`}
                    className="mobile-nav__link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mobile-nav__item">
                <Link  onClick={handleLinkClick}  href="/" className="mobile-nav__link">
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
