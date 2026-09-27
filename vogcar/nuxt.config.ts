// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vercel/analytics',
    '@vercel/speed-insights'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    nodeEnv: 'development',
    zohoUser: '',
    zohoPass: '',
    turso: {
      databaseUrl: '',
      authToken: ''
    },
    public: {
      siteUrl: '',
      mediaUrl: '',
      whatsappNumber: '212691711732',
      textNumber: '0691 71 17 32'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
