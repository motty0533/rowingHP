<template>
  <div class="content">
    <h2 eng="Results">大会結果</h2>
    <div v-for="item in itemlist" :key="item.id" class="wrapper">
      <h3>{{ item.title }}</h3>
      <ul>
        <li v-for="content in item.contents" :key="content.index">
          {{ content.name }}　{{ content.rank }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      itemlist: [
        {
          title: "2024年西医体",
          contents: [{ name: "男子対校艇ARES", rank: "１位🥇" }],
        },
        {
          title: "2024年近医体",
          contents: [{ name: "男子対校艇ARES", rank: "１位🥇" }],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin: 5%;
  h2 {
    color: #0f2350;
    font-size: 2em;
    margin-bottom: 0.7em;
  }

  .wrapper {
    margin-bottom: 1.5em;
    h3 {
      // display: inline-block;
      font-size: 1.3em;
      font-weight: 500;
      padding: 0.2em; /*文字周りの余白*/
      padding-left: 0.5em;
      color: #010101; /*文字色*/
      background: #eaf3ff; /*背景色*/
      border-bottom: solid 3px #0f2350; /*下線*/
      margin-bottom: 0.3em;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        font-size: 1em;
      }
    }
  }
}
</style>