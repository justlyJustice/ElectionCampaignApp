import client from "./client";

const createAspirant = async (aspirant) => client.post("/aspirants", aspirant);

const login = (values) => client.post("/auth/login", values);

const uploadAspirantAvatar = (userId, image) => {
  const formData = new FormData();

  formData.append("file", image);

  client.post(`/aspirants/${userId}/avatar`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default { createAspirant, login, uploadAspirantAvatar };
