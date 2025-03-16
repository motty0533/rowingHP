<template>
  <div class="outer-menu">
    <input class="checkbox-toggle" type="checkbox" ref="checkbox" />
    <div class="hamburger" @click="toggleMenu">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li v-for="item in items" :key="item.index">
              <NuxtLink :to="'/' + item.url" @click="closeMenu"
                >{{ item.name }}<span>{{ item.jpa }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { url: "", name: "Top", jpa: "トップページ" },
        { url: "result", name: "Results", jpa: "大会結果" },
        { url: "blog", name: "Blog", jpa: "ブログ" },
        { url: "member", name: "Members", jpa: "部員紹介" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.checkbox.checked = !this.$refs.checkbox.checked;
    },
    closeMenu() {
      this.$refs.checkbox.checked = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: black;
$hamburger-menu-size: 60px;
$hamburger-menu-border-radius: 0.12em;
$hamburger-menu-bg-color: fade-out(#0f2350, 0.25);
$hamburger-menu-line-height: 2px;
$hover-line-height: $hamburger-menu-line-height;
$hover-color: darken($main-color, 10%);
$content-bg-color: fade-out(#0f2350, 0.03);
$anim-duration: 0.4s;

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

.outer-menu {
  position: fixed;
  top: 3vh;
  right: 8vh;
  z-index: 1;

  .checkbox-toggle {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    width: $hamburger-menu-size;
    height: $hamburger-menu-size;
    opacity: 0;

    &:checked {
      & + .hamburger {
        > div {
          transform: rotate(135deg);
          background: white;

          &:before,
          &:after {
            top: 0;
            transform: rotate(90deg);
            background: white;
          }

          &:after {
            opacity: 0;
          }
        }
      }

      & ~ .menu {
        pointer-events: auto;
        visibility: visible;

        > div {
          transform: scale(1);
          transition-duration: 0.75s;

          > div {
            opacity: 1;
            transition: opacity $anim-duration ease $anim-duration;
          }
        }
      }
    }

    &:checked:hover + .hamburger > div {
      transform: rotate(225deg);
    }
  }

  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: $hamburger-menu-size;
    height: $hamburger-menu-size;
    padding: 0.5em 1em;
    border-radius: 0 $hamburger-menu-border-radius $hamburger-menu-border-radius
      0;
    cursor: pointer;
    backface-visibility: hidden;
    @extend .flex-center;

    > div {
      position: relative;
      flex: none;
      width: 100%;
      height: $hamburger-menu-line-height;
      background: $main-color;
      transition: all $anim-duration ease;
      @extend .flex-center;

      &:before,
      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: -$hamburger-menu-size / 6;
        left: 0;
        width: 100%;
        height: $hamburger-menu-line-height;
        background: inherit;
        transition: all $anim-duration ease;
      }

      &:after {
        top: $hamburger-menu-size / 6;
      }
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    visibility: hidden;
    overflow: hidden;
    backface-visibility: hidden;
    outline: 1px solid transparent;
    @extend .flex-center;

    > div {
      width: 300vw; // 画面全体に広がるように調整
      height: 300vw; // 画面全体に広がるように調整
      color: $main-color;
      background: $content-bg-color;
      border-radius: 50%;
      transition: all $anim-duration ease;
      flex: none;
      transform: scale(0);
      backface-visibility: hidden;
      overflow: hidden;
      @extend .flex-center;

      > div {
        max-width: 90vw;
        max-height: 100vh;
        opacity: 0;
        transition: opacity $anim-duration ease;
        overflow-y: auto;
        flex: none;
        @extend .flex-center;
        width: 100%;

        > ul {
          list-style: none;
          width: 100%;
          margin: 0;
          display: block;
          max-height: 100vh;
          padding-left: 1.3em;

          > li {
            padding: 0;
            margin: 1em;
            margin-left: 0;
            font-size: 2.7em;
            display: block;
            font-weight: 400;
            text-align: left;
            font-family: "Great Vibes";
            white-space: pre-line;
            color: white;

            > a {
              position: relative;
              display: inline;
              cursor: pointer;
              transition: color $anim-duration ease;
              line-height: 10%;

              &:hover {
                color: $hover-color;
              }
            }
            a span {
              display: block;
              font-size: 0.4em;
              font-family: "Shippori Mincho";
              margin-left: 0.25em;
            }
          }
        }
      }
    }
  }
}
</style>