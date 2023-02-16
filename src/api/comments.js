import { api } from "./api";

export const getComments = async (postId) => {
     const res = await api.get(`/comments?postId=${postId}`);

     return res.data;
};
