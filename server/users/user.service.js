/* eslint-disable no-throw-literal */
const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function authenticate({ phone_number, password }) {
  const user = await db.User.scope("withHash").findOne({
    where: { phone_number },
  });

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw "Username or password is incorrect";

  // authentication successful
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "7d" });
  return { ...omitHash(user.get()), token };
}

async function getAll() {
  return await db.User.findAll();
}

async function getById(id) {
  return await getUser(id);
}

async function create(params) {
  // validate
  if (await db.User.findOne({ where: { phone_number: params.phone_number } })) {
    throw "PhoneNumber " + params.phone_number + " is already taken";
  }

  // hash password
  if (params.password) {
    params.password = await bcrypt.hash(params.password, 10);
  }

  // save user
  await db.User.create(params);
}

async function update(id, params) {
  const user = await getUser(id);

  // validate
  const phoneNumberChange =
    params.phone_number && user.phone_number !== params.phone_number;
  if (
    phoneNumberChange &&
    (await db.User.findOne({ where: { username: params.phone_number } }))
  ) {
    throw 'Username "' + params.phone_number + '" is already taken';
  }

  // hash password if it was entered
  if (params.password) {
    params.password = await bcrypt.hash(params.password, 10);
  }

  // copy params to user and save
  Object.assign(user, params);
  await user.save();

  return omitHash(user.get());
}

async function _delete(id) {
  const user = await getUser(id);
  await user.destroy();
}

// helper functions

async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw "User not found";
  return user;
}

function omitHash(user) {
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}
