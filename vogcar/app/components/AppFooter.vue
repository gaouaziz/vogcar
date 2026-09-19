<template>
  <footer
    id="contacts"
    class="bg-[#003f3b] text-white"
  >
    <div class="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Logo / description -->
        <div class="lg:col-span-1">
          <a
            href="#accueil"
            class="inline-block"
          >
            <img
              src="/images/logo-vog-car.png"
              alt="VOG CAR"
              class="h-16 w-auto"
            >
          </a>

          <p class="mt-5 text-sm leading-7 text-white/70">
            Votre partenaire pour la location de voitures et vos solutions
            de mobilité.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-bold">
            Liens utiles
          </h3>

          <ul class="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a
                href="#accueil"
                class="transition hover:text-[#48d5c7]"
              >
                Accueil
              </a>
            </li>

            <li>
              <a
                href="#parc"
                class="transition hover:text-[#48d5c7]"
              >
                Liste de parc
              </a>
            </li>

            <li>
              <a
                href="#a-propos"
                class="transition hover:text-[#48d5c7]"
              >
                À propos
              </a>
            </li>

            <li>
              <a
                href="#faq"
                class="transition hover:text-[#48d5c7]"
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                href="#contacts"
                class="transition hover:text-[#48d5c7]"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-bold">
            Contact
          </h3>

          <ul class="mt-5 space-y-4 text-sm text-white/70">
            <li class="flex items-center gap-3">
              <span class="text-[#48d5c7]">☎</span>

              <a
                href="tel:0615121097"
                class="transition hover:text-white"
              >
                0615 12 10 97
              </a>
            </li>

            <li class="flex items-center gap-3">
              <span class="text-[#48d5c7]">✉</span>

              <a
                href="mailto:contact@vogcar.ma"
                class="transition hover:text-white"
              >
                contact@vogcar.ma
              </a>
            </li>

            <li class="flex items-start gap-3">
              <span class="text-[#48d5c7]">⌖</span>

              <span>
                Maroc
              </span>
            </li>
          </ul>
        </div>

        <!-- CTA -->
        <div>
          <h3 class="font-bold">
            Besoin d'un véhicule ?
          </h3>

          <p class="mt-5 text-sm leading-7 text-white/70">
            Contactez-nous pour connaître nos disponibilités et effectuer
            votre demande de réservation.
          </p>

          <a
            href="tel:0615121097"
            class="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#008f83] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00766d]"
          >
            Appeler maintenant
            <span>→</span>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50"
      >
        © {{ new Date().getFullYear() }} VOG CAR. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
