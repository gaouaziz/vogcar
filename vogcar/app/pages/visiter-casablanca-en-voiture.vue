<template>
  <main class="overflow-hidden bg-white text-[#102a43]">
    <!-- HERO -->
    <section
      class="relative isolate flex min-h-[650px] items-center bg-[#003f3b] sm:min-h-[700px] lg:min-h-[760px]"
    >
      <div class="absolute inset-0 -z-20">
        <img
          :src="heroImage"
          alt="Découvrir Casablanca et ses environs en voiture avec VOG CAR"
          class="h-full w-full object-cover"
          fetchpriority="high"
        >
      </div>

      <div
        class="absolute inset-0 -z-10 bg-gradient-to-r from-[#001f24]/95 via-[#003f3b]/75 to-[#003f3b]/20"
      />

      <div class="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div class="max-w-3xl">
          <div
            class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
          >
            <span class="h-2 w-2 rounded-full bg-[#46d6b2]" />
            Votre guide pour découvrir Casablanca
          </div>

          <h1
            class="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Visiter Casablanca
            <span class="mt-2 block text-[#65e0c3]">
              en voiture
            </span>
          </h1>

          <p
            class="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9"
          >
            De la mosquée Hassan II à la Corniche d’Aïn Diab, explorez les
            incontournables de Casablanca et organisez vos déplacements en toute
            liberté avec une voiture adaptée à votre séjour.
          </p>

          <div class="mt-9 flex flex-col gap-4 sm:flex-row">
            <NuxtLink
              to="/list-parc"
              class="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#008f83] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#00766d]"
            >
              Découvrir nos voitures
              <span
                class="ml-3 text-xl"
                aria-hidden="true"
              >→</span>
            </NuxtLink>
          </div>

          <div
            class="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/20 pt-7 sm:grid-cols-3"
          >
            <div>
              <p class="font-bold text-white">
                À votre rythme
              </p>
              <p class="mt-1 text-sm text-white/70">
                Organisez vos visites
              </p>
            </div>

            <div>
              <p class="font-bold text-white">
                Plus de liberté
              </p>
              <p class="mt-1 text-sm text-white/70">
                Déplacez-vous facilement
              </p>
            </div>

            <div>
              <p class="font-bold text-white">
                VOG CAR
              </p>
              <p class="mt-1 text-sm text-white/70">
                Votre mobilité à Casablanca
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#008f83] via-[#65e0c3] to-transparent"
      />
    </section>

    <!-- INTRODUCTION -->
    <section class="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Préparez votre visite
          </p>

          <h2
            class="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl"
          >
            Découvrez Casablanca à votre rythme
          </h2>

          <p class="mt-6 leading-8 text-slate-600">
            Casablanca est une ville de contrastes où se rencontrent
            architecture, culture, commerce et océan. Pour profiter pleinement
            de votre séjour, vous pouvez organiser votre parcours en fonction
            des lieux que vous souhaitez découvrir.
          </p>

          <p class="mt-4 leading-8 text-slate-600">
            Louer une voiture vous permet de relier plusieurs quartiers sans
            dépendre d'un seul itinéraire de transport. Votre programme reste
            flexible, que vous voyagiez pour le tourisme, les affaires ou un
            séjour en famille.
          </p>
        </div>

        <div class="relative">
          <div
            class="absolute -bottom-5 -left-5 hidden h-32 w-32 rounded-3xl bg-[#d7f5ee] sm:block"
          />

          <img
            :src="`${mediaUrl}/images/casablanca-vogcar.png`"
            alt="Voitures pour découvrir Casablanca et le littoral marocain"
            class="relative z-10 h-[340px] w-full rounded-3xl object-cover shadow-xl sm:h-[440px]"
            loading="lazy"
          >

          <div
            class="absolute -right-3 -top-4 z-20 rounded-2xl bg-white p-5 shadow-xl sm:right-5 sm:top-5"
          >
            <p class="text-sm font-medium text-slate-500">
              Votre prochaine escapade
            </p>
            <p class="mt-1 text-xl font-extrabold text-[#008f83]">
              Casablanca
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ATTRACTIONS -->
    <section class="bg-[#f4faf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Les incontournables
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Que visiter à Casablanca ?
          </h2>

          <p class="mt-5 leading-8 text-slate-600">
            Préparez votre itinéraire et découvrez six idées de visites pour
            explorer différents visages de la capitale économique du Maroc.
          </p>
        </div>

        <div class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="place in attractions"
            :key="place.number"
            class="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                :src="place.image"
                :alt="place.alt"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              >

              <span
                class="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-2 text-sm font-extrabold text-[#008f83]"
              >
                {{ place.number }}
              </span>
            </div>

            <div class="p-6">
              <p
                class="text-xs font-bold uppercase tracking-wider text-[#008f83]"
              >
                {{ place.category }}
              </p>

              <h3 class="mt-3 text-xl font-extrabold">
                {{ place.name }}
              </h3>

              <p class="mt-3 text-sm leading-7 text-slate-600">
                {{ place.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink
            to="/list-parc"
            class="inline-flex items-center justify-center rounded-xl bg-[#008f83] px-7 py-4 font-bold text-white transition hover:bg-[#00766d]"
          >
            Choisir une voiture pour vos visites
            <span
              class="ml-3 text-xl"
              aria-hidden="true"
            >→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- DRIVING TIPS -->
    <section class="bg-[#eefaf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Conseils pratiques
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Bien préparer vos déplacements
          </h2>

          <p class="mt-5 leading-8 text-slate-600">
            Quelques précautions simples vous aideront à profiter de votre
            séjour et à circuler plus sereinement dans Casablanca.
          </p>

          <div class="mt-8 space-y-6">
            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-[#008f83] shadow-sm"
              >
                01
              </div>
              <div>
                <h3 class="font-bold">
                  Anticipez la circulation
                </h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Prévoyez davantage de temps pendant les heures de pointe et
                  vérifiez votre itinéraire avant de partir.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-[#008f83] shadow-sm"
              >
                02
              </div>
              <div>
                <h3 class="font-bold">
                  Repérez les possibilités de stationnement
                </h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Vérifiez les parkings disponibles près des sites que vous
                  souhaitez visiter et respectez la signalisation locale.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-[#008f83] shadow-sm"
              >
                03
              </div>
              <div>
                <h3 class="font-bold">
                  Gardez vos documents à portée de main
                </h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Assurez-vous d'avoir les documents nécessaires à la conduite
                  et à la location, et vérifiez les conditions de votre contrat.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white font-bold text-[#008f83] shadow-sm"
              >
                04
              </div>
              <div>
                <h3 class="font-bold">
                  Respectez les règles de conduite
                </h3>
                <p class="mt-2 text-sm leading-7 text-slate-600">
                  Respectez les limitations de vitesse, les priorités et les
                  consignes de stationnement en vigueur au Maroc.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative min-h-[350px] overflow-hidden rounded-3xl lg:min-h-full">
          <img
            :src="heroImage"
            alt="Préparer son itinéraire pour découvrir Casablanca en voiture"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          >

          <div
            class="absolute inset-0 bg-gradient-to-t from-[#002f2b]/95 via-[#003f3b]/30 to-transparent"
          />

          <div class="absolute inset-x-0 bottom-0 p-7 sm:p-10">
            <span
              class="inline-flex rounded-full bg-[#65e0c3]/15 px-4 py-2 text-sm font-bold text-[#a8f5e2]"
            >
              Votre séjour commence ici
            </span>

            <h3
              class="mt-5 max-w-lg text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              Choisissez votre voiture et explorez la ville librement.
            </h3>

            <p class="mt-4 max-w-lg leading-7 text-white/80">
              Découvrez notre parc et trouvez le véhicule adapté à vos
              déplacements à Casablanca.
            </p>

            <NuxtLink
              to="/list-parc"
              class="mt-7 inline-flex items-center rounded-xl bg-[#008f83] px-6 py-4 font-bold text-white transition hover:bg-[#00766d]"
            >
              Voir le parc automobile
              <span
                class="ml-3"
                aria-hidden="true"
              >→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- VEHICLE TYPES -->
    <section class="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Votre mobilité
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Quelle voiture louer pour visiter Casablanca ?
          </h2>

          <p class="mt-5 leading-8 text-slate-600">
            Le bon choix dépend du nombre de passagers, de vos bagages et de
            votre programme. Voici trois catégories à considérer.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="vehicle in vehicleTypes"
            :key="vehicle.name"
            class="rounded-3xl border border-slate-200 bg-white p-7 transition hover:border-[#008f83] hover:shadow-lg sm:p-8"
          >
            <div
              class="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0f6f0] text-3xl"
              aria-hidden="true"
            >
              {{ vehicle.icon }}
            </div>

            <h3 class="mt-6 text-xl font-extrabold">
              {{ vehicle.name }}
            </h3>

            <p class="mt-3 leading-7 text-slate-600">
              {{ vehicle.description }}
            </p>

            <NuxtLink
              to="/list-parc"
              class="mt-6 inline-flex items-center gap-2 font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir les véhicules
              <span aria-hidden="true">→</span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- AIRPORT RENTAL CTA -->
    <section class="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
      <div
        class="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#003f3b] px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
      >
        <div
          class="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5"
        />

        <div
          class="absolute -bottom-32 right-1/3 h-72 w-72 rounded-full bg-[#008f83]/20 blur-3xl"
        />

        <div
          class="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center"
        >
          <div class="max-w-2xl">
            <p
              class="text-sm font-bold uppercase tracking-[0.2em] text-[#65e0c3]"
            >
              Vous arrivez à Casablanca ?
            </p>

            <h2
              class="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl"
            >
              Commencez votre séjour dès l’aéroport Mohammed V
            </h2>

            <p class="mt-5 leading-8 text-white/75">
              Organisez la livraison de votre véhicule à l'aéroport avec VOG
              CAR. Contactez notre équipe pour confirmer les disponibilités et
              les modalités de prise en charge.
            </p>
          </div>

          <div class="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <NuxtLink
              to="/location-voiture-aeroport-casablanca"
              class="inline-flex min-h-14 items-center justify-center rounded-xl bg-[#008f83] px-6 py-4 text-center font-bold text-white transition hover:bg-[#00766d]"
            >
              Location à l'aéroport
              <span
                class="ml-2"
                aria-hidden="true"
              >→</span>
            </NuxtLink>

            <NuxtLink
              to="/contact"
              class="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/30 px-6 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#003f3b]"
            >
              Nous contacter
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#f4faf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#008f83]"
          >
            Questions fréquentes
          </p>

          <h2 class="mt-4 text-3xl font-extrabold sm:text-4xl">
            Préparer votre visite de Casablanca
          </h2>

          <p class="mt-5 leading-8 text-slate-600">
            Les réponses aux questions courantes pour organiser vos
            déplacements et votre location de voiture.
          </p>
        </div>

        <div class="mt-10 space-y-4">
          <details
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            :open="index === 0"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#102a43] marker:hidden"
            >
              <span>{{ faq.question }}</span>

              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e0f6f0] text-lg text-[#008f83] transition group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>

            <p class="mt-4 pr-2 leading-8 text-slate-600">
              {{ faq.answer }}
            </p>
          </details>
        </div>

        <div class="mt-10 text-center">
          <p class="text-slate-600">
            Vous avez une autre question concernant votre location ?
          </p>

          <NuxtLink
            to="/contact"
            class="mt-4 inline-flex items-center justify-center rounded-xl bg-[#008f83] px-7 py-4 font-bold text-white transition hover:bg-[#00766d]"
          >
            Contacter VOG CAR
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const siteUrl = (config.public.siteUrl || 'https://www.vogcar.site')
  .toString()
  .replace(/\/$/, '')

const mediaUrl = (config.public.mediaUrl || siteUrl)
  .toString()
  .replace(/\/$/, '')

const pageUrl = `${siteUrl}/visiter-casablanca-en-voiture`
const heroImage = `${mediaUrl}/images/visiter-casablanca-vogcar.jpg`

useSeoMeta({
  title: 'Visitez Casablanca en Voiture : Guide & Conseils | VOGCAR',
  description:
    'Louez votre voiture à Casablanca et explorez la ville en toute liberté : Mosquée Hassan II, Habous et Aïn Diab. Réservez votre véhicule chez VOG CAR !',

  ogTitle: 'Location Voiture Casablanca : Visitez la Ville | VOG CAR',
  ogDescription:
    'Explorez Casablanca à votre rythme. Guide pratique et solutions de location de voitures adaptées à vos besoins avec VOG CAR.',
  ogType: 'website',
  ogUrl: `${config.public.siteUrl}/visiter-casablanca-en-voiture`,
  ogImage: heroImage,
  ogImageAlt: 'VOGCAR - Visitez Casablanca en Voiture',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Voiture Casablanca : Visitez la Ville | VOG CAR',
  twitterDescription:
    'Explorez Casablanca à votre rythme. Guide pratique et solutions de location de voitures adaptées à vos besoins avec VOG CAR.',
  twitterImage: heroImage
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Visiter Casablanca en voiture : guide pratique',
        'description':
          'Un guide pratique pour découvrir les lieux incontournables de Casablanca en voiture.',
        'image': heroImage,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': pageUrl
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'VOG CAR',
          'url': siteUrl
        },
        'inLanguage': 'fr-MA'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Accueil',
            'item': siteUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Visiter Casablanca en voiture',
            'item': pageUrl
          }
        ]
      })
    }
  ]
})

