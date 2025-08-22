export default defineNuxtConfig({
  app: {
    head: {
      title: "Rimelight Web Framework",
      titleTemplate: "%s | Rimelight Web Framework",
      meta: [
        { name: "description", content: "" },
        { name: "author", content: "Daniel Marchi" },
        { name: "creator", content: "Daniel Marchi" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  compatibilityDate: "2025-08-20",
  modules: [
    '@rimelight/rimelight-web-framework',
    '@nuxthub/core'
  ],
  rimelightWebFramework: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error',
        'neutral'
      ]
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'examples',
        dir: './app/assets/icons/examples',
        normalizeIconName: false,
      },
    ],
  },
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],
  hub: {
    blob: true
  },
  vite: {
    optimizeDeps: {
      include: ['@internationalized/date', '@vueuse/shared', '@vueuse/integrations/useFuse', '@tanstack/vue-table', 'reka-ui', 'reka-ui/namespaced', 'embla-carousel-vue', 'embla-carousel-autoplay', 'embla-carousel-auto-scroll', 'embla-carousel-auto-height', 'embla-carousel-class-names', 'embla-carousel-fade', 'embla-carousel-wheel-gestures', 'colortranslator', 'tailwindcss/colors', 'tailwind-variants', 'ufo', 'zod', 'vaul-vue']
    }
  }
})
