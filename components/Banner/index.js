import styles from './styles.module.css';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.title}>Solicite seu Plano Aqui</span>
        <input className={styles.input} id='name' placeholder='Seu Nome' />
        <button className={styles.button}>Solicitar Cotação</button>
      </div>
    </div>
  )
}