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
          Votre agence de location de voiture à Casablanca
        </h2>

        <p class="mt-4 leading-7 text-gray-600">
          Découvrez des services sur-mesure conçus pour faciliter vos déplacements au Maroc, maximiser votre confort et vous garantir une expérience de location de véhicule fluide, transparente et sereine.
        </p>
      </div>

      <!-- Services (Configuration sur 2 colonnes par ligne) -->
      <div class="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <!-- Airport -->
        <article
          class="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            Location de voiture à l'Aéroport de Casablanca
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Simplifiez vos arrivées et départs grâce à notre service de livraison directe de voiture à l'aéroport Mohammed V (CMN). Nous suivons votre vol en temps réel afin de garantir la mise à disposition immédiate de votre véhicule dès votre atterrissage.
          </p>
        </article>

        <!-- Chauffeur -->
        <article
          class="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            Location avec Chauffeur Privé
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Installez-vous confortablement et laissez-vous conduire par nos chauffeurs professionnels à Casablanca. Idéale pour vos rendez-vous d'affaires ou circuits touristiques, cette option vous évite le stress du trafic urbain et du stationnement.
          </p>
        </article>

        <!-- 7/7 -->
        <article
          class="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#008f83] text-white"
          >
            <span class="text-sm font-bold">
              7/7
            </span>
          </div>

          <h3 class="mt-6 text-xl font-bold text-[#102a43]">
            Agence de Location Disponible 7j/7
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Parce que vos besoins de mobilité n'attendent pas, notre agence reste pleinement opérationnelle tous les jours à Casablanca, week-ends et jours fériés inclus. Réservez, retirez ou restituez vos voitures selon votre propre calendrier.
          </p>
        </article>

        <!-- Assistance -->
        <article
          class="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
            Assistance & Suivi Personnalisé
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Profitez d'un accompagnement sur-mesure pour votre location automobile. Nos conseillers dédiés vous guident vers le meilleur choix de véhicule et vous apportent une assistance continue pour répondre à tous vos imprévus de route.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
