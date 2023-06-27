import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WriteProvider } from '../../context/WriteUpContext'


export default function App({ Component, pageProps }: AppProps) {
  return(
    <WriteProvider>
    <Component {...pageProps} />
    </WriteProvider>
  )
}
