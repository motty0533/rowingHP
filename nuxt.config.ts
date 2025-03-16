// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // SPA モード
  nitro: {
    preset: "cloudflare_pages", // Cloudflare Pages 用の設定
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

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
    provider: "ipx", // デフォルトはipx
    quality: 80,
    format: ["webp", "avif", "jpeg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});
