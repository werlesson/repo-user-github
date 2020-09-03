<template>
  <main class="layout">
    <header-layout />
    <section class="layout--content">
      <router-view />
    </section>
  </main>
</template>

<script>
import HeaderLayout from "./Header";
export default {
  components: {
    HeaderLayout
  }
};
</script>