const attractions = [
  {
    number: '01',
    name: 'La mosquée Hassan II',
    category: 'Patrimoine & architecture',
    description:
      'Découvrez l’un des monuments les plus emblématiques de Casablanca, situé au bord de l’océan Atlantique. Vérifiez les horaires des visites guidées avant votre déplacement.',
    image: `${mediaUrl}/images/mosquee-hassan-2-casablanca.jpg`,
    alt: 'Architecture monumentale au Maroc'
  },
  {
    number: '02',
    name: 'La Corniche d’Aïn Diab',
    category: 'Océan & détente',
    description:
      'Profitez d’une promenade le long du littoral, découvrez les cafés et restaurants et appréciez l’ambiance du front de mer.',
    image: `${mediaUrl}/images/corniche-aïn-diab.jpg`,
    alt: 'Vue sur l’océan Atlantique'
  },
  {
    number: '03',
    name: 'Le centre-ville',
    category: 'Architecture & shopping',
    description:
      'Parcourez les grandes avenues, admirez les bâtiments historiques et découvrez les commerces et les cafés du centre de Casablanca.',
    image: `${mediaUrl}/images/centre-ville-casablanca.jpg`,
    alt: 'Architecture urbaine et avenues'
  },
  {
    number: '04',
    name: 'L’ancienne médina',
    category: 'Culture & découverte',
    description:
      'Explorez les ruelles, les petites boutiques et l’atmosphère traditionnelle de l’ancienne médina. Prévoyez de terminer votre trajet à pied dans les zones piétonnes.',
    image: `${mediaUrl}/images/bab-marrakech.jpg`,
    alt: 'Ruelles et architecture traditionnelle'
  },
  {
    number: '05',
    name: 'Le quartier des Habous',
    category: 'Artisanat & gastronomie',
    description:
      'Découvrez un quartier apprécié pour son architecture, ses librairies, ses boutiques d’artisanat et ses spécialités marocaines.',
    image: `${mediaUrl}/images/habous_casablanca.jpg`,
    alt: 'Architecture traditionnelle marocaine'
  },
  {
    number: '06',
    name: 'Le Morocco Mall',
    category: 'Shopping & loisirs',
    description:
      'Prévoyez une pause shopping dans l’un des grands centres commerciaux de la ville, notamment si vous souhaitez combiner votre visite avec une sortie en famille.',
    image: `${mediaUrl}/images/morocco-mall-casablanca.jpg`,
    alt: 'Centre commercial et espaces de loisirs'
  }
]

