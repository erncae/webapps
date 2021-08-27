import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Philosphy() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Felsefe</title>
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
                <h1 className={styles.title}>Felsefe</h1>
            </main>
        </div>
    )
}
