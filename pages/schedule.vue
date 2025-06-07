<template>
  <div class="content">
    <h2>大会日程</h2>
    <h3>2025年度</h3>
    <table>
      <tbody v-for="item in items" :key="item.index">
        <tr>
          <td>{{ item.date }}</td>
          <td class="tournament-name">{{ item.name }}</td>
          <td>{{ item.place }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "大会日程/大阪大学医学部ボート部",
});

const items = [
  {
    date: "200X年2月41日",
    name: "阪大レガッタ",
    place: "毛馬桜之宮公園",
  },
  {
    date: "200X年2月41日",
    name: "阪大レガッタ",
    place: "毛馬桜之宮公園",
  },
  {
    date: "200X年2月41日",
    name: "阪大レガッタ",
    place: "毛馬桜之宮公園",
  },
];
</script>

<style lang="scss" scoped>
.content {
  h3 {
    // display: inline-block;
    font-size: 1.3em;
    font-weight: 500;
    padding: 0.2em; /*文字周りの余白*/
    padding-left: 0.65rem;
    color: white;
    background: #0f2350; /*背景色*/
    border-bottom: solid 3px #0f2350; /*下線*/
    // margin-bottom: 0.3em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    // border-spacing: 0 15px;
  }

  tbody tr {
    background-color: #eaf3ff;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: block;
    padding: 0.8rem;
    padding-left: 0.65rem;
    border-bottom: 2px solid #c7c7c7;
  }

  td {
    padding: 0.3rem;
    padding-left: 0;
    font-size: 1em;
  }

  .tournament-name {
    font-weight: bold;
    font-size: 1.5em;
  }

  /* モバイル用スタイル（デフォルト） */
  tbody tr {
    overflow: hidden;
  }

  td {
    display: block;
    width: 100%;
  }

  /* PC・タブレット用スタイル */
  @media screen and (min-width: 768px) {
    tbody tr {
      display: table-row;
    }

    td {
      display: table-cell;
      width: auto;
      font-size: 1rem;
      padding: 1em;
    }
    .tournament-name {
      font-weight: 400;
      font-size: 1em;
    }

    td:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      padding-left: 0.65rem;
    }

    td:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>