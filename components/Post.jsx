import React from "react";

import Image from "next/image";
import Link from "next/link";

import Avatar from "./Avatar";

import moment from "moment";

import { BsFillCalendarCheckFill } from "react-icons/bs";

const Post = ({ post }) => {
  const { title, featuredImage, createdAt, author, categories, content } = post;

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="post__heading post__heading--h3">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="post__p">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="post__heading post__heading--h3">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <article className="post">
      <Image
        className="post__img"
        src={featuredImage.url}
        alt={title}
        width={280}
        height={300}
      />
      <div className="post__calendar">
        <BsFillCalendarCheckFill className="post__icon" />
        <span className="post__time">
          {moment(createdAt).format("MM DD, YYYY")}
        </span>
      </div>
      <h1 className="post__title">{title}</h1>
      <div className="post__info">
        <div className="post__info-box">
          <span>autor:</span>
          <Avatar author={author} />
        </div>
        <div className="post__info-box">
          <span>kategoria:</span>
          <Link
            href={`/kategorie/${categories[0].slug}`}
            className="post__category-name"
          >
            {categories[0].name}
          </Link>
        </div>
      </div>
      <div className="post__content">
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </article>
  );
};

export default Post;
