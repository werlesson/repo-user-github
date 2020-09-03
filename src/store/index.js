import Vue from "vue";
import Vuex from "vuex";

import Repository from "../repositories/RepositoryFactory";
const UserRepository = Repository.get("users");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: null,
    info: null,
    search: ""
  },
  mutations: {
    loadRepos: (state, res) => {
      if (res !== null) {
        const { data } = res;
        state.repos = data;
      }
    },
    setSearch: (state, username) => {
      state.search = username;
    },
    loadInfo: (state, res) => {
      if (res !== null) {
        const { data } = res;
        state.info = { ...data };
      }
    }
  },
  actions: {
    async getRepos({ commit, state }) {
      commit(
        "loadRepos",
        await UserRepository.getRepositories(state.search).catch(() => {
          return null;
        })
      );
    },
    async getInfo({ commit, state }) {
      commit(
        "loadInfo",
        await UserRepository.getInfo(state.search).catch(() => {
          return null;
        })
      );
    }
  },
  modules: {}
});
