// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // SPA モード
  nitro: {
    preset: "cloudflare_pages", // Cloudflare Pages 用の設定
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/modern-css-reset/dist/reset.min.css",
        },
      ],
    },
  },
  css: ["assets/css/main.scss"],
  modules: ["@nuxt/image"],
  image: {
    // 画像最適化のオプション
    provider: "ipx", // デフォルトのローカルプロバイダー
    presets: {
      default: {
        format: "webp",
        quality: 80,
      },
    },
  },
});
