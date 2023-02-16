import { api } from "./api";

export const uploadFile = async (data) => {
     const res = await api.post("/upload", data);

     return res;
};
