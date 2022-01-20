import axios from "axios";

const BASE_URL = "http://localhost:4000";

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
