import axios from "axios";
import { BASE_URL } from "./Api";

export const login = (phone_number, password) => {
  let formData = new FormData();
  formData.append("phone_number", phone_number);
  formData.append("password", password);

  return axios({
    url: `${BASE_URL}/api/users/authenticate`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const register = (username, phone_number, password) => {
  let formData = new FormData();
  formData.append("username", username);
  formData.append("phone_number", phone_number);
  formData.append("password", password);

  return axios({
    url: `${BASE_URL}/api/users/register`,
    method: "post",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getAllUser = () => {
  return axios({
    url: `${BASE_URL}/api/users/`,
    method: "get",
  });
};

export const getCurrentUser = (token) => {
  return axios({
    url: `${BASE_URL}/api/users/current`,
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getUserById = (id) => {
  return axios({
    url: `${BASE_URL}/api/users/${id}`,
    method: "get",
  });
};

export const updateUserById = (updateObject, id) => {
  let formData = new FormData();
  formData.append("username", updateObject.username);
  formData.append("password", updateObject.password);
  formData.append("phone_number", updateObject.phone_number);
  formData.append("address", updateObject.address);

  return axios({
    url: `${BASE_URL}/api/users/${id}`,
    data: formData,
    method: "put",
  });
};

export const _deleteUserById = (id) => {
  return axios({
    url: `${BASE_URL}/api/users/${id}`,
    method: "delete",
  });
};
