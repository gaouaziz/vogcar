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
      xsl: false,
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
          loc: '/location-voiture-casablanca',
          changefreq: 'weekly',
          priority: 0.9,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/location-voiture-casablanca.png`,
              title: 'Location Voiture Casablanca | VOG CAR',
              caption: 'Large choix de véhicules de location à Casablanca : citadines, SUV et utilitaires adaptés à votre budget.'
            }
          ]
        },
        {
          loc: '/location-voiture-aeroport-casablanca',
          changefreq: 'weekly',
          priority: 0.9,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/location-voiture-aeroport-casablanca.png`,
              title: 'Location Voiture Aéroport Casablanca | VOG CAR',
              caption: 'Large choix de véhicules de location à l’aéroport de Casablanca : citadines, SUV et utilitaires adaptés à votre budget.'
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
          priority: 0.8,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/fiat-scudo-hero.jpg`,
              title: 'Fiat Scudo Automatique 2025 Aéroport Casablanca',
              caption: 'Location Fiat Scudo automatique 2025 à Casablanca, 1 + 8 places. Idéal pour agences de tourisme, transferts aéroport, voyages et transport de groupes.'
            }
          ]
        },
        {
          loc: '/renault-express',
          changefreq: 'monthly',
          priority: 0.8,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/renault-express-hero.png`,
              title: 'Location Renault Express 2025 au Maroc | VOG CAR',
              caption: 'Location de Renault Express 2025 à Casablanca et au Maroc. Idéal pour vos livraisons urbaines, grossistes, commerçants et e-commerce.'
            }
          ]
        },
        {
          loc: '/citroen-ami',
          changefreq: 'weekly',
          priority: 0.9,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/citroen-ami-hero.jpg`,
              title: 'Citroën Ami Publicité Mobile Casablanca',
              caption: 'Flotte de Citroën Ami électriques pour campagne publicitaire'
            }
          ]
        },
        {
          loc: '/visiter-casablanca-en-voiture',
          changefreq: 'weekly',
          priority: 0.9,
          images: [
            {
              loc: `${process.env.NUXT_PUBLIC_MEDIA_URL}/images/visiter-casablanca-vogcar.png`,
              title: 'Visitez Casablanca en Voiture : Guide & Conseils | VOGCAR',
              caption: 'Louez votre voiture à Casablanca et explorez la ville en toute liberté : Mosquée Hassan II, Habous et Aïn Diab. Réservez votre véhicule chez VOG CAR !'
            }
          ]
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
  },

  sitemap: {
    xsl: false,
    credits: false,
    cacheMaxAgeSeconds: 0
  }
})
