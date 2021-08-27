import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function AI_ML() {
    return (
        <div className={styles.container}>
            <Head>
                <title>AI & ML</title>
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
                <h1 className={styles.title}>AI & ML</h1>
            </main>
        </div>
    )
}
