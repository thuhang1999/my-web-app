const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll(params, page = 1, per_page = 10) {
  if (typeof page !== "number") {
    page = Number(page);
  }

  if (typeof per_page !== "number") {
    per_page = Number(per_page);
  }
  return await db.Contact.findAll({
    offset: (page - 1) * per_page,
    limit: per_page * page,
    where: {
      ...params,
    },
    include: [
      {
        model: db.User,
        as: "user",
      },
    ],
  });
}

async function getById(id) {
  return getContact(id);
}

async function getContact(id) {
  const contact = await db.Contact.findByPk(id, {
    include: [
      {
        model: db.User,
        as: "user",
      },
    ],
  });
  if (!contact) throw new Error("Contact not found");
  return contact;
}

async function create(params) {
  const contact = await db.Contact.create(params);
  return contact;
}

async function update(id, params) {
  const contact = await getContact(id);
  await contact.update(params);
  return contact;
}

async function _delete(id) {
  const contact = await getContact(id);
  await contact.destroy();
}
