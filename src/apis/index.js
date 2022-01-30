import * as ApiOther from "./Api";
import * as ApiUser from "./user";
let Api = {
  ...ApiOther,
  ...ApiUser,
};
export default Api;
