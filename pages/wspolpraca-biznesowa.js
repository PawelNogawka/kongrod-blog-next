import React from 'react'
import Head from 'next/head'

import Contact from '../components/Contact'
import Banner from '../components/Banner'
import BusinessFeatures from '../components/B2b/BusinessFeatures'

const B2bPage = () => {
  return (
    <>
    <Head>
        <title>Kongrod - Wpsółpraca biznesowa | B2B</title>
        <meta name="description" content="Blog o tematyce stolarskiej, znajdziesz tutaj porady isnpiracje oraz solidną dawkę wiedzy" />
      </Head>
      <Banner title="kongrod - wpółpraca biznesowa" subtitle="podejmij z nami współpracę" link="#about-b2b" btnText="czytaj więcej" direct="b2b" />
      
    <main>
    <BusinessFeatures />
    </main>
      <Contact/>
    </>
  )
}

export default B2bPage
