<!-- components/Modal.vue -->
<template>
  <div class="modal-button">
    <nuxt-img src="/image/member/ouchi.webp" @click="isOpen = true" />
    <slot name="button">開く</slot>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="isOpen" class="modal-overlay" @click="closeModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeModal">×</button>
            <div class="modal-body">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val;
  }
);

watch(isOpen, (val) => {
  emit("update:modelValue", val);
});

const closeModal = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
.modal-button img{
  border-radius: 50%;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 10px;
}

/* トランジションのアニメーション */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>