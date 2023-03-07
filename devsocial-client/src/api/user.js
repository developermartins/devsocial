import { api } from "./api";

export const getUser = async (userId, token) => {
  const res = api.get(`users/${userId}`, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};
