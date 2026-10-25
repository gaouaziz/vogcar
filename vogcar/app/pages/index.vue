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
  ]
})

useSeoMeta({
  title: 'Location Voiture Casablanca au Meilleur Prix | VOGCAR',
  description:
    'VOGCAR, spécialiste de la location de voitures à Casablanca. Découvrez nos véhicules et profitez d’un service flexible, simple et professionnel.',

  ogTitle: 'Location Voiture Casablanca au Meilleur Prix | VOGCAR',
  ogDescription:
    'Découvrez VOGCAR, votre partenaire pour la location de voitures à Casablanca. Une gamme de véhicules adaptée à vos besoins, avec un service simple, flexible et professionnel.',
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogImage: `${config.public.mediaUrl}/images/vog-car-hero.jpg`,
  ogImageAlt: 'VOGCAR - Location de voitures à Casablanca',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Voiture Casablanca au Meilleur Prix | VOGCAR',
  twitterDescription:
    'Location de voitures à Casablanca avec VOGCAR. Découvrez notre parc automobile et nos services.',
  twitterImage: `${config.public.mediaUrl}/images/vog-car-hero.jpg`
})
</script>
