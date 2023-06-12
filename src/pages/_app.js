import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sai Seva Samithi | Home</title>
      </Head>

      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </>
  )
}
