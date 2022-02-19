import axios from "axios";
import { BASE_URL } from "./Api";

export const getAll = (page, per_page, query = {}) => {
  return axios({
    url: `${BASE_URL}/api/book-orders`,
    method: "get",
    params: {
      page,
      per_page,
      ...query,
    },
  });
};

export const getById = (id) => {
  return axios({
    url: `${BASE_URL}/api/book-orders/${id}`,
    method: "get",
  });
};

export const update = (id, bookOrder) => {
  return axios({
    url: `${BASE_URL}/api/book-orders/${id}`,
    method: "put",
    data: bookOrder,
  });
};

export const _delete = (id) => {
  return axios({
    url: `${BASE_URL}/api/book-orders/${id}`,
    method: "delete",
  });
};

export const create = (bookOrder) => {
  const { bookItem, ...orderWithoutItem } = bookOrder;
  let formData = new FormData();
  Object.keys(orderWithoutItem).forEach((key) => {
    formData.append(key, orderWithoutItem[key]);
  });
  if (Array.isArray(bookItem)) {
    bookItem.forEach((e) => {
      formData.append("book_items[]", JSON.stringify(e));
    });
  }
  return axios({
    url: `${BASE_URL}/api/book-orders/create`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
