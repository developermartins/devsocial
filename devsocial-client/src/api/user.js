import { api } from "./api";

export const getUser = async (id) => {
  const res = api.get(`users/${id}`);

  return res;
};
