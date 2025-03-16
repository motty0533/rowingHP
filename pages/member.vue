<template>
  <div class="content">
    <h2>部員紹介</h2>
    <div class="modal-container">
      <Modal v-for="item in items" :key="item.id">
        <template #button>
          <p class="name">{{ item.title }}</p>
          <p class="position">{{ item.position }}</p>
        </template>
        <template #content>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </template>
      </Modal>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    id: 1,
    title: "山本颯太郎",
    position: "cox",
    description: "モーダル1の内容です。ここに詳細情報が入ります。",
  },
  {
    id: 2,
    title: "モーダル2",
    description: "モーダル2の内容です。ここに詳細情報が入ります。",
  },
  {
    id: 3,
    title: "モーダル3",
    description: "モーダル3の内容です。ここに詳細情報が入ります。",
  },
  {
    id: 4,
    title: "モーダル4",
    description: "モーダル4の内容です。ここに詳細情報が入ります。",
  },
  {
    id: 5,
    title: "モーダル5",
    description: "モーダル5の内容です。ここに詳細情報が入ります。",
  },
  {
    id: 6,
    title: "モーダル6",
    description: "モーダル6の内容です。ここに詳細情報が入ります。",
  },
]);
</script>
<style lang="scss" scoped>
.modal-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  p{
    line-height: 1;
  }
  .name {
    text-align: center;
    font-weight: 700;
    font-size: 0.75rem;
    margin-top: 0.3em;
  }
  .position{
    text-align: center;
    font-weight: 400;
    font-size: 0.9em;
  }
}

/* レスポンシブ対応 */
@media (max-width: 1025px) {
  .modal-container {
    justify-content: space-between;
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



