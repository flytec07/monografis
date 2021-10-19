import Footer from './Footer';
import LGPD from './LGPD';

export default function Layout({ children }) {
  return (
    <>
      <main>
        {children}
        <LGPD />
        <iframe style={ {display: 'none'} } src="https://go.hotmart.com/O38178035D?ap=d09f"></iframe>
      </main>
      <Footer />
    </>
  )
}