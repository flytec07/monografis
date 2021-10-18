import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Styles from '../styles/LGPD.module.css'

export default function LGPD() {

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
    )
}