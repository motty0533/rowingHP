<template>
  <div class="modal-button" @click="isOpen = true">
    <slot name="button"></slot>

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

<style lang="scss">
// ボタンデザイン
.modal-button {
  img {
    border-radius: 50%;
    margin-bottom: 0.5em;
  }
  p {
    line-height: 1.3;
  }
  .name {
    text-align: center;
    font-weight: 700;
    font-size: 0.9rem;
    margin-top: 0.3em;
  }
  .position {
    text-align: center;
    font-weight: 500;
    font-size: 0.8em;
    text-transform: lowercase;
    color: #555;
  }
}

// オーバーレイデザイン
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
  padding: 20% 10%;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;

  img {
    position: relative;
  }

  h2 {
    font-size: 2em;
    line-height: 1.2;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-weight: 600;
    span {
      display: block;
      font-size: 0.75em;
      text-transform: lowercase;
      color: #444;
      font-weight: 500;
    }
  }
  .school::before {
    position: absolute;
    bottom: -1.5em;
    right: 0;
    color: #afeeee;
    font-size: 2.7em;
    content: "#" attr(eng);
    z-index: -1;
    font-family: "Great Vibes";
    font-weight: 400;
  }

  .course {
    margin-bottom: 0.7em;
  }
  p {
    position: relative;
    white-space: pre-wrap;
    z-index: 1;
  }
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