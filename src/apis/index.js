import * as ApiOther from "./Api";
import * as ApiUser from "./user";
export * as ApiProduct from "./product";
export * as ApiOrder from "./order";
let Api = {
  ...ApiOther,
  ...ApiUser,
};

export default Api;
