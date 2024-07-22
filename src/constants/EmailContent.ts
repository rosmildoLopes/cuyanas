import { registerSchema } from "@/validators/auth";
import { z } from "zod";

type Input = z.infer<typeof registerSchema>;
export function EmailContent(data: Input): string {
  return `
        <html>
        <body>
            <h2>¡Gracias por completar tu solicitud!</h2>
            <p>Aquí tienes un resumen de la información que proporcionaste:</p>
            <ul>
                <li><strong>Nombre:</strong> ${data.nombre} ${
    data.apellido
  }</li>
                <li><strong>DNI:</strong> ${data.dni}</li>
                <li><strong>Fecha de Nacimiento:</strong> ${
                  data.fechaDeNacimiento
                }</li>
                <li><strong>Género:</strong> ${data.genero}</li>
                <li><strong>CUIL/CUIT/CCDI:</strong> ${data.cuil_cuit_ccdi}</li>
                <li><strong>Estado Civil:</strong> ${data.estadoCivil}</li>
                <li><strong>Nacionalidad:</strong> ${data.nacionalidad}</li>
                <li><strong>Dirección:</strong> ${data.calle}, ${
    data.numeroCalle
  }, ${data.piso ? `Piso ${data.piso},` : ""} ${
    data.depto ? `Depto ${data.depto},` : ""
  } ${data.localidad}, ${data.estado}, ${data.paisResidencia}</li>
                <li><strong>Código Postal:</strong> ${data.codigoPostal}</li>
                <li><strong>Lugar de Nacimiento:</strong> ${
                  data.lugarNacimiento
                }</li>
                <li><strong>Teléfono:</strong> ${
                  data.telefono || "No especificado"
                }</li>
                <li><strong>Celular:</strong> ${data.celular}</li>
                <li><strong>Correo Electrónico:</strong> ${data.email}</li>
                <li><strong>Ingresos Anuales:</strong> ${
                  data.ingresosAnuales
                }</li>
                <li><strong>Procedencia de Fondos:</strong> ${
                  data.procedenciaFondos
                }</li>
                <li><strong>Monto a Invertir:</strong> ${
                  data.montoAInvertir
                }</li>
                <li><strong>Actividad:</strong> ${data.actividad}</li>
                <li><strong>Profesión:</strong> ${data.profesion}</li>
                <li><strong>Forma de Transferencia:</strong> ${
                  data.formaDeTransferencia
                }</li>
            </ul>
            <p>Nos pondremos en contacto contigo pronto para continuar con el proceso.</p>
        </body>
        </html>
    `;
}
