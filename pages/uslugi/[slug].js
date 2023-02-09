import fs from "fs/promises";
import path from "path";
import React from "react";
import Head from "next/head";
import Image from "next/image";

import ServiceDetail from "../../components/ServiceDetails/ServiceDetail";
import Contact from "../../components/Contact"
const ServicePage = ({ loadedService }) => {
 

  return (
    <>
      <Head>
        <title>{`Usługi stolarskie - ${loadedService.title}`} </title>
        <meta
          name="description"
          content="Blog o tematyce stolarskiej, znajdziesz tutaj porady isnpiracje oraz solidną dawkę wiedzy"
        />
      </Head>
      <main>
        <ServiceDetail service={loadedService}/>
        <Contact />
      </main>
    </>
  );
};

export default ServicePage;

export async function getStaticProps(context) {
  const { params } = context;

  const serviceSlug = params.slug;

  const filePath = path.join(process.cwd(), "data", "services.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const service = data.services.find((service) => service.slug === serviceSlug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      loadedService: service,
    },
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "services.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const slugs = data.services.map((service) => service.slug);
  const pathsWithParams = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}