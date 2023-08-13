const { Checkout } = require('../database/models')

exports.getCheckout = async (req, res, next) => {
    try {
        const checkout = await Checkout.findAll();
        console.log(checkout)
        if (!checkout) {
            throw new Error(`can't get the checkout`);
        }
    
        return res.status(200).json({
            status: 'success',
            code: 200,
            message: 'successfully get checkout',
            data: checkout,
        });
    } catch (error) {
        console.log(error.message);
    }
}
exports.addCheckout = async (req, res, next) => {
    const checkoutData = req.body;

    try {
      const checkout = await Checkout.create(checkoutData);
  
      return res.status(201).json({
        status: 'success',
        code: 201,
        message: 'successfully add data',
        data: checkout,
      });
    } catch (error) {
      console.log(error.message);
    }
}

exports.findCheckoutById = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const checkout = await Checkout.findByPk(id)
  
        if (!checkout) {
            throw new Error('Product with this id not found.')
        }
  
        return res.status(200).json({
            status: 'Success',
            code: 200,
            message: 'Success get Product by id',
            data: checkout
        })
    } catch (error) {
        return next(error)
    }
}

exports.updateCheckout = async (req, res, next) => {
    const { id, first_name, last_name,  address, province, city, postal_code } = req.body;

  try {
    const checkout = await Checkout.findOne({
      where: {
        id,
      },
    });

    checkout.update({
      first_name,
      last_name,
      address,
      province,
      city,
      postal_code
    });

    checkout.save();

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully update data',
      data: checkout,
    });
  } catch (error) {
    console.log(error.message);
  }
}

exports.deleteCheckout = async (req, res, next) => {
    const { id } = req.params;

    try {
      const checkout = await Checkout.findByPk(id);
  
      checkout.destroy();
    } catch (error) {
      console.log(error.message);
    }
  
    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully deleted product',
    });
}