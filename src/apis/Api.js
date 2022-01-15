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
