<template>
  <section class="bg-[#eefaf8] py-24 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Text -->
        <div>
          <span
            class="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-[#008f83] shadow-sm"
          >
            Pour les professionnels
          </span>

          <h2
            class="mt-5 text-3xl font-black tracking-tight text-[#102a43] sm:text-4xl"
          >
            Une solution pensée
            <span class="text-[#008f83]">
              pour les marques.
            </span>
          </h2>

          <p class="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            Que vous soyez une marque, une agence ou une entreprise,
            notre flotte de Citroën Ami peut devenir un véritable
            support de communication mobile.
          </p>

          <a
            href="#devis"
            class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#008f83] px-6 py-3.5 font-bold text-white transition hover:bg-[#00766d]"
          >
            Discuter de votre campagne

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
                d="M5 12h14m-6-6l6 6"
              />
            </svg>
          </a>
        </div>

        <!-- Targets -->
        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="target in targets"
            :key="target"
            class="flex items-center gap-4 rounded-2xl border border-white bg-white p-5 shadow-sm"
          >
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-[#008f83]"
            >
              ✓
            </div>

            <span class="font-semibold text-[#102a43]">
              {{ target }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const targets = [
  'Marketing Managers',
  'Grandes marques',
  'Retail & Distribution',
  'Food & Beverage',
  'Tech & Startups',
  'Événements & Festivals',
  'Hôtels & Tourisme',
  'Agences de communication'
]
</script>
