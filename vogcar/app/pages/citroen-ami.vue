<template>
  <div class="min-h-screen bg-white">
    <AmiHero />

    <!-- Why mobile advertising -->
    <AmiBenefits />

    <!-- Target customers -->
    <AmiTarget />

    <!-- Fleet / campaign -->
    <AmiCampaign />

    <!-- Process -->
    <AmiProcess />

    <!-- Final CTA -->
    <AmiCta />
  </div>
</template>

<script setup lang="ts">
import AmiHero from '~/components/products/citroenAmi/AmiHero.vue'
import AmiBenefits from '~/components/products/citroenAmi/AmiBenefits.vue'
import AmiTarget from '~/components/products/citroenAmi/AmiTarget.vue'
import AmiCampaign from '~/components/products/citroenAmi/AmiCampaign.vue'
import AmiProcess from '~/components/products/citroenAmi/AmiProcess.vue'
import AmiCta from '~/components/products/citroenAmi/AmiCta.vue'

useSeoMeta({
  title: 'Citroën Ami | Publicité mobile | VOG CAR',
  description:
    'Transformez plusieurs Citroën Ami électriques en supports publicitaires mobiles pour vos campagnes de marque à Casablanca.',
  ogTitle: 'Citroën Ami | Publicité mobile | VOG CAR',
  ogDescription:
    'Une solution de publicité mobile pour faire circuler votre marque dans Casablanca.',
  ogImage: '/images/citroen-ami-hero.jpg'
})
</script>
