import { api } from "./api";

export const getUser = async (userId) => {
  const res = api.get(`users/${userId}`);

  return res;
};
