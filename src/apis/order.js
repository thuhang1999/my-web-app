import axios from "axios";
import { BASE_URL } from "./Api";

export const getAllOrders = (page, per_page) => {
  return axios({
    url: `${BASE_URL}/api/orders`,
    method: "get",
    params: {
      page,
      per_page,
    },
  });
};

export const getOrderById = (id, page, per_page) => {
  return axios({
    url: `${BASE_URL}/api/orders/${id}`,
    method: "get",
  });
};

export const updateOrderById = (id, order) => {
  return axios({
    url: `${BASE_URL}/api/orders/${id}`,
    method: "put",
    data: order,
  });
};

export const deleteOrderById = (id) => {
  return axios({
    url: `${BASE_URL}/api/orders/${id}`,
    method: "delete",
  });
};

export const createOrder = (objects) => {
  const { customer_id, total_price, phone, address, payment_method, carts } =
    objects;
  let formData = new FormData();
  if (customer_id) {
    formData.append("customer_id", customer_id);
  }
  formData.append("total_price", total_price);
  formData.append("phone_number", phone);
  formData.append("address", address);
  formData.append("payment_method", payment_method);
  carts.forEach((e) => {
    formData.append("order_item[]", JSON.stringify(e));
  });
  return axios({
    url: `${BASE_URL}/api/orders/create`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
