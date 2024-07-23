// pages/api/emails/route.js
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import InversionesCuyanas from '@/emails/InversionesCuyanas';
import { z } from 'zod';
import { logger } from '../../../../logger';

const resend = new Resend(process.env.RESEND_API_KEY);
logger.info("Resend API Key:", process.env.RESEND_API_KEY);
console.log("Resend API Key:", process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  nombre: z.string().min(2),
  apellido: z.string().min(2),
  email: z.string().email(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  logger.info("Resend API Key:", process.env.RESEND_API_KEY);
  if (req.method === 'POST') {
    try {
      logger.info("Request body:", req.body);
      logger.info("Resend API Key:", process.env.RESEND_API_KEY);
      const { nombre, apellido, email } = sendRouteSchema.parse(req.body);
      logger.info("Parsed data:", { nombre, apellido, email });

      logger.info("Attempting to send email...");
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Hello world',
        react: InversionesCuyanas({ nombre, apellido }),
      });

      if (error) {
        logger.error('Error al enviar el correo:', error);
        return res.status(400).json({ message: "Email sending failed", error });
      }

      logger.info("Email sent successfully:", data);
      return res.status(200).json({ message: "Email sent successfully", data });
    } catch (error) {
      logger.error('Error de validación o envío:', error);
      return res.status(400).json({ error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};

export default handler;
