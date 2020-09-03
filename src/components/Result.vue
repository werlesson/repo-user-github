<template>
  <div class="result">
    <display-user :data="info" :stars="starsTotal" />
    <repository-user :data="repos" />
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
    }
  },
  methods: {
    getTotalStars(total, num) {
      return total + num.stargazers_count;
    }
  },
  created() {
    this.$store.dispatch("getRepos", { self: this });
    this.$store.dispatch("getInfo", { self: this });
  }
};
</script>
