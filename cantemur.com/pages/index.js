import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eren Cantemur's website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <a href="/">Home</a>
        </div>
        <div className={styles.nav}>
          <a href="/tr">Türkçe</a>
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Eren Cantemur's website
        </h1>

        <p className={styles.description}>
          <a href="https://web.itu.edu.tr/cantemur18">Go to my "portfolio".</a>
        </p>

        <div className={styles.grid}>
          <a href="/categories/blockchains" className={styles.card}>
            <h3>Blockchains &rarr;</h3>
            <p>Crypted set of linked blocks which contain information.</p>
          </a>

          <a href="/categories/ai&ml" className={styles.card}>
            <h3>AI / ML &rarr;</h3>
            <p>Tools for virtualization of human brain and learning process.</p>
          </a>

          <a href="/categories/math" className={styles.card}>
            <h3>Math &rarr;</h3>
            <p>Language invented to understand the universe.</p>
          </a>

          <a href="/categories/philosophy" className={styles.card}>
            <h3>Philosophy &rarr;</h3>
            <p>Thoughts on knowledge, reality, existence, and so on.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Built by Eren Cantemur</p>
      </footer>
    </div>
  )
}
