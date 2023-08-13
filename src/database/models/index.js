const sequelize = require('../connection');
const UserAddress = require('./UserAddress.js');
const UserType = require('./UserType');
const Category = require('./Category');
const User = require('../../../../User');
const Product = require('./Product');
const Checkout = require('./Checkout');
const Cart = require('./Cart');
UserType.hasMany(User, {
    foreignKey: 'user_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.belongsTo(UserType, {
    foreignKey: 'user_type_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'categories',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.hasOne(UserAddress, {
    foreignKey: 'user_id',
  });
  
  UserAddress.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  Product.hasMany(Checkout, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Checkout.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  Cart.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  
  Product.hasMany(Cart, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  
  
  module.exports = {
    sequelize,
    User,
    UserType,
    Category,
    Product,
    Cart,
    Checkout,
    UserAddress,

  };
  

