import axios from "axios";

export const BASE_URL = "http://localhost:4000";

/**
 *
 * @param {{
 *  type: string | undefined;
 *  order_key: string | undefined;
 *  order_type: 'asc' | 'desc' | undefined;
 *  page: Number | undefined;
 *  per_page: Number | undefined;
 * }} params
 */
export const fetchProducts = (params) => {
  return axios.get(`${BASE_URL}/api/get_products`, {
    params,
  });
};

export const fetchProductTypes = (params) => {
  return axios.get(`${BASE_URL}/api/get_product_type`, {
    params,
  });
};

export const searchProducts = (name) => {
  return axios.get(`${BASE_URL}/api/products/search`, {
    params: {
      name,
    },
  });
};

export const createUserAccount = (userName, userPhone, userPass) => {
  let formData = new FormData();
  formData.append("user_name", userName);
  formData.append("phone", userPhone);
  formData.append("password", userPass);
  return axios({
    method: "post",
    url: `${BASE_URL}/api/user/sign_up`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const createOrderData = async (
  carts,
  customer_id,
  total_price,
  payment_method,
  session,
  address,
  phone
) => {
  let formData = new FormData();
  formData.append("customer_id", customer_id);
  formData.append("total_price", total_price);
  formData.append("phone_number", phone);
  formData.append("address", address);
  formData.append("payment_method", 1);
  carts.forEach((e) => {
    formData.append("list_orders[]", JSON.stringify(e));
  });

  return axios({
    url: `${BASE_URL}/api/orders/create`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const createTestApi = async () => {
  let formData = new FormData();
  formData.append("customer_id", 10);
  formData.append("total_price", 20000);
  formData.append("payment_method", 1);

  formData.append(
    "order_item[]",
    JSON.stringify({
      product_id: 1,
      amount: 1,
      price: 2000,
    })
  );
  formData.append(
    "order_item[]",
    JSON.stringify({
      product_id: 2,
      amount: 1,
      price: 2000,
    })
  );
  formData.append(
    "order_item[]",
    JSON.stringify({
      product_id: 13,
      amount: 1,
      price: 2000,
    })
  );

  console.log("{RNLog} TCL --> call:", `${BASE_URL}/api/test`);
  return axios({
    url: `${BASE_URL}/api/test`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

createTestApi().then((res) => {
  console.log("{RNLog} TCL --> res:", res);
});
