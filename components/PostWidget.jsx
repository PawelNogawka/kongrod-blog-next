import React, { useState, useEffect } from "react";

import Loader from "./Loader";

import Image from "next/image";
import Link from "next/link";

import Avatar from "./Avatar";

import moment from "moment";
import { BsFillCalendarCheckFill } from "react-icons/bs";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ slug, categories }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!slug) {
      const getPosts = async () => {
        const posts = await getRecentPosts();

        setPosts(posts);
      };
      getPosts();
    } else {
      const getPosts = async () => {
        const posts = await getSimilarPosts(categories, slug);

        setPosts(posts);
      };
      getPosts();
    }
  }, [slug]);

  if (!posts.length)
    return (
      <div className="widget__wrapper">
        <Loader />
      </div>
    );

  return (
    <div className="widget">
      <h2 className="widget__heading">
        {slug ? "podobne posty" : "ostatnie posty"}
      </h2>
      <div className="widget__wrapper">
        {posts.map((post, index) => (
          <Link href={`/post/${post.slug}`} key={index} className="widget__box">
            <div className="widget__left">
              <Image
                className="widget__img"
                src={post.featuredImage.url}
                width={80}
                height={80}
                alt={post.title}
              />
            </div>
            <div className="widget__right">
              <div className="widget__info">
                <Avatar author={post.author} />
                <div className="widget__calendar">
                  <BsFillCalendarCheckFill className="widget__icon" />
                  <span className="widget__time">
                    {moment(post.createdAt).format("MM DD, YYYY")}
                  </span>
                </div>
              </div>
              <span className="widget__post-title">{post.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
