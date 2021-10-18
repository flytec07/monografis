import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from '../styles/LGPD.module.css'

export default function LGPD() {

    const [data, setData] = useState(null)
    const [noscript, setNoscript] = useState(null)

    useEffect(() => {

        function cookies(functions) {
            const container = document.querySelector('#lgpdContainer')
            const accept = document.querySelector('#lgpdAccept')
            const refuse = document.querySelector('#lgpdRefuse')

            if(!container || !accept || !refuse) return null
        
            const localPref = JSON.parse(window.localStorage.getItem('lgpd-popup'))
            
            if(localPref) activateFunctions(localPref)
        
            function activateFunctions(pref) {
                pref.forEach((f) => functions[f]()) 
                container.style.display = 'none'
                window.localStorage.setItem('lgpd-popup', JSON.stringify(pref))
            }
        
            accept.onclick = () => {
                activateFunctions(['analytics', 'marketing']) 
            }
            refuse.onclick = () => activateFunctions([]) 
        
        }
        
        function marketing() {
            console.log('Função de marketing');

            setData( `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCZFP3K');` )

            setNoscript(`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCZFP3K"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`)
        }
       
        function analytics() {
            console.log('Função de analytics');
        }
         
        cookies({
            marketing,
            analytics,
        })
    
    }, []) 
     
    return (
        <>
            <Head>
                <script dangerouslySetInnerHTML = {{ __html: data }} />
            </Head>
            
            <noscript dangerouslySetInnerHTML={{ __html: noscript }} />

            <section className={Styles.lgpdContainer} id='lgpdContainer'>
                <div className={Styles.lgpdContent} id='lgpdContent'>  
                    <p>
                        Usamos cookies para personalizar sua experiência. Para saber mais acesse nossa <Link href="https://guiadamonografia.com.br/politica-de-privacidade/">
                            <a>politica de privacidade</a>
                        </Link>
                    </p>                
                    <div>
                        <button className={Styles.lgpdRefuse} id='lgpdRefuse'>Recusar</button>
                        <button className={Styles.lgpdAccept} id='lgpdAccept'>Aceitar</button>
                    </div>
                </div>
            </section>
        </>
    )
}