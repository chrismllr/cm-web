const express = require('express')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// function ensureSecure (req, res, next) {
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     // OK, continue
//     return next()
//   };

//   res.redirect('https://' + req.hostname + req.url)
// };

app.prepare()
  .then(_ => {
    const server = express()

    // Redirect to https
    // if (!dev) {
    //   server.all('*', ensureSecure)
    // }

    // serve service worker
    server.get('/sw.js', (req, res) => res.sendFile(path.resolve('./.next/sw.js')))

    server.get('*', (req, res) => handle(req, res))

    server.listen(process.env.PORT || 3000, err => {
      if (err) throw err

      console.log('> App running on port 3000')
    })
  })
