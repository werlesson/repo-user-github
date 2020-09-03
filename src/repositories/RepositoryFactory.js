import UserRepository from "./UserRepository";

const repositories = {
  users: UserRepository
};
export default {
  get: name => repositories[name]
};
