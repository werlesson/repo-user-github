<template>
  <div class="result--display">
    <img class="display-user--photo" :src="data.avatar_url" alt="" />
    <span class="display-user--name">{{ data.name }}</span>
    <span class="display-user--username">{{ data.login }}</span>
    <div class="display-user--info">
      <icon-text
        v-for="item in itens"
        :key="item.id"
        :icon="item.icon"
        :text="item.text"
      />
    </div>
  </div>
</template>

<script>
import IconText from "./IconText.vue";
export default {
  components: {
    IconText
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    stars: {
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    itens() {
      return [
        {
          id: "organization",
          icon: "organization",
          text: this.data.company || "(Não informado)"
        },
        {
          id: "location",
          icon: "location",
          text: this.data.location || "(Não informado)"
        },
        {
          id: "star",
          icon: "star",
          text: this.stars || "(Não informado)"
        },
        {
          id: "repository",
          icon: "repository",
          text: this.data.public_repos || "(Não informado)"
        },
        {
          id: "followers",
          icon: "followers",
          text: this.data.followers || "(Não informado)"
        }
      ];
    }
  }
};
</script>
