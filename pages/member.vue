<template>
  <div class="content">
    <h2>部員紹介</h2>
    <div class="modal-container">
      <Modal v-for="item in items" :key="item.id">
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
          <p class="school">{{ item.school }}</p>
          <p class="description" :eng="item.position">
            {{ item.description }}
          </p>
        </template>
      </Modal>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    id: 1,
    title: "加島大知",
    position: "Manager",
    school: "医学部医学科/渋谷幕張高校",
    description:
      "ボート部1のおしゃべり畜生！動き出した彼の口は誰にも止めることができない！そんな彼はもとツイ廃。今はツイッターの代わりに口でつぶやいているよ！みんなから畜生と呼ばれすぎて本名を忘れられた畜生はせめて後輩には名前でよんでもらえることを期待している、、、すぐに病みがちな彼は気分転換に京都まで夜通し歩いたとかいう噂もあるとか？畜生さんの奇妙な生態を解き明かしたい新入生はぜひ新歓へ！",
    url: "ouchi",
  },
]);
</script>
<style lang="scss" scoped>
.modal-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
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



