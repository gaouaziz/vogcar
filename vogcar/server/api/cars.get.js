export default defineEventHandler(async () => {
  try {
    const result = await db.execute({
      sql: 'SELECT * FROM cars WHERE available = 1',
      args: []
    })

    // Retourne les lignes sous forme de tableau d'objets clean
    return result.rows
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Impossible de charger les véhicules : ' + error.message
    })
  }
})
