<template>
  <div class="min-h-screen bg-white">
    <!-- ====================================================== -->
    <!-- HERO -->
    <!-- ====================================================== -->

    <section
      class="relative flex min-h-[430px] items-center overflow-hidden"
    >
      <!-- Background -->
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('/images/vog-car-about-hero.jpg')"
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
            À propos de VOG CAR
          </p>

          <h1
            class="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Votre mobilité,
            <span class="text-[#48d5c7]">
              notre engagement
            </span>
          </h1>

          <p
            class="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            VOG CAR vous accompagne dans vos déplacements avec une
            sélection de véhicules adaptés à vos besoins et un service
            pensé pour rendre la location plus simple et plus sereine.
          </p>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- INTRODUCTION -->
    <!-- ====================================================== -->

    <section
      class="bg-white py-20 lg:py-28"
    >
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
      >
        <!-- Image -->
        <div
          class="relative order-2 lg:order-1"
        >
          <div
            class="overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src="/images/vog-car-about.jpg"
              alt="Véhicule VOG CAR"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            >
          </div>

          <!-- Decorative block -->
          <div
            class="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-3xl bg-[#eefaf8]"
          />
        </div>

        <!-- Text -->
        <div
          class="order-1 lg:order-2"
        >
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Qui sommes-nous ?
          </p>

          <h2
            class="mt-3 text-3xl font-bold leading-tight text-[#102a43] sm:text-4xl"
          >
            Une nouvelle façon de penser la location automobile
          </h2>

          <div
            class="mt-6 space-y-4 text-base leading-7 text-gray-600"
          >
            <p>
              Chez <strong class="text-[#102a43]">VOG CAR</strong>,
              nous souhaitons proposer une expérience de location
              automobile simple, transparente et adaptée aux besoins
              de chaque client.
            </p>

            <p>
              Que ce soit pour un déplacement professionnel, un
              voyage en famille, un séjour ou simplement pour disposer
              d'un véhicule au quotidien, notre objectif est de vous
              permettre de trouver facilement le véhicule qui vous
              correspond.
            </p>

            <p>
              Notre parc automobile est composé de différents types
              de véhicules afin de répondre à des besoins variés :
              citadines, berlines, SUV et véhicules familiaux.
            </p>
          </div>

          <!-- CTA -->
          <div class="mt-8">
            <NuxtLink
              to="/list-parc"
              class="inline-flex items-center gap-2 rounded-full bg-[#008f83] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#00766d]"
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
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>

            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- NOS ENGAGEMENTS -->
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
            Nos engagements
          </p>

          <h2
            class="mt-3 text-3xl font-bold text-[#102a43] sm:text-4xl"
          >
            Ce qui nous guide au quotidien
          </h2>

          <p
            class="mt-5 text-base leading-7 text-gray-600"
          >
            Nous plaçons la qualité du service, la simplicité et
            l'écoute du client au cœur de notre approche.
          </p>
        </div>

        <!-- Values -->
        <div
          class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <!-- Card -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  d="M9 12l2 2 4-4m5.6-2.2A9 9 0 1112 3a9 9 0 014.6 1.2"
                />
              </svg>
            </div>

            <h3
              class="mt-5 text-lg font-bold text-[#102a43]"
            >
              Simplicité
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Une expérience de location claire et simple,
              de la réservation à la restitution du véhicule.
            </p>
          </div>

          <!-- Card -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.4 15a1.7 1.7 0 00.34 1.88l.06.06-1.5 1.5-.06-.06a1.7 1.7 0 00-1.88-.34 1.7 1.7 0 00-1.03 1.56V20h-2.12v-.09a1.7 1.7 0 00-1.03-1.56 1.7 1.7 0 00-1.88.34l-.06.06-1.5-1.5.06-.06A1.7 1.7 0 009.2 15a1.7 1.7 0 00-1.56-1.03H7v-2.12h.09A1.7 1.7 0 008.65 10a1.7 1.7 0 00-.34-1.88l-.06-.06 1.5-1.5.06.06A1.7 1.7 0 0011.7 7a1.7 1.7 0 001.03-1.56V5h2.12v.09A1.7 1.7 0 0015.88 6.65a1.7 1.7 0 001.88-.34l.06-.06 1.5 1.5-.06.06A1.7 1.7 0 0018.92 10a1.7 1.7 0 001.56 1.03h.09v2.12h-.09A1.7 1.7 0 0019.4 15z"
                />
              </svg>
            </div>

            <h3
              class="mt-5 text-lg font-bold text-[#102a43]"
            >
              Fiabilité
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Des véhicules suivis et entretenus afin de vous
              accompagner dans vos déplacements avec sérénité.
            </p>
          </div>

          <!-- Card -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 2a3 3 0 10-3-3"
                />
              </svg>
            </div>

            <h3
              class="mt-5 text-lg font-bold text-[#102a43]"
            >
              Écoute
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Une équipe disponible pour comprendre vos besoins
              et vous accompagner dans votre choix.
            </p>
          </div>

          <!-- Card -->
          <div
            class="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
                  d="M12 3l2.09 6.26L21 10l-5.09 3.74L17.82 20 12 16.27 6.18 20l1.91-6.26L3 10l6.91-.74L12 3z"
                />
              </svg>
            </div>

            <h3
              class="mt-5 text-lg font-bold text-[#102a43]"
            >
              Qualité de service
            </h3>

            <p
              class="mt-3 text-sm leading-6 text-gray-600"
            >
              Nous cherchons à offrir une expérience professionnelle
              et agréable à chaque étape de votre location.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================================================== -->
    <!-- POURQUOI VOG CAR -->
    <!-- ====================================================== -->

    <section
      class="bg-white py-20 lg:py-28"
    >
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"
      >
        <!-- Content -->
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Pourquoi VOG CAR ?
          </p>

          <h2
            class="mt-3 text-3xl font-bold leading-tight text-[#102a43] sm:text-4xl"
          >
            Une location pensée autour de vos besoins
          </h2>

          <p
            class="mt-6 text-base leading-7 text-gray-600"
          >
            Nous savons que chaque déplacement est différent.
            C'est pourquoi nous proposons plusieurs catégories
            de véhicules et des solutions adaptées à différentes
            situations.
          </p>

          <!-- Points -->
          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008f83] text-white"
              >
                ✓
              </div>

              <div>
                <h3
                  class="font-bold text-[#102a43]"
                >
                  Un parc diversifié
                </h3>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600"
                >
                  Des véhicules adaptés aux déplacements urbains,
                  professionnels, familiaux et aux longs trajets.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008f83] text-white"
              >
                ✓
              </div>

              <div>
                <h3
                  class="font-bold text-[#102a43]"
                >
                  Des solutions flexibles
                </h3>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600"
                >
                  Des formules pensées pour répondre aussi bien
                  aux besoins ponctuels qu'aux locations plus longues.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#008f83] text-white"
              >
                ✓
              </div>

              <div>
                <h3
                  class="font-bold text-[#102a43]"
                >
                  Un accompagnement personnalisé
                </h3>

                <p
                  class="mt-1 text-sm leading-6 text-gray-600"
                >
                  Notre objectif est de vous aider à choisir
                  le véhicule correspondant réellement à votre besoin.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div
          class="relative"
        >
          <div
            class="overflow-hidden rounded-3xl"
          >
            <img
              src="/images/vog-car-about-hero.jpg"
              alt="Véhicule VOG CAR sur la route"
              class="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            >
          </div>

          <!-- Floating box -->
          <div
            class="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl sm:bottom-8 sm:left-8"
          >
            <p
              class="text-xs font-bold uppercase tracking-wide text-[#008f83]"
            >
              VOG CAR
            </p>

            <p
              class="mt-1 text-lg font-bold text-[#102a43]"
            >
              Votre mobilité, notre engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'À propos de VOG CAR | Location de voitures',
  description:
    'Découvrez VOG CAR, votre partenaire pour la location de voitures. Une gamme de véhicules adaptée à vos besoins, avec un service simple, flexible et professionnel.',
  ogTitle: 'À propos de VOG CAR',
  ogDescription:
    'Découvrez VOG CAR et notre approche de la location automobile.',
  ogImage: '/images/og-vog-car.jpg'
})
</script>
