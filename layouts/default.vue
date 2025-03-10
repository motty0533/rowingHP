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

<style>
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
} */
</style> 