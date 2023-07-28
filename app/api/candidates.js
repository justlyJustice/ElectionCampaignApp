import client from "./client";

const getPresidentialCandidates = async () =>
  await client.get("/presidential-candidates");

const getGovernorshipCandidates = async () =>
  await client.get("/governorship-candidates");

export default {
  getGovernorshipCandidates,
  getPresidentialCandidates,
};
