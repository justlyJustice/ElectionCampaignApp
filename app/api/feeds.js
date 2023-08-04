import client from "./client";

const getAllFeeds = async () => client.get("/feeds");

export default { getAllFeeds };
