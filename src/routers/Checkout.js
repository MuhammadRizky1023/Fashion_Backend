const { Router } = require('express')
const { Authorization } = require('../Middleware/Autorization')
const router = Router()
const {getCheckout, addCheckout, findCheckoutById, updateCheckout, deleteCheckout} = require('../Controllers/Checkout')
router.get('/', Authorization, getCheckout)
router.get('/:id', Authorization, findCheckoutById)
router.post('/', Authorization, addCheckout)
router.put('/', Authorization, updateCheckout)
router.delete('/', Authorization, deleteCheckout)

module.exports = router