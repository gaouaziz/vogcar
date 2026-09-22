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
          Découvrez nos services complets conçus pour faciliter vos déplacements, maximiser votre confort et garantir une expérience de location fluide et sereine.
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
            Service Aéroport
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Simplifiez vos arrivées et départs grâce à notre prise en charge directe aux terminaux. Nous suivons l'état de votre vol en temps réel afin de garantir la mise à disposition immédiate de votre véhicule dès votre atterrissage, même en cas de retard, vous évitant ainsi de longues files d'attente.
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
            Location avec Chauffeur
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Installez-vous confortablement et laissez-vous conduire par nos chauffeurs professionnels et bilingues. Idéale pour vos rendez-vous professionnels, vos événements privés ou vos circuits touristiques, cette option vous permet de vous concentrer sur vos priorités en évitant le stress du trafic et du stationnement.
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
            Disponibilité 7j/7
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Parce que vos besoins de mobilité n'attendent pas, notre agence reste pleinement opérationnelle tous les jours de la semaine, y compris les week-ends et les jours fériés. Vous bénéficiez ainsi d'une flexibilité totale pour planifier, réserver, retirer ou restituer vos véhicules selon votre propre calendrier.
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
            Accompagnement & Suivi
          </h3>

          <p class="mt-3 text-sm leading-6 text-gray-600">
            Profitez d'un service client sur-mesure dès le premier contact. Nos conseillers dédiés vous guident dans le choix de la catégorie de véhicule la plus adaptée et vous apportent une assistance continue tout au long de votre contrat de location pour répondre à vos demandes spécifiques et imprévus de route.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
