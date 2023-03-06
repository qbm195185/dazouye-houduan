const express = require('express')
const router = express.Router()
const historyctrl = require('../controller/history')
const auth = require('../middleware/auth')

// getall
router.get('/', auth, historyctrl.getall)

//getone
router.get('/getone/:id', historyctrl.getone)


//addone
router.post('/addone', historyctrl.addone)

module.exports = router