// "use server";
// import { z } from "zod";
// import { registerSchema } from "@/validators/auth";
// import { Resend } from "resend";
// import InversionesCuyanas   from "@/emails/InversionesCuyanas";

// type Input = z.infer<typeof registerSchema>;
// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendContactForm = async (data: Input) => {
//   const result = registerSchema.safeParse(data);

//   if (result.success) {
//     const {
//       nombre,
//       apellido,
//       email,
//    } = result.data;
//     try {
//       const data = await resend.emails.send({
//         from: "Acme <onboarding@resend.dev>",
//         to: email,
//         subject: "No Subject",
//         text:'',
//         react: InversionesCuyanas({
//           nombre,
//           apellido,
//           email,
//            }),
//       });
//       return { success: true, data };
//     } catch (error) {
//       return { success: false, error };
//     }
//   }
//   if(result.error) {
//     return {success: false,error: result.error.format()}
//   }
// };
export const sendContactForm = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/emails/route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to send email: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in sendContactForm:", error);
    throw error;
  }
};
