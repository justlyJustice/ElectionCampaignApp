import client from "./client";

const addComment = (userId, message) =>
  client.post(`/api/${userId}/comment`, message);

export default {
  addComment,
};
