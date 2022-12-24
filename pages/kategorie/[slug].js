import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { getCategories, getCategoryPost } from "../../services";

import PostCard from "../../components/PostCard";
import Categories from "../../components/Categories";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const CategoryPosts = ({ posts, error }) => {
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
    <title>Kategorie - wybierz interesującą cie kategorie</title>
        <meta name="description" content="Wybierz kategorię na podstawie której chcesz czytać posty" />
    </Head>

    <main className="category-list">
      <div className="container">
        <div className="layout-wrapper">
          <div className="layout-wrapper__posts">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="layout-wrapper__widgets">
            <Categories />
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default CategoryPosts;

export async function getStaticProps({ params }) {
  try {
    const posts = await getCategoryPost(params.slug);

    return {
      props: { posts },
    };
  } catch (error) {
    return {
      props: {
        posts: null,
        error: true,
      },
    };
  }
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
