import { axiosClient } from "./axiosinstance";

export function getRequest(URL) {
  return axiosClient.get(`${URL}`).then((response) => response);
}
