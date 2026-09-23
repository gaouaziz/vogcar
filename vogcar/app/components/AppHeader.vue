<template>
  <header
    class="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm"
  >
    <div
      class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center"
        @click="closeMenu"
      >
        <img
          src="/images/logo-vog-car.png"
          alt="VOG CAR - Location de voitures"
          class="h-14 w-auto"
        >
      </NuxtLink>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-8 lg:flex">
        <NuxtLink
          to="/"
          class="py-7 text-sm transition hover:text-[#008f83]"
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
          to="/contacts"
          class="py-7 text-sm transition hover:text-[#008f83]"
          active-class="border-b-2 border-[#008f83] font-semibold text-[#008f83]"
        >
          Contacts
        </NuxtLink>
      </nav>

      <!-- Desktop right section -->
      <div class="hidden items-center gap-6 sm:flex">
        <!-- Price -->
        <div class="text-right leading-tight">
          <span
            class="block text-[11px] font-bold uppercase tracking-wider text-[#102a43]/60"
          >
            Meilleur tarif
          </span>

          <p class="text-xs font-semibold text-[#102a43]">
            À partir de

            <span
              class="whitespace-nowrap text-lg font-extrabold text-[#008f83] xl:text-xl"
            >
              199 Dh
              <span class="text-xs font-semibold text-[#102a43]/70">
                /jour
              </span>
            </span>
          </p>
        </div>

        <!-- Avatar + Phone -->
        <div class="flex items-center gap-3">
          <img
            src="/images/aziz-gaou.png"
            alt="Aziz Gaou"
            class="h-10 w-10 rounded-full border-2 border-[#008f83] object-cover shadow-sm"
          >

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
        class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eefaf8] text-[#102a43] transition hover:bg-[#008f83] hover:text-white lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Ouvrir le menu"
        @click="toggleMenu"
      >
        <!-- Hamburger -->
        <svg
          v-if="!isMenuOpen"
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

        <!-- Close -->
        <svg
          v-else
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- ========================================= -->
    <!-- MOBILE MENU -->
    <!-- ========================================= -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-[-10px] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-10px] opacity-0"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="border-t border-gray-100 bg-white shadow-xl lg:hidden"
      >
        <nav class="mx-auto max-w-7xl px-6 py-5">
          <div class="flex flex-col gap-1">
            <NuxtLink
              to="/"
              class="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#eefaf8] hover:text-[#008f83]"
              exact-active-class="bg-[#eefaf8] text-[#008f83]"
              @click="closeMenu"
            >
              Accueil
            </NuxtLink>

            <NuxtLink
              to="/list-parc"
              class="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#eefaf8] hover:text-[#008f83]"
              active-class="bg-[#eefaf8] text-[#008f83]"
              @click="closeMenu"
            >
              Liste de parc
            </NuxtLink>

            <NuxtLink
              to="/about"
              class="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#eefaf8] hover:text-[#008f83]"
              active-class="bg-[#eefaf8] text-[#008f83]"
              @click="closeMenu"
            >
              À propos
            </NuxtLink>

            <NuxtLink
              to="/contacts"
              class="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#eefaf8] hover:text-[#008f83]"
              active-class="bg-[#eefaf8] text-[#008f83]"
              @click="closeMenu"
            >
              Contacts
            </NuxtLink>
          </div>

          <!-- Mobile CTA -->
          <div class="mt-4 border-t border-gray-100 pt-4">
            <a
              href="tel:0615121097"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#008f83] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00766d]"
              @click="closeMenu"
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
              0615 12 10 97
            </a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
