import client from "./client";

const getAspirants = async () => client.get("/aspirants");

const getAspirant = async (id) => client.get("/aspirants/" + id);

export default { getAspirant, getAspirants };
