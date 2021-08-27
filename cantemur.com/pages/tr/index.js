import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eren Cantemur'un web sayfası</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <a href="/tr">Ana Sayfa</a>
        </div>
        <div className={styles.nav}>
          <a href="/">English</a>
        </div>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Eren Cantemur'un web sayfası
        </h1>

        <p className={styles.description}>
          <a href="https://web.itu.edu.tr/cantemur18">Portfolyoma git.</a>
        </p>

        <div className={styles.grid}>
          <a href="tr/kategoriler/blokzincirler" className={styles.card}>
            <h3>Blokzincirler &rarr;</h3>
            <p>Şifrelenmiş bilgi tutan bloklardan oluşan liste.</p>
          </a>

          <a href="tr/kategoriler/yapayzeka" className={styles.card}>
            <h3>Yapay Zeka &rarr;</h3>
            <p>İnsan beynini ve öğrenme sürecini sanallaştırma aracı.</p>
          </a>

          <a href="tr/kategoriler/matematik" className={styles.card}>
            <h3>Matematik &rarr;</h3>
            <p>Evreni anlamak ve anlatmak için kullandığımız dil.</p>
          </a>

          <a href="tr/kategoriler/yapayzeka" className={styles.card}>
            <h3>Felsefe &rarr;</h3>
            <p>Bilgi, gerçeklik, varoluş vs. hakkındaki düşünceler.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Eren Cantemur tarafından geliştirildi.</p>
      </footer>
    </div>
  )
}
