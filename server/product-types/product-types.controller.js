const express = require("express");
const router = express.Router();
const adminAuthorize = require("_middleware/admin-authorize");
const productTypeService = require("./product-types.service");

// routes
router.get("/", getAll);
router.get("/:id", getById);
router.post("/create", adminAuthorize(), create);
router.put("/:id", adminAuthorize(), update);
router.delete("/:id", adminAuthorize(), _delete);

function getAll(req, res, next) {
  productTypeService
    .getAll()
    .then((productTypes) => {
      res.json({
        status: 200,
        data: productTypes,
        success: true,
      });
    })
    .catch(next);
}

function getById(req, res, next) {
  productTypeService
    .getById(req.params.id)
    .then((productType) => {
      res.json({
        status: 200,
        data: productType,
        success: true,
      });
    })
    .catch(next);
}

function create(req, res, next) {
  productTypeService
    .create(req.body)
    .then(() => {
      res.json({
        data: "Product type created successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function update(req, res, next) {
  productTypeService
    .update(req.params.id, req.body)
    .then(() => {
      res.json({
        data: "Product type updated successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function _delete(req, res, next) {
  productTypeService
    .delete(req.params.id)
    .then(() => {
      res.json({
        data: "Product type deleted successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

module.exports = router;
