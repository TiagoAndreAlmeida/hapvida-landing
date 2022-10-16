import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <FAQ />
    </div>
  )
}
