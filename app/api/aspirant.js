import client from "./client";

const getAspirant = async () => client.get("/aspirants");

const getAspirantData = async () => client.get("/aspirants?populate=*");

export default { getAspirant, getAspirantData };
