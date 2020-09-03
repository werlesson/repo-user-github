<template>
  <div class="result--repository">
    <card-repository
      v-for="repo in data"
      :key="repo.id"
      :title="repo.name"
      :description="repo.description"
      :star="repo.stargazers_count"
    />
  </div>
</template>

<script>
import CardRepository from "./CardRepository.vue";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: { CardRepository }
};
</script>
