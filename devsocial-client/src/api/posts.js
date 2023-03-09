import { api } from "./api";

export const createPost = async (formData, token) => {

  const res = api.post(`posts`, formData, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const getPosts = async (token) => {
  const res = api.get(`posts`, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const getUserPostsById = async (userId, token) => {
  const res = api.get(`posts/${userId}/posts`, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const likeOrDislikePost = async (userId, postId, token) => {
  const res = api.patch(
    `posts/${postId}/like`, 
    {
      userId: JSON.stringify(userId),
    },
    { 
      headers: { 
        Authorization: `Bearer ${token}`,
      } 
    });

  return res;
};
