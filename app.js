// - Deployed @ https://simple-app-11-10.herokuapp.com/
// - App name @ simple-app-11-10
/* eslint-disable no-undef */
const express = require('express')
const app = express()

// * Heroku dynamically sets a port
// * When webpack-dev server is run, this file doesn't even used at all, see `webpack.config.js` file.
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// /health and /version are endpoints for testing via CI.
app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
