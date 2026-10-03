<template>
  <section class="bg-[#eefaf8] px-6 py-16 sm:px-8 lg:px-12">
    <div
      class="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#003f3b] px-7 py-12 text-center text-white sm:px-12 sm:py-16"
    >
      <div class="mx-auto max-w-3xl">
        <span
          class="text-sm font-semibold uppercase tracking-wider text-[#48d5c7]"
        >
          Transport de groupe
        </span>

        <h2
          class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          Vous avez un groupe à transporter ?
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Transfert aéroport, excursion, voyage, événement ou déplacement
          professionnel : parlons de votre besoin.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/contact#demande-devis"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#008f83] px-7 py-4 font-bold text-white transition-colors duration-200 hover:bg-[#00766d] focus:outline-none focus:ring-2 focus:ring-[#48d5c7] focus:ring-offset-2 focus:ring-offset-[#003f3b]"
          >
            Demander un devis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </NuxtLink>

          <a
            href="tel:0691711732"
            class="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            0691 71 17 32
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
