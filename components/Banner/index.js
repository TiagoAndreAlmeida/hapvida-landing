import { useCallback, useState } from 'react';
import styles from './styles.module.css';

export default function Banner({data, config}) {
  const [message, setMessage] = useState('')

  const openChat = useCallback(() => {
    const url = `https://wa.me/${config.celular}?text=${message}`;
    window.open(url, "_blank");
  }, [message])

  return (
    <div 
    style={{ background: data && data.url_imagem? `url(${data.url_imagem})` : '#a2bd79'}}
    className={styles.container}
    >
      <div 
      className={styles.card}>
        <span className={styles.title}>Solicite seu Plano Aqui</span>
        <input 
        className={styles.input} id='name' placeholder='Seu Nome'
        onChange={({target}) => setMessage(target.value)} />
        <button onClick={openChat} className={styles.button}>Solicitar Cotação</button>
      </div>
    </div>
  )
}