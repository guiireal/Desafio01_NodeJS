const express = require('express')
const router = express.Router()
const age = require('./controllers/age')

router.get('/', age.index)
router.post('/check', age.check)
router.get('/major', age.major)
router.get('/minor', age.minor)

module.exports = router
