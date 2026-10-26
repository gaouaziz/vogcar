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
  title: 'Location Renault Express Utilitaire à Casablanca | VOGCAR',

  description:
    'Louez un Renault Express à Casablanca. Utilitaire idéal pour vos livraisons urbaines, transferts de marchandises, e-commerce et professionnels.',

  keywords:
    'Renault Express Casablanca, location Renault Express Maroc, utilitaire Renault Express 2025, location utilitaire Casablanca, véhicule de livraison Maroc, location fourgonnette Derb Omar, LLD utilitaire Maroc, transport de marchandises Casablanca, VOG CAR utilitaire, location Express pro',

  // Open Graph / Facebook
  ogType: 'website',
  ogTitle: 'Location Renault Express Utilitaire à Casablanca | VOGCAR',
  ogDescription:
    'Optimisez vos livraisons à Casablanca avec la location d\'un Renault Express récent et robuste chez VOGCAR.',
  ogUrl: `${config.public.siteUrl}/renault-express`,
  ogImage: `${config.public.mediaUrl}/images/renault-express-hero.png`,
  ogImageAlt: 'Location Renault Express Van 2025 utilitaire au Maroc - VOG CAR',
  ogSiteName: 'VOG CAR',
  ogLocale: 'fr_MA',

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Renault Express Utilitaire à Casablanca | VOGCAR',
  twitterDescription:
    'Optimisez vos livraisons à Casablanca avec la location d\'un Renault Express récent et robuste chez VOGCAR.',
  twitterImage: `${config.public.mediaUrl}/images/renault-express-hero.png`,
  twitterImageAlt: 'Renault Express Van 2025 - VOG CAR'
})
</script>
