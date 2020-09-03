<template>
  <section class="home">
    <div class="home--logo">
      <img src="@/assets/logo.svg" alt="logo com o texto Github Search" />
    </div>
    <div class="home--search">
      <search v-model="searchText" />
    </div>
  </section>
</template>

<script>
import { Search } from "./global";
export default {
  data() {
    return {
      searchText: ""
    };
  },
  name: "Home",
  components: { Search }
};
</script>
