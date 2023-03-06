import { api } from "./api";

export const registerUser = async (data) => {
  const res = api.post('auth/register', data);

  return res;
};