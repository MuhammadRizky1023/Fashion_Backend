const { Router } = require('express');
const {
  getProduct,
  getAllCategory,
  updateProduct,
  deleteProduct,
  addProduct,
  findProductById
} = require('../controllers/Product');

const { Authorization } = require('../Middleware/Autorization');

const router = Router();

router.get('/', Authorization, getProduct);
router.get('/category', Authorization, getAllCategory)
router.post('/', Authorization, addProduct);
router.get('/:id', Authorization, findProductById)
router.put('/', Authorization, updateProduct);
router.delete('/:id', Authorization, deleteProduct);

module.exports = router;