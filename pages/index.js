import Head from 'next/head';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Navbar from '../components/Navbar';
import Plans from '../components/Plans';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    </Head>
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <Plans />
      <FAQ />
      <Contact />
    </div>
  </>

  )
}
