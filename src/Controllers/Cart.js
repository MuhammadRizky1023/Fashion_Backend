const { Cart} = require('../database/models')

exports.getCart = async (req, res, next) => {
    try {
        const cart = await Cart.findAll()

        if (!cart) {
            throw new Error(`Cart not found`)
        }

        return res.status(200).json({
            status: 'success',
            code: 200,
            message: 'successfully get Cart',
            data: cart,
        })
        
    } catch (error) {
        return new Error(error.message)
    }

}


exports.findCartById = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const cart = await Cart.findByPk(id)

        if (!cart) {
            throw new Error('Cart with this id not found.')
        }

        return res.status(200).json({
            status: 'Success',
            code: 200,
            message: 'Success get Cart by id',
            data: cart
        })
    } catch (error) {
        return next(error)
    }
}

exports.addCart = async (req, res, next) => {
    const cartProduct = req.body;
  try {
    const cart = await Cart.create(cartProduct);

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully add data',
      data: cart,
    });
    } catch (error) {
        return next(error)
    }
}

exports.updateCart = async (req, res, next) => {
    try {
        const { product } = req
        const {id } = req.body

        const cart = await Cart.findByPk(id)

        if (!cart) {
            throw new Error('Cart with this id not found');
        }

        await Cart.update({
            product_id: product.id,
        }, {
            where: {
                id
            }
        })

        const updateCart = await Cart.findByPk(id)
        
        return res.status(200).json({
            status: 'Successfully',
            code: 200,
            message: 'Successfull to update cart',
            data: updateCart

        })
    } catch (error) {
        return next(error)
    }
}

exports.deleteCart = async (req, res, next) => {
    try {
        const { id } = req.params
        
        await Cart.destroy({
            where: { id },
        })

        return res.status(200).json({
            status: 'Success',
            code: 200,
            message: 'Succcess delete too'
        })
    } catch (error) {
        return next(error)
    }
}