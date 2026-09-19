<template>
  <section
    id="services"
    class="bg-[#eefaf8] py-20 lg:py-24"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div class="mx-auto max-w-2xl text-center">
        <p
          class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
        >
          Nos services
        </p>

        <h2
          class="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl"
        >
          Des solutions adaptées à vos besoins
        </h2>

        <p class="mt-4 leading-7 text-gray-600">
          Découvrez nos services pour faciliter vos déplacements et votre
          expérience de location.
        </p>
      </div>

      <!-- Services -->
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Airport -->
        <article
          class="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#008f83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-7"
              />
            </svg>
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            Aéroport
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Une solution pratique pour vos déplacements depuis ou vers
            l'aéroport.
          </p>

          <a
            href="#contacts"
            class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#008f83]"
          >
            En savoir plus
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </article>

        <!-- Chauffeur -->
        <article
          class="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#008f83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 20h14M7 20v-4a5 5 0 0110 0v4M9 7a3 3 0 116 0"
              />
            </svg>
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            Voiture avec chauffeur
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Profitez d'un service avec chauffeur pour vos déplacements.
          </p>

          <a
            href="#contacts"
            class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#008f83]"
          >
            En savoir plus
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </article>

        <!-- 7/7 -->
        <article
          class="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#008f83] text-white"
          >
            <span class="text-sm font-bold">
              7/7
            </span>
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            7/7 jours
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Un service disponible tous les jours pour répondre à vos besoins.
          </p>

          <a
            href="tel:0615121097"
            class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#008f83]"
          >
            Nous contacter
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </article>

        <!-- Assistance -->
        <article
          class="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#008f83] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17v-2a3 3 0 016 0v2M5 21h14M12 3a4 4 0 110 8 4 4 0 010-8z"
              />
            </svg>
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            Accompagnement
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Une équipe à votre écoute pour vous accompagner dans votre
            réservation.
          </p>

          <a
            href="#contacts"
            class="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#008f83]"
          >
            Nous contacter
            <span class="transition group-hover:translate-x-1">→</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
