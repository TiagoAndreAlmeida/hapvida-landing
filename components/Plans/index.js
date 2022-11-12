import { useCallback } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Plans({ data }) {

  const openChat = useCallback((celular, message) => {
    const url = `https://wa.me/${celular}?text=Olá gostaria de saber sobre ${message}`;
    window.open(url, "_blank");
  }, [])

  return (
    <div id="planos" className={styles.container}>
      <h2 className={styles.title}>Planos</h2>

      <div className={styles.plans}>
        {data.map((item) => (
          <div className={styles.card} key={item.id}>
            <div>
              <div style={{ marginBottom: 20 }}>
                <Image
                  src={item.url_imagem}
                  layout="responsive"
                  width={300}
                  height={300} />
              </div>
              <span>a parti de R$ {item.observacao}</span>
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p>
            </div>
            <button 
            onClick={() => openChat(item.celular, item.nome)}
            className={styles.button}>QUERO</button>
          </div>
        ))}
      </div>
    </div>
  )
}