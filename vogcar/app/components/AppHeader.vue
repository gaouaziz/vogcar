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
          :src="`${config.public.mediaUrl}/images/logo-vog-car.png`"
          alt="VOGCAR - Location de voitures"
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
          to="/contact"
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

        <!-- Avatar + Contact buttons -->
        <div class="flex items-center gap-3">
          <img
            :src="`${config.public.mediaUrl}/images/aziz-gaou.png`"
            alt="Aziz Gaou"
            class="h-10 w-10 rounded-full border-2 border-[#008f83] object-cover shadow-sm"
          >

          <!-- Phone -->
          <a
            :href="`tel:${config.public.whatsappNumber}`"
            aria-label="Appeler VOGCAR"
            class="flex items-center gap-2 rounded-full bg-[#008f83] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#00766d]"
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

            <span>{{ config.public.textNumber }}</span>
          </a>

          <!-- WhatsApp -->
          <a
            href="https://wa.me/212691711732"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter VOGCAR sur WhatsApp"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:bg-[#1ebe5d]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.59 5.96L.03 24l6.27-1.64a11.9 11.9 0 005.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.82h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 01-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.02 2.92a9.88 9.88 0 012.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
              />
            </svg>
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

    <!-- MOBILE MENU -->
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
              to="/contact"
              class="rounded-xl px-4 py-3.5 text-sm font-semibold text-[#102a43] transition hover:bg-[#eefaf8] hover:text-[#008f83]"
              active-class="bg-[#eefaf8] text-[#008f83]"
              @click="closeMenu"
            >
              Contacts
            </NuxtLink>
          </div>

          <!-- Mobile contact buttons -->
          <div class="mt-4 space-y-2 border-t border-gray-100 pt-4">
            <!-- Phone -->
            <a
              :href="`tel:${config.public.phoneNumber}`"
              class="flex w-full items-center justify-center gap-3 rounded-xl bg-[#008f83] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#00766d]"
              @click="closeMenu"
            >
              <!-- Phone icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 shrink-0"
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

              <span>Appeler : {{ config.public.textNumber }}</span>
            </a>

            <!-- WhatsApp -->
            <a
              :href="`https://wa.me/${config.public.whatsappNumber}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
              @click="closeMenu"
            >
              <!-- WhatsApp icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.48 0 .13 5.35.13 11.91c0 2.1.55 4.15 1.59 5.96L.03 24l6.27-1.64a11.9 11.9 0 005.73 1.46h.01c6.56 0 11.91-5.35 11.91-11.91 0-3.18-1.24-6.17-3.43-8.43ZM12.04 21.82h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.88 9.88 0 01-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.14 1.03 7.02 2.92a9.88 9.88 0 012.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                />
              </svg>

              <span>WhatsApp : {{ config.public.textNumber }}</span>
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
const config = useRuntimeConfig()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
