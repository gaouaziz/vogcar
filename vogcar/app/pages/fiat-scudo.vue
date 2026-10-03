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
  title: 'Fiat Scudo Automatique 2025 Aéroport | 9 places | VOG CAR',

  description:
    'Location Fiat Scudo automatique 2025 à Casablanca, 1 + 8 places. Idéal pour agences de tourisme, transferts aéroport, voyages et transport de groupes.',

  keywords:
    'Fiat Scudo Casablanca, location Fiat Scudo Casablanca, Fiat Scudo 9 places, Fiat Scudo automatique, Fiat Scudo 2025, transport groupe Casablanca, transport touristique Casablanca, transfert aéroport Casablanca, agence tourisme Casablanca, location minibus Casablanca',

  // Open Graph / Facebook
  ogType: 'website',
  ogTitle: 'Fiat Scudo Automatique 2025 | 9 places | VOG CAR',
  ogDescription:
    'Fiat Scudo automatique 2025, 1 + 8 places à Casablanca. Une solution idéale pour le tourisme, les transferts aéroport, les voyages et les groupes.',
  ogUrl: `${config.public.siteUrl}/fiat-scudo`,
  ogImage: `${config.public.mediaUrl}/images/fiat-scudo-hero.jpg`,
  ogImageAlt: 'Fiat Scudo automatique 2025 9 places à Casablanca - VOG CAR',
  ogSiteName: 'VOG CAR',
  ogLocale: 'fr_MA',

  // Twitter / X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Fiat Scudo Automatique 2025 | 9 places | VOG CAR',
  twitterDescription:
    'Fiat Scudo 1 + 8 places à Casablanca pour tourisme, transferts aéroport, voyages et transport de groupes.',
  twitterImage: `${config.public.mediaUrl}/images/fiat-scudo-hero.jpg`,
  twitterImageAlt: 'Fiat Scudo automatique 2025 9 places - VOG CAR'
})
</script>
