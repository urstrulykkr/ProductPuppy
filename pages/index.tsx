import React from 'react'
import Head from 'next/head'
import ProductPuppyLanding from '../components/ProductPuppyLanding'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ProductPuppy</title>
        <meta name="description" content="Search Product Hunt with Context in any language" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductPuppyLanding />
      </main>
    </div>
  )
}