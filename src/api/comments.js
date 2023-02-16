import { api } from "./api";

export const getComments = async (postId) => {
     const res = await api.get(`/comments?postId=${postId}`);

     return res.data;
};


export const addComment = async (data) => {
     const res = await api.get(`/comments`, data);

     return res.data;
};