import { api } from "./api";

export const getUser = async (userId) => {
     const res = await api.get(`/users/find/${userId}`);

     return res.data;
};
