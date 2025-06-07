<template>
  <div>
    <button
      id="hamburger-button"
      class="hamburger-button"
      :class="{ 'is-active': isMenuOpen }"
      aria-label="メニューを開閉"
      @click="toggleMenu"
    >
      <span class="hamburger-line hamburger-line-1"></span>
      <span class="hamburger-line hamburger-line-2"></span>
      <span class="hamburger-line hamburger-line-3"></span>
    </button>

    <nav id="nav-menu" class="nav-menu" :class="{ 'is-active': isMenuOpen }">
      <ul>
        <li>
          <NuxtLink to="/" @click="closeMenu" class="nav-link">HOME</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/result" @click="closeMenu" class="nav-link"
            >RESULT</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/schedule" @click="closeMenu" class="nav-link"
            >SCHEDULE</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/member" @click="closeMenu" class="nav-link"
            >MEMBER</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/blog" @click="closeMenu" class="nav-link"
            >BLOG</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script setup>
import { ref, watch } from "vue";

// メニューの開閉状態を管理
const isMenuOpen = ref(false);

// メニューを開閉する関数
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// リンククリック時にメニューを閉じる関数
const closeMenu = () => {
  isMenuOpen.value = false;
};

// isMenuOpenの状態を監視して、bodyのスクロールを制御
watch(isMenuOpen, (isOpen) => {
  if (process.client) {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
});
</script>
  
  <style scoped>
/* スタイルはここにスコープ化されます */
.hamburger-button {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 100;
  background-color: transparent;
  border: none;
  padding: 0;
  outline: none;
}
.hamburger-button:focus {
  outline: none;
}

.hamburger-line {
  display: block;
  position: absolute;
  width: 60%;
  height: 2px;
  left: 20%;
  background-color: #000;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.hamburger-line-1 {
  top: 16px;
}
.hamburger-line-2 {
  top: 26px;
}
.hamburger-line-3 {
  top: 36px;
}

.hamburger-line-1::after {
  content: none;
}

.hamburger-line-3::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #334155;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: 50% 50%;
  right: -16px;
  top: -0.4px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 60%, 0% 40%);
}

.hamburger-button.is-active .hamburger-line-1 {
  top: 24px;
  transform: rotate(45deg);
}
.hamburger-button.is-active .hamburger-line-2 {
  opacity: 0;
}
.hamburger-button.is-active .hamburger-line-3 {
  top: 24px;
  transform: rotate(-45deg);
}

.hamburger-button.is-active .hamburger-line-3::after {
  opacity: 1;
  transform: scale(1) rotate(-1deg);
  transition-delay: 0.2s;
}

.nav-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(0px at calc(100% - 1rem - 25px) calc(1rem + 25px));
  transition: clip-path 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  background-color: #f0f8ff;
  z-index: 99;
}

.nav-menu.is-active {
  clip-path: circle(250vh at calc(100% - 1rem - 25px) calc(1rem + 25px));
}

.nav-menu::before,
.nav-menu::after {
  content: "";
  position: absolute;
  left: 50%;
  min-width: 300vw;
  min-height: 300vw;
  background-color: #fff;
  animation-name: wave;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: -1;
}

.nav-menu::before {
  bottom: 15vh;
  border-radius: 45%;
  animation-duration: 10s;
}

.nav-menu::after {
  bottom: 12vh;
  opacity: 0.5;
  border-radius: 47%;
  animation-duration: 12s;
}

@keyframes wave {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -2%) rotateZ(360deg);
  }
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

.nav-menu ul li {
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.5s ease, opacity 0.5s ease;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.nav-menu.is-active ul li {
  transform: translateY(0);
  opacity: 1;
}
.nav-menu.is-active ul li:nth-child(1) {
  transition-delay: 0.3s;
}
.nav-menu.is-active ul li:nth-child(2) {
  transition-delay: 0.4s;
}
.nav-menu.is-active ul li:nth-child(3) {
  transition-delay: 0.5s;
}
.nav-menu.is-active ul li:nth-child(4) {
  transition-delay: 0.6s;
}
.nav-menu.is-active ul li:nth-child(5) {
  transition-delay: 0.7s;
}
.nav-link {
  font-size: 2.25rem;
  font-weight: 700;
  color: #334155;
  transition: color 0.3s;
  text-decoration: none;
}
@media (min-width: 768px) {
  .nav-link {
    font-size: 2.25rem;
  }
}
.nav-link:hover {
  color: #2563eb;
}
</style>
  