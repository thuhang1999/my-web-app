const express = require("express");
const router = express.Router();
const validateRequest = require("_middleware/validate-request");
const adminAuthorize = require("_middleware/admin-authorize");
const orderService = require("./order.service");
const orderItemService = require("../order-items/order-item.service");

//routes
router.get("/", getAll);
router.get("/:id", getOrderById);
router.post("/create", createOrder);
//TODO: requre admin authorization
router.put("/:id", updateOrderById);
router.delete("/:id", adminAuthorize(), _delete);

function getAll(req, res, next) {
  orderService
    .getAll(req.query.page, req.query.per_page)
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
  let carts = req.body["order_item"];
  const { order_item, ...dataWithoutOrderItem } = req.body;
  let order_items = [];
  if (Array.isArray(carts)) {
    order_items = carts.map((e) => JSON.parse(e));
  }

  let params = {
    ...dataWithoutOrderItem,
    order_items,
  };
  console.log("{RNLog} TCL --> params:", params);

  orderService
    .create(params)
    .then((order) => {
      res.json({
        data: "Order created successfully",
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
      console.log(
        `{RNLog} ~ file: order.controller.js ~ line 64 ~ .then ~ order`,
        order.dataValues
      );
      let orderItems = req.body["order_item"];
      let orderItemsParsed = [];
      if (Array.isArray(orderItems)) {
        orderItemsParsed = orderItems.map((e) => JSON.parse(e));
      }

      // exists order item id ==> update order item
      orderItemsParsed
        .filter((e) => !!e.id)
        .forEach((e) => {
          orderItemService.update(e.id, e);
        });

      // not exists order item id ==> create order item
      orderItemsParsed
        .filter((e) => !e.id)
        .forEach((e) => {
          orderItemService.create(e);
        });

      // check if order was not in order_item body, delete them;
      order.dataValues.order_items.forEach((e) => {
        // not found
        if (orderItemsParsed.findIndex((e2) => e2.id === e.id) === -1) {
          console.log("{RNLog} TCL --> id:", e.id);
          orderItemService.delete(e.id);
        }
      });

      res.json({
        data: "Order updated successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function _delete(req, res, next) {
  orderService.delete(req.params.id).then(() => {
    res.json({
      data: "Order deleted successfully",
      status: 200,
      success: true,
    });
  });
}

module.exports = router;
