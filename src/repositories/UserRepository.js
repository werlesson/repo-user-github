import Client from "./Clients/AxiosClient";
const resource = "/users";

export default {
  getInfo(username) {
    return Client.get(`${resource}/${username}`);
  },
  getRepositories(username) {
    return Client.get(`${resource}/${username}/repos`);
  }
};
