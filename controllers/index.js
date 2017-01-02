const express = require('express') //im lazy sorry
const index = express.Router()

index.get('/', (req, res) => {
  res.render('index')
})
module.exports = index
