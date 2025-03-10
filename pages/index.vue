<template>
  <NuxtLayout>
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
        <h2 class="midashi rowing" eng="WHAT'S ROWING?">ボートとは？</h2>
        <p>５人１組で1000mのタイムを競う競技です。</p>
        <p>
          あああああああああああああああああああああああああああああああああ
        </p>
        <p>いいいいいいいいいいいいいいいいいいいいいいいいいいい</p>
      </div>
      <div class="wrapper">
        <h2 class="midashi" eng="RESULT">大会結果</h2>
        <h3>2024年西医体総合優勝！</h3>
        <p>ARES　一般男子舵手付きフォア優勝</p>
        <p>SIMMAH　一般女子舵手付きクォドルプル３位</p>
        <NuxtLink to="/result" class="arrowbtn" style="">more</NuxtLink>
      </div>
      <div class="wrapper">
        <h2 class="midashi" eng="PLACE">活動場所</h2>
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d416.7956765579929!2d135.52377016238353!3d34.69952873463286!3m2!1i1024!2i768!4f55.1!3m3!1m2!1s0x6000e6d36933e8f5%3A0xdb8cf7c6ec4b3499!2z44CSNTM0LTAwMjcg5aSn6Ziq5bqc5aSn6Ziq5biC6YO95bO25Yy65Lit6YeO55S677yR5LiB55uu77yR77yQ4oiS77yS77yX!5e0!3m2!1sja!2sjp!4v1741566345127!5m2!1sja!2sjp"
          width="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>
          毛馬桜之宮公園にある艇庫を拠点に活動しています。春は桜、その他の季節はヌートリアの糞が楽しめます。
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>

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
      top: -0.45em;
      // left: 50%;
      transform: translateX(-5%);
      color: #afeeee;
      font-size: 2.5em;
      // text-transform: uppercase;
      content: attr(eng);
      z-index: -1;
    }
    .rowing::before {
      font-size: 1.7em;
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

    .map {
      width: 100%;
      aspect-ratio: 9/9;
      margin-top: 3em;
      margin-bottom: 1.5em;
    }
  }
}
</style>
