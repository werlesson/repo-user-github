<template>
  <div class="icon-text">
    <img :src="url" alt="ícone" class="icon-text--icon" />
    <span class="icon-text--text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    url() {
      return require(`@/assets/icons/${this.icon}.svg`);
    }
  }
};
</script>

<style></style>
