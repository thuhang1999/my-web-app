const db = require("_helpers/db");

module.exports = {
  get,
  getAll,
  create,
  bulkCreate,
  update,
  delete: _delete,
};

async function get(orderItemId) {
  return getOrderItem(orderItemId);
}

async function getAll(orderId) {
  return await db.OrderItem.findAll({
    where: {
      order_id: orderId,
    },
    include: [
      {
        model: db.Product,
        as: "product",
      },
    ],
  });
}

async function create(orderItem) {
  return await db.OrderItem.create(orderItem);
}

async function bulkCreate(orderItems) {
  return await db.OrderItem.bulkCreate(orderItems);
}

async function getOrderItem(orderItemId) {
  const orderItem = await db.OrderItem.findByPk(orderItemId);
  // eslint-disable-next-line no-throw-literal
  if (!orderItem) throw "Order Item not found";
  return orderItem;
}

async function update(orderItemId, orderItem) {
  const orderItemNeededUpdate = await getOrderItem(orderItemId);
  await orderItemNeededUpdate.update(orderItem);
}

async function _delete(orderItemId) {
  const orderItem = await getOrderItem(orderItemId);

  await orderItem.destroy();
}
