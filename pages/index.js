import React from 'react'
import Head from 'next/head'
import App from '../layouts/App'

export default () => (
  <div>
    <Head>
      <title>Chris Miller | Web developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Jaldi:400,700|Arvo:400,700|Material+Icons" rel="stylesheet" />
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>

    <App />

    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html {
        height: 100%;
        font-size: 16px;
        min-width: 100%;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      html, body, .container {
        width: 100%;
        height: auto;
        margin: 0;
      }

      body {
        line-height: 1.5;
        overflow-x: hidden;
        background-color: #fcfcfc;
        font-family: "Jaldi", sans-serif;
      }

      h1, h2, h3 {
        font-family: "Arvo", serif;
        margin: 0;
        letter-spacing: .01rem;
        font-weight: 900;
      }

      h4, h5, h6, p {
        font-weight: 400;
        margin: 0;
        letter-spacing: .02rem;
      }

      .container {
        position: relative;
        max-width: 60rem;
        margin: 0 auto;
        padding: 0 1.5rem;
      }
    `}</style>
  </div>
)
