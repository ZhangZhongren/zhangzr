import '../styles/globals.css'
import 'animate.css'
import 'antd/dist/antd.dark.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
