/* eslint-disable no-throw-literal */
const Joi = require("joi");
const db = require("_helpers/db");

module.exports = {
  get,
  getAll,
  create,
  bulkCreate,
  update,
  delete: _delete,
  deleteAllByOrderId,
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
  let schema = Joi.object({
    order_id: Joi.number().required(),
    product_id: Joi.number().required(),
    amount: Joi.number().required(),
  });

  const { value, error } = schema.validate(orderItem);
  if (error) {
    throw `Validation error: ${error.details.map((x) => x.message).join(", ")}`;
  }

  return await db.OrderItem.create(value);
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

async function deleteAllByOrderId(orderId) {
  db.OrderItem.destroy({
    where: { order_id: orderId },
  });
}
