import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import InversionesCuyanas from '@/emails/InversionesCuyanas';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, nombre, apellido } = req.body;

      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'No Subject',
        react: InversionesCuyanas({ nombre, apellido }) || '<h1>No Content</h1>',
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
