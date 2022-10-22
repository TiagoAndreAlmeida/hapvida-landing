import Image from 'next/image';
import styles from './styles.module.css';

export default function Contact() {
  return (
    <div id='contatos' className={styles.container}>
      <h2 className={styles.title}>Contatos</h2>
      <div className={styles.infors}>
        <span><i class="bi bi-whatsapp"></i> (85) 98655-8765</span>
        <span><i class="bi bi-whatsapp"></i> (85) 98655-8765</span>
        <span><i class="bi bi-envelope"></i> meuemail@mail.com</span>
      </div>

    </div>
  )
}