import Image from 'next/image';
import styles from './styles.module.css';

const _plans = [
  {
    id: 1,
    value: 90,
    title: 'Ambulatorial',
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: "https://hapvidaplanoonline.com.br/assets/img/blog/blog-1.jpg",
    link: "https://google.com.br"
  },
  {
    id: 2,
    value: 90,
    title: 'Ambulatorial',
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: "https://hapvidaplanoonline.com.br/assets/img/blog/blog-1.jpg",
    link: "https://google.com.br"
  },
  {
    id: 3,
    value: 90,
    title: 'Ambulatorial',
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: "https://hapvidaplanoonline.com.br/assets/img/blog/blog-1.jpg",
    link: "https://google.com.br"
  },
  {
    id: 4,
    value: 90,
    title: 'Ambulatorial',
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: "https://hapvidaplanoonline.com.br/assets/img/blog/blog-1.jpg",
    link: "https://google.com.br"
  }
]

export default function Plans() {
  return (
    <div id="planos" className={styles.container}>
      <h2 className={styles.title}>Planos</h2>

      <div className={styles.plans}>
        {_plans.map((item) => (
          <div className={styles.card} key={item.id}>
            <div style={{ marginBottom: 20 }}>
              <Image
                src={item.img}
                layout="responsive"
                width={300}
                height={300} />
            </div>
            <span>a parti de R$ {item.value}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <button className={styles.button}>QUERO</button>
          </div>
        ))}
      </div>
    </div>
  )
}