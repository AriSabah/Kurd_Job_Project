import Footer from '../components/UI/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div data-theme="kurdspex">
    <Component {...pageProps} />
    <Footer />
  </div>)
}

export default MyApp
