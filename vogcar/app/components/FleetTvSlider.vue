<template>
  <section class="relative min-h-screen overflow-hidden bg-[#003f3b]">
    <ClientOnly>
      <Swiper
        :modules="[Autoplay, EffectFade]"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :loop="true"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false
        }"
        :speed="1000"
        class="h-screen w-full"
      >
        <SwiperSlide
          v-for="car in cars"
          :key="car.id"
          class="relative h-screen"
        >
          <!-- Background -->
          <div class="absolute inset-0">
            <img
              :src="getCarImage(car)"
              :alt="car.name"
              class="h-full w-full object-cover"
            >

            <!-- Dark gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-r
                from-[#003f3b]/95
                via-[#003f3b]/60
                to-[#003f3b]/20"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t
                from-[#003f3b]/90
                via-transparent
                to-[#003f3b]/20"
            />
          </div>

          <!-- Content -->
          <div
            class="relative z-10 flex h-full items-center px-8 py-12
              sm:px-12 lg:px-20 xl:px-28"
          >
            <div class="w-full max-w-7xl">
              <div class="max-w-2xl">
                <!-- Car name -->
                <h1
                  class="text-5xl font-black tracking-tight text-white
                    sm:text-6xl lg:text-7xl xl:text-8xl"
                >
                  {{ car.name }}
                </h1>

                <!-- Transmission + Fuel -->
                <div class="mt-6 flex flex-wrap gap-3">
                  <span
                    class="rounded-full bg-white/15 px-5 py-2.5
                      text-base font-semibold text-white backdrop-blur-md
                      sm:text-lg"
                  >
                    ⚙️ {{ car.transmission }}
                  </span>

                  <span
                    class="rounded-full bg-white/15 px-5 py-2.5
                      text-base font-semibold text-white backdrop-blur-md
                      sm:text-lg"
                  >
                    ⛽ {{ car.fuel }}
                  </span>
                </div>

                <!-- Price -->
                <div class="mt-8">
                  <p
                    class="text-sm font-medium uppercase tracking-widest
                      text-white/70 sm:text-base"
                  >
                    À partir de
                  </p>

                  <div class="mt-1 flex items-baseline gap-3">
                    <span
                      class="text-6xl font-black leading-none text-white
                        sm:text-7xl lg:text-8xl"
                    >
                      {{ formatPrice(car.price_per_day) }}
                    </span>

                    <span
                      class="text-2xl font-bold text-[#48d5c7]
                        sm:text-3xl"
                    >
                      Dh / jour
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide number -->
          <div
            class="absolute bottom-8 right-8 z-20 text-right
              text-white sm:bottom-10 sm:right-12"
          >
            <div class="text-sm font-medium text-white/60">
              Notre flotte
            </div>

            <div class="text-2xl font-bold">
              {{ String(cars.indexOf(car) + 1).padStart(2, '0') }}
              <span class="text-white/40">
                /
                {{ String(cars.length).padStart(2, '0') }}
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <template #fallback>
        <div class="flex h-screen items-center justify-center bg-[#003f3b]">
          <div class="text-xl font-semibold text-white">
            Chargement de notre flotte...
          </div>
        </div>
      </template>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-fade'

interface Car {
  id: number
  name: string
  price_per_day: number
  transmission: string
  fuel: string
  image_url: string | null
}

const config = useRuntimeConfig()

const mediaUrl = computed(() =>
  String(config.public.mediaUrl || '').replace(/\/$/, '')
)

const {
  data: cars
} = await useFetch<Car[]>('/api/cars', {
  default: () => []
})

const formatPrice = (price: number) =>
  new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0
  }).format(price)

const getCarImage = (car: Car) => {
  if (!car.image_url) {
    return `${mediaUrl.value}/images/cars/default-car.jpg`
  }

  return `${mediaUrl.value}/images/cars/${car.image_url}`
}
</script>

<style scoped>
:deep(.swiper) {
  width: 100%;
  height: 100vh;
}

:deep(.swiper-slide) {
  height: 100vh;
}

@media (prefers-reduced-motion: reduce) {
  :deep(.swiper-wrapper) {
    transition-duration: 0ms !important;
  }
}
</style>
