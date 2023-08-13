const { Router } = require('express')


const { Authorization } = require('../Middleware/Autorization');

const router = Router()

const { addCart, updateCart, deleteCart, getCart, findCartById } = require('../Controllers/Cart')
    ;
router.get('/', Authorization, getCart)
router.get('/:id', Authorization, findCartById);
router.post('/', Authorization, addCart);
router.put('/:id', Authorization, updateCart);
router.delete('/:id', Authorization, deleteCart);
module.exports = router