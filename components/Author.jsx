import React from "react";
import Image from "next/image";

import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Author = ({ author }) => {
  return (
    <div className="author">
      <div className="author__left">
        <Image
          src={author.photo.url}
          width={90}
          height={90}
          alt={author.name}
          className="author__img"
        />
      </div>
      <div className="author__right">
        <div className="author__contact-wrapper">
          <div className="author__contact-box">
            <BsTelephoneFill />
            <span className="author__contact-direct">{author.phoneNumber}</span>
          </div>
          <div className="author__contact-box">
            <IoMdMail />
            <span className="author__contact-direct">{author.email}</span>
          </div>
        </div>
        <p className="author__bio">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
