import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const {
      car_id,
      car_name,
      name,
      phone,
      email,
      date_begin,
      date_end,
      message
    } = body

    // ==========================================
    // Validation
    // ==========================================

    if (
      !car_id
      || !car_name
      || !name
      || !phone
      || !date_begin
      || !date_end
    ) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Veuillez remplir tous les champs obligatoires.'
      })
    }

    // ==========================================
    // Runtime config
    // ==========================================

    const config = useRuntimeConfig()

    // ==========================================
    // SMTP transporter
    // ==========================================

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,

      auth: {
        user: config.zohoUser,
        pass: config.zohoPass
      }
    })

    // ==========================================
    // Email content
    // ==========================================

    const html = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <title>Nouvelle demande de réservation</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f4f7f7;
          font-family: Arial, Helvetica, sans-serif;
          color: #102a43;
        "
      >

        <div
          style="
            max-width: 700px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          "
        >

          <!-- Header -->
          <div
            style="
              background-color: #003f3b;
              padding: 30px;
              color: #ffffff;
            "
          >
            <h1
              style="
                margin: 0;
                font-size: 24px;
              "
            >
              Nouvelle demande de réservation
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #48d5c7;
                font-size: 14px;
              "
            >
              VOG CAR
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 30px;">

            <!-- Vehicle -->
            <div
              style="
                background-color: #eefaf8;
                border-left: 4px solid #008f83;
                padding: 18px;
                margin-bottom: 25px;
                border-radius: 6px;
              "
            >
              <h2
                style="
                  margin: 0 0 8px;
                  font-size: 18px;
                  color: #008f83;
                "
              >
                Véhicule demandé
              </h2>

              <p style="margin: 0;">
                <strong>Véhicule :</strong>
                ${escapeHtml(car_name)}
              </p>

              <p style="margin: 6px 0 0;">
                <strong>ID véhicule :</strong>
                ${escapeHtml(String(car_id))}
              </p>
            </div>

            <!-- Customer -->
            <h2
              style="
                font-size: 18px;
                margin-bottom: 15px;
              "
            >
              Informations client
            </h2>

            <table
              width="100%"
              cellpadding="8"
              cellspacing="0"
              style="border-collapse: collapse;"
            >
              <tr>
                <td
                  style="
                    width: 150px;
                    color: #666;
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  Nom
                </td>

                <td
                  style="
                    border-bottom: 1px solid #eeeeee;
                    font-weight: bold;
                  "
                >
                  ${escapeHtml(name)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    color: #666;
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  Téléphone
                </td>

                <td
                  style="
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  <a
                    href="tel:${escapeHtml(phone)}"
                    style="color: #008f83;"
                  >
                    ${escapeHtml(phone)}
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    color: #666;
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  Email
                </td>

                <td
                  style="
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  ${
                    email
                      ? `<a href="mailto:${escapeHtml(email)}" style="color:#008f83;">${escapeHtml(email)}</a>`
                      : 'Non renseigné'
                  }
                </td>
              </tr>
            </table>

            <!-- Rental dates -->
            <h2
              style="
                font-size: 18px;
                margin-top: 30px;
                margin-bottom: 15px;
              "
            >
              Période de location
            </h2>

            <table
              width="100%"
              cellpadding="8"
              cellspacing="0"
              style="border-collapse: collapse;"
            >
              <tr>
                <td
                  style="
                    width: 150px;
                    color: #666;
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  Date de départ
                </td>

                <td
                  style="
                    border-bottom: 1px solid #eeeeee;
                    font-weight: bold;
                  "
                >
                  ${escapeHtml(date_begin)}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    color: #666;
                    border-bottom: 1px solid #eeeeee;
                  "
                >
                  Date de retour
                </td>

                <td
                  style="
                    border-bottom: 1px solid #eeeeee;
                    font-weight: bold;
                  "
                >
                  ${escapeHtml(date_end)}
                </td>
              </tr>
            </table>

            <!-- Message -->
            ${
              message
                ? `
                  <h2
                    style="
                      font-size: 18px;
                      margin-top: 30px;
                      margin-bottom: 15px;
                    "
                  >
                    Message
                  </h2>

                  <div
                    style="
                      background: #f8f9fa;
                      border-radius: 8px;
                      padding: 15px;
                      line-height: 1.6;
                    "
                  >
                    ${escapeHtml(message).replace(/\n/g, '<br>')}
                  </div>
                `
                : ''
            }

          </div>

          <!-- Footer -->
          <div
            style="
              background-color: #f4f7f7;
              padding: 20px 30px;
              font-size: 12px;
              color: #777;
            "
          >
            <p style="margin: 0;">
              Cette demande a été envoyée depuis le formulaire de réservation
              du site VOG CAR.
            </p>
          </div>

        </div>

      </body>
      </html>
    `

    // ==========================================
    // Send email
    // ==========================================

    await transporter.sendMail({
      from: `"VOG CAR" <${config.zohoUser}>`,
      to: 'aziz@gaou.online',

      subject: `VogCar - Nouvelle réservation - ${car_name}`,

      html,

      // Useful if you want to reply directly to the customer
      replyTo: email || undefined
    })

    return {
      success: true,
      message: 'Votre demande de réservation a été envoyée.'
    }
  } catch (error) {
    console.error('Booking error:', error)

    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage:
        error.statusMessage
        || 'Impossible d\'envoyer la demande de réservation.'
    })
  }
})

// ==========================================
// HTML escaping
// ==========================================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
