import axios from "axios";
import { BASE_URL } from "./Api";

export const getAllProduct = (page, per_page) => {
  return axios({
    url: `${BASE_URL}/api/products`,
    method: "get",
    params: {
      page,
      per_page,
    },
  });
};

export const getProductById = (id) => {
  return axios({
    url: `${BASE_URL}/api/products/${id}`,
    method: "get",
  });
};

export const createProduct = (product) => {
  let formData = new FormData();
  Object.keys(product).forEach((key) => {
    formData.append(key, product[key]);
  });

  return axios({
    url: `${BASE_URL}/api/products/create`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateProductById = (id, product) => {
  let formData = new FormData();
  Object.keys(product).forEach((key) => {
    formData.append(key, product[key]);
  });

  return axios({
    url: `${BASE_URL}/api/products/${id}`,
    method: "put",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProductById = (id) => {
  return axios({
    url: `${BASE_URL}/api/products/${id}`,
    method: "delete",
  });
};

export const searchProductsByName = (name) => {
  return axios({
    url: `${BASE_URL}/api/products/search?name=${name}`,
    method: "get",
  });
};

export const getProductByType = (type, page, per_page) => {
  return axios({
    url: `${BASE_URL}/api/products/by_type?type=${type}&page=${page}&per_page=${per_page}`,
    method: "get",
  });
};
