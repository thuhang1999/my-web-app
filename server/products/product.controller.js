const express = require("express");
const router = express.Router();
const validateRequest = require("_middleware/validate-request");
const adminAuthorize = require("_middleware/admin-authorize");
const productService = require("./product.service");

//routes
router.get("/by_type", getProductByType);
router.get("/search", searchProductByName);
router.get("/", getAll);
router.get("/:id", getProductById);

router.post("/create", adminAuthorize(), createProduct);

// TODO: require admin authorization
router.put("/:id", updateProductById);
router.delete("/:id", adminAuthorize(), _delete);

function getAll(req, res, next) {
  productService
    .getAll(req.query.page, req.query.per_page)
    .then((products) => {
      res.json({
        status: 200,
        data: products,
        success: true,
      });
    })
    .catch(next);
}

function getProductById(req, res, next) {
  productService
    .getById(req.params.id)
    .then((product) => {
      res.json({
        status: 200,
        data: product,
        success: true,
      });
    })
    .catch(next);
}

function createProduct(req, res, next) {
  productService
    .create(req.body)
    .then(() => {
      res.json({
        data: "Product created successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function updateProductById(req, res, next) {
  productService
    .update(req.params.id, req.body)
    .then(() => {
      res.json({
        data: "Product updated successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function _delete(req, res, next) {
  productService
    .delete(req.params.id)
    .then(() => {
      res.json({
        data: "Product deleted successfully",
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function getProductByType(req, res, next) {
  productService
    .getProductByType(req.query.type, req.query.page, req.query.per_page)
    .then((products) => {
      res.json({
        status: 200,
        data: products,
        success: true,
      });
    })
    .catch(next);
}

function searchProductByName(req, res, next) {
  productService
    .search(req.query.name, req.query.page, req.query.per_page)
    .then((products) => {
      res.json({
        status: 200,
        data: products,
        success: true,
      });
    })
    .catch(next);
}

module.exports = router;