const vehicleTypes = [
  {
    name: 'Citadines',
    description:
      'Pratiques pour circuler en ville, se garer plus facilement et effectuer de courts déplacements.',
    icon: '🚗'
  },
  {
    name: 'SUV',
    description:
      'Une option confortable pour voyager à plusieurs et profiter de plus d’espace pendant vos déplacements.',
    icon: '🚙'
  },
  {
    name: 'Familiales',
    description:
      'Adaptées aux familles et aux voyageurs qui transportent plusieurs bagages.',
    icon: '🧳'
  }
]

const faqs = [
  {
    question: 'Est-il pratique de visiter Casablanca en voiture ?',
    answer:
      'Oui. Une voiture peut faciliter les déplacements entre les différents quartiers et les attractions éloignées. Il est toutefois conseillé d’anticiper le stationnement et la circulation aux heures de pointe.'
  },
  {
    question: 'Quels endroits visiter en priorité à Casablanca ?',
    answer:
      'La mosquée Hassan II, la Corniche d’Aïn Diab, le centre-ville, l’ancienne médina et le quartier des Habous constituent de bons points de départ pour découvrir la ville.'
  },
  {
    question: 'Quelle voiture choisir pour visiter Casablanca ?',
    answer:
      'Une citadine convient généralement aux déplacements urbains. Pour une famille ou plusieurs passagers avec des bagages, un véhicule familial ou un SUV peut offrir davantage d’espace.'
  },
  {
    question: 'Peut-on récupérer une voiture à l’aéroport Mohammed V ?',
    answer:
      'VOG CAR propose un service de livraison de véhicule à l’aéroport Mohammed V de Casablanca, à organiser lors de votre réservation. Contactez notre équipe pour confirmer les modalités et les disponibilités.'
  },
  {
    question: 'Comment réserver une voiture chez VOG CAR ?',
    answer:
      'Consultez notre parc automobile, choisissez le véhicule adapté à votre séjour puis contactez notre équipe pour vérifier les disponibilités et organiser votre réservation.'
  }
]
</script>
