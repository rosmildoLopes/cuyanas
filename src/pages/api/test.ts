import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'test@example.com',
      subject: 'Test Email',
      text: 'This is a test email.',
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Email enviado con éxito:', data);
    }
  } catch (error) {
    console.error('Error en el envío del correo:', error);
  }
}

sendTestEmail();
