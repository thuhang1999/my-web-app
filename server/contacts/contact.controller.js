const express = require("express");
const router = express.Router();

const validateRequest = require("_middleware/validate-request");
const adminAuthorize = require("_middleware/admin-authorize");
const contactService = require("./contact.service");

// routers
router.get("/", getAll);
router.get("/:id", getContactById);
router.post("/create", createContact);
router.put("/:id", updateContactById);
router.delete("/:id", adminAuthorize(), _delete);

function getAll(req, res, next) {
  const { page, per_page, ...otherParams } = req.query;
  contactService
    .getAll(otherParams, page, per_page)
    .then((contacts) => {
      res.json({ status: 200, data: contacts, success: true });
    })
    .catch(next);
}

function getContactById(req, res, next) {
  contactService
    .getById(req.params.id)
    .then((contact) => {
      res.json({ status: 200, data: contact, success: true });
    })
    .catch(next);
}

function createContact(req, res, next) {
  const data = req.body;
  contactService
    .create(data)
    .then((contact) => {
      res.json({
        data: contact,
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function updateContactById(req, res, next) {
  const data = req.body;
  contactService
    .update(req.params.id, data)
    .then((contact) => {
      res.json({
        data: contact,
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

function _delete(req, res, next) {
  contactService
    .delete(req.params.id)
    .then((contact) => {
      res.json({
        data: contact,
        status: 200,
        success: true,
      });
    })
    .catch(next);
}

module.exports = router;
