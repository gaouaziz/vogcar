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
        style="background-image: url('/images/vog-car-contact-hero.jpg')"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-[#102a43]/80"
      />

      <!-- Content -->
      <div
        class="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8"
      >
        <div class="max-w-3xl">
          <p
            class="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#48d5c7]"
          >
            Contactez-nous
          </p>

          <h1
            class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Parlons de votre
            <span class="text-[#48d5c7]">
              prochaine location
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            Une question, une demande de réservation ou besoin d'un
            renseignement ? Notre équipe VOG CAR est à votre écoute.
          </p>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- CONTACT INFORMATION -->
    <!-- ====================================================== -->

    <section
      class="bg-gray-50 py-20 lg:py-28"
    >
      <div
        class="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <!-- Heading -->
        <div
          class="mx-auto max-w-2xl text-center"
        >
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Nos coordonnées
          </p>

          <h2
            class="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl"
          >
            Nous sommes à votre écoute
          </h2>

          <p
            class="mt-5 text-base leading-7 text-gray-600"
          >
            Retrouvez toutes les informations nécessaires pour
            nous contacter ou nous rendre visite.
          </p>
        </div>

        <!-- Contact cards -->
        <div
          class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <!-- Address -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 21.9a2 2 0 01-2.828 0l-4.243-5.243A8 8 0 1117.657 16.657z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3
              class="mt-5 font-bold text-[#102a43]"
            >
              Notre adresse
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              15 rue Anoussour - ex Conflans
              <br>
              Quartier Mers Sultan 2
              <br>
              Casablanca - Maroc
            </p>
          </div>

          <!-- Phone -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515L11 8a2 2 0 01-.55 1.95l-1.27 1.27a16 16 0 006.6 6.6l1.27-1.27A2 2 0 0119 16l3.485.78A2 2 0 0124 18.72V22a2 2 0 01-2 2C10.059 24 0 13.941 0 2a2 2 0 012-2h3.28"
                />
              </svg>
            </div>

            <h3
              class="mt-5 font-bold text-[#102a43]"
            >
              Téléphone
            </h3>

            <div class="mt-3 space-y-1">
              <a
                href="tel:+212522207459"
                class="block text-sm font-semibold text-gray-600 transition hover:text-[#008f83]"
              >
                05 22 20 74 59
              </a>

              <a
                href="tel:+212615121097"
                class="block text-sm font-semibold text-gray-600 transition hover:text-[#008f83]"
              >
                06 15 12 10 97
              </a>
            </div>
          </div>

          <!-- Opening hours -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7v5l3 2"
                />
              </svg>
            </div>

            <h3
              class="mt-5 font-bold text-[#102a43]"
            >
              Horaires
            </h3>

            <p
              class="mt-3 text-sm font-semibold text-gray-600"
            >
              7 jours / 7
            </p>

            <p
              class="mt-1 text-sm text-[#008f83]"
            >
              09:00 - 20:00
            </p>
          </div>

          <!-- Location -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-[#008f83]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l6 2V8l-6-2m0 12V6"
                />
              </svg>
            </div>

            <h3
              class="mt-5 font-bold text-[#102a43]"
            >
              Nous trouver
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Retrouvez facilement notre agence à Casablanca.
            </p>

            <a
              href="https://www.google.com/maps/place/VOG+CAR/@33.5844919,-7.620359,17z"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir sur Google Maps

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

            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- CONTACT FORM + MAP -->
    <!-- ====================================================== -->

    <section
      class="bg-white py-20 lg:py-28"
    >
      <div
        class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8"
      >
        <!-- ================================================== -->
        <!-- FORM -->
        <!-- ================================================== -->

        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Envoyez-nous un message
          </p>

          <h2
            class="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl"
          >
            Comment pouvons-nous vous aider ?
          </h2>

          <p
            class="mt-5 text-base leading-7 text-gray-600"
          >
            Remplissez le formulaire et notre équipe vous répondra
            dans les meilleurs délais.
          </p>

          <!-- Success message -->
          <div
            v-if="submitted"
            class="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5"
          >
            <div class="flex gap-3">
              <div
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white"
              >
                ✓
              </div>

              <div>
                <p
                  class="font-bold text-green-800"
                >
                  Message envoyé
                </p>

                <p
                  class="mt-1 text-sm text-green-700"
                >
                  Merci pour votre message. Nous vous contacterons
                  prochainement.
                </p>
              </div>
            </div>
          </div>

          <!-- Form -->
          <form
            class="mt-8 space-y-5"
            @submit.prevent="submitForm"
          >
            <!-- Name -->
            <div>
              <label
                for="name"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Nom complet
              </label>

              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Votre nom complet"
                class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#008f83] focus:bg-white focus:ring-2 focus:ring-[#008f83]/10"
              >
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Téléphone
              </label>

              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                placeholder="06 15 12 10 97"
                class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#008f83] focus:bg-white focus:ring-2 focus:ring-[#008f83]/10"
              >
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Email
                <span class="font-normal text-gray-400">
                  (facultatif)
                </span>
              </label>

              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="votre@email.com"
                class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#008f83] focus:bg-white focus:ring-2 focus:ring-[#008f83]/10"
              >
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="mb-2 block text-sm font-semibold text-[#102a43]"
              >
                Votre message
              </label>

              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Comment pouvons-nous vous aider ?"
                class="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#008f83] focus:bg-white focus:ring-2 focus:ring-[#008f83]/10"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f83] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#00766d] focus:outline-none focus:ring-2 focus:ring-[#008f83] focus:ring-offset-2"
            >
              Envoyer mon message

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
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </button>
          </form>
        </div>

        <!-- ================================================== -->
        <!-- MAP -->
        <!-- ================================================== -->

        <div>
          <div
            class="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-lg"
          >
            <!-- Google Maps -->
            <iframe
              src="https://www.google.com/maps?q=33.5844919,-7.620359&z=17&output=embed"
              width="100%"
              height="520"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Localisation VOG CAR à Casablanca"
            />
          </div>

          <!-- Address under map -->
          <div
            class="mt-5 rounded-2xl bg-[#eefaf8] p-5"
          >
            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#008f83] text-white"
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
                    d="M17.657 16.657L13.414 21.9a2 2 0 01-2.828 0l-4.243-5.243A8 8 0 1117.657 16.657z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div>
                <p
                  class="font-bold text-[#102a43]"
                >
                  VOG CAR
                </p>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600"
                >
                  15 rue Anoussour - ex Conflans<br>
                  Quartier Mers Sultan 2<br>
                  Casablanca - Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/contact`
    }
  ]
})
useSeoMeta({
  title: 'VOG CAR | Location de voitures à Casablanca',
  description:
    'Contactez VOG CAR pour vos besoins de location de voitures à Casablanca. Retrouvez notre adresse, nos numéros de téléphone et nos horaires d’ouverture.',
  ogTitle: 'Contactez VOG CAR',
  ogDescription:
    'VOG CAR - Location de voitures à Casablanca. Retrouvez nos coordonnées et contactez-nous.',
  ogImage: `${config.public.siteUrl}/images/og-vog-car.jpg`
})

// ============================================================
// Form
// ============================================================

// Structure initiale du formulaire pour pouvoir la réinitialiser facilement
const initialForm = {
  name: '',
  phone: '',
  email: '',
  message: ''
}

const form = reactive({ ...initialForm })

const isSubmitting = ref(false)
const submitted = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  // Évite les soumissions doubles si l'utilisateur clique plusieurs fois
  if (isSubmitting.value) return

  isSubmitting.value = true
  errorMessage.value = ''
  submitted.value = false

  try {
    // Appel à l'API de contact Nuxt 3 créée précédemment
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        phone: form.phone,
        email: form.email,
        message: form.message
      }
    })

    // Si l'appel réussit
    submitted.value = true

    // Réinitialisation propre du formulaire
    Object.assign(form, initialForm)
  } catch (error) {
    // Capture de l'erreur renvoyée par le serveur ou le réseau
    errorMessage.value = error.statusMessage || 'Une erreur est survenue lors de l\'envoi.'
    console.error('Erreur soumission formulaire:', error)
  } finally {
    // Fin de l'état de chargement dans tous les cas
    isSubmitting.value = false
  }
}
</script>
