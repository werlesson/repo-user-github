<template>
  <nav class="layout--header">
    <div class="layout--header--logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="layout--header--options">
      <search v-model="searchText" :onSearch="toSearch" />
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { Search } from "../global";
export default {
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
      if (this.$route.name !== "Result") this.$router.push({ name: "Result" });
    }
  }
};
</script>
