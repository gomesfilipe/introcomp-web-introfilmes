import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>INTROFILMES</title>
        <meta name="description" content="Projeto iniciante Web para o Introcomp." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        TESTANDO
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
