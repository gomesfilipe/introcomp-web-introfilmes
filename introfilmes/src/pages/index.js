import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Movie } from '../components/Movie'
import { MovieData } from '../components/MovieData'
import { Movies } from '../components/Movies'
import { Title } from '../components/Title'
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
      <Title />
      <Movies />
      <Footer />
    </div>
  )
}
