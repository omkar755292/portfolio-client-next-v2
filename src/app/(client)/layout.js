"use client"

import { Provider } from 'react-redux'
import Header from './_lib/components/Header'
import './_lib/styles/globals.css'
import store from '../redux/store'


export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Omkar Panchal | FullStack Developer</title>
          <meta name="description" content="Welcome to Omkar Panchal’s personal website. Explore my portfolio, projects, and blogs to learn more about my work and achievements." />
          <link rel="icon" href="/favicon.png" />
        </head>
        <body>
          <Header />
          {children}
        </body>

      </html>
    </Provider>
  )
}
