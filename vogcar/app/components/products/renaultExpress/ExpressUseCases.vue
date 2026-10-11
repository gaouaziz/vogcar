<template>
  <section
    id="usages"
    class="bg-white py-20 sm:py-24 border-t border-gray-100"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
        <span
          class="inline-flex rounded-full bg-[#eefaf8] px-4 py-2 text-sm font-semibold text-[#008f83]"
        >
          Usages professionnels
        </span>
        <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl">
          Votre activité, vos marchandises, vos livraisons
        </h2>
      </div>

      <!-- Layout Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: Photographie de l'espace de chargement -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-md aspect-[4/5] lg:aspect-auto lg:h-[580px]">
            <NuxtImg
              :src="`${config.public.mediaUrl}/images/renault-express-cargo.jpg`"
              alt="Espace de chargement du Renault Express avec cartons VOG CAR"
              sizes="xs:100vw sm:80vw lg:40vw"
              loading="lazy"
              class="w-full h-full object-cover transform hover:scale-102 transition duration-500"
            />
            <!-- Overlay dégradé discret en bas de l'image -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#102a43]/20 via-transparent to-transparent" />
          </div>

          <!-- Élément décoratif en arrière-plan -->
          <div
            class="absolute -left-6 -bottom-6 h-48 w-48 rounded-2xl bg-[#eefaf8] -z-10"
            aria-hidden="true"
          />
        </div>

        <!-- Right Column: Liste interactive des cas d'usage -->
        <div class="lg:col-span-7 space-y-6">
          <div
            v-for="(useCase, index) in useCases"
            :key="useCase.title"
            class="group flex gap-4 p-6 rounded-2xl border border-transparent transition duration-200 hover:border-gray-100 hover:bg-gray-50/80"
          >
            <!-- Indicateur numérique stylisé -->
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-sm font-bold text-[#008f83] group-hover:bg-[#008f83] group-hover:text-white transition duration-200">
              0{{ index + 1 }}
            </div>

            <!-- Contenu textuel -->
            <div>
              <h3 class="text-lg font-bold text-[#102a43] group-hover:text-[#008f83] transition duration-200">
                {{ useCase.title }}
              </h3>
              <p class="mt-2 text-base leading-7 text-gray-600">
                {{ useCase.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

interface UseCaseItem {
  title: string
  description: string
}

// Data mapping for Renault Express real-world use cases
const useCases: UseCaseItem[] = [
  {
    title: 'Approvisionnement commercial',
    description: 'Récupérez vos marchandises auprès de vos fournisseurs et transportez-les vers votre commerce.'
  },
  {
    title: 'Livraison aux clients',
    description: 'Organisez vos livraisons de produits et de commandes auprès des professionnels ou des particuliers.'
  },
  {
    title: 'Transport entre dépôts et magasins',
    description: 'Déplacez des marchandises entre votre stock, votre dépôt et vos différents points de vente.'
  },
  {
    title: 'Tournées commerciales',
    description: 'Planifiez vos déplacements professionnels pour desservir plusieurs clients dans la journée.'
  },
  {
    title: 'Transport de matériel',
    description: 'Utilisez le véhicule pour déplacer les équipements et fournitures nécessaires à votre activité.'
  }
]
</script>
