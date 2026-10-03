// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@vercel/analytics',
    '@vercel/speed-insights',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  $production: {

    robots: {
      sitemap: `${process.env.SITE_URL}/sitemap.xml`
    },
    sitemap: {
      siteUrl: process.env.SITE_URL,
      siteName: 'VOGCAR',
      exclude: [
        '/tv'
      ],
      urls: [
        {
          loc: '/',
          changefreq: 'weekly',
          priority: 1.0
        },
        {
          loc: '/citroen-ami',
          changefreq: 'weekly',
          priority: 0.9,
          images: [
            {
              loc: `${process.env.SITE_URL}/images/citroen-ami-hero.jpg?v=1.0`,
              title: 'Citroën Ami Publicité Mobile Casablanca',
              caption: 'Flotte de Citroën Ami électriques pour campagne publicitaire'
            }
          ]
        },
        {
          loc: '/list-parc',
          changefreq: 'weekly',
          priority: 0.9
        },
        {
          loc: '/about',
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/contact',
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/fiat-scudo',
          changefreq: 'monthly',
          priority: 0.8
        },
        {
          loc: '/citroen-ami',
          changefreq: 'monthly',
          priority: 0.8
        }
      ]
    }
  },

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
