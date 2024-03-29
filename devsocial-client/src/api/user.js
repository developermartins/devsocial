import { api } from "./api";

export const getUser = async (userId, token) => {
  const res = api.get(`users/${userId}`, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const addRemoveFriend = async (userId, friendId, token) => {
  const res = api.patch(`users/${userId}/${friendId}`, '', { headers: { Authorization: `Bearer ${token}` } });

  return res;
};

export const getUserFriends = async (userId, token) => {
  const res = api.get(`users/${userId}/friends`, { headers: { Authorization: `Bearer ${token}` } });

  return res;
};
