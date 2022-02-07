const config = require("config.json");
const db = require("_helpers/db");
const { Op } = require("sequelize");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
  getProductByType,
  search,
};

async function getAll(page = 1, per_page = 10) {
  return await db.Product.findAll({
    offset: (page - 1) * per_page,
    limit: per_page * page,
  });
}

async function getById(id) {
  return await getProduct(id);
}

async function getProduct(id) {
  const product = await db.Product.findByPk(id);
  // eslint-disable-next-line no-throw-literal
  if (!product) throw "Product not found";
  return product;
}

async function create(params) {
  // validate
  if (
    await db.Product.findOne({ where: { product_name: params.product_name } })
  ) {
    // eslint-disable-next-line no-throw-literal
    throw "Product name " + params.product_name + " is already taken";
  }

  // save user
  await db.Product.create(params);
}

async function update(id, params) {
  const product = await getProduct(id);

  // validate
  const productNameChanged =
    params.product_name && product.product_name !== params.product_name;
  if (
    productNameChanged &&
    (await db.Product.findOne({ where: { product_name: params.product_name } }))
  ) {
    // eslint-disable-next-line no-throw-literal
    throw "Product name " + params.product_name + " is already taken";
  }

  // save user
  await product.update(params);
}

async function _delete(id) {
  const product = await getProduct(id);
  await product.destroy();
}

async function getProductByType(type, page = 1, per_page = 10) {
  const product = await db.Product.findAll({
    where: { product_type: type },
    offset: (page - 1) * per_page,
    limit: per_page * page,
  });
  // eslint-disable-next-line no-throw-literal
  if (!product) throw "Product not found";
  return product;
}

async function search(name, page = 1, per_page = 10) {
  const product = await db.Product.findAll({
    where: { product_name: { [Op.like]: `%${name}%` } },
    offset: (page - 1) * per_page,
    limit: per_page * page,
  });
  // eslint-disable-next-line no-throw-literal
  if (!product) throw "Product not found";
  return product;
}
