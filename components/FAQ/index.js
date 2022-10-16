import { useState } from "react"

import styles from "./styles.module.css";
const _mock = [
  {
    id: 1,
    question: "What is Lorem Ipsum ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    question: "What is Lorem Ipsum ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    question: "What is Lorem Ipsum ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 4,
    question: "What is Lorem Ipsum ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 5,
    question: "What is Lorem Ipsum ?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div id="duvidas" className={styles.container}>
      <h3 className={styles.title}>Tire Suas Dúvidas</h3>
      <div className={styles.grid}>
        {_mock.map(q => (
          <div key={q.id} className={styles.card}>
            <header className={styles.header} onClick={() => setOpen(q.id)}>
              <span>{q.question}</span>
              <span>{open === q.id ? "-" : "+"}</span>
            </header>
            {open === q.id ? <p className={styles.answer}>{q.answer}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}