import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const backgroundColor = "#313131"

export default function Home() {
  return (
    <>
      <Head>
        <title>Purdue Hackers GarageHack 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {" "}
        <h1 className={styles.garageHack}> Purdue Hackers GarageHack 2023 </h1>

        
      </main>
    </>
  )
}
