<template>
  <div>
    <section class="hero">
      <div class="video-box overlay">
        <video
          class="video"
          src="/assets/video/sample.mp4"
          muted
          autoplay
          loop
          playsinline
        ></video>
      </div>
      <div class="text-box">
        <h1>漕ぎ出せ、<br />阪大医学部</h1>
      </div>
    </section>
    <section class="maincontent">
      <div class="wrapper">
        <h2 class="midashi rowing" eng="What's rowing?">ボートとは？</h2>
        <p>５人１組で1000mのタイムを競う競技です。</p>
        <p>
          あああああああああああああああああああああああああああああああああ
        </p>
        <p>いいいいいいいいいいいいいいいいいいいいいいいいいいい</p>
      </div>
      <div class="wrapper">
        <h2 class="midashi" eng="Results">大会結果</h2>
        <h3>2024年西医体総合優勝！</h3>
        <p>ARES　一般男子舵手付きフォア優勝</p>
        <p>SIMMAH　一般女子舵手付きクォドルプル３位</p>
        <NuxtLink to="/result" class="arrowbtn" style="">more</NuxtLink>
      </div>
      <div class="wrapper">
        <h2 class="midashi" eng="Place">活動場所</h2>
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d416.7956765579929!2d135.52377016238353!3d34.69952873463286!3m2!1i1024!2i768!4f55.1!3m3!1m2!1s0x6000e6d36933e8f5%3A0xdb8cf7c6ec4b3499!2z44CSNTM0LTAwMjcg5aSn6Ziq5bqc5aSn6Ziq5biC6YO95bO25Yy65Lit6YeO55S677yR5LiB55uu77yR77yQ4oiS77yS77yX!5e0!3m2!1sja!2sjp!4v1741566345127!5m2!1sja!2sjp"
          width="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>
          毛馬桜之宮公園にある艇庫を拠点に活動しています。春は桜、その他の季節はヌートリアの糞が楽しめます。JR桜ノ宮駅西口を出たあと川沿いに歩くと野球場のそばに艇庫があります。
        </p>
      </div>
    </section>
  </div>
</template>
<script>
definePageMeta({
  layout: "top",
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  .video-box {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .overlay::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: "";
    background: rgba(0, 0, 0, 0.4);
  }

  .text-box {
    position: absolute;
    top: 80%;
    left: -2em;
    width: 100%;
    // -webkit-transform: translate(-50%, -50%);
    // -moz-transform: translate(-50%, -50%);
    // transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    padding: 0 50px;
    // text-align: center;
    color: #fff;
    font-family: "Zen Antique";
  }
}
.maincontent {
  margin: 5%;
  margin-top: 5em;

  .wrapper {
    margin-bottom: 30%;

    .midashi {
      position: relative;
      margin-bottom: 0.2rem;
      font-weight: bold;
      font-size: 2.3rem;
    }
    .midashi::before {
      position: absolute;
      top: -0.5em;
      transform: translateX(-5%);
      color: #afeeee;
      font-size: 2.7em;
      content: attr(eng);
      z-index: -1;
      font-family: "Great Vibes";
      font-weight: 400;
    }
    .rowing::before {
      font-size: 16vw;
      top: -0.5em;
    }

    h3 {
      font-size: 1.5em;
      margin-bottom: 0.5em;
      font-weight: 500;
    }

    p {
      font-size: 1em;
      font-weight: 400;
    }

    .arrowbtn {
      --arrow-color: #333; /* 矢印の色を設定 */
      display: inline-flex; /* 横並びに配置 */
      align-items: center; /* 垂直方向を中央に揃える */
      color: var(--arrow-color); /* 文字色を矢印の色と一致 */
      text-decoration: none; /* 下線を非表示 */
      position: relative; /* 疑似要素の位置基準 */
      margin-right: 2em;
      float: right;
    }

    .arrowbtn::after {
      border-bottom: 1px solid var(--arrow-color); /* 下線のスタイルを矢印として設定 */
      border-right: 1px solid var(--arrow-color); /* 右線のスタイルを矢印として設定 */
      content: ""; /* 疑似要素のコンテンツを空に設定 */
      width: 30px; /* 矢印の幅を30pxに設定 */
      height: 10px; /* 矢印の高さを10pxに設定 */
      position: absolute; /* 親要素に対して絶対位置 */
      left: 100%; /* テキストの右端に配置 */
      transform: skewX(50deg); /* 矢印の傾きの調整 */
      transition: all 0.3s; /* なめらかな移動効果 */
    }

    .map {
      width: 100%;
      aspect-ratio: 9/9;
      margin-top: 3em;
      margin-bottom: 1.5em;
    }
  }
}
@media screen and (min-width: 1024px) {
  /* ヒーローセクションの調整 */
  .hero {
    .text-box {
      top: 70%; /* スマートフォン表示時(80%)より少し上に配置 */
      left: 5%; /* 左からの位置を相対的に指定（元の-2emの代わりに画面幅に応じた余白を確保） */
      width: 80%; /* 左右の3%ずつの余白を考慮した幅 */
    }
    h1 {
      font-size: 3.6rem; /* スマートフォン表示時(40px)よりフォントサイズを大きく */
      padding: 0 4rem; /* 左右のパディングを広げ、テキストが画面端に寄るのを防ぐ */
      line-height: 1.35; /* 行間を少し広げて読みやすく */
    }
  }

  /* メインコンテンツセクションの調整 */
  .maincontent {
    margin-top: 7em; /* ヒーローセクションとの間隔を調整 */
    margin-bottom: 7em; /* フッターとの間隔を調整 */
    margin-left: 10%;
    margin-right: 10%; /* 中央寄せ */
    max-width: 1140px; /* コンテンツの最大幅を設定し、横に広がりすぎるのを防ぐ */

    .wrapper {
      margin-bottom: 7em; /* 各コンテンツブロック間のマージンを調整 */

      .midashi {
        font-size: 2.8rem; /* 見出しのフォントサイズを大きく */
        margin-bottom: 1rem; /* 見出しと続く要素との間隔を調整 */
      }
      .midashi::before {
        font-size: 2.5em; /* 英語の装飾文字のサイズを調整 */
        top: -0.4em; /* 位置を微調整 */
      }
      .rowing::before {
        /* 16vw はデスクトップでは非常に大きくなるため、固定値に近い単位か、vwの値を調整 */
        font-size: 2.5em; /* 例としてrem単位で指定（約144px相当）。元のvw指定より予測可能なサイズに */
        /* もし画面幅に応じてある程度スケールさせたい場合は clamp(6rem, 10vw, 9rem) のような指定も考えられます */
        top: -0.45em; /* フォントサイズ変更に伴い、位置を微調整 */
      }

      h3 {
        font-size: 1.8rem; /* 小見出しのフォントサイズを大きく */
        margin-bottom: 1em; /* 小見出しと続く要素との間隔を調整 */
      }

      p {
        font-size: 1.1rem; /* 本文のフォントサイズを少し大きく */
        line-height: 1.8; /* 行間を広げてデスクトップでの可読性を向上 */
      }

      .arrowbtn {
        float: left;
      }
      .map {
        margin-top: 4em; /* 地図の上のマージンを調整 */
        margin-bottom: 2.5em; /* 地図の下のマージンを調整 */
        aspect-ratio: 2/1;
        width: 80%;
        /* 必要に応じて地図コンテナに最大幅を設定することも可能です */
        /* 例: max-width: 800px; display: block; margin-left: auto; margin-right: auto; */
        /* （ただし、.maincontent に max-width が設定されているため、地図が極端に広がることはありません） */
      }
    }
  }
}
</style>
