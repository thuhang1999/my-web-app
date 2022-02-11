const config = require("config.json");
const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll(page = 1, per_page = 10) {
  return await db.Order.findAll({
    offset: (page - 1) * per_page,
    limit: per_page * page,
    include: [
      {
        model: db.User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: db.OrderItem,
        as: "order_items",
        include: [
          {
            model: db.Product,
            as: "product",
            attributes: ["product_name", "price", "image", "description"],
          },
        ],
      },
    ],
  });
}

async function getById(id) {
  return getOrder(id);
}

async function getOrder(id) {
  const order = await db.Order.findByPk(id, {
    include: [
      {
        model: db.User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: db.OrderItem,
        as: "order_items",
        include: [
          {
            model: db.Product,
            as: "product",
            attributes: ["product_name", "price", "image", "description"],
          },
        ],
      },
    ],
  });
  // eslint-disable-next-line no-throw-literal
  if (!order) throw "Order not found";
  return order;
}

async function create(params) {
  // save user
  return await db.Order.create(params, {
    include: [
      {
        model: db.OrderItem,
        as: "order_items",
      },
    ],
  });
}

async function update(id, params) {
  const product = await getOrder(id);

  await product.update(params);
  return product;
}

async function _delete(id) {
  const product = await getOrder(id);
  await product.destroy();
}
