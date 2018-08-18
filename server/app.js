const express = require('express')
const app = express()

app.get('/data', (req, res) => res.send('Welcome to our backend code.'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
