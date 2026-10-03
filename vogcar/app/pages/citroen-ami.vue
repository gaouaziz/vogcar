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

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Citroën Ami | Publicité mobile | VOG CAR',
  description: 'Transformez plusieurs Citroën Ami électriques en supports publicitaires mobiles pour vos campagnes de marque à Casablanca.',
  keywords: 'citroen ami casablanca, publicite mobile maroc, location citroen ami, affichage mobile casablanca, street marketing maroc, vog car',

  ogTitle: 'Citroën Ami | Publicité mobile | VOG CAR',
  ogDescription: 'Une solution de publicité mobile pour faire circuler votre marque dans Casablanca. Déployez une flotte 100% électrique à votre image.',
  ogImage: `${config.public.mediaUrl}/images/citroen-ami-hero.jpg`,
  ogImageUrl: `${config.public.mediaUrl}/images/citroen-ami-hero.jpg`,
  ogImageAlt: 'Flotte publicitaire de Citroën Ami électriques à Casablanca - VOG CAR',
  ogUrl: `${config.public.siteUrl}/citroen-ami`,
  ogType: 'website',
  ogLocale: 'fr_MA',
  ogSiteName: 'VOG CAR',

  // Twitter Cards
  twitterCard: 'summary_large_image',
  twitterTitle: 'Citroën Ami | Publicité mobile | VOG CAR',
  twitterDescription: 'Transformez plusieurs Citroën Ami électriques en supports publicitaires mobiles pour vos campagnes de marque à Casablanca.',
  twitterImage: `${config.public.mediaUrl}/images/citroen-ami-hero.jpg`,
  twitterImageAlt: 'Flotte publicitaire de Citroën Ami électriques à Casablanca - VOG CAR'
})
</script>
