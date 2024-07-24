
// import { Resend } from 'resend';
// import InversionesCuyanas from "./emails/InversionesCuyanas";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendEmail(formData: FormData): Promise<{ message: string; data?: any; error?: any }> {
//   const nombre = formData.get("nombre");
//   const apellido = formData.get("apellido");
//   const email = formData.get("email");
//   if (!nombre || !email || !apellido) {
//     console.log("Fields are required");
//     return { message: "Fields are required" };
//   }

//   console.log({ nombre, apellido, email });

//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: email as string,
//       subject: 'Hello world',
//       react: InversionesCuyanas({ nombre: nombre as string, apellido: apellido as string }),
//     });

//     if (error) {
//       console.error('Error al enviar el correo:', error);
//       return { message: "Email sending failed", error };
//     }

//     console.log("Email sent successfully:", data);
//     return { message: "Email sent successfully", data };
//   } catch (error) {
//     console.error('Error de validación o envío:', error);
//     return { message: "Error interno del servidor", error };
//   }
// }