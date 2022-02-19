const express = require("express");
const router = express.Router();
const validateRequest = require("_middleware/validate-request");
const adminAuthorize = require("_middleware/admin-authorize");
const orderService = require("./book-order.service");
const orderItemService = require("../book-items/book-item.service");

//Routes
router.get("/", getAll);
router.get("/:id", getOrderById);
router.post("/create", createOrder);
router.put("/:id", updateOrderById);
router.delete("/:id", _delete);

function getAll(req, res, next) {
  const { page, per_page, ...otherParams } = req.query;
  orderService
    .getAll(otherParams, page, per_page)
    .then((orders) => {
      res.json({ status: 200, data: orders, success: true });
    })
    .catch(next);
}

function getOrderById(req, res, next) {
  orderService
    .getById(req.params.id)
    .then((order) => {
      res.json({ status: 200, data: order, success: true });
    })
    .catch(next);
}

function createOrder(req, res, next) {
  let bookItems = req.params.book_items;
  const { book_items, ...dataWithoutBookItems } = req.body;
  let book_order_items = [];
  if (Array.isArray(bookItems)) {
    book_order_items = bookItems.map((e) => JSON.parse(e));
  }

  let params = {
    ...dataWithoutBookItems,
    book_order_items,
  };

  orderService
    .create(params)
    .then((order) => {
      res.json({
        data: order,
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function updateOrderById(req, res, next) {
  orderService
    .update(req.params.id, req.body)
    .then((order) => {
      let orderItems = req.body["book_items"];
      let orderItemsParsed = [];
      if (Array.isArray(orderItems)) {
        orderItemsParsed = orderItems.map((e) => JSON.parse(e));
      }

      // not exists order item id ==> create order item
      let neededCreateOrderItem = orderItemsParsed.filter((e) => !e.id);

      // exists order item id ==> update order item
      let neededUpdateOrderItem = orderItemsParsed.filter((e) => !!e.id);

      // check if order was not in order_item body, delete them;
      let neededDeleteOrderItem = [];
      if (Array.isArray(order.book_order_items)) {
        order.dataValues.order_items.forEach((e) => {
          // not found
          if (orderItemsParsed.findIndex((e2) => e2.id === e.id) === -1) {
            neededDeleteOrderItem.push(e);
          }
        });
      }

      Promise.all([
        ...neededCreateOrderItem.map((e) => orderItemService.create(e)),
        ...neededDeleteOrderItem.map((e) => orderItemService.delete(e.id)),
        ...neededUpdateOrderItem.map((e) => orderItemService.update(e.id, e)),
      ])
        .then((values) => {
          res.json({
            data: "Order updated successfully",
            status: 200,
            success: true,
          });
        })
        .catch(next);
    })
    .catch(next);
}

function _delete(req, res, next) {
  orderService.delete(req.params.id).then(() => {
    res.json({
      data: "Order deleted successfully",
      status: 200,
    });
  });
}

module.exports = router;
