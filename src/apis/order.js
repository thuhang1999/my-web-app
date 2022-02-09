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
