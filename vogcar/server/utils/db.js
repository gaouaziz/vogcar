import { createClient } from '@libsql/client'
import { resolve } from 'path'

const config = useRuntimeConfig()
const isProduction = config.nodeEnv === 'production'

export const db = createClient({
  url: isProduction ? config.turso.databaseUrl : `file:${resolve(process.cwd(), 'vogcar.db')}`,
  authToken: isProduction ? config.turso.authToken : undefined
})

export async function initDatabase() {
  // =========================================================
  // 1. Création de la table
  // =========================================================

  await db.execute(`
    CREATE TABLE IF NOT EXISTS cars (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      matricule TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      category TEXT CHECK(
        category IN (
          'Citadine',
          'Berline',
          'SUV',
          'Familiale',
          'Utilitaire'
        )
      ) NOT NULL,
      transmission TEXT CHECK(
        transmission IN (
          'Manuelle',
          'Automatique'
        )
      ) NOT NULL,
      fuel TEXT CHECK(
        fuel IN (
          'Essence',
          'Diesel',
          'Hybride',
          'Électrique'
        )
      ) NOT NULL,
      seats INTEGER CHECK(seats IN (2, 4, 5, 7, 9)),
      luggage INTEGER CHECK(luggage >= 0),
      price_per_day REAL NOT NULL,
      second_price_per_day REAL NOT NULL,
      days INTEGER DEFAULT 0,
      kilometrage INTEGER DEFAULT 0,
      date_assurance TEXT,
      date_viste TEXT,
      date_begin TEXT,
      date_end TEXT,
      image_url TEXT,
      available INTEGER DEFAULT 1
    );
  `)

  // Contacts table
  await db.execute(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

  // =========================================================
  // 4. Insertion des véhicules
  // =========================================================

  await db.execute(`
    INSERT OR IGNORE INTO cars (
  matricule,
  name,
  description,
  category,
  transmission,
  fuel,
  seats,
  luggage,
  price_per_day,
  second_price_per_day,
  days,
  kilometrage,
  date_assurance,
  date_viste,
  date_begin,
  date_end,
  image_url,
  available
)
VALUES
(
  '98765-A-26',
  'Hyundai Santa Fe',
  'SUV familial spacieux et technologique, parfait pour les longs trajets en tout confort.',
  'SUV',
  'Automatique',
  'Diesel',
  7,
  4,
  80.00,
  70.00,
  5,
  35000,
  '2027-05-10',
  '2027-08-15',
  '2026-09-22',
  '2026-09-27',
  'hyundai-santa-fe.png',
  1
),
(
  '43210-B-26',
  'Jetour T2',
  'Le tout nouveau SUV baroudeur au design robuste, idéal pour l''aventure et le confort moderne.',
  'SUV',
  'Automatique',
  'Essence',
  5,
  3,
  95.00,
  85.00,
  5,
  12000,
  '2027-04-01',
  '2027-07-20',
  '2026-09-22',
  '2026-09-27',
  'jetour-t2.png',
  1
),
(
  '55555-D-26',
  'Volkswagen Touareg',
  'SUV Premium haut de gamme, alliant puissance, élégance et une expérience de conduite exclusive.',
  'SUV',
  'Automatique',
  'Diesel',
  5,
  4,
  120.00,
  110.00,
  5,
  22000,
  '2027-06-01',
  '2027-09-10',
  '2026-09-22',
  '2026-09-27',
  'volkswagen-touareg.png',
  1
),
(
  '67890-C-26',
  'Range Rover Evoque',
  'SUV compact de luxe, combinant style, performance et technologie avancée pour une conduite raffinée.',
  'SUV',
  'Automatique',
  'Essence',
  5,
  3,
  110.00,
  100.00,
  5,
  15000,
  '2027-05-15',
  '2027-08-30',
  '2026-09-22',
  '2026-09-27',
  'range-rover-evoque.png',
  1
),
(
  '67890-C-20',
  'volkswagen t-roc',
  'SUV compact alliant style et praticité, idéal pour la ville comme pour les escapades.',
  'SUV',
  'Automatique',
  'Essence',
  5,
  3,
  110.00,
  100.00,
  5,
  15000,
  '2027-04-01',
  '2027-07-20',
  '2026-09-22',
  '2026-09-27',
  'volkswagen-t-roc.png',
  1
),
  (
    '54321-E-26',
    'Dacia Duster',
    'SUV abordable et robuste, parfait pour les aventures en famille ou entre amis.',
    'SUV',
    'Manuelle',
    'Essence',
    5,
    3,
    70.00,
    60.00,
    5,
    25000,
    '2027-03-15',
    '2027-06-30',
    '2026-09-22',
    '2026-09-27',
    'dacia-duster.png',
    1
);
  `)

  console.log(
    '🚗 Base de données VOG CAR vérifiée et opérationnelle !'
  )
}

// Lancement au démarrage de Nuxt
initDatabase().catch(console.error)
