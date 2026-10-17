<template>
  <div class="overflow-hidden bg-white text-[#102a43]">
    <!-- Hero -->
    <section
      class="relative isolate overflow-hidden bg-[#003f3b] text-white"
    >
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-br from-[#003f3b] via-[#005b54] to-[#008f83]"
      />

      <div
        class="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#48d5c7]/15 blur-3xl"
      />

      <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12 lg:py-24"
      >
        <div>
          <span
            class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#a7fff3]"
          >
            VOG CAR · Casablanca, Maroc
          </span>

          <h1
            class="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Location voiture Casablanca :
            <span class="text-[#48d5c7]">
              trouvez le véhicule adapté à vos besoins
            </span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Vous recherchez une voiture à louer à Casablanca pour vos
            déplacements, vos vacances ou votre activité professionnelle ?
            Découvrez les véhicules proposés par VOG CAR et contactez notre
            équipe pour préparer votre réservation.
          </p>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/list-parc"
              class="inline-flex items-center justify-center rounded-xl bg-[#48d5c7] px-7 py-4 font-bold text-[#003f3b] transition hover:bg-white"
            >
              Découvrir notre parc
              <span
                class="ml-2"
                aria-hidden="true"
              >→</span>
            </NuxtLink>
          </div>

          <div
            class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85"
          >
            <span>✓ Plusieurs catégories de véhicules</span>
            <span>✓ Solutions pour particuliers et professionnels</span>
          </div>
        </div>

        <div class="relative">
          <div
            class="absolute -inset-3 rounded-3xl bg-[#48d5c7]/20 blur-xl"
          />

          <img
            :src="`${config.public.mediaUrl}/images/location-voiture-casablanca.png`"
            alt="Location de voiture à Casablanca avec VOG CAR"
            width="1200"
            height="900"
            fetchpriority="high"
            class="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
          >

          <div
            class="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white p-4 text-[#102a43] shadow-xl sm:left-8 sm:right-8 sm:p-5"
          >
            <p class="text-sm text-gray-500">
              Votre prochaine destination
            </p>
            <p class="mt-1 font-bold">
              Découvrez Casablanca à votre rythme
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-4xl text-center">
        <p
          class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
        >
          Votre mobilité à Casablanca
        </p>

        <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
          Une location de voiture à Casablanca adaptée à votre séjour
        </h2>

        <p class="mt-6 text-lg leading-8 text-gray-600">
          Casablanca est un centre économique important du Maroc, avec des
          quartiers d'affaires, des commerces, des lieux touristiques et des
          connexions vers d'autres villes. Disposer d'un véhicule peut
          faciliter vos déplacements et vous permettre d'organiser votre
          programme avec davantage de liberté.
        </p>

        <p class="mt-4 leading-8 text-gray-600">
          Que vous soyez résident, visiteur, entrepreneur ou professionnel,
          VOG CAR vous invite à consulter son parc automobile pour identifier
          un véhicule correspondant à votre utilisation, à votre budget et à
          la durée de votre location.
        </p>
      </div>
    </section>

    <!-- Fleet -->
    <section
      id="vehicules"
      class="bg-[#eefaf8] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Notre parc automobile
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Quelle voiture louer à Casablanca ?
          </h2>

          <p class="mt-5 leading-7 text-gray-600">
            Le choix du véhicule dépend de votre trajet, du nombre de
            passagers et de l'utilisation prévue. Découvrez les principales
            catégories à explorer dans notre parc.
          </p>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="car in fleet"
            :key="car.name"
            class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <NuxtLink
              :to="car.href"
              class="block"
            >
              <div class="overflow-hidden bg-gray-100">
                <img
                  :src="car.image"
                  :alt="`${car.name} en location chez VOG CAR à Casablanca`"
                  width="600"
                  height="400"
                  loading="lazy"
                  class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                >
              </div>

              <div class="p-6">
                <h3 class="text-xl font-bold">
                  {{ car.name }}
                </h3>

                <p class="mt-3 text-sm leading-6 text-gray-600">
                  {{ car.description }}
                </p>

                <span
                  class="mt-5 inline-flex items-center font-bold text-[#008f83]"
                >
                  Découvrir
                  <span
                    class="ml-2"
                    aria-hidden="true"
                  >→</span>
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>

        <div class="mt-10 text-center">
          <NuxtLink
            to="/list-parc"
            class="inline-flex rounded-xl bg-[#008f83] px-8 py-4 font-bold text-white transition hover:bg-[#00766d]"
          >
            Voir tous les véhicules
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Pourquoi VOG CAR ?
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Votre location de voiture à Casablanca, en toute simplicité
          </h2>

          <p class="mt-5 leading-8 text-gray-600">
            Choisir une voiture de location commence par identifier le bon
            modèle et comprendre les conditions proposées. Notre équipe est
            disponible pour répondre à vos questions et vous orienter vers
            une solution adaptée à votre déplacement.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h3 class="font-bold">
                  Un choix de véhicules
                </h3>
                <p class="mt-1 text-gray-600">
                  Explorez les différentes catégories disponibles dans notre
                  parc automobile.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h3 class="font-bold">
                  Un accompagnement personnalisé
                </h3>
                <p class="mt-1 text-gray-600">
                  Présentez vos besoins à notre équipe avant de confirmer
                  votre réservation.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h3 class="font-bold">
                  Des solutions pour différents usages
                </h3>
                <p class="mt-1 text-gray-600">
                  Trouvez un véhicule pour vos déplacements personnels ou
                  vos besoins professionnels.
                </p>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/contacts"
            class="mt-8 inline-flex rounded-xl bg-[#008f83] px-7 py-4 font-bold text-white transition hover:bg-[#00766d]"
          >
            Contacter VOG CAR
          </NuxtLink>
        </div>

        <div class="relative">
          <img
            :src="`${config.public.mediaUrl}/images/location-voiture-casablanca.png`"
            alt="Véhicule proposé par VOG CAR pour les déplacements à Casablanca"
            width="1200"
            height="900"
            loading="lazy"
            class="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          >
          <div
            class="absolute -bottom-5 -left-3 rounded-2xl bg-[#003f3b] p-5 text-white shadow-lg sm:-left-5 sm:p-7"
          >
            <p class="text-sm text-white/75">
              Votre mobilité
            </p>
            <p class="mt-1 text-xl font-extrabold">
              À Casablanca et au-delà
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Airport -->
    <section class="bg-[#003f3b] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div
        class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#48d5c7]"
          >
            Casablanca et ses environs
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Besoin d'une voiture à l'arrivée à l'aéroport Mohammed V ?
          </h2>

          <p class="mt-5 max-w-3xl leading-8 text-white/80">
            Si vous arrivez à Casablanca pour des vacances, une visite
            familiale ou un déplacement professionnel, pensez à organiser
            votre location à l'avance. Contactez VOG CAR pour discuter de
            votre horaire d'arrivée, du véhicule souhaité et des modalités
            de prise en charge.
          </p>
        </div>

        <NuxtLink
          to="/contacts"
          class="inline-flex items-center justify-center rounded-xl bg-[#48d5c7] px-7 py-4 font-bold text-[#003f3b] transition hover:bg-white"
        >
          Préparer mon déplacement
        </NuxtLink>
      </div>
    </section>

    <!-- How it works -->
    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-7xl">
        <div class="text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Comment procéder ?
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Comment réserver votre voiture avec VOG CAR ?
          </h2>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            class="rounded-2xl border border-gray-100 p-7 shadow-sm"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-xl font-extrabold text-[#008f83]"
            >
              01
            </span>
            <h3 class="mt-5 text-xl font-bold">
              Choisissez votre véhicule
            </h3>
            <p class="mt-3 leading-7 text-gray-600">
              Parcourez notre sélection et identifiez le modèle qui correspond
              à vos besoins.
            </p>
          </article>

          <article
            class="rounded-2xl border border-gray-100 p-7 shadow-sm"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-xl font-extrabold text-[#008f83]"
            >
              02
            </span>
            <h3 class="mt-5 text-xl font-bold">
              Contactez notre équipe
            </h3>
            <p class="mt-3 leading-7 text-gray-600">
              Indiquez vos dates, votre besoin et les informations utiles
              pour recevoir une proposition.
            </p>
          </article>

          <article
            class="rounded-2xl border border-gray-100 p-7 shadow-sm"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-xl font-extrabold text-[#008f83]"
            >
              03
            </span>
            <h3 class="mt-5 text-xl font-bold">
              Confirmez votre réservation
            </h3>
            <p class="mt-3 leading-7 text-gray-600">
              Vérifiez le tarif, les conditions de location et la
              disponibilité avant de confirmer.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#eefaf8] px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Questions fréquentes
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Tout savoir sur la location de voiture à Casablanca
          </h2>
        </div>

        <div class="mt-10 space-y-4">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-xl border border-gray-200 bg-white p-5"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"
            >
              {{ faq.question }}
              <span
                class="text-xl text-[#008f83] transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p class="mt-4 leading-7 text-gray-600">
              {{ faq.answer }}
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div
        class="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#003f3b] to-[#008f83] px-6 py-12 text-center text-white sm:px-12 sm:py-16"
      >
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          Prêt à organiser votre location de voiture à Casablanca ?
        </h2>

        <p class="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
          Consultez notre parc automobile et contactez VOG CAR pour vérifier
          la disponibilité du véhicule qui vous intéresse.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/list-parc"
            class="rounded-xl bg-[#48d5c7] px-7 py-4 font-bold text-[#003f3b] transition hover:bg-white"
          >
            Explorer les véhicules
          </NuxtLink>

          <NuxtLink
            to="/contacts"
            class="rounded-xl border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white/10"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const fleet = [
  {
    name: 'Citadines',
    description:
      'Des voitures pratiques pour circuler dans Casablanca et effectuer vos déplacements quotidiens.',
    image: `${config.public.mediaUrl}/images/cars/renault-clio-5.png`,
    href: '/list-parc'
  },
  {
    name: 'Berlines',
    description:
      'Un bon équilibre entre confort et praticité pour vos déplacements personnels ou professionnels.',
    image: `${config.public.mediaUrl}/images/cars/volkswagen-t-roc.png`,
    href: '/list-parc'
  },
  {
    name: 'SUV',
    description:
      'Des véhicules spacieux pour voyager confortablement en famille ou entre amis.',
    image: `${config.public.mediaUrl}/images/cars/jetour-t2.png`,
    href: '/list-parc'
  },
  {
    name: 'Utilitaires',
    description:
      'Des solutions de transport pour les commerçants, les entreprises et les professionnels.',
    image: `${config.public.mediaUrl}/images/cars/renault-express-2025.jpg`,
    href: '/renault-express'
  }
]

const faqs = [
  {
    question: 'Comment louer une voiture à Casablanca avec VOG CAR ?',
    answer:
      'Consultez notre parc automobile, choisissez le véhicule qui vous intéresse, puis contactez VOG CAR pour vérifier sa disponibilité et obtenir les informations nécessaires à votre réservation.'
  },
  {
    question: 'Quels types de voitures sont disponibles à la location ?',
    answer:
      'Notre offre présente différentes catégories de véhicules, notamment des citadines, des berlines, des SUV et des utilitaires. Consultez notre parc pour découvrir les modèles proposés et leurs caractéristiques.'
  },
  {
    question: 'Peut-on louer une voiture pour un déplacement professionnel ?',
    answer:
      'Oui, vous pouvez nous contacter pour étudier vos besoins de déplacement professionnel. Pour le transport de marchandises, découvrez également notre solution Renault Express.'
  },
  {
    question: 'Proposez-vous des voitures pour les déplacements depuis l’aéroport Mohammed V ?',
    answer:
      'Contactez notre équipe pour discuter de votre arrivée à l’aéroport Mohammed V, des modalités de prise en charge et de la disponibilité du véhicule souhaité.'
  },
  {
    question: 'Comment connaître le prix de location d’une voiture ?',
    answer:
      'Le tarif dépend notamment du modèle choisi et des conditions de location. Consultez les véhicules de notre parc et contactez VOG CAR pour confirmer le prix applicable à vos dates.'
  },
  {
    question: 'Quels documents faut-il pour louer une voiture ?',
    answer:
      'Les documents requis peuvent dépendre de votre situation et des conditions de location. Contactez VOG CAR avant votre réservation pour connaître les justificatifs nécessaires.'
  }
]

useSeoMeta({
  title: 'Location Voiture Casablanca | VOG CAR',
  description:
    'Découvrez VOG CAR pour votre location de voiture à Casablanca : citadines, SUV et utilitaires adaptés à vos besoins.',

  ogTitle: 'Location Voiture Casablanca | VOG CAR',
  ogDescription:
    'Découvrez VOG CAR pour votre location de voiture à Casablanca : citadines, SUV et utilitaires adaptés à vos besoins.',
  ogType: 'website',
  ogUrl: `${config.public.siteUrl}/location-voiture-casablanca`,
  ogImage: `${config.public.mediaUrl}/images/location-voiture-casablanca.png`,
  ogImageAlt: 'VOGCAR - Location de voitures à Casablanca',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Voiture Casablanca | VOG CAR',
  twitterDescription:
    'Découvrez VOG CAR pour votre location de voiture à Casablanca : citadines, SUV et utilitaires adaptés à vos besoins.',
  twitterImage: `${config.public.mediaUrl}/images/location-voiture-casablanca.png`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/location-voiture-casablanca`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      })
    }
  ]
})
</script>
