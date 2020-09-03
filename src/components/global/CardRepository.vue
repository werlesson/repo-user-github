<template>
  <article class="card-repository">
    <h3 class="card-repository--title">Título</h3>
    <p class="card-repository--description">
      descricao aqui com muita coisa escrita
    </p>
    <icon-text icon="star" text="0" />
  </article>
</template>

<script>
import IconText from "./IconText.vue";
export default {
  components: { IconText }
};
</script>
