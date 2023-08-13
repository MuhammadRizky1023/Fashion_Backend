const { Product, Category } = require('../database/models');


exports.getProduct = async (req, res, next) => {
  try {
    const products = await Product.findAll({include: 'categories'});
    console.log(products)
    if (!products) {
      throw new Error(`can't get the products`);
    }

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully get product',
      data: products,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCategory = async (req, res, next) => {
  const category = await Category.findAll();

  if (!category) {
    throw new Error(`can't get the categories`);
  }

  return res.status(200).json({
    status: 'success',
    code: 200,
    message: 'successfully retrived data',
    data: category,
  });
};

exports.addProduct = async (req, res, next) => {
  const productData = req.body;

  try {
    const product = await Product.create(productData);

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully add Product',
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.findProductById = async (req, res, next) => {
  try {
      const { id } = req.params
      
      const product = await Product.findByPk(id)

      if (!product) {
          throw new Error('Product with this id not found.')
      }

      return res.status(200).json({
          status: 'Success',
          code: 200,
          message: 'Success get Product by id',
          data: product
      })
  } catch (error) {
      return next(error)
  }
}


exports.updateProduct = async (req, res, next) => {
  const { id, title, description, image, price, stock } = req.body;

  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    product.update({
      title,
      description,
      image,
      price,
      stock,
    });

    product.save();

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully update product',
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    product.destroy();
  } catch (error) {
    console.log(error.message);
  }

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully deleted product',
  });
};
