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
router.put("/:id", adminAuthorize(), updateOrderById);
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
  orderService
    .create(req.body)
    .then((order) => {
      let orderItems = req.body["list_orders"];
      console.log(
        `{RNLog} ~ file: order.controller.js ~ line 38 ~ .then ~ orderItems`,
        orderItems
      );
      let orderItemsWithOrderId = [];
      if (Array.isArray(orderItems)) {
        orderItemsWithOrderId = orderItems.map((e) => ({
          ...JSON.parse(e),
          order_id: order.dataValues.order_id,
        }));
      }
      orderItemService.bulkCreate(orderItemsWithOrderId).then(() => {
        res.json({
          data: "Order created successfully",
          status: 200,
          success: true,
        });
      });
    })
    .catch(next);
}

function updateOrderById(req, res, next) {
  orderService
    .update(req.params.id, req.body)
    .then(() => {
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
