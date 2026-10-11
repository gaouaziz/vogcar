<template>
  <section
    id="public-cible"
    class="bg-gray-50 py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
        >
          Pour qui ?
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl"
        >
          Une solution pensée pour les professionnels de Casablanca
        </h2>

        <p class="mt-5 text-lg leading-8 text-gray-600">
          Que vous soyez grossiste, commerçant ou distributeur, le Renault Express Van peut vous accompagner dans vos opérations quotidiennes de transport et de livraison.
        </p>
      </div>

      <!-- Target Audience Grid (DRY Loop Optimization) -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="target in targets"
          :key="target.title"
          class="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Card Image Section -->
          <div class="relative h-48 w-full bg-gray-100">
            <NuxtImg
              :src="`${config.public.mediaUrl}/images/${target.imageName}`"
              :alt="`${target.title} - Location Renault Express`"
              sizes="xs:100vw sm:50vw lg:33vw"
              loading="lazy"
              class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <!-- Card Content Section -->
          <div class="flex flex-1 flex-col p-8">
            <h3 class="text-xl font-bold text-[#102a43] tracking-tight">
              {{ target.title }}
            </h3>
            <p class="mt-4 flex-1 text-base leading-7 text-gray-600">
              {{ target.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

interface TargetItem {
  title: string
  description: string
  imageName: string
}

// Optimization array for targeted B2B market sectors in Casablanca
const targets: TargetItem[] = [
  {
    title: 'Grossistes de Derb Omar',
    description: 'Vous travaillez dans le commerce de gros à Derb Omar ? Facilitez le transport de vos marchandises entre vos fournisseurs, votre magasin et vos clients professionnels.',
    imageName: 'target-derb-omar.jpg'
  },
  {
    title: 'Distributeurs et grandes surfaces',
    description: 'Pour vos besoins en transport complémentaire, approvisionnement de point de vente ou livraisons locales de type Atacadao, découvrez une option utilitaire flexible et parfaitement adaptée à votre logistique réelle.',
    imageName: 'target-distribution.jpg'
  },
  {
    title: 'Commerçants et détaillants',
    description: 'Transportez vos achats, réapprovisionnez votre boutique et organisez vos livraisons en fonction du flux quotidien de votre activité.',
    imageName: 'target-retail.jpg'
  },
  {
    title: 'E-commerçants',
    description: 'Facilitez le transport de vos commandes, gérez vos retours de marchandises et fluidifiez la distribution de vos produits auprès de vos clients finaux.',
    imageName: 'target-ecommerce.jpg'
  },
  {
    title: 'Fournisseurs et représentants',
    description: 'Déplacez vos produits, échantillons volumineux et stocks promotionnels en toute sécurité lors de vos tournées commerciales régulières.',
    imageName: 'target-sales.jpg'
  },
  {
    title: 'Artisans et petites entreprises',
    description: 'Transportez votre matériel, vos outils de travail et vos équipements encombrants lors de vos interventions sur vos chantiers professionnels.',
    imageName: 'target-artisans.jpg'
  }
]
</script>
