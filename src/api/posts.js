import { api } from "./api";

export const getPosts = async () => {
     const res = await api.get("/posts");

     return res.data;
};
