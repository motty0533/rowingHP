<template>
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>

<script>
import Header from "~/components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style> 