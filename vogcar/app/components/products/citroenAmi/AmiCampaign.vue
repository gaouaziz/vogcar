<template>
  <section class="overflow-hidden bg-white py-24 sm:py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Image -->
        <div class="relative order-2 lg:order-1">
          <div
            class="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-[#48d5c7]/20"
          />

          <div
            class="absolute -bottom-5 -right-5 h-32 w-32 rounded-3xl bg-[#008f83]/10"
          />

          <div class="relative overflow-hidden rounded-[2rem]">
            <img
              :src="`${config.public.mediaUrl}/images/citroen-ami-campaign.png`"
              alt="Flotte de Citroën Ami pour campagne publicitaire"
              class="h-[500px] w-full object-cover"
            >
          </div>
        </div>

        <!-- Text -->
        <div class="order-1 lg:order-2">
          <span
            class="inline-flex rounded-full bg-[#eefaf8] px-4 py-2 text-sm font-bold text-[#008f83]"
          >
            Votre flotte publicitaire
          </span>

          <h2
            class="mt-5 text-3xl font-black tracking-tight text-[#102a43] sm:text-4xl"
          >
            Déployez une flotte
            <span class="text-[#008f83]">
              à votre image.
            </span>
          </h2>

          <p class="mt-5 text-lg leading-8 text-gray-600">
            Imaginez plusieurs Citroën Ami circulant simultanément
            dans les zones stratégiques de votre campagne.
          </p>

          <p class="mt-4 leading-7 text-gray-600">
            Les véhicules deviennent un élément visible de votre
            identité de marque et permettent de créer une présence
            cohérente et facilement identifiable.
          </p>

          <!-- Features -->
          <div class="mt-8 space-y-4">
            <div class="flex items-start gap-4">
              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-[#008f83]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold text-[#102a43]">
                  Habillage aux couleurs de votre marque
                </h3>

                <p class="mt-1 text-sm leading-6 text-gray-500">
                  Une identité visuelle pensée pour votre campagne.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-[#008f83]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold text-[#102a43]">
                  Plusieurs véhicules
                </h3>

                <p class="mt-1 text-sm leading-6 text-gray-500">
                  Adaptez la taille de la flotte à votre campagne.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eefaf8] text-[#008f83]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold text-[#102a43]">
                  Déploiement urbain
                </h3>

                <p class="mt-1 text-sm leading-6 text-gray-500">
                  Une solution conçue pour la visibilité en ville.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
