<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <!-- Logo -->
      <a
        href="#accueil"
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
        <a
          href="#accueil"
          class="border-b-2 border-[#008f83] py-7 text-sm font-semibold text-[#008f83]"
        >
          Accueil
        </a>

        <a
          href="#parc"
          class="py-7 text-sm font-medium text-[#102a43] transition hover:text-[#008f83]"
        >
          Liste de parc
        </a>

        <a
          href="#a-propos"
          class="py-7 text-sm font-medium text-[#102a43] transition hover:text-[#008f83]"
        >
          À propos
        </a>

        <a
          href="#contacts"
          class="py-7 text-sm font-medium text-[#102a43] transition hover:text-[#008f83]"
        >
          Contacts
        </a>
      </nav>

      <!-- Phone -->
      <a
        href="tel:0615121097"
        class="hidden items-center gap-2 rounded-full bg-[#008f83] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00766d] sm:flex"
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
