import React from "react";

import Avatar from "./Avatar";

import Image from "next/image";
import Link from "next/link";

import moment from "moment/moment";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-card__left">
        <Image
          src={post.featuredImage.url}
          width={250}
          height={240}
          alt={post.title}
          className="post-card__img"
        />
      </div>
      <div className="post-card__right">
        <div className="post-card__box">
          <Avatar author={post.author} />
          <div className="post-card__calendar">
            <BsFillCalendarCheckFill className="post-card__icon" />
            <span className="post-card__time">
              {moment(post.createdAt).format("MM DD, YYYY")}
            </span>
          </div>
        </div>

        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{post.excerpt}...</p>
        <Link href={`/post/${post.slug}`}>
          <button className="btn">czytaj więcej</button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
