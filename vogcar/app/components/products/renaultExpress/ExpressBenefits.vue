<template>
  <section
    id="solution"
    class="bg-white py-20 sm:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex rounded-full bg-[#eefaf8] px-4 py-2 text-sm font-semibold text-[#008f83]"
        >
          Pourquoi le Renault Express ?
        </span>

        <h2
          class="mt-5 text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl"
        >
          Une solution pratique pour vos activités commerciales
        </h2>

        <p class="mt-5 text-lg leading-8 text-gray-600">
          Chaque journée compte lorsqu'on travaille dans le commerce. VOG CAR vous propose une solution de location utilitaire pour faciliter vos déplacements professionnels et le transport de vos marchandises.
        </p>
      </div>

      <!-- Benefits Grid (DRY Loop Optimization) -->
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <!-- Emoji Icon Container -->
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eefaf8] text-2xl"
          >
            {{ benefit.emoji }}
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            {{ benefit.title }}
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Loop optimization array for utility benefits data mapping
const benefits = [
  {
    emoji: '📦',
    title: 'Transportez vos marchandises',
    description: 'Déplacez vos cartons, vos produits et vos commandes entre votre fournisseur, votre dépôt et vos clients.'
  },
  {
    emoji: '🚐',
    title: 'Facilitez vos livraisons',
    description: 'Organisez vos tournées de livraison à Casablanca et dans les environs selon les besoins de votre activité.'
  },
  {
    emoji: '🏢',
    title: 'Simplifiez votre approvisionnement',
    description: 'Récupérez vos marchandises chez les grossistes et fournisseurs et transportez-les vers votre magasin ou votre entrepôt.'
  },
  {
    emoji: '📅',
    title: 'Adaptez votre transport',
    description: 'Choisissez une formule de location adaptée à vos besoins professionnels, selon les disponibilités et les conditions proposées par VOG CAR.'
  }
]
</script>
