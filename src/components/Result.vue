<template>
  <div class="result">
    <div v-if="notFound">
      NADA ENCONTRADO
    </div>
    <div v-else>
      <display-user :data="info" :stars="starsTotal" />
      <repository-user :data="repos" />
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
    ...mapState(["repos", "info"]),
    starsTotal() {
      return this.repos.reduce(this.getTotalStars, 0);
    },
    notFound() {
      console.log(this.info, this.repos);
      return this.info === null && this.repos === null;
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
