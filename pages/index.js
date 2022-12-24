import Head from "next/head";
import Image from "next/image";

import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";

import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kongrod - Blog o tematyce stolarskiej</title>
        <meta name="description" content="Blog o tematyce stolarskiej, znajdziesz tutaj porady isnpiracje oraz solidną dawkę wiedzy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Banner />
        <section className="posts ">
          <div className="container">
            <section className="layout-wrapper ">
              <div className="layout-wrapper__posts">
                <h2 className="posts__heading">wszystkie wpisy</h2>
                {posts.map((post, index) => (
                  <PostCard key={index} post={post.node} />
                ))}
              </div>
              <div className="layout-wrapper__widgets layout-wrapper__widgets--mt">
                <PostWidget />
                <Categories />
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
