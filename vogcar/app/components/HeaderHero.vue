<template>
  <section
    id="accueil"
    class="relative flex min-h-[720px] items-center bg-cover bg-center pt-20"
    :style="`background-image: url(${config.public.mediaUrl}/images/vog-car-hero.jpg)`"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#003f3b]/30" />

    <div class="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <!-- ============================================== -->
      <!-- HERO TEXT -->
      <!-- ============================================== -->

      <div class="max-w-3xl text-white drop-shadow-md">
        <p
          class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#48d5c7]"
        >
          Location de voitures
        </p>

        <h1
          class="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Votre voiture de location
          <span class="text-[#48d5c7]">
            en toute confiance
          </span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-white">
          Découvrez une solution simple et pratique pour louer votre voiture.
          VOGCAR vous accompagne pour vos déplacements professionnels,
          personnels et vos transferts depuis l'aéroport.
        </p>
      </div>

      <!-- ============================================== -->
      <!-- BOOKING FORM -->
      <!-- ============================================== -->

      <div
        class="mt-10 rounded-2xl bg-white p-5 shadow-2xl sm:p-6 lg:p-7"
      >
        <form
          class="grid gap-4 lg:grid-cols-5"
          @submit.prevent="submitBooking"
        >
          <!-- ========================================== -->
          <!-- NOM COMPLET -->
          <!-- ========================================== -->

          <div>
            <label
              for="booking-name"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Nom complet
            </label>

            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 21a8 8 0 0116 0"
                />
              </svg>

              <input
                id="booking-name"
                v-model="form.name"
                type="text"
                placeholder="Votre nom complet"
                required
                autocomplete="name"
                class="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              >
            </div>
          </div>

          <!-- ========================================== -->
          <!-- TELEPHONE -->
          <!-- ========================================== -->

          <div>
            <label
              for="booking-phone"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Téléphone
            </label>

            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.82 3.28a2 2 0 01-.57 1.94l-1.8 1.8a16.001 16.001 0 006.586 6.586l1.8-1.8a2 2 0 011.94-.57l3.28.82A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1C9.611 24 0 14.389 0 6V5a2 2 0 012-2h1z"
                />
              </svg>

              <input
                id="booking-phone"
                v-model="form.phone"
                type="tel"
                placeholder="06 91 71 17 32"
                required
                autocomplete="tel"
                class="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              >
            </div>
          </div>

          <!-- ========================================== -->
          <!-- DATE DE DÉPART -->
          <!-- ========================================== -->

          <div>
            <label
              for="booking-departure"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Date de départ
            </label>

            <input
              id="booking-departure"
              v-model="form.date_begin"
              type="date"
              :min="today"
              required
              class="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
            >
          </div>

          <!-- ========================================== -->
          <!-- DATE DE RETOUR -->
          <!-- ========================================== -->

          <div>
            <label
              for="booking-return"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Date de retour
            </label>

            <input
              id="booking-return"
              v-model="form.date_end"
              type="date"
              :min="form.date_begin || today"
              required
              class="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
            >
          </div>

          <!-- ========================================== -->
          <!-- VOITURE -->
          <!-- ========================================== -->

          <div class="relative">
            <label
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Liste de voiture
            </label>

            <!-- Selected car -->
            <button
              type="button"
              class="flex min-h-[50px] w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 text-left outline-none transition hover:border-[#008f83] focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              @click="isCarDropdownOpen = !isCarDropdownOpen"
            >
              <!-- Selected image -->
              <div
                v-if="selectedCar"
                class="h-10 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-100"
              >
                <img
                  :src="getCarImage(selectedCar)"
                  :alt="selectedCar.name"
                  class="h-full w-full object-cover"
                >
              </div>

              <!-- Placeholder -->
              <div
                v-else
                class="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-[#eefaf8]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-[#008f83]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 17h14M7 17l1-5h8l1 5M9 12l1.5-3h3L15 12M6 17v2m12-2v2"
                  />
                </svg>
              </div>

              <!-- Selected information -->
              <div class="min-w-0 flex-1">
                <template v-if="selectedCar">
                  <p
                    class="truncate text-sm font-semibold text-[#102a43]"
                  >
                    {{ selectedCar.name }}
                  </p>

                  <p class="truncate text-[11px] text-gray-400">
                    {{ selectedCar.transmission }}
                    <span class="mx-1">•</span>
                    {{ selectedCar.fuel }}
                  </p>
                </template>

                <p
                  v-else
                  class="text-sm text-gray-400"
                >
                  Choisir une voiture
                </p>
              </div>

              <!-- Chevron -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 shrink-0 text-gray-400 transition"
                :class="{ 'rotate-180': isCarDropdownOpen }"
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

            <!-- Cars dropdown -->
            <div
              v-if="isCarDropdownOpen"
              class="absolute left-0 right-0 top-full z-40 mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
            >
              <!-- Loading -->
              <div
                v-if="pending"
                class="px-3 py-5 text-center text-sm text-gray-500"
              >
                Chargement des voitures...
              </div>

              <!-- Error -->
              <div
                v-else-if="error"
                class="px-3 py-5 text-center text-sm text-red-500"
              >
                Impossible de charger les voitures.
              </div>

              <!-- Empty -->
              <div
                v-else-if="!cars.length"
                class="px-3 py-5 text-center text-sm text-gray-500"
              >
                Aucune voiture disponible.
              </div>

              <!-- Cars -->
              <button
                v-for="car in cars"
                :key="car.id"
                type="button"
                class="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-[#eefaf8]"
                :class="{
                  'bg-[#eefaf8]': form.car_id === car.id
                }"
                @click="selectCar(car)"
              >
                <!-- Image -->
                <div
                  class="h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100"
                >
                  <img
                    :src="getCarImage(car)"
                    :alt="car.name"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  >
                </div>

                <!-- Details -->
                <div class="min-w-0 flex-1">
                  <p
                    class="truncate text-sm font-bold text-[#102a43]"
                  >
                    {{ car.name }}
                  </p>

                  <div
                    class="mt-1 flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-gray-500"
                  >
                    <span>{{ car.transmission }}</span>
                    <span>•</span>
                    <span>{{ car.fuel }}</span>
                  </div>
                </div>

                <!-- Check -->
                <svg
                  v-if="form.car_id === car.id"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 text-[#008f83]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- ========================================== -->
          <!-- SUBMIT -->
          <!-- ========================================== -->

          <div class="lg:col-span-5">
            <button
              type="submit"
              :disabled="isSubmitting || !selectedCar"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f83] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00766d] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                v-if="!isSubmitting"
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
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>

              <svg
                v-else
                class="h-5 w-5 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              {{ isSubmitting ? 'Envoi en cours...' : 'Réserver cette voiture' }}
            </button>
          </div>

          <!-- ========================================== -->
          <!-- SUCCESS -->
          <!-- ========================================== -->

          <div
            v-if="successMessage"
            class="lg:col-span-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
          >
            {{ successMessage }}
          </div>

          <!-- ========================================== -->
          <!-- ERROR -->
          <!-- ========================================== -->

          <div
            v-if="errorMessage"
            class="lg:col-span-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const config = useRuntimeConfig()

