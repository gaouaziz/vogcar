<template>
  <section class="bg-[#102a43] py-24 text-white sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="inline-flex rounded-full border border-[#48d5c7]/30 bg-[#008f83]/20 px-4 py-2 text-sm font-bold text-[#48d5c7]"
        >
          Notre processus
        </span>

        <h2
          class="mt-5 text-3xl font-black tracking-tight sm:text-4xl"
        >
          Une campagne en quelques étapes.
        </h2>

        <p class="mt-5 text-lg leading-8 text-white/60">
          De votre première idée au déploiement de votre flotte,
          VOG CAR vous accompagne dans la préparation de votre
          opération.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative mt-16">
        <!-- Desktop line -->
        <div
          class="absolute left-[10%] right-[10%] top-10 hidden h-px bg-white/10 lg:block"
        />

        <div class="grid gap-10 lg:grid-cols-5">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative text-center"
          >
            <div
              class="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#48d5c7]/30 bg-[#003f3b] text-xl font-black text-[#48d5c7]"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <h3 class="mt-6 font-bold">
              {{ step.title }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-white/50">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Votre brief',
    description:
      'Partagez-nous votre objectif, votre audience et votre zone de campagne.'
  },
  {
    title: 'Concept',
    description:
      'Nous définissons ensemble le format et l’approche de votre opération.'
  },
  {
    title: 'Personnalisation',
    description:
      'Les Citroën Ami sont préparées selon votre identité visuelle.'
  },
  {
    title: 'Déploiement',
    description:
      'Votre flotte est mise en circulation selon le planning convenu.'
  },
  {
    title: 'Campagne',
    description:
      'Votre marque circule dans la ville et rencontre son audience.'
  }
]
</script>
