<template>
  <section
    class="relative isolate overflow-hidden bg-[#003f3b] pt-20"
  >
    <!-- Background image -->
    <div class="absolute inset-0">
      <img
        :src="`${config.public.mediaUrl}/images/citroen-ami-hero.jpg?v=1.0`"
        alt="Citroën Ami électrique pour publicité mobile à Casablanca"
        class="h-full w-full object-cover"
      >

      <!-- Dark gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#003f3b]/95 via-[#003f3b]/75 to-[#003f3b]/25"
      />

      <!-- Bottom gradient -->
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#003f3b] to-transparent"
      />
    </div>

    <!-- Decorative shapes -->
    <div
      class="absolute -right-32 top-32 h-80 w-80 rounded-full border border-white/10"
    />

    <div
      class="absolute -right-20 top-48 h-56 w-56 rounded-full border border-[#48d5c7]/20"
    />

    <!-- Content -->
    <div
      class="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-8"
    >
      <div class="max-w-3xl">
        <!-- Badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#48d5c7]/30 bg-[#008f83]/20 px-4 py-2 text-sm font-semibold text-[#48d5c7] backdrop-blur-sm"
        >
          <span
            class="h-2 w-2 rounded-full bg-[#48d5c7] shadow-[0_0_12px_rgba(72,213,199,0.8)]"
          />
          Solution publicitaire mobile
        </div>

        <!-- Main title -->
        <h1
          class="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Votre marque
          <span class="text-[#48d5c7]">
            en mouvement.
          </span>
        </h1>

        <!-- Description -->
        <p
          class="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
        >
          Transformez plusieurs
          <strong class="font-semibold text-white">
            Citroën Ami électriques
          </strong>
          en supports publicitaires mobiles et faites circuler votre marque
          dans Casablanca.
        </p>

        <!-- CTA -->
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/contact#demande-devis"
            class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15"
          >
            Demander un devis
          </NuxtLink>
        </div>

        <!-- Trust / benefits -->
        <div
          class="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/15 pt-7 sm:grid-cols-3"
        >
          <!-- Visibility -->
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#48d5c7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.5"
                />
              </svg>
            </div>

            <div>
              <p class="text-sm font-semibold text-white">
                Visibilité locale
              </p>
              <p class="text-xs text-white/55">
                Dans toute la ville
              </p>
            </div>
          </div>

          <!-- Fleet -->
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#48d5c7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13h18M5 13l1.5-5h11L19 13M7 17h.01M17 17h.01M5 17a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>

            <div>
              <p class="text-sm font-semibold text-white">
                Flotte personnalisée
              </p>
              <p class="text-xs text-white/55">
                À votre image
              </p>
            </div>
          </div>

          <!-- Electric -->
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#48d5c7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                />
              </svg>
            </div>

            <div>
              <p class="text-sm font-semibold text-white">
                100 % électrique
              </p>
              <p class="text-xs text-white/55">
                Mobilité urbaine
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom scroll indicator -->
    <div
      class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 sm:flex"
    >
      <span class="text-[10px] uppercase tracking-[0.25em]">
        Découvrir
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
