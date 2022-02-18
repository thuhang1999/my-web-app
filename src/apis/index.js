import * as ApiOther from "./Api";
import * as ApiUser from "./user";
export * as ApiProduct from "./product";
export * as ApiOrder from "./order";
export * as ApiContact from "./contact";
let Api = {
  ...ApiOther,
  ...ApiUser,
};

export default Api;
