import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import InversionesCuyanas from '@/emails/InversionesCuyanas';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nombre, apellido, email } = req.body;

    if (!nombre || !apellido || !email) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Hello world',
        react: InversionesCuyanas({ nombre, apellido }),
      });

      if (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(400).json({ message: 'Error al enviar el correo', error });
      }

      return res.status(200).json({ message: 'Correo enviado exitosamente', data });
    } catch (error) {
      console.error('Error de validación o envío:', error);
      return res.status(500).json({ message: 'Error interno del servidor', error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}