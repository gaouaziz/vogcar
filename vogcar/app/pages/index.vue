<template>
  <div>
    <HeaderHero />
    <AboutSection />
    <SolutionsSection />
    <FaqSection />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoRental',
        '@id': 'https://www.vogcar.site/#autorental',
        'name': 'VOG CAR',
        'alternateName': 'VOGCAR Location Voiture Casablanca',
        'url': 'https://www.vogcar.site',
        'logo': `${config.public.mediaUrl}/images/logo-vog-car.png`,
        'image': `${config.public.mediaUrl}/images/vog-car-hero.jpg`,
        'description':
          'Agence de location de voitures à Casablanca et transfert aéroport Mohammed V. Citadines, SUV, utilitaires et transport professionnel.',
        'telephone': '+212691711732',
        'email': 'contact@vogcar.site',
        'priceRange': '200 MAD - 900 MAD',
        'currenciesAccepted': 'MAD, EUR',
        'paymentAccepted': 'Cash, Credit Card',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '15 rue Anoussour - ex Conflans, Quartier Mers Sultan 2',
          'addressLocality': 'Casablanca',
          'postalCode': '20000',
          'addressCountry': 'MA'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 33.5844919,
          'longitude': -7.620359
        },
        'hasMap': 'https://www.google.com/maps/place/VOG+CAR/@33.5844919,-7.620359,17z',
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            'opens': '08:00',
            'closes': '20:00'
          }
        ],
        'areaServed': [
          {
            '@type': 'City',
            'name': 'Casablanca'
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Aéroport Mohammed V (CMN)'
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'VOG CAR — Agence de Location de Voiture à Casablanca & Aéroport',
  description:
    'VOG CAR, votre agence de location de voiture à Casablanca et aéroport Mohammed V. Large choix de véhicules récents au meilleur prix : citadines, SUV et utilitaires.',

  ogTitle: 'VOG CAR — Agence de Location de Voiture à Casablanca & Aéroport',
  ogDescription:
    'VOG CAR, agence de location de voiture à Casablanca et aéroport Mohammed V. Solutions simples, flexibles et professionnelles adaptées à vos besoins.',
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogImage: `${config.public.mediaUrl}/images/vog-car-hero.jpg`,
  ogImageAlt: 'VOGCAR - Location de voitures à Casablanca',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Location de Voiture Casablanca au Meilleur Prix | VOGCAR',
  twitterDescription:
    'Location de voitures à Casablanca avec VOGCAR. Découvrez notre parc automobile et nos services.',
  twitterImage: `${config.public.mediaUrl}/images/vog-car-hero.jpg`
})
</script>
