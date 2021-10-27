import Head from 'next/head'
import Footer from './Footer';
import LGPD from './LGPD';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML = {{ __html:  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MNWTGMJ');`}} />
      </Head>
      
      <main>
        <script dangerouslySetInnerHTML = {{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNWTGMJ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {children}
        {/* <LGPD /> */}
        <iframe style={ {display: 'none'} } src="https://go.hotmart.com/O38178035D?ap=d09f"></iframe>
      </main>

      <Footer />
    </>
  )
}