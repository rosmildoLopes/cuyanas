import { z } from "zod";
const nonEmptyString = z.string().refine((val) => val.trim() !== "", {
  message: "El campo es obligatorio",
});
export const registerSchema = z
  .object({
    dni: z
      .string()
      .min(5, { message: "El numero de DNI es muy corto" })
      .max(8)
      .refine((val) => !isNaN(val as unknown as number), {
        message: "Complete solamente con numeros",
      }),
    tramiteDni: z.string().min(10, { message: "Campo obligatorio" }).max(15),
    terminos: z.boolean().refine((val) => val === true, {
      message: "Debe aceptar los términos y condiciones",
    }),
    genero: nonEmptyString,
    nombre: nonEmptyString,
    apellido: nonEmptyString,
    fechaDeNacimiento: nonEmptyString,
    email: z.string().email(),
    confirmEmail: z.string().email(),
    cuil_cuit_ccdi: z
      .string()
      .min(5, { message: "muy corto" })
      .max(15)
      .refine((val) => !isNaN(val as unknown as number), {
        message: "Complete solamente con numeros",
      }),
    estadoCivil: z.string(),
    nacionalidad: z.string(),
    calle: z.string(),
    numeroCalle: z.string(),
    piso: z.string().optional(),
    depto: z.string().optional(),
    paisResidencia: z.string(),
    codigoPostal: z.string(),
    localidad: z.string(),
    estado: z.string(),
    lugarNacimiento: z.string(),
    telefono: z.string().optional(),
    celular: nonEmptyString,
    ingresosAnuales: z.string(),
    procedenciaFondos: z.string(),
    montoAInvertir: z.string(),
    profesion: z.string(),
    actividad: z.string(),
    formaDeTransferencia: z.string(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Los correos electrónicos no coinciden",
    path: ["confirmEmail"], // este es el campo que se marcará con el error
  });
