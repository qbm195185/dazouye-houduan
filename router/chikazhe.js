const express = require('express')
const router = express.Router()
const chikazheCtrl = require('../controller/chikazhe.js')


// 获取持卡者信息
router.get('/', chikazheCtrl.getall)

// 查询持卡者
router.get('/getone/:use_num', chikazheCtrl.getOne)


// 修改持卡者信息
router.post('/updateChikazhe', chikazheCtrl.updateChikazhe)

// 删除持卡者
router.get('/deleteChikazhe/:use_num',chikazheCtrl.deleteChikazhe)

// 增加持卡者
router.post('/addChikazhe',chikazheCtrl.addChikazhe)

module.exports = router