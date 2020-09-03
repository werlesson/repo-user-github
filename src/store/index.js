import Vue from "vue";
import Vuex from "vuex";

import Repository from "../repositories/RepositoryFactory";
const UserRepository = Repository.get("users");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [],
    info: {},
    search: "werlesson"
  },
  mutations: {
    loadRepos: (state, res) => {
      const { data } = res;
      state.repos = data;
    },
    setSearch: (state, username) => {
      state.search = username;
    },
    loadInfo: (state, res) => {
      const { data } = res;
      state.info = { ...data };
    }
  },
  actions: {
    async getRepos({ commit, state }) {
      commit("loadRepos", await UserRepository.getRepositories(state.search));
    },
    async getInfo({ commit, state }) {
      commit("loadInfo", await UserRepository.getInfo(state.search));
    }
  },
  modules: {}
});
