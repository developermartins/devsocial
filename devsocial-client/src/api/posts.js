import { api } from "./api";

export const getUser = async (formData, token) => {
  const res = api.post(`posts`, formData, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};
