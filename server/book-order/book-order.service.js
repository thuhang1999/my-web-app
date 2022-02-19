const bookOrderItemService = require("../book-items/book-item.service");
const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll(params, page = 1, per_page = 10) {
  return await db.BookOrder.findAll({
    offset: (page - 1) * per_page,
    limit: per_page * page,
    where: {
      ...params,
    },
    include: [
      {
        model: db.User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: db.BookOrderItem,
        as: "book_order_items",
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
  const order = await db.BookOrder.findByPk(id, {
    include: [
      {
        model: db.User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: db.BookOrderItem,
        as: "book_order_items",
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
  if (!order) throw new Error("Order not found");
  return order;
}

async function create(params) {
  const order = await db.BookOrder.create(params, {
    include: [
      {
        model: db.BookOrderItem,
        as: "book_order_items",
      },
    ],
  });
  return order;
}

async function update(id, params) {
  const order = await db.BookOrder.findByPk(id);
  if (!order) throw new Error("Order not found");
  await order.update(params);
  return order;
}

async function _delete(id) {
  const order = await db.BookOrder.findByPk(id);
  if (!order) throw new Error("Order not found");
  // await bookOrderItemService.deleteAllByOrderId(id);
  await order.destroy();
}
