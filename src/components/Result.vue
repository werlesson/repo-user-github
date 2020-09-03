<template>
  <div class="result">
    <display-user />
    <repository-user />
  </div>
</template>

<script>
import { RepositoryUser, DisplayUser } from "./global";

export default {
  components: {
    RepositoryUser,
    DisplayUser
  }
};
</script>
