import client from "./client";

const registerAspirant = (aspirantInfo, onUploadProgress) =>
  client.post("/register-aspirant", aspirantInfo, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });

const loginAspirant = (aspirantInfo) =>
  client.post("/login-aspirant", aspirantInfo);

const updateAccount = (
  { file, currentPosition, contestingParty },
  id,
  onUploadProgress
) => {
  const formData = new FormData();

  formData.append("file", {
    name: "Aspirant " + new Date(),
    type: "image/jpg",
    uri: file,
  });
  formData.append("currentPosition", currentPosition);
  formData.append("contestingParty", contestingParty);

  return client.put("aspirant/update-account/" + id, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const addProfile = (aspirantId, data) =>
  client.post(`aspirant/add-profile/${aspirantId}`, data);

const deleteAspirant = async (aspirantId) =>
  await client.delete(`aspirant/${aspirantId}`);

export default {
  addProfile,
  deleteAspirant,
  loginAspirant,
  registerAspirant,
  updateAccount,
};
