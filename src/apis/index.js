import * as ApiOther from "./Api";
import * as ApiUser from "./user";
export * as ApiProduct from "./product";
let Api = {
  ...ApiOther,
  ...ApiUser,
};

export default Api;
