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
        state.repos = data.sort((a, b) => {
          if (a.stargazers_count > b.stargazers_count) return -1;
          if (b.stargazers_count > a.stargazers_count) return 1;
          return 0;
        });
      } else {
        state.repos = null;
      }
    },
    setSearch: (state, username) => {
      state.search = username;
    },
    loadInfo: (state, res) => {
      if (res !== null) {
        const { data } = res;
        state.info = { ...data };
      } else {
        state.info = null;
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
