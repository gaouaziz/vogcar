<template>
  <section
    id="faq"
    class="bg-white py-20 sm:py-24 border-t border-gray-100"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <span
          class="inline-flex rounded-full bg-[#eefaf8] border border-[#008f83]/20 px-4 py-2 text-sm font-semibold text-[#008f83]"
        >
          Questions fréquentes
        </span>
        <h2 class="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl text-[#102a43]">
          Foire aux questions des professionnels
        </h2>
        <p class="mt-4 text-base text-gray-600">
          Trouvez des réponses rapides aux questions les plus courantes concernant la location du Renault Express Van chez VOG CAR.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="mx-auto max-w-3xl space-y-4">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="rounded-2xl border border-gray-200/80 bg-gray-50/50 overflow-hidden transition-all duration-300"
          :class="{ 'border-[#008f83]/30 bg-[#eefaf8]/30': activeIndex === index }"
        >
          <!-- Question Header Button -->
          <button
            type="button"
            class="flex w-full items-center justify-between px-6 py-5 text-left font-bold text-lg text-[#102a43] transition focus:outline-none"
            @click="toggleFaq(index)"
          >
            <span>{{ item.question }}</span>
            <span
              class="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-200 text-[#008f83] transition-colors"
              :class="{ 'border-[#008f83]/20 bg-[#eefaf8]': activeIndex === index }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': activeIndex === index }"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>

          <!-- Accordion Answer Area with smooth height Transition -->
          <div
            v-show="activeIndex === index"
            class="px-6 pb-5 text-base leading-7 text-gray-600 border-t border-gray-100 pt-4 transition-all duration-300"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Tracks the currently opened FAQ index (-1 means all collapsed)
const activeIndex = ref<number | null>(null)

interface FaqItem {
  question: string
  answer: string
}

// Structured data mapping for the professional B2B FAQ section
const faqItems: FaqItem[] = [
  {
    question: 'À qui s\'adresse cette solution de location ?',
    answer: 'Elle s\'adresse notamment aux grossistes, commerçants, distributeurs, fournisseurs, e-commerçants et entreprises ayant besoin de transporter des marchandises.'
  },
  {
    question: 'Puis-je utiliser le véhicule pour mes livraisons à Casablanca ?',
    answer: 'Le véhicule peut être adapté aux livraisons professionnelles locales, sous réserve de respecter sa capacité de chargement et les conditions de location.'
  },
  {
    question: 'Puis-je demander une location pour plusieurs jours ?',
    answer: 'Vous pouvez préciser la durée souhaitée dans le formulaire. VOG CAR pourra vous renseigner selon les disponibilités et les formules proposées.'
  },
  {
    question: 'Comment obtenir un tarif professionnel ?',
    answer: 'Remplissez le formulaire de demande de devis en précisant votre activité, la durée de location et vos besoins.'
  },
  {
    question: 'Le véhicule est-il disponible immédiatement ?',
    answer: 'La disponibilité doit être confirmée par l\'équipe VOG CAR au moment de votre demande.'
  }
]

// Handles accordion open/close logic exclusively
const toggleFaq = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
