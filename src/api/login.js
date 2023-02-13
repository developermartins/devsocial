import { api } from "./api";

export const loginUser = async (data) => {
     const res = await api.post("/auth/login", data, {
          withCredentials: true,
     });

     return res;
};
