<template>
  <div>
    <Hammenu />
    <slot />
  </div>
</template>

<script>
import Hammenu from "~/components/hammenu.vue";
export default {
  components: {
    Hammenu,
  },
};
</script>