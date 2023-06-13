const express = require('express')
const router = express.Router()
const {getNews, getID, getNewsbyid} = require('../controllers/newscontroller')

router.route('/').get(getNews)
router.route('/:id').get(getID,getNewsbyid)


module.exports = router