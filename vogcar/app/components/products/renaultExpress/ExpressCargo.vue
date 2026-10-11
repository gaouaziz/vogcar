<template>
  <section
    id="capacite-chargement"
    class="bg-gray-50 py-20 sm:py-24 border-t border-gray-100"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="mx-auto max-w-4xl text-center mb-16 sm:mb-20">
        <span
          class="inline-flex rounded-full bg-[#eefaf8] px-4 py-2 text-sm font-semibold text-[#008f83]"
        >
          Renault Professionnel
        </span>
        <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl">
          L'espace nécessaire pour vos opérations quotidiennes
        </h2>
        <p class="mt-5 text-lg leading-8 text-gray-600">
          Le Renault Express Van est conçu pour les professionnels qui ont besoin d'un véhicule utilitaire compact et fonctionnel. Sa configuration optimisée offre l'un des meilleurs rapports d'Europe et du Maroc entre compacité extérieure et volume intérieur.
        </p>
      </div>

      <!-- Layout Grid (Specs left, Photo right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left Column: 4 Key Figures Grid -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="spec in cargoSpecs"
            :key="spec.label"
            class="rounded-3xl border border-gray-200/60 bg-white p-8 shadow-sm transition duration-300 hover:shadow-md"
          >
            <!-- Large Stat Figure -->
            <p class="text-4xl font-black tracking-tight text-[#008f83] sm:text-5xl">
              {{ spec.value }}
            </p>

            <!-- Label -->
            <h3 class="mt-4 text-lg font-bold text-[#102a43]">
              {{ spec.label }}
            </h3>

            <!-- Sub-description for clarity -->
            <p class="mt-2 text-sm text-gray-500 leading-normal">
              {{ spec.subText }}
            </p>
          </div>
        </div>

        <!-- Right Column: Large Cargo Area Photograph -->
        <div class="lg:col-span-6">
          <div class="relative rounded-3xl overflow-hidden border border-gray-200/50 bg-white shadow-lg aspect-[4/3] lg:aspect-[16/11]">
            <NuxtImg
              :src="`${config.public.mediaUrl}/images/renault-express-delivery.jpg`"
              alt="Compartiment de chargement arrière ouvert du Renault Express Van avec cartons VOG CAR"
              sizes="xs:100vw sm:90vw lg:50vw"
              loading="lazy"
              class="w-full h-full object-cover transform hover:scale-101 transition duration-500"
            />
            <!-- Visual Badge Overlaid on Photo -->
            <div class="absolute bottom-6 right-6 rounded-2xl bg-[#102a43]/90 px-5 py-3 text-xs font-medium text-white backdrop-blur-sm border border-white/10 hidden sm:block">
              Configuration Maroc officielle
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

interface CargoSpecItem {
  value: string
  label: string
  subText: string
}

// Data mapping of verified Moroccan market utility specs for Renault Express 2025
const cargoSpecs: CargoSpecItem[] = [
  {
    value: '3,3 m³',
    label: 'Volume de chargement',
    subText: 'Un espace généreux et entièrement tôlé pour sécuriser vos marchandises.'
  },
  {
    value: '702 kg',
    label: 'Charge utile',
    subText: 'Capacité de charge maximale optimale selon la configuration présentée.'
  },
  {
    value: '1,915 m',
    label: 'Longueur de charge',
    subText: 'Longueur maximale disponible au plancher avec cloison de séparation complète.'
  },
  {
    value: '716 mm',
    label: 'Accès latéral',
    subText: 'Largeur d’ouverture record pour la porte latérale coulissante.'
  }
]
</script>
