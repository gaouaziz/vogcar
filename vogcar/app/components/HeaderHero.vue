<template>
  <section
    id="accueil"
    class="relative flex min-h-[720px] items-center bg-cover bg-center pt-20"
    style="background-image: url('/images/vog-car-hero.jpg')"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#003f3b]/70" />

    <div class="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
      <div class="max-w-3xl text-white">
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

        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/90">
          Découvrez une solution simple et pratique pour louer votre voiture.
          VOG CAR vous accompagne pour vos déplacements professionnels,
          personnels et vos transferts depuis l'aéroport.
        </p>
      </div>

      <!-- Booking form -->
      <div
        class="mt-10 rounded-2xl bg-white p-5 shadow-2xl sm:p-6 lg:p-7"
      >
        <form
          class="grid gap-4 lg:grid-cols-5"
          @submit.prevent
        >
          <!-- Location -->
          <div>
            <label
              for="location"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Lieu de prise en charge
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
                  d="M17.657 16.657L13.414 21a2 2 0 01-2.828 0l-4.243-4.343a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <input
                id="location"
                type="text"
                placeholder="Aéroport, ville..."
                class="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
              >
            </div>
          </div>

          <!-- Date départ -->
          <div>
            <label
              for="departure"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Date de départ
            </label>

            <input
              id="departure"
              type="date"
              class="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
            >
          </div>

          <!-- Date retour -->
          <div>
            <label
              for="return"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Date de retour
            </label>

            <input
              id="return"
              type="date"
              class="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
            >
          </div>

          <!-- Vehicle -->
          <div>
            <label
              for="vehicle"
              class="mb-2 block text-xs font-semibold text-[#102a43]"
            >
              Type de véhicule
            </label>

            <select
              id="vehicle"
              class="w-full rounded-xl border border-gray-200 px-3 py-3 text-sm text-gray-600 outline-none transition focus:border-[#008f83] focus:ring-2 focus:ring-[#008f83]/20"
            >
              <option value="">
                Tous les types
              </option>
              <option value="citadine">
                Citadine
              </option>
              <option value="berline">
                Berline
              </option>
              <option value="suv">
                SUV
              </option>
              <option value="utilitaire">
                Utilitaire
              </option>
            </select>
          </div>

          <!-- Button -->
          <div class="flex items-end">
            <button
              type="submit"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f83] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00766d]"
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
                  d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>

              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
