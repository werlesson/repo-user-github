<template>
  <div class="search">
    <input
      type="search"
      :value="valor"
      :placeholder="placeholder"
      class="search--input"
    />
    <button class="search--button">
      <i-search color="white" />
    </button>
  </div>
</template>

<script>
import { ISearch } from "../icons";
export default {
  components: { ISearch },
  props: {
    placeholder: {
      type: String,
      default: "Digite sua pesquisa aqui",
      required: false
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      valor: this.value
    };
  },
  watch: {
    valor(value) {
      this.$emit("input", value);
    }
  }
};
</script>
