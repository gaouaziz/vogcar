<template>
  <section class="relative overflow-hidden bg-[#003f3b] pt-20 text-white">
    <!-- Background Image & Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        :src="`${config.public.mediaUrl}/images/fiat-scudo-hero.jpg`"
        alt="Fiat Scudo automatique 2025 VOG CAR"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
        loading="eager"
        fetchpriority="high"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-[#003f3b]/95 via-[#003f3b]/80 to-[#003f3b]/35" />
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#48d5c7]/20"
      aria-hidden="true"
    />
    <div
      class="absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#48d5c7]/10"
      aria-hidden="true"
    />

    <!-- Content Area -->
    <div class="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-20 lg:px-8">
      <div class="max-w-3xl">
        <!-- Badge -->
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-[#48d5c7]/30 bg-[#008f83]/20 px-4 py-2 text-sm font-semibold text-[#48d5c7] backdrop-blur-sm"
        >
          <span
            class="h-2 w-2 rounded-full bg-[#48d5c7] shadow-[0_0_12px_rgba(72,213,199,0.8)]"
          />
          Solution transport de groupe
        </div>

        <!-- Heading -->
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Transportez votre groupe
          <span class="text-[#48d5c7]">en toute sérénité.</span>
        </h1>

        <!-- Description -->
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          Fiat Scudo automatique 2025, 1 + 8 places :
          une solution confortable et pratique pour les transferts,
          excursions, voyages et déplacements professionnels à Casablanca.
        </p>

        <!-- CTA Buttons -->
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/contact#demande-devis"
            class="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/15"
          >
            Demander un devis
          </NuxtLink>

          <NuxtLink
            to="#solution"
            class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Découvrir la solution
          </NuxtLink>
        </div>

        <!-- Key specs grid (DRY Loop Optimization) -->
        <div class="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          <div
            v-for="spec in carSpecs"
            :key="spec.label"
            class="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
          >
            <p class="text-2xl font-bold">
              {{ spec.value }}
            </p>
            <p class="mt-1 text-xs text-white/60">
              {{ spec.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Loop optimization array for key specs data mapping
const carSpecs = [
  { value: '1 + 8', label: 'places' },
  { value: '2025', label: 'modèle' },
  { value: 'Auto', label: 'transmission' },
  { value: 'Pro', label: 'usage' }
]
</script>
