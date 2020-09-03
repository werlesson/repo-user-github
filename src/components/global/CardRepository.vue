<template>
  <article class="card-repository">
    <h3 class="card-repository--title">{{ title }}</h3>
    <p class="card-repository--description">
      {{ description }}
    </p>
    <icon-text icon="star" :text="star" />
  </article>
</template>

<script>
import IconText from "./IconText.vue";
export default {
  components: { IconText },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      required: true
    },
    star: {
      type: [String, Number],
      required: true
    }
  }
};
</script>
