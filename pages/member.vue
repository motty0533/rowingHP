<template>
  <div class="content">
    <h2>部員紹介</h2>
    <h3>２回生</h3>
    <div class="modal-container">
      <Modal v-for="item in two" :key="item.index">
        <template #button>
          <nuxt-img format="webp" :src="'/image/member/' + item.url + '.jpg'" />
          <p class="name">{{ item.title }}</p>
          <p class="position">{{ item.position }}</p>
        </template>
        <template #content>
          <nuxt-img format="webp" :src="'/image/member/' + item.url + '.jpg'" />
          <h2>
            <span>{{ item.position }}</span>
            {{ item.title }}
          </h2>
          <p class="course">{{ item.course }}</p>
          <p class="school" :eng="item.position">
            {{ item.school }}
          </p>
        </template>
      </Modal>
    </div>
    <h3>３回生</h3>
    <h3>４回生</h3>
    <h3>５回生</h3>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "部員紹介/大阪大学医学部ボート部",
});

import gradetwo from "~/assets/member/grade2.json";
const two = ref(gradetwo);
</script>
<style lang="scss" scoped>
h3 {
  // display: inline-block;
  font-size: 1.3em;
  font-weight: 500;
  padding: 0.2em; /*文字周りの余白*/
  padding-left: 0.5em;
  background: #eaf3ff; /*背景色*/
  border-bottom: solid 3px #0f2350; /*下線*/
  margin-bottom: 1em;
}

.modal-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

/* レスポンシブ対応 */
@media (max-width: 1025px) {
  .modal-container {
    // justify-content: space-between;
  }

  .modal-container :deep(.modal-button) {
    width: calc(33.333% - 18px);
    margin-bottom: 16px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .modal-container {
    .name {
      font-size: 1.2rem;
    }
  }
}

@media (min-width: 1025px) {
  .modal-container :deep(.modal-button) {
    width: calc(25% - 18px); /* デスクトップでは4列 */
  }
}
</style>



