<template>
  <div class="min-h-screen bg-white">
    <ScudoHero />
    <ScudoBenefits />
    <ScudoTarget />
    <ScudoUseCases />
    <ScudoComfort />
    <ScudoProcess />
    <ScudoCta />
  </div>
</template>

<script setup lang="ts">
import ScudoHero from '~/components/products/fiatScudo/ScudoHero.vue'
import ScudoBenefits from '~/components/products/fiatScudo/ScudoBenefits.vue'
import ScudoTarget from '~/components/products/fiatScudo/ScudoTarget.vue'
import ScudoUseCases from '~/components/products/fiatScudo/ScudoUseCases.vue'
import ScudoComfort from '~/components/products/fiatScudo/ScudoComfort.vue'
import ScudoProcess from '~/components/products/fiatScudo/ScudoProcess.vue'
import ScudoCta from '~/components/products/fiatScudo/ScudoCta.vue'

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Location Fiat Scudo 9 places à Casablanca | VOGCAR',

  description:
    'Louez un Fiat Scudo automatique (9 places) à Casablanca. Véhicule idéal pour les groupes, circuits touristiques et transferts aéroport Mohammed V.',

  keywords:
    'Fiat Scudo Casablanca, location Fiat Scudo Casablanca, Fiat Scudo 9 places, Fiat Scudo automatique, Fiat Scudo 2025, transport groupe Casablanca, transport touristique Casablanca, transfert aéroport Casablanca, agence tourisme Casablanca, location minibus Casablanca',

  // Open Graph / Facebook
  ogType: 'website',
  ogTitle: 'Location Fiat Scudo 9 places à Casablanca | VOGCAR',
  ogDescription:
    'Besoin d\'espace ? Découvrez notre Fiat Scudo 9 places à louer à Casablanca au meilleur prix pour vos trajets en groupe.',
  ogUrl: `${config.public.siteUrl}/fiat-scudo`,
  ogImage: `${config.public.mediaUrl}/images/fiat-scudo-hero.jpg`,
  ogImageAlt: 'Fiat Scudo automatique 2025 9 places à Casablanca - VOG CAR',
  ogSiteName: 'VOG CAR',
  ogLocale: 'fr_MA',

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Fiat Scudo 9 places à Casablanca | VOGCAR',
  twitterDescription:
    'Besoin d\'espace ? Découvrez notre Fiat Scudo 9 places à louer à Casablanca au meilleur prix pour vos trajets en groupe.',
  twitterImage: `${config.public.mediaUrl}/images/fiat-scudo-hero.jpg`,
  twitterImageAlt: 'Fiat Scudo automatique 2025 9 places - VOG CAR'
})
</script>
