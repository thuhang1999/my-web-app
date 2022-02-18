import axios from "axios";
import { BASE_URL, requestWithToken } from "./Api";

export const getAll = (page, per_page, query = {}) => {
  return axios({
    url: `${BASE_URL}/api/contacts`,
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
    url: `${BASE_URL}/api/contacts/${id}`,
    method: "get",
  });
};

export const create = (contact) => {
  return axios({
    url: `${BASE_URL}/api/contacts/create`,
    method: "post",
    data: contact,
  });
};

export const update = (id, contact) => {
  return axios({
    url: `${BASE_URL}/api/contacts/${id}`,
    method: "put",
    data: contact,
  });
};

export const _delete = (id) => {
  return requestWithToken({
    url: `${BASE_URL}/api/contacts/${id}`,
    method: "delete",
  });
};
