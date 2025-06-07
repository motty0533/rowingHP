// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: "cloudflare_pages", // Cloudflare Pages 用の設定
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    head: {
      title: "大阪大学医学部ボート部",
      htmlAttrs: { lang: "ja" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/modern-css-reset/dist/reset.min.css",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/icons/favicon-96x96.png",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/icons/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/icons/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icons/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/icons/site.webmanifest",
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
