import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Contact from '../components/Home/Contact/Contact'
import Landing from '../components/Home/Landing/Landing'
import Footer from '../components/Home/Footer/Footer'
import Trending from '../components/Home/Trending/Trending'
import Watch from '../components/Watch/Watch'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gold Souk</title>
        <meta name="description" content="Gold Souk" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <Contact />
        <Landing />
        <Trending />
        <div className={styles.background_ring}>
          <Image src="/diamond_ring.png" layout='fill' />
        </div>
        <Watch />
      </main>
      <Footer />
    </div>
  )
}
