import axios from "axios";

export const httpClient = params => {
  return axios.request({
    ...params,
    baseURL: "https://jsonplaceholder.typicode.com"
  });
};
