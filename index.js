const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000
const { sequelize } = require('./src/database/models')

const fileUpload = require('express-fileupload')
const userAuthRoute = require('./src//routers/UserAuth');
const adminAuthRoute = require('./src/routers/AdminAuth');
const productRoute = require('./src/routers/Product');
const uploadRoute = require('./src/routers/Upload');
const CartRoute = require('./src/routers/Cart');
const checkoutRoute = require('./src/routers/Checkout')
app.use(fileUpload({ createParentPath: true }));

app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(cors())


sequelize.authenticate().then(() => {
    console.log(`Success connecting database`)                   
})

app.use('/auth/user', userAuthRoute);
app.use('/auth/admin', adminAuthRoute);
app.use('/product', productRoute);
app.use('/upload', uploadRoute);
app.use('/cart', CartRoute);
app.use('/checkout', checkoutRoute);
app.use((error, req, res, next) => {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Bad Request',
      error: error.message,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
