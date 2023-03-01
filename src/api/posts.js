import { api } from "./api";

export const getPosts = async (userId) => {
     const res = await api.get(`/posts?userId=${userId}`);

     return res.data;
};

export const addPost = async (newPost) => {
     const res = await api.post("/posts", newPost);

     return res.data;
};