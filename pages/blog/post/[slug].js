import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Post from "../../../components/Post";
import Categories from "../../../components/Categories";
import PostWidget from "../../../components/PostWidget";
import Author from "../../../components/Author";
import Loader from "../../../components/Ui/Loader";
import Error from "../../../components/Ui/Error";
import Contact from "../../../components/Contact";

import { getPostDetails, getPosts } from "../../../services";

const PostDetails = ({ post, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader big />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Head>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDesc} />
      </Head>
      <main className="post-details">
        <div className="container">
          <section className="layout-wrapper">
            <div className="layout-wrapper__posts">
              <Post post={post} />
              <Author author={post.author} />
            </div>

            <div className="layout-wrapper__widgtes">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </section>
        </div>
      </main>
      <Contact/>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  try {
    const data = await getPostDetails(params.slug);
    return {
      props: {
        post: data,
        loading: false,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        post: null,
        error: true,
      },
    };
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
