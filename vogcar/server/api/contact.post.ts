export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, phone, email, message } = body

    if (!name || !phone || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Les champs nom, téléphone et message sont obligatoires.'
      })
    }

    await db.execute({
      sql: `
        INSERT INTO contacts (
          name,
          phone,
          email,
          message
        )
        VALUES (?, ?, ?, ?)
      `,
      args: [
        name,
        phone,
        email || null,
        message
      ]
    })

    return {
      success: true,
      message: 'Votre message a bien été enregistré avec succès.'
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Une erreur est survenue lors de l\'envoi du message : ' + error.message
    })
  }
})
