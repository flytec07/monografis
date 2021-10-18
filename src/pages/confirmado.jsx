import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import LGPD from '../components/LGPD'
import logo from '/public/img/logo-monografis-570x112.png'
import perfil from '/public/img/douglas-tybel-perfil-2-600x600.png'
import styles from '../styles/Confirmado.module.css'
import { useState, useEffect, useRef } from 'react'

export default function Home() {

  return (
    <>
      <Head>
        <title>Monografis - Obrigado</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-monografis-128x128.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        
      </Head>

      <main className={styles.main}>
          <section className={styles.confirm}>
            
            <div>
                <Image src={logo} alt='Logo do monografis' width={250} height={50}/>
            </div>

            <h1>OBRIGADO POR SE CADASTRAR!</h1>

            <h2>Conheça o Monografis 3.0</h2>
            
            <p>Orientador de TCC do Futuro. Ferramenta inovadora, desenvolvida por professores de banca, capaz de agilizar a escrita do seu TCC, Monografia, artigo, dissertação e Tese!</p>
            <Link href='https://monografis.com.br/'>
                <button className={styles.btn} id='btn3'>SAIBA MAIS CLICANDO AQUI</button>
            </Link>
        
            <h2>Começou!</h2>

            <p>Acabei de liberar a Aula 1 do Workshop da Semana da TCC.</p>

            <p>E nessa 1ª aula eu ensino que é possível fazer um TCC, MONOGRAFIA, DISSERTAÇÃO, ARTIGO OU TESE com a mínima probabilidade de erros, seguindo um método que vai te dar clareza na hora de escrever e apresentar os resultados.</p>

            <Link href='https://semanadotcc.com.br/?blog=2azfemg6v&video=2r65c91m4'>
                <button className={styles.btn} id='btn3'>ASSISTA A PRIMEIRA AULA AGORA</button>
            </Link>

          </section>
        
        <LGPD />

        <iframe style={ {display: 'none'} } src="https://go.hotmart.com/O38178035D?ap=c3fc"></iframe>
      </main>

      <footer>
        <p>Todos os direitos reservados - Guia da Monografia</p>

        <p>
          <Link href='https://guiadamonografia.com.br/termos-de-uso/'>
            <a>TERMOS DE USO</a>
          </Link> • <Link href='https://guiadamonografia.com.br/politica-de-privacidade/'>
            <a>POLÍTICA DE PRIVACIDADE</a>
          </Link>
        </p>
      </footer>
      
    </>
  )
}
