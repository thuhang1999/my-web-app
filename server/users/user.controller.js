const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");

const userService = require("./user.service");

//routes
router.post("/authenticate", authenticateSchema, authenticate);
router.post("/register", registerSchema, register);
router.get("/", getAll);
router.get("/current", authorize(), getCurrent);
router.get("/:id", getById);
//TODO: add admin authorization
router.put("/:id", updateSchema, update);
// TODO: add admin authorization
router.delete("/:id", _delete);

function authenticateSchema(req, res, next) {
  const schema = Joi.object({
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then((user) =>
      res.json({
        data: user,
        status: 200,
        success: true,
      })
    )
    .catch(next);
}

function registerSchema(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(6).required(),
    phone_number: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(() =>
      res.json({
        data: "Registration successful",
        status: 200,
        success: true,
      })
    )
    .catch(next);
}

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) =>
      res.json({
        status: 200,
        data: users,
        success: true,
      })
    )
    .catch(next);
}

function getCurrent(req, res, next) {
  res.json({
    data: req.user,
    status: 200,
    success: true,
  });
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then((user) =>
      res.json({
        data: user,
        status: 200,
        success: true,
      })
    )
    .catch(next);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().empty(""),
    password: Joi.string().min(6).empty(""),
    phone_number: Joi.string().empty(""),
    address: Joi.string().empty(""),
    is_admin: Joi.boolean().empty(false),
    fraud: Joi.boolean().empty(false),
  });
  validateRequest(req, next, schema);
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then((user) =>
      res.json({
        data: user,
        status: 200,
        success: true,
      })
    )
    .catch(next);
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(() =>
      res.json({
        data: "User deleted successfully",
        success: true,
        status: 200,
      })
    )
    .catch(next);
}

module.exports = router;
