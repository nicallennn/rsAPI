exports.getProduct = (req, res) => {
  console.log(req.params.stock_number);
  res.status(200).send('get product');
}

exports.addProduct = (req, res) => {
  console.log(req.body);
  res.status(200).send('add product');
}

exports.updateProduct = (req, res) => {
  console.log(req.params.stock_number);
  console.log(req.body);
  res.status(200).send('update product');
}