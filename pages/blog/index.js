import Head from "next/head";
import Image from "next/image";

import Banner from "../../components/Banner";
import PostCard from "../../components/PostCard";
import PostWidget from "../../components/PostWidget";
import Categories from "../../components/Categories";
import Contact from "../../components/Contact";

import { getPosts } from "../../services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Kongrod - Blog o tematyce stolarskiej</title>
        <meta
          name="description"
          content="Blog o tematyce stolarskiej, znajdziesz tutaj porady isnpiracje oraz solidną dawkę wiedzy"
        />
      </Head>
      <main>
        <Banner
          title="kongrod - blog stolarski"
          subtitle="na naszym blogu znjdziesz wiele przydatnych informacji i porad stolarskich"
          link="#posts"
          btnText="czytaj więcej"
          direct="blog"
        />
        <section id="posts" className="posts ">
          <div className="container">
            <section id="layout-wrapper" className="layout-wrapper ">
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
          <Contact/>
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
