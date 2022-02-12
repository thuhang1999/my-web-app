const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.ProductType.findAll();
}

async function getById(id) {
  return await getProductType(id);
}

async function getProductType(id) {
  const productType = await db.ProductType.findByPk(id);
  // eslint-disable-next-line no-throw-literal
  if (!productType) throw "Product type not found";
  return productType;
}

async function create(params) {
  if (
    await db.ProductType.findOne({
      where: { product_type_name: params.product_type_name },
    })
  ) {
    // eslint-disable-next-line no-throw-literal
    throw "Product type name " + params.product_type_name + " is already taken";
  }

  await db.ProductType.create(params);
}

async function update(id, params) {
  const productType = await getProductType(id);
  // save data;
  await productType.update(params);
}

async function _delete(id) {
  const productType = await getProductType(id);
  await productType.destroy();
}
