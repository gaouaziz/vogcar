<template>
  <div class="min-h-screen bg-white">
    <HeaderMenu />

    <main>
      <ExpressHero />
      <ExpressBenefits />
      <ExpressTarget />
      <ExpressUseCases />
      <ExpressCargo />
      <ExpressFaq />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import ExpressHero from '~/components/products/renaultExpress/ExpressHero.vue'
import ExpressBenefits from '~/components/products/renaultExpress/ExpressBenefits.vue'
import ExpressTarget from '~/components/products/renaultExpress/ExpressTarget.vue'
import ExpressUseCases from '~/components/products/renaultExpress/ExpressUseCases.vue'
import ExpressCargo from '~/components/products/renaultExpress/ExpressCargo.vue'
import ExpressFaq from '~/components/products/renaultExpress/ExpressFaq.vue'

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Location Renault Express 2025 au Maroc | VOG CAR',

  description:
    'Location de Renault Express 2025 à Casablanca et au Maroc. Idéal pour vos livraisons urbaines, grossistes, commerçants et e-commerce.',

  keywords:
    'Renault Express Casablanca, location Renault Express Maroc, utilitaire Renault Express 2025, location utilitaire Casablanca, véhicule de livraison Maroc, location fourgonnette Derb Omar, LLD utilitaire Maroc, transport de marchandises Casablanca, VOG CAR utilitaire, location Express pro',

  // Open Graph / Facebook
  ogType: 'website',
  ogTitle: 'Location Renault Express 2025 au Maroc | VOG CAR',
  ogDescription:
    'Optimisez votre logistique avec le Renault Express Van 2025. Idéal pour les professionnels, grossistes et e-commerçants. Volume de 3,3 m³ disponible chez VOG CAR.',
  ogUrl: `${config.public.siteUrl}/renault-express`,
  ogImage: `${config.public.mediaUrl}/images/renault-express-hero.png`,
  ogImageAlt: 'Location Renault Express Van 2025 utilitaire au Maroc - VOG CAR',
  ogSiteName: 'VOG CAR',
  ogLocale: 'fr_MA',

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Renault Express 2025 au Maroc | VOG CAR',
  twitterDescription:
    'Profitez d\'un volume de chargement de 3,3 m³ pour vos livraisons professionnelles au Maroc avec le Renault Express 2025 chez VOG CAR.',
  twitterImage: `${config.public.mediaUrl}/images/renault-express-hero.png`,
  twitterImageAlt: 'Renault Express Van 2025 - VOG CAR'
})
</script>
