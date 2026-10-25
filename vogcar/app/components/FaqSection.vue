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
          FAQ : Louer une voiture à Casablanca
        </h2>

        <!-- Introduction -->
        <p
          class="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg"
        >
          Vous souhaitez en savoir plus sur les conditions de <strong>location de voiture à Casablanca</strong>,
          les modalités de réservation à l'aéroport ou nos tarifs ? Retrouvez ici toutes les réponses
          aux questions fréquentes concernant l'agence VOGCAR.
        </p>

        <!-- FAQ Accordion List -->
        <div class="mt-8 space-y-4 max-w-2xl">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="rounded-xl border border-gray-200/60 bg-white p-4 shadow-sm transition-all"
          >
            <button
              class="flex w-full items-center justify-between text-left font-semibold text-[#102a43] transition hover:text-[#008f83]"
              @click="toggleFaq(index)"
            >
              <span>{{ item.question }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0 text-[#008f83] transition-transform duration-300"
                :class="{ 'rotate-180': activeIndex === index }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              v-show="activeIndex === index"
              class="mt-3 text-sm leading-6 text-gray-600 border-t border-gray-100 pt-3"
            >
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>

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

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()
const activeIndex = ref(null)

const faqItems = ref([
  {
    question: 'Quelles sont les conditions pour louer une voiture à Casablanca chez VOGCAR ?',
    answer: 'Pour louer un véhicule, le conducteur doit être âgé d\'au moins 21 ans et posséder un permis de conduire valide depuis plus de 2 ans. Une pièce d\'identité (passeport ou CIN) ainsi qu\'une caution sont également requises lors de la signature du contrat de location.'
  },
  {
    question: 'Proposez-vous la livraison de voiture à l\'aéroport de Casablanca (CMN) ?',
    answer: 'Oui, VOGCAR propose un service de livraison et de restitution directement à l\'aéroport Mohammed V de Casablanca. Nos agents vous attendent à la sortie du terminal pour vous remettre les clés de votre voiture de location dès votre arrivée.'
  },
  {
    question: 'Quels types de véhicules sont disponibles dans votre agence ?',
    answer: 'Notre flotte automobile comprend une large sélection de véhicules récents et parfaitement entretenus : des citadines économiques idéales pour circuler dans Casablanca, des berlines confortables, des SUV spacieux ainsi que des véhicules familiaux comme le Fiat Scudo (9 places).'
  },
  {
    question: 'Comment puis-je réserver une voiture et quel est le prix moyen ?',
    answer: 'Vous pouvez effectuer une demande de réservation directement en ligne via notre formulaire ou nous contacter par WhatsApp. Nos tarifs débutent à partir de 199 Dh par jour selon le modèle sélectionné et la durée de votre location.'
  }
])

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
