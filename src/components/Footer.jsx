import Link from 'next/link'
import Styles from '../styles/Footer.module.css'

export default function Footer() {

    return (
        <footer className={Styles.footer}>
            <p>Todos os direitos reservados - Guia da Monografia</p>

            <p>
            <Link href='https://guiadamonografia.com.br/termos-de-uso/'>
                <a>TERMOS DE USO</a>
            </Link> • <Link href='https://guiadamonografia.com.br/politica-de-privacidade/'>
                <a>POLÍTICA DE PRIVACIDADE</a>
            </Link>
            </p>
        </footer>
    )
}