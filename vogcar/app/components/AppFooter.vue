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
                href="/"
                class="transition hover:text-[#48d5c7]"
              >
                Accueil
              </a>
            </li>

            <li>
              <a
                href="/list-parc"
                class="transition hover:text-[#48d5c7]"
              >
                Liste de parc
              </a>
            </li>

            <li>
              <a
                href="/a-propos"
                class="transition hover:text-[#48d5c7]"
              >
                À propos
              </a>
            </li>

            <li>
              <a
                href="/faq"
                class="transition hover:text-[#48d5c7]"
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                href="/contacts"
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
            <!-- Phone -->
            <li class="flex items-center gap-3">
              <span class="text-[#48d5c7]">☎</span>

              <a
                href="tel:0615121097"
                class="transition hover:text-white"
              >
                0615 12 10 97
              </a>
            </li>

            <!-- Email -->
            <li class="flex items-center gap-3">
              <span class="text-[#48d5c7]">✉</span>

              <a
                href="mailto:contact@vogcar.ma"
                class="transition hover:text-white"
              >
                contact@vogcar.ma
              </a>
            </li>

            <!-- Address -->
            <li class="flex items-start gap-3">
              <span class="mt-0.5 text-[#48d5c7]">⌖</span>

              <a
                href="https://www.google.com/maps/place/VOG+CAR/@33.5844919,-7.620359,17z"
                target="_blank"
                rel="noopener noreferrer"
                class="leading-6 transition hover:text-white"
              >
                15 rue Anoussour - ex Conflans<br>
                Quartier Mers Sultan 2<br>
                Casablanca - Maroc
              </a>
            </li>
          </ul>
        </div>

        <!-- Address -->
        <div>
          <h3 class="font-bold">
            Localisation
          </h3>
          <a
            href="https://www.google.com/maps/place/VOG+CAR/@33.5844919,-7.620359,17z"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#48d5c7] transition hover:text-white"
          >
            Voir sur Google Maps
            <span>→</span>
          </a>

          <p class="mt-5 text-sm leading-6 text-white/50">
            Ouvert 7 jours / 7<br>
            De 09:00 à 20:00
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 mt-10 pt-6 text-center">
        <p class="text-sm text-white/50">
          © {{ new Date().getFullYear() }} VOG CAR. Tous droits réservés.
          <span class="mx-1">•</span>
          Developed by
          <a
            href="https://www.gaou.online/"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium text-[#48d5c7] transition hover:text-white"
          >
            Aziz Gaou
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
