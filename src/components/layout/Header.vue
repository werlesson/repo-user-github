<template>
  <nav class="layout--header">
    <div class="layout--header--logo">
      <img src="@/assets/logo.svg" alt="" />
    </div>
    <div class="layout--header--options">
      <search v-model="searchText" />
    </div>
  </nav>
</template>

<script>
import { Search } from "../global";
export default {
  components: { Search },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style></style>
