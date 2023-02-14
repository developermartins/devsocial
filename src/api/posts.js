import { api } from "./api";

export const getPosts = async () => {
     const res = await api.get("/posts");

     return res.data;
};

export const addPost = async (newPost) => {
     const res = await api.post("/posts", newPost);

     return res.data;
};