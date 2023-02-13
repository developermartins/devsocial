import { api } from "./api";

export const registerUser = async (data) => {
     const res = await api.post("/auth/register", data);

     return res;
};
