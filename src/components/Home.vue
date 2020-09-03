<template>
  <section class="home">
    <div class="home--logo">
      <img src="@/assets/logo.svg" alt="logo com o texto Github Search" />
    </div>
    <div class="home--search">
      <search v-model="searchText" :onSearch="toSearch" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { Search } from "./global";
export default {
  name: "Home",
  components: { Search },
  data() {
    return {
      searchText: ""
    };
  },
  computed: {
    ...mapState(["search"])
  },
  methods: {
    toSearch() {
      this.$store.commit("setSearch", this.searchText);
      this.$router.push({ name: "Result" });
    }
  }
};
</script>
