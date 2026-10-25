<template>
  <main class="overflow-hidden bg-white text-[#102a43]">
    <!-- Hero -->
    <section
      class="relative isolate flex min-h-[540px] items-center bg-[#003f3b] lg:min-h-[620px]"
    >
      <div class="absolute inset-0 -z-20">
        <img
          :src="`${config.public.mediaUrl}/images/location-voiture-aeroport-casablanca.png`"
          alt="Véhicules VOG CAR à Casablanca"
          class="h-full w-full object-cover"
          fetchpriority="high"
        >
      </div>

      <div
        class="absolute inset-0 -z-10 bg-gradient-to-r from-[#003f3b]/95 via-[#003f3b]/75 to-[#003f3b]/25"
      />

      <div class="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div class="max-w-3xl">
          <p
            class="mt-6 mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
          >
            Votre arrivée à Casablanca, en toute simplicité
          </p>

          <h1
            class="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Location de voiture à l’aéroport de Casablanca Mohammed V
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Votre voiture livrée directement à l’aéroport. VOG CAR organise
            votre prise en charge et met un chauffeur à votre disposition pour
            faciliter votre arrivée à Casablanca.
          </p>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/list-parc"
              class="inline-flex items-center justify-center rounded-xl bg-[#00a99d] px-7 py-4 font-bold text-white transition hover:bg-[#008f83]"
            >
              Découvrir nos véhicules
              <span
                class="ml-2"
                aria-hidden="true"
              >→</span>
            </a>

            <a
              :href="`https://wa.me/${config.public.whatsappNumber}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center rounded-xl border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#003f3b]"
            >
              Organiser mon arrivée
            </a>
          </div>

          <div
            class="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/90"
          >
            <span>✓ Livraison à l’aéroport</span>
            <span>✓ Chauffeur disponible</span>
            <span>✓ Réservation personnalisée</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p
            class="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#008f83]"
          >
            Votre mobilité dès l’arrivée
          </p>

          <h2 class="text-3xl font-bold leading-tight sm:text-4xl">
            Une location de voiture à l’aéroport de Casablanca adaptée à votre
            voyage
          </h2>

          <div class="mt-6 space-y-4 leading-7 text-gray-600">
            <p>
              Vous arrivez à l’aéroport international Mohammed V et souhaitez
              disposer d’une voiture pour votre séjour ? VOG CAR vous propose
              une solution de location de voiture à l’aéroport de Casablanca,
              avec livraison du véhicule directement sur place.
            </p>

            <p>
              Que vous veniez pour des vacances, un déplacement professionnel
              ou une visite familiale, vous pouvez organiser votre réservation
              avant votre arrivée et communiquer les détails nécessaires à
              notre équipe.
            </p>

            <p>
              Notre objectif : faciliter votre prise en charge et vous
              permettre de poursuivre votre trajet vers Casablanca ou votre
              destination au Maroc.
            </p>
          </div>

          <a
            href="/contact"
            class="mt-7 inline-flex items-center font-bold text-[#008f83] hover:text-[#00766d]"
          >
            Contacter notre équipe
            <span
              class="ml-2"
              aria-hidden="true"
            >→</span>
          </a>
        </div>

        <div
          class="rounded-3xl bg-[#eefaf8] p-8 sm:p-10"
        >
          <h3 class="text-2xl font-bold">
            Pourquoi choisir VOG CAR ?
          </h3>

          <ul class="mt-7 space-y-6">
            <li class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h4 class="font-bold">
                  Livraison à Mohammed V
                </h4>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Retrouvez votre véhicule directement à l’aéroport selon les
                  modalités confirmées lors de la réservation.
                </p>
              </div>
            </li>

            <li class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h4 class="font-bold">
                  Un chauffeur à votre disposition
                </h4>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Un chauffeur est disponible pour faciliter votre prise en
                  charge et la remise du véhicule.
                </p>
              </div>
            </li>

            <li class="flex gap-4">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#008f83]"
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <h4 class="font-bold">
                  Une réservation organisée à l’avance
                </h4>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  Communiquez vos dates et votre heure d’arrivée pour préparer
                  votre demande de location.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Fleet -->
    <section class="bg-[#f7faf9] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-[#008f83]"
          >
            Notre parc automobile
          </p>

          <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
            Quelle voiture louer à l’aéroport de Casablanca ?
          </h2>

          <p class="mt-5 leading-7 text-gray-600">
            Le véhicule idéal dépend du nombre de passagers, de vos bagages et
            de vos déplacements. Consultez notre parc pour choisir une voiture
            adaptée à votre séjour.
          </p>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-2xl"
              aria-hidden="true"
            >
              🚗
            </div>
            <h3 class="text-xl font-bold">
              Citadines
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Pratiques pour circuler dans Casablanca et se garer plus
              facilement en ville.
            </p>
            <a
              href="/list-parc"
              class="mt-5 inline-flex font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir les véhicules →
            </a>
          </article>

          <article
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-2xl"
              aria-hidden="true"
            >
              🚘
            </div>
            <h3 class="text-xl font-bold">
              Berlines
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Un choix adapté aux déplacements personnels et professionnels,
              selon les modèles disponibles.
            </p>
            <a
              href="/list-parc"
              class="mt-5 inline-flex font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir les véhicules →
            </a>
          </article>

          <article
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-2xl"
              aria-hidden="true"
            >
              🚙
            </div>
            <h3 class="text-xl font-bold">
              SUV
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Une option à considérer pour davantage d’espace et des trajets
              en famille ou entre amis.
            </p>
            <a
              href="/list-parc"
              class="mt-5 inline-flex font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir les véhicules →
            </a>
          </article>

          <article
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eefaf8] text-2xl"
              aria-hidden="true"
            >
              🚐
            </div>
            <h3 class="text-xl font-bold">
              Utilitaires
            </h3>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Pour certains besoins professionnels, sous réserve de
              disponibilité du véhicule souhaité.
            </p>
            <a
              href="/list-parc"
              class="mt-5 inline-flex font-bold text-[#008f83] hover:text-[#00766d]"
            >
              Voir les véhicules →
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Airport pickup -->
    <section class="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div
        class="mx-auto grid max-w-7xl gap-10 rounded-3xl bg-[#003f3b] p-8 text-white sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-[#48d5c7]"
          >
            Aéroport Mohammed V · CMN
          </p>

          <h2 class="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Votre voiture vous attend à votre arrivée à Casablanca
          </h2>

          <p class="mt-5 leading-7 text-white/80">
            Pour organiser la livraison de votre voiture à l’aéroport
            Mohammed V, transmettez à VOG CAR les informations de votre
            réservation et votre heure d’arrivée. Notre équipe pourra
            coordonner la prise en charge avec vous.
          </p>

          <p class="mt-4 leading-7 text-white/80">
            Pensez à signaler tout changement de vol ou d’horaire afin de
            faciliter l’organisation de la remise du véhicule.
          </p>

          <a
            :href="`https://wa.me/${config.public.whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-7 inline-flex rounded-xl bg-[#00a99d] px-6 py-3.5 font-bold text-white transition hover:bg-[#008f83]"
          >
            Préparer mon arrivée →
          </a>
        </div>

        <div class="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <h3 class="text-xl font-bold">
            Pour organiser la livraison
          </h3>

          <ul class="mt-6 space-y-4 text-white/85">
            <li class="flex gap-3">
              <span class="font-bold text-[#48d5c7]">01.</span>
              <span>Votre date et heure d’arrivée.</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-[#48d5c7]">02.</span>
              <span>Le numéro de vol, si disponible.</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-[#48d5c7]">03.</span>
              <span>Le véhicule et la durée de location souhaités.</span>
            </li>
            <li class="flex gap-3">
              <span class="font-bold text-[#48d5c7]">04.</span>
              <span>Vos coordonnées pour confirmer les modalités.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Booking steps -->
    <section class="bg-[#eefaf8] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-[#008f83]"
          >
            Comment réserver ?
          </p>
          <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
            Organisez votre location de voiture en trois étapes
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="step in bookingSteps"
            :key="step.number"
            class="rounded-2xl bg-white p-7 shadow-sm"
          >
            <span
              class="text-4xl font-extrabold text-[#00a99d]/40"
              aria-hidden="true"
            >
              {{ step.number }}
            </span>
            <h3 class="mt-4 text-xl font-bold">
              {{ step.title }}
            </h3>
            <p class="mt-3 leading-7 text-gray-600">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Local SEO content -->
    <section class="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto max-w-4xl">
        <h2 class="text-3xl font-bold">
          Découvrez Casablanca à votre rythme
        </h2>

        <div class="mt-6 space-y-4 leading-7 text-gray-600">
          <p>
            Avec une voiture de location, vous pouvez organiser vos
            déplacements entre l’aéroport Mohammed V, le centre-ville de
            Casablanca, les quartiers d’affaires et les autres lieux de votre
            séjour selon votre programme.
          </p>

          <p>
            Si vous visitez la ville pour la première fois, vous pourrez
            notamment planifier vos déplacements vers la mosquée Hassan II,
            la Corniche ou le centre de Casablanca. Pensez à tenir compte du
            trafic et de la durée de vos trajets.
          </p>

          <p>
            Vous recherchez une
            <NuxtLink
              to="/location-voiture-casablanca"
              class="font-semibold text-[#008f83] underline underline-offset-4 hover:text-[#00766d]"
            >
              location de voiture à Casablanca
            </NuxtLink>
            en dehors d'une arrivée à l'aéroport ? Consultez également notre
            page dédiée à la location de voitures dans la ville.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-[#f7faf9] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto max-w-4xl">
        <div class="text-center">
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-[#008f83]"
          >
            Questions fréquentes
          </p>

          <h2 class="mt-3 text-3xl font-bold sm:text-4xl">
            Location de voiture à l’aéroport de Casablanca : FAQ
          </h2>
        </div>

        <div class="mt-10 space-y-4">
          <details
            v-for="faq in faqs"
            :key="faq.question"
            class="group rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
          >
            <summary
              class="flex cursor-pointer list-none items-center justify-between gap-4 font-bold"
            >
              <span>{{ faq.question }}</span>
              <span
                class="text-xl text-[#008f83] transition-transform group-open:rotate-45"
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
    <section class="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div
        class="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#003f3b] to-[#00766d] px-7 py-12 text-center text-white sm:px-12 sm:py-16"
      >
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          Besoin d’une voiture dès votre arrivée à Casablanca ?
        </h2>

        <p class="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
          Contactez VOG CAR pour vérifier la disponibilité de votre véhicule
          et organiser sa livraison à l’aéroport Mohammed V.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            :href="`https://wa.me/${config.public.whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-xl bg-white px-7 py-4 font-bold text-[#003f3b] transition hover:bg-gray-100"
          >
            Réserver sur WhatsApp
          </a>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-xl border border-white/50 px-7 py-4 font-bold text-white transition hover:bg-white/10"
          >
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Location Voiture Aéroport Casablanca | VOG CAR',
  description:
    'Location de voiture à l’aéroport de Casablanca : VOG CAR livre votre véhicule à Mohammed V et met un chauffeur à votre disposition.',

  ogTitle: 'Location Voiture Aéroport Casablanca | VOG CAR',
  ogDescription:
    'Location de voiture à l’aéroport de Casablanca : VOG CAR livre votre véhicule à Mohammed V et met un chauffeur à votre disposition.',
  ogType: 'website',
  ogUrl: `${config.public.siteUrl}/location-voiture-aeroport-casablanca`,
  ogImage: `${config.public.mediaUrl}/images/location-voiture-aeroport-casablanca.png`,
  ogImageAlt: 'VOGCAR - Location de voitures à l’aéroport de Casablanca',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Location Voiture Aéroport Casablanca | VOG CAR',
  twitterDescription:
    'Location de voiture à l’aéroport de Casablanca : VOG CAR livre votre véhicule à Mohammed V et met un chauffeur à votre disposition.',
  twitterImage: `${config.public.mediaUrl}/images/location-voiture-aeroport-casablanca.png`
})

const faqs = [
  {
    question:
      'Puis-je récupérer ma voiture directement à l’aéroport Mohammed V ?',
    answer:
      'Oui. VOG CAR propose la livraison du véhicule directement à l’aéroport Mohammed V de Casablanca. Contactez notre équipe pour organiser votre prise en charge.'
  },
  {
    question: 'Un chauffeur est-il disponible à mon arrivée ?',
    answer:
      'Un chauffeur est disponible pour le client dans le cadre de la prise en charge organisée avec VOG CAR. Communiquez votre heure d’arrivée et les détails de votre vol lors de la réservation.'
  },
  {
    question: 'Comment réserver une voiture à l’aéroport de Casablanca ?',
    answer:
      'Contactez VOG CAR en indiquant vos dates, votre heure d’arrivée, les informations de votre vol si nécessaire et le type de véhicule souhaité. Notre équipe vous confirmera la disponibilité et les modalités.'
  },
  {
    question: 'Quels types de véhicules puis-je louer ?',
    answer:
      'Vous pouvez consulter le parc automobile VOG CAR pour découvrir les catégories proposées, notamment les citadines, les SUV et les véhicules utilitaires. La disponibilité dépend des dates de location.'
  },
  {
    question: 'Quel est le prix d’une location de voiture à l’aéroport ?',
    answer:
      'Le prix dépend du véhicule choisi, de la durée de location et des modalités de livraison. Contactez VOG CAR pour obtenir un tarif adapté à votre demande.'
  },
  {
    question: 'Puis-je réserver avant mon arrivée au Maroc ?',
    answer:
      'Oui. Nous vous recommandons de contacter VOG CAR à l’avance afin de vérifier la disponibilité du véhicule et d’organiser sa livraison à l’aéroport Mohammed V.'
  }
]

const bookingSteps = [
  {
    number: '01',
    title: 'Choisissez votre véhicule',
    description:
      'Consultez notre parc automobile et sélectionnez le véhicule adapté à votre séjour à Casablanca.'
  },
  {
    number: '02',
    title: 'Communiquez votre arrivée',
    description:
      'Indiquez votre date, votre heure d’arrivée et les informations utiles pour organiser la prise en charge.'
  },
  {
    number: '03',
    title: 'Retrouvez votre véhicule',
    description:
      'Après confirmation de votre réservation, VOG CAR organise la livraison de votre voiture à l’aéroport Mohammed V.'
  }
]

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/location-voiture-aeroport-casablanca`
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
