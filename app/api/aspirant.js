import client from "./client";

const getAspirants = async () => client.get("/aspirants");

const getAspirant = async (id) => client.get("/aspirants/" + id);

const createAspirant = async (aspirant) => client.post("/aspirants", aspirant);

export default { createAspirant, getAspirant, getAspirants };
