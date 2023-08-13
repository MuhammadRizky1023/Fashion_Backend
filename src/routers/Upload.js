const { Router } = require('express')
const { upload } = require('../Controllers/Upload')
const {Authorization} = require('../Middleware/Autorization')
const router = Router()

router.post('/', Authorization, upload)

module.exports = router