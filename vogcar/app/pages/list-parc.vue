<template>
  <div class="min-h-screen bg-white">
    <!-- ====================================================== -->
    <!-- HERO -->
    <!-- ====================================================== -->
    <section
      class="relative flex min-h-[420px] items-center overflow-hidden"
    >
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/vog-car-list-parc.jpg')"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-[#102a43]/80"
      />

      <!-- Hero content -->
      <div
        class="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8"
      >
        <div class="max-w-3xl">
          <p
            class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#48d5c7]"
          >
            Notre parc automobile
          </p>

          <h1
            class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Trouvez le véhicule
            <span class="text-[#48d5c7]">
              qui vous correspond
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            Découvrez notre sélection de véhicules disponibles à la location.
            Citadines, berlines, SUV et véhicules familiaux pour vos
            déplacements professionnels ou personnels.
          </p>

          <a
            href="#parc"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-[#008f83] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#00766d]"
          >
            Découvrir notre parc

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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- FLEET -->
    <!-- ====================================================== -->
    <section
      id="parc"
      class="bg-gray-50 py-20 lg:py-28"
    >
      <div
        class="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <!-- Section heading -->
        <div
          class="mx-auto max-w-2xl text-center"
        >
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Nos véhicules
          </p>

          <h2
            class="mt-3 text-3xl font-bold leading-tight text-[#102a43] sm:text-4xl"
          >
            Une gamme adaptée à vos besoins
          </h2>

          <p
            class="mt-5 text-base leading-7 text-gray-600"
          >
            Choisissez le véhicule qui correspond à votre déplacement
            et contactez-nous pour votre réservation.
          </p>
        </div>

        <!-- ================================================== -->
        <!-- LOADING -->
        <!-- ================================================== -->
        <div
          v-if="pending"
          class="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <!-- Image skeleton -->
            <div
              class="aspect-[16/10] animate-pulse bg-gray-200"
            />

            <div class="space-y-4 p-6">
              <div
                class="h-6 w-2/3 animate-pulse rounded bg-gray-200"
              />

              <div
                class="h-4 w-full animate-pulse rounded bg-gray-200"
              />

              <div
                class="h-16 animate-pulse rounded bg-gray-200"
              />

              <div
                class="h-12 animate-pulse rounded-xl bg-gray-200"
              />
            </div>
          </div>
        </div>

        <!-- ================================================== -->
        <!-- ERROR -->
        <!-- ================================================== -->

        <div
          v-else-if="error"
          class="mx-auto mt-14 max-w-xl rounded-2xl border border-red-200 bg-red-50 p-8 text-center"
        >
          <div
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600"
          >
            !
          </div>

          <h3
            class="mt-4 text-lg font-bold text-red-700"
          >
            Impossible de charger les véhicules
          </h3>

          <p
            class="mt-2 text-sm text-red-600"
          >
            Une erreur est survenue lors de la récupération
            de notre parc automobile.
          </p>

          <button
            type="button"
            class="mt-5 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
            @click="refresh()"
          >
            Réessayer
          </button>
        </div>

        <!-- ================================================== -->
        <!-- EMPTY -->
        <!-- ================================================== -->

        <div
          v-else-if="!cars || cars.length === 0"
          class="mx-auto mt-14 max-w-xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eefaf8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-[#008f83]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13l2-5a2 2 0 011.9-1.3h10.2A2 2 0 0119 8l2 5m-18 0h18v4a1 1 0 01-1 1h-1a2 2 0 01-4 0H9a2 2 0 01-4 0H4a1 1 0 01-1-1v-4zm4-6h10"
              />
            </svg>
          </div>

          <h3
            class="mt-5 text-xl font-bold text-[#102a43]"
          >
            Aucun véhicule disponible
          </h3>

          <p
            class="mt-2 text-sm leading-6 text-gray-500"
          >
            Notre parc est actuellement indisponible.
            N'hésitez pas à nous contacter pour connaître
            les prochaines disponibilités.
          </p>
        </div>

        <!-- ================================================== -->
        <!-- CARS -->
        <!-- ================================================== -->

        <div
          v-else
          class="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <article
            v-for="car in cars"
            :key="car.id"
            class="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <!-- ============================================== -->
            <!-- IMAGE -->
            <!-- ============================================== -->

            <div
              class="relative aspect-[16/10] overflow-hidden bg-gray-100"
            >
              <img
                :src="getCarImage(car)"
                :alt="`${car.name} - VOG CAR`"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              >

              <!-- Category -->
              <span
                class="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#008f83] shadow-md"
              >
                {{ car.category }}
              </span>

              <!-- Availability -->
              <span
                class="absolute right-4 top-4 rounded-full bg-[#008f83] px-3 py-1.5 text-xs font-bold text-white shadow-md"
              >
                Disponible
              </span>
            </div>

            <!-- ============================================== -->
            <!-- CONTENT -->
            <!-- ============================================== -->

            <div
              class="flex flex-1 flex-col p-6"
            >
              <!-- Name -->
              <div>
                <h3
                  class="text-xl font-bold text-[#102a43]"
                >
                  {{ car.name }}
                </h3>

                <!-- Description -->
                <p
                  v-if="car.description"
                  class="mt-2 line-clamp-2 text-sm leading-6 text-gray-500"
                >
                  {{ car.description }}
                </p>
              </div>

              <!-- ========================================== -->
              <!-- OPTIONS -->
              <!-- ========================================== -->

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-gray-100 py-5"
              >
                <!-- Transmission -->
                <div
                  class="flex items-center gap-2"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eefaf8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-[#008f83]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v12m0 0l-3-3m3 3l3-3M7 6h10"
                      />
                    </svg>
                  </div>

                  <div>
                    <p class="text-[11px] uppercase tracking-wide text-gray-400">
                      Transmission
                    </p>

                    <p class="text-sm font-semibold text-gray-700">
                      {{ car.transmission }}
                    </p>
                  </div>
                </div>

                <!-- Fuel -->
                <div
                  class="flex items-center gap-2"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eefaf8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-[#008f83]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 2v20M6 4h8a2 2 0 012 2v5H6M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2"
                      />
                    </svg>
                  </div>

                  <div>
                    <p class="text-[11px] uppercase tracking-wide text-gray-400">
                      Carburant
                    </p>

                    <p class="text-sm font-semibold text-gray-700">
                      {{ car.fuel }}
                    </p>
                  </div>
                </div>

                <!-- Seats -->
                <div
                  class="flex items-center gap-2"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eefaf8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-[#008f83]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87"
                      />
                    </svg>
                  </div>

                  <div>
                    <p class="text-[11px] uppercase tracking-wide text-gray-400">
                      Places
                    </p>

                    <p class="text-sm font-semibold text-gray-700">
                      {{ car.seats }}
                    </p>
                  </div>
                </div>

                <!-- Luggage -->
                <div
                  class="flex items-center gap-2"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eefaf8]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4 text-[#008f83]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 7h12l1 14H5L6 7zM9 7V5a3 3 0 016 0v2"
                      />
                    </svg>
                  </div>

                  <div>
                    <p class="text-[11px] uppercase tracking-wide text-gray-400">
                      Bagages
                    </p>

                    <p class="text-sm font-semibold text-gray-700">
                      {{ car.luggage }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- ========================================== -->
              <!-- PRICE -->
              <!-- ========================================== -->

              <div
                class="mt-5 flex items-end justify-between"
              >
                <div>
                  <p
                    class="text-xs uppercase tracking-wide text-gray-400"
                  >
                    À partir de
                  </p>

                  <div
                    class="mt-1 flex items-baseline gap-1"
                  >
                    <span
                      class="text-2xl font-bold text-[#102a43]"
                    >
                      {{ formatPrice(car.price_per_day) }}
                    </span>

                    <span
                      class="text-sm text-gray-500"
                    >
                      DH / jour
                    </span>
                  </div>
                </div>

                <!-- Second price -->
                <div
                  class="text-right"
                >
                  <p
                    class="text-xs text-gray-400"
                  >
                    Tarif longue durée
                  </p>

                  <p
                    class="mt-1 text-sm font-bold text-[#008f83]"
                  >
                    {{ formatPrice(car.second_price_per_day) }} DH / jour
                  </p>
                </div>
              </div>

              <!-- ========================================== -->
              <!-- CTA -->
              <!-- ========================================== -->

              <button
                type="button"
                class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f83] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00766d]"
                @click="openReservation(car)"
              >
                Réserver cette voiture

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
              </button>
            </div>
          </article>
          <BookingModal
            :is-open="isReservationOpen"
            :car="selectedCar"
            @close="closeReservation"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const isReservationOpen = ref(false)
const selectedCar = ref<Car | null>(null)

const openReservation = (car: Car) => {
  selectedCar.value = car
  isReservationOpen.value = true
}

const closeReservation = () => {
  isReservationOpen.value = false
  selectedCar.value = null
}

interface Car {
  id: number
  matricule: string
  name: string
  description: string | null
  category: string
  transmission: 'Manuelle' | 'Automatique'
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Électrique'
  seats: number | null
  luggage: number | null
  price_per_day: number
  second_price_per_day: number
  days: number
  kilometrage: number
  date_assurance: string | null
  date_viste: string | null
  date_begin: string | null
  date_end: string | null
  image_url: string | null
  available: number
}

useSeoMeta({
  title: 'Liste de parc | VOG CAR',
  description:
    'Découvrez le parc automobile VOG CAR. Citadines, berlines, SUV et véhicules familiaux disponibles à la location.',
  ogTitle: 'Liste de parc | VOG CAR',
  ogDescription:
    'Découvrez les véhicules disponibles chez VOG CAR et choisissez celui qui correspond à vos besoins.',
  ogImage: '/images/og-vog-car.jpg'
})

const {
  data: cars,
  pending,
  error,
  refresh
} = await useFetch<Car[]>('/api/cars', {
  default: () => []
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price)
}

const getCarImage = (car: Car) => {
  if (!car.image_url) {
    return '/images/cars/jetour-t2-2026.png'
  }

  return `/images/cars/${car.image_url}`
}
</script>
