import Head from 'next/head';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Navbar from '../components/Navbar';
import Plans from '../components/Plans';
import provider from '../provider';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  let data = {};
  try {
    const response = await provider.get("/core/tabela", {
      params: { 
        classe: process.env.CLASSE_FAQ, order_by: 'ordem',
        inativo: false
      }
    });
    data.faq = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await provider.get("/core/tabela", {
      params: { 
        classe: process.env.CLASSE_PLANOS, order_by: 'ordem',
        inativo: false
      }
    });
    data.planos = response.data;
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await provider.get("/core/tabela", {
      params: { 
        classe: process.env.CLASSE_BANNERS, order_by: 'ordem',
        inativo: false
      }
    });
    if(response.data[0]) {
      data.banner = response.data[0];
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await provider.get("/core/tabela", {
      params: { 
        classe: process.env.CLASSE_CONFIG,
        inativo: false
      }
    });
    if(response.data[0]) {
      data.config = response.data[0];
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await provider.get("/core/tabela", {
      params: { 
        classe: process.env.CLASSE_CONTATOS,
        inativo: false
      }
    });
    data.contato = response.data;
  } catch (error) {
    console.log(error);
  }
  
  return { props: data }
}

export default function Home({
  faq, planos, banner, config, contato
}) {
  
  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
    </Head>
    <div className={styles.container}>
      <Navbar />
      <Banner data={banner} config={config} />
      <Plans data={planos} />
      <FAQ data={faq}/>
      <Contact data={contato} />
    </div>
  </>

  )
}
