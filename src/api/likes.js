import { api } from "./api";

export const getLikes = async (postId) => {
     const res = await api.get(`/likes?postId=${postId}`);

     return res.data;
};

export const addLike = async (postId) => {
     const res = await api.post(`/likes?postId=${postId}`);

     return res.data;
};

export const removeLike = async (postId) => {

     const res = await api.delete(`/likes?postId=${postId}`);

     return res.data;
};
