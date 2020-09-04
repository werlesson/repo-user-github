<template>
  <div>
    <div
      v-if="notFound"
      style="display: flex; flex-direction:column; justify-content: center; align-items: center;"
    >
      <h2 style="font-size: 2rem; margin: 1rem;">
        Nenhum dado encontrado
      </h2>
      <p style="margin-bottom: 1rem;">
        Nenhum dado foi encontrado com o termo pesquisado. Pesquise por outro
        termo ou entre em contato com nosso suporte.
      </p>
      <img src="@/assets/icons/github.svg" width="100" alt="" />
    </div>
    <div class="result" v-else>
      <display-user :user="info || {}" :stars="starsTotal" />
      <repository-user :data="repos || []" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { RepositoryUser, DisplayUser } from "./global";

export default {
  components: {
    RepositoryUser,
    DisplayUser
  },
  computed: {
    ...mapState(["repos", "info", "search"]),
    starsTotal() {
      if (this.repos !== null) return this.repos.reduce(this.getTotalStars, 0);
      return 0;
    },
    notFound() {
      return this.info === null && this.repos === null;
    }
  },
  watch: {
    search: function() {
      this.getData();
    }
  },
  methods: {
    getTotalStars(total, num) {
      return total + num.stargazers_count;
    },
    getData() {
      this.$store.dispatch("getRepos", { self: this });
      this.$store.dispatch("getInfo", { self: this });
    }
  },

  created() {
    this.getData();
  }
};
</script>
