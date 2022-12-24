import React from "react";
import Image from "next/image";

const Avatar = ({ author }) => {
  return (
    <div className="avatar">
      <Image
        src={author.photo.url}
        alt={author.name}
        width={40}
        height={40}
        className="avatar__img"
      />
      <span className="avatar__name">{author.name}</span>
    </div>
  );
};

export default Avatar;
