<template>
  <div>
    <Hammenu />
    <NuxtLink to="/">Medical Rowing Osaka</NuxtLink>
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
<style lang="scss" scoped>
a {
  display: block;
  z-index: 3;
  margin-top: calc(3vh + 7px);
  margin-left: 5%;
  font-size: 3vh;
  text-decoration: none;
  color: #0f2350;
  font-weight: 600;
}
</style>