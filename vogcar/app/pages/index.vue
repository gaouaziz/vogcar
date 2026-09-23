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
  title: 'VOG CAR | Location de voitures à Casablanca',
  description:
    'Découvrez VOG CAR, votre partenaire pour la location de voitures à Casablanca. Une gamme de véhicules adaptée à vos besoins, avec un service simple, flexible et professionnel.',

  ogTitle: 'VOG CAR | Location de voitures à Casablanca',
  ogDescription:
    'Découvrez VOG CAR, votre partenaire pour la location de voitures à Casablanca. Une gamme de véhicules adaptée à vos besoins, avec un service simple, flexible et professionnel.',
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogImage: `${config.public.siteUrl}/images/vog-car-hero.jpg`,
  ogImageAlt: 'VOG CAR - Location de voitures à Casablanca',

  twitterCard: 'summary_large_image',
  twitterTitle: 'VOG CAR | Location de voitures à Casablanca',
  twitterDescription:
    'Location de voitures à Casablanca avec VOG CAR. Découvrez notre parc automobile et nos services.',
  twitterImage: `${config.public.siteUrl}/images/vog-car-hero.jpg`
})
</script>
