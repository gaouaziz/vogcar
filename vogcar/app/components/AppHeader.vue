<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <!-- Logo -->
      <a
        href="h-1/5"
        class="flex items-center"
      >
        <img
          src="/images/logo-vog-car.png"
          alt="VOG CAR - Location de voitures"
          class="h-14 w-auto"
        >
      </a>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-8 lg:flex">
        <!-- Remplacer les <a> par des <NuxtLink> (ou <RouterLink> si projet Vue classique) -->
        <NuxtLink
          to="/"
          class="py-7 text-sm transition hover:text-[#008f83]"
          active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
          exact-active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
        >
          Accueil
        </NuxtLink>

        <NuxtLink
          to="/list-parc"
          class="py-7 text-sm transition hover:text-[#008f83]"
          active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
        >
          Liste de parc
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="py-7 text-sm transition hover:text-[#008f83]"
          active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
        >
          À propos
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="py-7 text-sm transition hover:text-[#008f83]"
          active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
        >
          Contacts
        </NuxtLink>
      </nav>

      <!-- Bloc Action Droite (Prix + Téléphone + Avatar) -->
      <div class="hidden items-center gap-6 sm:flex">
        <!-- 🌟 Message Commercial à droite et en grand -->
        <div class="text-right leading-tight">
          <span class="block text-[11px] font-bold uppercase tracking-wider text-[#102a43]/60">
            Meilleur tarif
          </span>
          <p class="text-xs font-semibold text-[#102a43]">
            À partir de
            <span class="whitespace-nowrap text-lg font-extrabold text-[#008f83] xl:text-xl">
              199 Dh<span class="text-xs font-semibold text-[#102a43]/70">/jour</span>
            </span>
          </p>
        </div>

        <!-- Conteneur Avatar + Bouton Téléphone -->
        <div class="flex items-center gap-3">
          <!-- Avatar Aziz Gaou -->
          <img
            src="/images/aziz-gaou.png"
            alt="Aziz Gaou"
            class="h-10 w-10 rounded-full border-2 border-[#008f83] object-cover shadow-sm"
          >

          <!-- Phone -->
          <a
            href="tel:0615121097"
            class="flex items-center gap-2 rounded-full bg-[#008f83] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00766d]"
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
                d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.58 2.32a2 2 0 01-.45 1.83L8.21 10.79a16.05 16.05 0 006.99 6.99l2.125-2.14a2 2 0 011.83-.45l2.32.58A2 2 0 0123 17.72V21a2 2 0 01-2 2h-1C10.268 23 1 13.732 1 3V2a2 2 0 012-2z"
              />
            </svg>

            <span>Tél : 0615 12 10 97</span>
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg p-2 text-[#102a43] lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
