<template>
  <section class="bg-[#eefaf8] py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Content -->
        <div>
          <span
            class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#008f83]"
          >
            Pour les professionnels
          </span>

          <h2
            class="mt-5 text-3xl font-extrabold tracking-tight text-[#102a43] sm:text-4xl"
          >
            Une solution pour tous vos déplacements de groupe.
          </h2>

          <p class="mt-5 text-lg leading-8 text-gray-600">
            Que vous organisiez un transfert, une excursion ou un
            séjour touristique, le Fiat Scudo vous permet de proposer
            une solution de transport adaptée à vos clients.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="flex items-start gap-3">
              <span class="text-xl">🏨</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Hôtels & Riads
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Transferts et déplacements des clients.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-xl">🌍</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Agences de tourisme
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Excursions et circuits touristiques.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-xl">✈️</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Transferts aéroport
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Accueil et transfert des groupes.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-xl">🧳</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Agences de voyages
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Transport pour vos programmes et séjours.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-xl">🚐</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Chauffeurs touristiques
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Un véhicule adapté à votre activité.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-xl">🏢</span>
              <div>
                <h3 class="font-bold text-[#102a43]">
                  Entreprises
                </h3>
                <p class="mt-1 text-sm text-gray-600">
                  Déplacements professionnels en groupe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div
            class="absolute -bottom-5 -left-5 h-32 w-32 rounded-3xl bg-[#008f83]/20"
          />

          <img
            :src="`${config.public.mediaUrl}/images/fiat-scudo-tourism.jpg`"
            alt="Fiat Scudo pour transport touristique"
            class="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
          >

          <div
            class="absolute bottom-6 right-6 rounded-2xl bg-white p-5 shadow-xl"
          >
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Capacité
            </p>

            <p class="mt-1 text-2xl font-extrabold text-[#008f83]">
              1 + 8
            </p>

            <p class="text-sm text-gray-500">
              chauffeur + passagers
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
