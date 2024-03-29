/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutTree } from '@moxy/next-layout'

function App({ Component, pageProps }: AppProps) {
  return <LayoutTree Component={Component} pageProps={pageProps} />
}

export default App
