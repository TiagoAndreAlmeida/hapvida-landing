import styles from './styles.module.css';

export default function Contact({ data }) {
  return (
    <div id='contatos' className={styles.container}>
      <h2 className={styles.title}>Contatos</h2>
      <div className={styles.infors}>
        {data.map((item) => {
          return <span key={item.id}><i className="bi bi-whatsapp"></i> {item.nome}</span>  
        })}
      </div>

    </div>
  )
}