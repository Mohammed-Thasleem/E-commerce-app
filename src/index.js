const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('../routes/admin/auth');
const adminProductsRouter = require('../routes/admin/products');
const productsRouter = require('../routes/products');
const cartsRouter = require('../routes/carts');

const serverless = require("serverless-http");


const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['lkasld235j']
  })
);
app.use(`/.netlify/functions/index`, authRouter);
app.use(`/.netlify/functions/index`, productsRouter);
app.use(`/.netlify/functions/index`, adminProductsRouter);
app.use(`/.netlify/functions/index`, cartsRouter);

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app;
module.exports.handler = serverless(app);
