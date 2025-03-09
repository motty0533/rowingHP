<template>
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
      <h1>大阪大学医学部<br />漕艇部</h1>
    </div>
  </section>
  <section class="maincontent">
    <h2 class="midashi" eng="What's rowing?">ボートとは？</h2>
    <h3>５人１組で1000mのタイムを競う競技</h3>
  </section>
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
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 40px;
    font-weight: bold;
    line-height: 1.2;
    padding: 0 50px;
    text-align: center;
    color: #fff;
  }
}
.maincontent {
  margin: 5%;
  margin-top: 5em;
  .midashi {
    position: relative;
    margin-bottom: 0.2rem;
    font-weight: bold;
    font-size: 40px;
  }

  .midashi::before {
    position: absolute;
    top: -0.5em;
    // left: 50%;
    transform: translateX(-5%);
    color: #f4efd4;
    font-size: 1.3em;
    text-transform: uppercase;
    content: attr(eng);
    z-index: -1;
  }
}
</style>
