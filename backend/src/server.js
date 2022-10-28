const app = require('./app')
require('dotenv').config()

const baseURL = process.env.API_URL_BASE
const port = process.env.API_PORT

app.listen(port, () => {
  console.log(`${baseURL}:${port}`)
})