// ==============================================
// CAR TYPE
// ==============================================

interface Car {
  id: number
  name: string
  description: string | null
  category: string
  transmission: 'Manuelle' | 'Automatique'
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
  year: number | null
  seats: number | null
  luggage: number | null
  image_url: string | null
  price_per_day: number
  second_price_per_day: number
  available: number
}

// ==============================================
// LOAD CARS
// ==============================================

const {
  data: cars,
  pending,
  error
} = await useFetch<Car[]>('/api/cars', {
  default: () => []
})

// ==============================================
// FORM
// ==============================================

const form = ref({
  name: '',
  phone: '',
  date_begin: '',
  date_end: '',
  car_id: null as number | null
})

// ==============================================
// UI STATE
// ==============================================

const isCarDropdownOpen = ref(false)
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// ==============================================
// TODAY
// ==============================================

const today = computed(() => {
  const date = new Date()

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
})

// ==============================================
// SELECTED CAR
// ==============================================

const selectedCar = computed(() => {
  if (!form.value.car_id) {
    return null
  }

  return (
    cars.value.find(
      car => car.id === form.value.car_id
    ) || null
  )
})

// ==============================================
// CAR IMAGE
// ==============================================

const getCarImage = (car: Car) => {
  if (!car.image_url) {
    return `${config.public.mediaUrl}/images/cars/default-car.jpg`
  }

  return `${config.public.mediaUrl}/images/cars/${car.image_url}`
}

// ==============================================
// SELECT CAR
// ==============================================

const selectCar = (car: Car) => {
  form.value.car_id = car.id
  isCarDropdownOpen.value = false
}

// ==============================================
// SUBMIT
// ==============================================

const submitBooking = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!form.value.car_id || !selectedCar.value) {
    errorMessage.value = 'Veuillez sélectionner une voiture.'
    return
  }

  if (form.value.date_end < form.value.date_begin) {
    errorMessage.value
      = 'La date de retour doit être après la date de départ.'
    return
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/booking', {
      method: 'POST',
      body: {
        car_id: selectedCar.value.id,
        car_name: selectedCar.value.name,
        name: form.value.name,
        phone: form.value.phone,
        email: null,
        date_begin: form.value.date_begin,
        date_end: form.value.date_end,
        message: null
      }
    })

    successMessage.value
      = 'Votre demande de réservation a bien été envoyée. Nous vous contacterons rapidement.'

    form.value = {
      name: '',
      phone: '',
      date_begin: '',
      date_end: '',
      car_id: null
    }
  } catch (err) {
    console.error(err)

    errorMessage.value
      = 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
