<template>
  <section
    id="a-propos"
    class="bg-white py-20 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8"
    >
      <!-- Image -->
      <div class="relative">
        <img
          :src="`${config.public.mediaUrl}/images/vog-car-about.jpg`"
          alt="Véhicules VOGCAR disponibles à la location"
          class="w-full rounded-2xl object-cover shadow-xl"
        >

        <!-- Badge optimisé : Texte et icône mis à jour pour correspondre à la charte graphique -->
        <div
          class="absolute bottom-6 left-6 flex items-center gap-4 rounded-xl bg-[#003f3b] px-5 py-4 text-white shadow-lg backdrop-blur-sm"
        >
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#48d5c7]/20 text-[#48d5c7]"
          >
            <!-- Icône Utilisateur / Flotte moderne en SVG -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>

          <div>
            <p class="text-sm font-bold tracking-wide">
              Des véhicules récents
            </p>

            <p class="text-xs text-white/80">
              et bien entretenus
            </p>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div>
        <p
          class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
        >
          À propos de VOGCAR
        </p>

        <h2
          class="mt-3 text-3xl font-bold leading-tight text-[#102a43] sm:text-4xl"
        >
          Votre partenaire pour la location de voitures
        </h2>

        <p class="mt-6 leading-8 text-gray-600">
          Spécialiste de la <strong>location de voiture à Casablanca</strong>,
          <strong>VOGCAR</strong> vous propose des solutions de mobilité simples,
          flexibles et adaptées à tous vos besoins. Que vous soyez de passage au
          Maroc pour un déplacement professionnel, des vacances en famille ou
          simplement à la recherche d'un véhicule pour vos trajets quotidiens en ville,
          notre agence vous accompagne à chaque étape.
        </p>

        <p class="mt-4 leading-8 text-gray-600">
          Notre objectif est de vous permettre de réserver votre véhicule en ligne
          facilement et au meilleur tarif, tout en profitant d'un service de confiance
          entièrement pensé pour votre confort.
        </p>

        <!-- Features -->
        <div class="mt-8 grid gap-5 sm:grid-cols-3">
          <div>
            <div
              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#008f83]/10 text-[#008f83]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 class="font-bold text-[#102a43]">
              Véhicules récents
            </h3>

            <p class="mt-1 text-sm text-gray-500">
              Des véhicules adaptés à vos déplacements.
            </p>
          </div>

          <div>
            <div
              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#008f83]/10 text-[#008f83]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 class="font-bold text-[#102a43]">
              Service client
            </h3>

            <p class="mt-1 text-sm text-gray-500">
              Une équipe disponible pour vous accompagner.
            </p>
          </div>

          <div>
            <div
              class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#008f83]/10 text-[#008f83]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 class="font-bold text-[#102a43]">
              Réservation facile
            </h3>

            <p class="mt-1 text-sm text-gray-500">
              Une demande de réservation simple et rapide.
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
