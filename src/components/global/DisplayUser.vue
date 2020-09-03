<template>
  <div class="result--display">
    <img
      class="display-user--photo"
      src="https://via.placeholder.com/280x280"
      alt=""
    />
    <span class="display-user--name">Lindemberg</span>
    <span class="display-user--username">lindeberg</span>
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
  data() {
    return {
      itens: [
        {
          id: "organization",
          icon: "organization",
          text: "Lux One"
        },
        {
          id: "location",
          icon: "location",
          text: "Fortaleza, CE"
        },
        {
          id: "star",
          icon: "star",
          text: "0"
        },
        {
          id: "repository",
          icon: "repository",
          text: "4"
        },
        {
          id: "followers",
          icon: "followers",
          text: "1"
        }
      ]
    };
  }
};
</script>
