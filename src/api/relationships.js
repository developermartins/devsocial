import { api } from "./api";

export const getRelationships = async (userId) => {
     const res = await api.get(`/relationships?followedUserId=${userId}`);

     return res.data;
};

export const addRelationship = async (userId) => {
     const res = await api.post(`/relationships?userId=${userId}`);

     return res.data;
};

export const deleteRelationship = async (userId) => {

     const res = await api.delete(`/relationships?userId=${userId}`);

     return res.data;
};
