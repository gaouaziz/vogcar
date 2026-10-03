<template>
  <section class="bg-[#102a43] py-20 text-white sm:py-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span
            class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#48d5c7]"
          >
            Confort & expérience
          </span>

          <h2
            class="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            Le confort de vos clients au cœur du trajet.
          </h2>

          <p class="mt-5 text-lg leading-8 text-white/70">
            Pour une excursion de quelques heures ou un transfert,
            proposer un véhicule adapté contribue à rendre le déplacement
            plus simple et agréable.
          </p>

          <div class="mt-8 space-y-5">
            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#48d5c7]/10 text-[#48d5c7]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold">
                  Configuration 1 + 8 places
                </h3>

                <p class="mt-1 text-sm text-white/60">
                  Une capacité adaptée aux petits et moyens groupes.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#48d5c7]/10 text-[#48d5c7]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold">
                  Transmission automatique
                </h3>

                <p class="mt-1 text-sm text-white/60">
                  Une conduite pratique pour les déplacements urbains
                  et touristiques.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#48d5c7]/10 text-[#48d5c7]"
              >
                ✓
              </div>

              <div>
                <h3 class="font-bold">
                  Une image professionnelle
                </h3>

                <p class="mt-1 text-sm text-white/60">
                  Un véhicule adapté aux prestations touristiques
                  et professionnelles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            :src="`${config.public.mediaUrl}/images/fiat-scudo-interior.jpg`"
            alt="Intérieur Fiat Scudo"
            class="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
