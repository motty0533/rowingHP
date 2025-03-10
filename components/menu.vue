

<template>
  <div>
    <button @click="toggleMenu" :class="{'open': isOpen}" class="hamburger-button">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <transition name="fade">
      <div v-if="isOpen" class="menu-overlay" @click="toggleMenu">
        <transition-group name="slide" tag="div">
          <div v-for="(link, index) in links" :key="index" class="menu-item">
            <a :href="link.href">{{ link.text }}</a>
          </div>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      links: [
        { text: 'トップ', href: '#' },
        { text: '戦績', href: '#' },
        { text: '紹介', href: '#' }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.hamburger-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  z-index: 1000;
}

.hamburger-button .line {
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 3px 0;
  transition: all 0.3s;
}

.hamburger-button.open .line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-button.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger-button.open .line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.menu-item {
  color: white;
  font-size: 24px;
  margin: 20px 0;
  opacity: 1;
  transition: transform 0.5s, opacity 0.5s;
}

.menu-item:nth-child(1) {
  transition-delay: 0.1s;
}

.menu-item:nth-child(2) {
  transition-delay: 0.2s;
}

.menu-item:nth-child(3) {
  transition-delay: 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.5s;
}

.slide-enter {
  transform: translateY(100%);
}
</style>