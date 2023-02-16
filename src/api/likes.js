import { api } from "./api";

export const getLikes = async (postId) => {
     const res = await api.get(`/likes?postId=${postId}`);

     return res.data;
};
