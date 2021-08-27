import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Philosphy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Philosophy</title>
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
                <h1 className={styles.title}>Philosophy</h1>
            </main>
        </div>
    )
}
