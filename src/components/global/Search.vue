<template>
  <div class="search">
    <input
      type="search"
      v-model="valor"
      :placeholder="placeholder"
      class="search--input"
      @keyup.enter="toSearch"
    />
    <button class="search--button" @click="toSearch">
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
    },
    onSearch: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      valor: this.value
    };
  },
  watch: {
    valor() {
      this.$emit("input", this.valor);
    }
  },
  methods: {
    toSearch() {
      this.onSearch();
    }
  }
};
</script>
