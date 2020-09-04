<template>
  <div class="result--display">
    <img class="display-user--photo" :src="user.avatar_url" alt="" />
    <span class="display-user--name">{{ user.name }}</span>
    <span class="display-user--username">{{ user.login }}</span>
    <div class="display-user--info">
      <icon-text
        v-for="item in items"
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
    user: {
      type: Object,
      required: true
    },
    stars: {
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          id: "organization",
          icon: "organization",
          text: this.user.company || "(Não informado)"
        },
        {
          id: "location",
          icon: "location",
          text: this.user.location || "(Não informado)"
        },
        {
          id: "star",
          icon: "star",
          text: this.stars || "(Não informado)"
        },
        {
          id: "repository",
          icon: "repository",
          text: this.user.public_repos || "(Não informado)"
        },
        {
          id: "followers",
          icon: "followers",
          text: this.user.followers || "(Não informado)"
        }
      ];
    }
  }
};
</script>
