import client from "./client";

const getBlueprint = () => client.get("/blueprints");

export default { getBlueprint };
