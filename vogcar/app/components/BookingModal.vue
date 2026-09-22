<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        >
          <!-- Close -->
          <button
            type="button"
            class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
            aria-label="Fermer"
            @click="close"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Header -->
          <div class="bg-[#003f3b] px-6 py-7 text-white sm:px-8">
            <p
              class="mb-1 text-sm font-semibold uppercase tracking-wider text-[#48d5c7]"
            >
              Réservation
            </p>

            <h2 class="text-2xl font-bold sm:text-3xl">
              Réserver votre voiture
            </h2>

            <p class="mt-2 text-sm text-white/80">
              Complétez le formulaire et notre équipe vous contactera
              rapidement.
            </p>
          </div>

          <!-- Selected car -->
          <div
            v-if="car"
            class="mx-6 mt-6 flex items-center gap-4 rounded-xl border border-[#008f83]/20 bg-[#eefaf8] p-4 sm:mx-8"
          >
            <img
              :src="getCarImage(car)"
              :alt="car.name"
              class="h-20 w-28 rounded-lg object-cover"
            >

            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-[#008f83]"
              >
                Véhicule sélectionné
              </p>

              <h3 class="mt-1 text-lg font-bold text-[#102a43]">
                {{ car.name }}
              </h3>

              <p class="text-sm text-gray-600">
                {{ car.category }}
                <span v-if="car.transmission">
                  · {{ car.transmission }}
                </span>
              </p>
            </div>
          </div>

          <!-- Form -->
          <form
            class="space-y-5 p-6 sm:p-8"
            @submit.prevent="submitReservation"
          >
            <!-- Name / Phone -->
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  for="reservation-name"
                  class="mb-2 block text-sm font-semibold text-[#102a43]"
                >
                  Nom complet *
                </label>

                <input
                  id="reservation-name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
                >
              </div>

              <div>
                <label
                  for="reservation-phone"
                  class="mb-2 block text-sm font-semibold text-[#102a43]"
                >
                  Téléphone *
                </label>

                <input
                  id="reservation-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="06 15 12 10 97"
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
                >
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                for="reservation-email"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Email
                <span class="font-normal text-gray-400">
                  (facultatif)
                </span>
              </label>

              <input
                id="reservation-email"
                v-model="form.email"
                type="email"
                placeholder="votre@email.com"
                class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              >
            </div>

            <!-- Dates -->
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  for="reservation-start"
                  class="mb-2 block text-sm font-semibold text-[#102a43]"
                >
                  Date de départ *
                </label>

                <input
                  id="reservation-start"
                  v-model="form.date_begin"
                  type="date"
                  required
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
                >
              </div>

              <div>
                <label
                  for="reservation-end"
                  class="mb-2 block text-sm font-semibold text-[#102a43]"
                >
                  Date de retour *
                </label>

                <input
                  id="reservation-end"
                  v-model="form.date_end"
                  type="date"
                  required
                  class="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
                >
              </div>
            </div>

            <!-- Message -->
            <div>
              <label
                for="reservation-message"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Message
                <span class="font-normal text-gray-400">
                  (facultatif)
                </span>
              </label>

              <textarea
                id="reservation-message"
                v-model="form.message"
                rows="4"
                placeholder="Précisez vos besoins ou demande particulière..."
                class="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              />
            </div>

            <!-- Error -->
            <div
              v-if="errorMessage"
              class="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700"
            >
              {{ errorMessage }}
            </div>

            <!-- Success -->
            <div
              v-if="success"
              class="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700"
            >
              ✓ Votre demande de réservation a bien été envoyée.
              Notre équipe vous contactera prochainement.
            </div>

            <!-- Actions -->
            <div
              class="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end"
            >
              <button
                type="button"
                class="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                @click="close"
              >
                Annuler
              </button>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex items-center justify-center gap-2 rounded-xl bg-[#008f83] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#00766d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span v-if="isSubmitting">
                  Envoi...
                </span>

                <span v-else>
                  Envoyer ma demande
                </span>

                <svg
                  v-if="!isSubmitting"
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
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Car {
  id: number
  matricule: string
  name: string
  category: string
  transmission?: string
  image_url?: string | null
}

const props = defineProps<{
  isOpen: boolean
  car: Car | null
}>()

const emit = defineEmits<{
  close: []
  success: []
}>()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  date_begin: '',
  date_end: '',
  message: ''
})

const isSubmitting = ref(false)
const success = ref(false)
const errorMessage = ref('')

const getCarImage = (car: Car) => {
  return car.image_url
    ? `/images/cars/${car.image_url}`
    : '/images/cars/default-car.jpg'
}

const close = () => {
  emit('close')
}

const resetForm = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.date_begin = ''
  form.date_end = ''
  form.message = ''

  success.value = false
  errorMessage.value = ''
}

const submitReservation = async () => {
  if (!props.car) {
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''
  success.value = false

  try {
    await $fetch('/api/booking', {
      method: 'POST',

      body: {
        car_id: props.car.matricule,
        car_name: props.car.name,

        name: form.name,
        phone: form.phone,
        email: form.email || null,

        date_begin: form.date_begin,
        date_end: form.date_end,

        message: form.message || null
      }
    })

    success.value = true

    emit('success')

    setTimeout(() => {
      resetForm()
      close()
    }, 2500)
  } catch (error) {
    console.error(error)

    errorMessage.value
      = 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
