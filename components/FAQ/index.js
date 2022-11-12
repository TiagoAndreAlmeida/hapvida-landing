import { useState } from "react"

import styles from "./styles.module.css";

export default function FAQ({data}) {
  const [open, setOpen] = useState(null);
  return (
    <div id="duvidas" className={styles.container}>
      <h3 className={styles.title}>Tire Suas Dúvidas</h3>
      <div className={styles.grid}>
        {data.map(q => (
          <div key={q.id} className={styles.card}>
            <header className={styles.header} onClick={() => setOpen(q.id)}>
              <span>{q.nome}</span>
              <span>{open === q.id ? "-" : "+"}</span>
            </header>
            {open === q.id ? <p className={styles.answer}>{q.descricao}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}