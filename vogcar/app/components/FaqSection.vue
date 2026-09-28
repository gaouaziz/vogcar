<template>
  <section
    id="faq"
    aria-labelledby="faq-title"
    class="relative overflow-hidden bg-[#eefaf8] py-20 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-8"
    >
      <!-- ========================================= -->
      <!-- FAQ CONTENT -->
      <!-- ========================================= -->
      <div class="order-2 lg:order-1">
        <!-- Section label -->
        <div class="mb-4 flex items-center gap-3">
          <span class="h-px w-10 bg-[#008f83]" />

          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-[#008f83]"
          >
            Questions fréquentes
          </p>
        </div>

        <!-- Title -->
        <h2
          id="faq-title"
          class="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-4xl lg:text-5xl"
        >
          Des réponses à vos questions
        </h2>

        <!-- Introduction -->
        <p
          class="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg"
        >
          Vous souhaitez en savoir plus sur la location de voiture,
          les réservations ou nos services ? Retrouvez ici les réponses
          aux questions les plus fréquentes concernant VOGCAR.
        </p>

        <!-- Bottom contact -->
        <div
          class="mt-8 flex flex-col gap-4 rounded-2xl border border-[#008f83]/15 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="font-bold text-[#102a43]">
              Vous avez une autre question ?
            </p>

            <p class="mt-1 text-sm text-gray-500">
              Notre équipe est disponible 7 jours / 7.
            </p>
          </div>

          <NuxtLink
            to="/contact"
            class="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#008f83] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00766d]"
          >
            Nous contacter

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6l6 6-6 6"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- ========================================= -->
      <!-- IMAGE -->
      <!-- ========================================= -->
      <div class="order-1 lg:order-2">
        <div class="relative mx-auto max-w-[480px] lg:max-w-none">
          <!-- Decorative background -->
          <div
            class="absolute -right-5 -top-5 h-40 w-40 rounded-3xl bg-[#48d5c7]/30 sm:-right-7 sm:-top-7"
          />

          <div
            class="absolute -bottom-5 -left-5 h-32 w-32 rounded-3xl bg-[#008f83]/15 sm:-bottom-7 sm:-left-7"
          />

          <!-- Main image -->
          <div
            class="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl"
          >
            <div class="aspect-[4/5] overflow-hidden">
              <img
                :src="`${config.public.mediaUrl}/images/vog-car-keys.png`"
                alt="Location de voiture VOGCAR à Casablanca"
                class="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
                decoding="async"
              >
            </div>

            <!-- Image overlay -->
            <div
              class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102a43]/90 via-[#102a43]/40 to-transparent px-6 pb-6 pt-20"
            >
              <p class="text-sm font-medium text-white/80">
                VOGCAR
              </p>

              <p class="mt-1 text-xl font-bold text-white">
                Votre mobilité, notre priorité.
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
</script>
