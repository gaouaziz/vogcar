<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: 'Quels sont les documents nécessaires pour louer un véhicule ?',
    answer:
      'Vous devez présenter un permis de conduire en cours de validité, une pièce d\'identité (carte d\'identité ou passeport) ainsi qu\'une carte bancaire au nom du conducteur principal pour le dépôt de garantie.'
  },
  {
    question: 'Comment fonctionne la restitution du véhicule à l\'aéroport ?',
    answer:
      'Un agent VOG CAR vous accueille directement au point de rendez-vous convenu à votre terminal de départ pour effectuer un état des lieux rapide et récupérer les clés, garantissant un transfert sans stress.'
  },
  {
    question: 'Est-il possible d\'annuler ou modifier une réservation ?',
    answer:
      'Oui, les modifications et annulations sont possibles selon les conditions de votre réservation. Nous vous invitons à contacter notre service client au plus tôt afin de réajuster les dates de prise en charge de votre véhicule.'
  },
  {
    question: 'Quel est l\'âge minimum requis pour louer une voiture ?',
    answer:
      'L\'âge minimum requis est généralement de 21 ans, avec au moins 1 ou 2 ans de permis de conduire selon la catégorie du véhicule sélectionné.'
  },
  {
    question: 'Le kilométrage est-il illimité ?',
    answer:
      'Nos offres incluent différents forfaits kilométriques. Des options avec kilométrage illimité peuvent être proposées selon le véhicule et le contrat choisi.'
  },
  {
    question: 'Que comprend le service d\'assistance VOG CAR ?',
    answer:
      'Notre service d\'assistance accompagne les clients en cas d\'imprévu. Les conditions, horaires et services couverts dépendent du contrat choisi. Contactez VOG CAR pour connaître les modalités applicables à votre location.'
  }
]

// Gère l'index de la question actuellement ouverte (0 pour la première par défaut)
const activeIndex = ref<number | null>(0)

// Fonction pour basculer l'ouverture unique
const toggleFaq = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null // Referme si on clique sur la question déjà ouverte
  } else {
    activeIndex.value = index // Ouvre la nouvelle et ferme l'ancienne
  }
}
</script>

<template>
  <section
    id="faq"
    aria-labelledby="faq-title"
    class="bg-gray-50 py-20 lg:py-28"
  >
    <div
      class="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-8"
    >
      <!-- ========================================= -->
      <!-- FAQ CONTENT -->
      <!-- ========================================= -->
      <div class="order-2 lg:order-1">
        <!-- Section label -->
        <p
          class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
        >
          Questions fréquentes
        </p>

        <!-- Title -->
        <h2
          id="faq-title"
          class="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#102a43] sm:text-4xl"
        >
          Des réponses à vos questions
        </h2>

        <!-- Introduction -->
        <p class="mt-5 max-w-2xl text-base leading-7 text-gray-600">
          Vous souhaitez en savoir plus sur la location de voiture,
          les réservations ou nos services ? Retrouvez ici les réponses
          aux questions les plus fréquentes concernant VOG CAR.
        </p>

        <!-- FAQ list (Accordéon Unique) -->
        <div class="mt-8 space-y-3">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="overflow-hidden rounded-xl border bg-white shadow-sm transition duration-200"
            :class="[
              activeIndex === index
                ? 'border-[#008f83]/60 shadow-md'
                : 'border-gray-200 hover:border-[#008f83]/40 hover:shadow-md'
            ]"
          >
            <!-- Question Button -->
            <button
              type="button"
              class="flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left text-sm font-bold text-[#102a43] outline-none transition sm:text-base"
              @click="toggleFaq(index)"
            >
              <span>
                {{ faq.question }}
              </span>

              <!-- Arrow -->
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008f83]/10 text-[#008f83] transition-transform duration-300"
                :class="{ 'rotate-180': activeIndex === index }"
                aria-hidden="true"
              >
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <!-- Answer Container (Animation d'ouverture) -->
            <div
              v-show="activeIndex === index"
              class="border-t border-gray-100 px-5 pb-5 pt-4"
            >
              <p class="text-sm leading-7 text-gray-600">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================= -->
      <!-- IMAGE -->
      <!-- ========================================= -->
      <div class="order-1 flex justify-center lg:order-2">
        <div class="relative w-full max-w-[440px]">
          <!-- Main image container -->
          <div
            class="relative aspect-square overflow-hidden rounded-full border border-gray-100 bg-white p-6 shadow-xl sm:p-8"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-[#eefaf8]"
            >
              <img
                src="/images/vog-car-keys.png"
                alt="Clés de voiture pour une location VOG CAR"
                class="h-auto w-[88%] max-w-[360px] object-contain"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
