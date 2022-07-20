import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '@components/Header'
const Home: NextPage = () => {
  return (
    <div className={ styles.bg }>
      <Head>
        <title>zhangzr</title>
        <meta name="description" content="zhangzr website" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css" /> */}
        {/* <script src="/live.js"></script> */}
      </Head>
      <Header />
      
    </div>
  )
}

export default Home
