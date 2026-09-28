<template>
  <section
    id="devis"
    class="relative overflow-hidden bg-[#eefaf8] py-24 sm:py-28"
  >
    <!-- Background Decorative Gradients -->
    <div
      class="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#48d5c7]/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#008f83]/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-5xl px-6 lg:px-8">
      <div class="overflow-hidden rounded-[2rem] bg-[#003f3b] px-7 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
        <span class="inline-flex rounded-full border border-[#48d5c7]/30 bg-white/5 px-4 py-2 text-sm font-bold text-[#48d5c7]">
          Votre prochaine campagne
        </span>

        <h2 class="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Votre marque mérite
          <span class="text-[#48d5c7]"> de bouger.</span>
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Parlons de votre objectif, de votre zone de diffusion et du nombre de véhicules souhaité.
        </p>

        <div class="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <!-- Quote Request Link -->
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

          <!-- WhatsApp Click-to-Chat Link -->
          <a
            :href="`https://wa.me/${config.public.whatsappNumber}`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition-colors duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#003f3b]"
          >
            <!-- Custom WhatsApp Icon -->
            <svg
              class="h-5 w-5 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {{ config.public.textNumber }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
