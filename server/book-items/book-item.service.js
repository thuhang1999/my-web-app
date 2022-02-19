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

async function get(orderId) {
  return getBookOrderItem(orderId);
}

async function getBookOrderItem(orderId) {
  const bookOrderItem = await db.BookOrderItem.findByPk(orderId);
  // eslint-disable-next-line no-throw-literal
  if (!bookOrderItem) throw "Book Order Item not found";
  return bookOrderItem;
}

async function getAll(orderId) {
  return await db.BookOrderItem.findAll({
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
    book_order_id: Joi.number().required(),
    product_id: Joi.number().required(),
    amount: Joi.number().required(),
  });
  const { value, error } = schema.validate(orderItem);
  if (error) {
    throw `Validation error: ${error.details.map((x) => x.message).join(", ")}`;
  }
  return await db.BookOrderItem.create(value);
}

async function bulkCreate(orderItems) {
  return await db.BookOrderItem.bulkCreate(orderItems);
}

async function update(orderItemId, orderItem) {
  const orderItemNeededUpdate = await getBookOrderItem(orderItemId);
  const { value, error } = Joi.object({
    book_order_id: Joi.number().required(),
    product_id: Joi.number().required(),
    amount: Joi.number().required(),
  }).validate(orderItem);
  if (error) {
    throw `Validation error: ${error.details.map((x) => x.message).join(", ")}`;
  }
  return await orderItemNeededUpdate.update(value);
}

async function _delete(orderItemId) {
  const orderItem = await getBookOrderItem(orderItemId);
  await orderItem.destroy();
}

async function deleteAllByOrderId(orderId) {
  // not works
  if (typeof orderId !== "number") {
    orderId = Number(orderId);
  }
  db.BookOrderItem.destroy({
    where: {
      book_order_id: orderId,
    },
  });
}
