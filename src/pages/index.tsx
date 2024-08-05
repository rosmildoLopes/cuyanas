import Image from "next/image";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema } from "@/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { HandleSweetAlertTerminosRenaper } from "@/components/Consetimiento";
import { FaInfoCircle } from "react-icons/fa";
import { Client, Databases, ID } from "appwrite";
import {
  databases,
  NEXT_PUBLIC_BUCKET_ID,
  storage,
} from "../../appwriteConfig";
import { USUARIO_COLLECTION_ID, DATABASE_ID } from "../../appwriteConfig";
import CustomFormField, { FormFieldType } from "@/components/CustomFormField";
import FileUploader from "@/components/FileUploader";

export type Input = z.infer<typeof registerSchema>;
export default function Home() {
  const emailEnviado = () => {
    Swal.fire({
      title: "Muchas gracias por su tiempo",
      text: "Solicitud completada, le enviaremos un correo a continuacion con los pasos a seguir",
      icon: "success",
    });
  };
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      dni: "",
      tramiteDni: "",
      terminos: false,
      genero: "",
      nombre: "",
      apellido: "",
      fechaDeNacimiento: "",
      email: "",
      confirmEmail: "",
      cuil_cuit_ccdi: "",
      estadoCivil: "",
      nacionalidad: "",
      calle: "",
      numeroCalle: "",
      piso: "",
      depto: "",
      paisResidencia: "",
      codigoPostal: "",
      localidad: "",
      estado: "",
      lugarNacimiento: "",
      telefono: "",
      celular: "",
      ingresosAnuales: "",
      procedenciaFondos: "",
      montoAInvertir: "",
      actividad: "",
      profesion: "",
      formaDeTransferencia: "",
      identificationDocument: [],
    },
  });

  const onSubmit: SubmitHandler<Input> = async (data) => {
    // const response = await fetch("/api/send/route", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     nombre: data.nombre,
    //     apellido: data.apellido,
    //     email: data.email,
    //   }),
    // });

    // if (response){
    //   emailEnviado()
    // }

    try {
      if (NEXT_PUBLIC_BUCKET_ID && DATABASE_ID && USUARIO_COLLECTION_ID) {
        if (
          data.identificationDocument &&
          data.identificationDocument.length > 0
        ) {
          const file = data.identificationDocument[0];

          // Verificar que `file` sea de tipo `File`
          if (!(file instanceof File)) {
            console.error("El archivo no es una instancia de File");
            return;
          }

          const fileResponse = await storage.createFile(
            NEXT_PUBLIC_BUCKET_ID,
            ID.unique(),
            file
          );
          console.log("Imagen subida:", fileResponse);

          // Crear el objeto documentData extendiendo `data` y añadiendo los campos adicionales
          const documentData = {
            ...data,
            imageUrl: fileResponse.$id,
            filename: file.name,
          };

          console.log("Datos del documento a crear:", documentData);

          const createDocumentResponse = await databases.createDocument(
            DATABASE_ID,
            USUARIO_COLLECTION_ID,
            ID.unique(),
            documentData
          );
          console.log("Documento creado:", createDocumentResponse);

          // ¡Listo! Has subido la imagen al bucket de almacenamiento y creado un documento en la base de datos.
        } else {
          console.error("No se ha seleccionado ninguna imagen.");
        }
      } else {
        console.error(
          "NEXT_PUBLIC_BUCKET_ID, DATABASE_ID o USUARIO_COLLECTION_ID no están definidos."
        );
      }
    } catch (error) {
      console.error("Error al crear el documento:", error);
    }
  };

  const handleStepValidation = () => {
    if (formStep === 0) {
      form.trigger(["dni", "tramiteDni", "genero", "terminos"]);
      const dniState = form.getFieldState("dni");
      const tramiteDniState = form.getFieldState("tramiteDni");
      const generoState = form.getFieldState("genero");
      const terminosState = form.getFieldState("terminos");
      if (!dniState.isDirty || dniState.invalid) return;
      if (!tramiteDniState.isDirty || tramiteDniState.invalid) return;
      if (!generoState.isDirty || generoState.invalid) return;
      if (!terminosState.isDirty || terminosState.invalid) return;
      setFormStep(formStep + 1);
    }
    if (formStep === 1) {
      form.trigger([
        "nombre",
        "apellido",
        "fechaDeNacimiento",
        "dni",
        "genero",
        "cuil_cuit_ccdi",
        "estadoCivil",
        "nacionalidad",
        "calle",
        "piso",
        "paisResidencia",
        "codigoPostal",
        "localidad",
        "estado",
        "lugarNacimiento",
        "telefono",
        "celular",
        "email",
        "confirmEmail",
        "identificationDocument",
      ]);
      const nombreState = form.getFieldState("nombre");
      const apellidoState = form.getFieldState("apellido");
      const fechaNacimientoState = form.getFieldState("fechaDeNacimiento");
      const dniState = form.getFieldState("dni");
      const generoState = form.getFieldState("genero");
      const cuilCuitCcdiState = form.getFieldState("cuil_cuit_ccdi");
      const estadoCivilState = form.getFieldState("estadoCivil");
      const nacionalidadState = form.getFieldState("nacionalidad");
      const calleState = form.getFieldState("calle");
      const pisoState = form.getFieldState("piso");
      const paisResidenciaState = form.getFieldState("paisResidencia");
      const codigoPostalState = form.getFieldState("codigoPostal");
      const localidadState = form.getFieldState("localidad");
      const estadoState = form.getFieldState("estado");
      const lugarNacimientoState = form.getFieldState("lugarNacimiento");
      const telefonoState = form.getFieldState("telefono");
      const celularState = form.getFieldState("celular");
      const emailState = form.getFieldState("email");
      const confirmEmailState = form.getFieldState("confirmEmail");
      const identificationDocument = form.getFieldState(
        "identificationDocument"
      );

      if (!nombreState.isDirty || nombreState.invalid) return;
      if (!apellidoState.isDirty || apellidoState.invalid) return;
      if (!fechaNacimientoState.isDirty || fechaNacimientoState.invalid) return;
      if (!dniState.isDirty || dniState.invalid) return;
      if (!generoState.isDirty || generoState.invalid) return;
      if (!cuilCuitCcdiState.isDirty || cuilCuitCcdiState.invalid) return;
      if (!estadoCivilState.isDirty || estadoCivilState.invalid) return;
      if (!nacionalidadState.isDirty || nacionalidadState.invalid) return;
      if (!calleState.isDirty || calleState.invalid) return;
      if (!pisoState.isDirty || pisoState.invalid) return;
      if (!paisResidenciaState.isDirty || paisResidenciaState.invalid) return;
      if (!codigoPostalState.isDirty || codigoPostalState.invalid) return;
      if (!localidadState.isDirty || localidadState.invalid) return;
      if (!estadoState.isDirty || estadoState.invalid) return;
      if (!lugarNacimientoState.isDirty || lugarNacimientoState.invalid) return;
      if (!telefonoState.isDirty || telefonoState.invalid) return;
      if (!celularState.isDirty || celularState.invalid) return;
      if (!emailState.isDirty || emailState.invalid) return;
      if (!confirmEmailState.isDirty || confirmEmailState.invalid) return;
      if (!identificationDocument.isDirty || identificationDocument.invalid)
        return;

      setFormStep(formStep + 1);
    }

    if (formStep === 2) {
      form.trigger([
        "ingresosAnuales",
        "procedenciaFondos",
        "montoAInvertir",
        "actividad",
        "profesion",
        "formaDeTransferencia",
      ]);

      const ingresosAnualesState = form.getFieldState("ingresosAnuales");
      const procedenciaFondosState = form.getFieldState("procedenciaFondos");
      const montoAInvertirState = form.getFieldState("montoAInvertir");
      const actividadState = form.getFieldState("actividad");
      const profesionState = form.getFieldState("profesion");
      const formaDeTransferenciaState = form.getFieldState(
        "formaDeTransferencia"
      );

      if (!ingresosAnualesState.isDirty || ingresosAnualesState.invalid) return;
      if (!procedenciaFondosState.isDirty || procedenciaFondosState.invalid)
        return;
      if (!montoAInvertirState.isDirty || montoAInvertirState.invalid) return;
      if (!actividadState.isDirty || actividadState.invalid) return;
      if (!profesionState.isDirty || profesionState.invalid) return;
      if (
        !formaDeTransferenciaState.isDirty ||
        formaDeTransferenciaState.invalid
      )
        return;

      setFormStep(formStep + 1);
    }
    if (formStep === 3) {
      setFormStep(formStep + 1);
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <Card className="w-full md:w-8/12">
        <div className="flex justify-center items-center py-2">
          <Image
            priority
            layout="intrinsic"
            alt="logo Inversiones cuyanas"
            src="/logo-cuyanas.jpeg"
            width={400}
            height={400}
          />
        </div>
        <CardHeader>
          <CardTitle className={cn("text-center text-4xl font-bold", {})}>
            {formStep === 0
              ? "Iniciar Alta de Cuenta de Persona Humana"
              : formStep === 1
              ? "Datos Personales"
              : formStep === 2
              ? "Datos Adicionales"
              : formStep === 3
              ? "Datos del Titular"
              : "Solicitud Completa"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Primero Formulario */}
              <section
                className={cn("flex flex-col gap-5", {
                  hidden: [1, 2, 3, 4].includes(formStep),
                })}
              >
                <FormField
                  control={form.control}
                  name="dni"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DNI</FormLabel>
                      <FormControl>
                        <Input placeholder="Número de DNI" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tramiteDni"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numero de tramite de DNI</FormLabel>
                      <FormControl>
                        <Input placeholder="tramite de DNI" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="genero"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Género</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Género" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {["Masculino", "Femenino", "No binario"].map(
                            (genero) => {
                              return (
                                <SelectItem key={genero} value={genero}>
                                  {genero}
                                </SelectItem>
                              );
                            }
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terminos"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0 rounded-md p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="gap-6 leading-none flex items-center justify-center relative">
                        <FormLabel>
                          Consentimiento informado ante Renaper{" "}
                        </FormLabel>
                        <button
                          className="h-12 w-12 rounded-full"
                          onClick={HandleSweetAlertTerminosRenaper}
                        >
                          <p className="text-blue-700 text-2xl hover:scale-125  transition duration-300">
                            <FaInfoCircle />
                          </p>
                        </button>
                        <FormMessage className="absolute top-6 text-[12px] italic mt-5 " />
                      </div>
                    </FormItem>
                  )}
                />
              </section>

              {/* Segundo Formulario */}
              <section
                className={cn("flex flex-col gap-5", {
                  hidden: [0, 2, 3, 4].includes(formStep),
                })}
              >
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between md:items-end gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apellido"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Apellido</FormLabel>
                        <FormControl>
                          <Input placeholder="Apellido" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fechaDeNacimiento"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Fecha De Nacimiento</FormLabel>
                        <FormControl>
                          <Input placeholder="Fecha de Nacimiento" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="dni"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>DNI</FormLabel>
                        <FormControl>
                          <Input placeholder="DNI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="genero"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>genero</FormLabel>
                        <FormControl>
                          <Input placeholder="genero" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cuil_cuit_ccdi"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Cuil/Cuit/CDI</FormLabel>
                        <FormControl>
                          <Input placeholder="Cuil/Cuit/CDI" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="estadoCivil"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Estado Civil</FormLabel>
                        <FormControl>
                          <Input placeholder="Estado Civil" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nacionalidad"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Nacionalidad</FormLabel>
                        <FormControl>
                          <Input placeholder="Nacionalidad" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="calle"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Calle</FormLabel>
                        <FormControl>
                          <Input placeholder="Calle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="piso"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Piso</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Si vives en Casa, escribe casa"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="paisResidencia"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>País de Residencia</FormLabel>
                        <FormControl>
                          <Input placeholder="País" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="codigoPostal"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Codigo Postal</FormLabel>
                        <FormControl>
                          <Input placeholder="Codigo Postal" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="localidad"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Localidad</FormLabel>
                        <FormControl>
                          <Input placeholder="Localidad" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="estado"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Input placeholder="Estado" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lugarNacimiento"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Lugar de Nacimiento</FormLabel>
                        <FormControl>
                          <Input placeholder="Lugar de Nacimiento" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="telefono"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>Telefono</FormLabel>
                        <FormControl>
                          <Input placeholder="Telefono" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="celular"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>Celular</FormLabel>
                        <FormControl>
                          <Input placeholder="celular" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmEmail"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/2">
                        <FormLabel>Validar Email</FormLabel>
                        <FormControl>
                          <Input placeholder="confirmEmail" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name="identificationDocument"
                    label="Scanned Copy of Identification Document"
                    renderSkeleton={(field) => (
                      <FormControl>
                        <FileUploader
                          files={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    )}
                  />
                </div>
              </section>

              {/* Tercero Formulario */}
              <section
                className={cn("flex flex-col gap-5", {
                  hidden: [0, 1, 3, 4].includes(formStep),
                })}
              >
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between md:items-end gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="ingresosAnuales"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Ingresos anuales en $</FormLabel>
                        <FormControl>
                          <Input placeholder="Ingresos anuales" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="procedenciaFondos"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Procedencia de los fondos</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Procedencia de los fondos" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Ahorros de mi actividad",
                              "Venta de Bienes Registrables",
                              "Otros",
                            ].map((procedenciaFondos) => {
                              return (
                                <SelectItem
                                  key={procedenciaFondos}
                                  value={procedenciaFondos}
                                >
                                  {procedenciaFondos}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="montoAInvertir"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Monto anual a invertir en $</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Monto anual a invertir" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Menos de 1,000,000",
                              "Entre 1,000,000 y 3,000,000",
                              "Entre 3,000,000 y 5,000,000",
                              "Entre 5,000,000 y 18,000,000",
                            ].map((montoAInvertir) => {
                              return (
                                <SelectItem
                                  key={montoAInvertir}
                                  value={montoAInvertir}
                                >
                                  {montoAInvertir}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="actividad"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Actividad</FormLabel>
                        <FormControl>
                          <Input placeholder="Actividad" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profesion"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Profesión/Cargo/Ocupación</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Profesión/Cargo/Ocupación
"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="formaDeTransferencia"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>
                          ¿Cómo ingresará los fondos a la cuenta corriente?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="¿Cómo ingresará los fondos a la cuenta corriente?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[
                              "Transferencia de Titulos",
                              "Transferencia Bancaria en $",
                              "Transferencia bancaria en U$D",
                              "Cheques Propios",
                              "Cheques de Terceros",
                              "Otros",
                            ].map((formaDeTransferencia) => {
                              return (
                                <SelectItem
                                  key={formaDeTransferencia}
                                  value={formaDeTransferencia}
                                >
                                  {formaDeTransferencia}
                                </SelectItem>
                              );
                            })}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>
              {/* Datos del Titular */}
              <section
                className={cn("flex flex-col gap-5", {
                  hidden: [0, 1, 2, 4].includes(formStep),
                })}
              >
                <h2 className="text-center text-lg font-bold mb-12 text-blue-500">
                  ¿Están correcto los datos?
                </h2>
                <div className="flex flex-col justify-center items-start w-full md:flex-row md:justify-between md:items-end gap-4 md:gap-10">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Nombre registrado</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cuil_cuit_ccdi"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>CUIT/CUIL registrado</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full md:w-1/3">
                        <FormLabel>Email de contacto</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </section>
              {/* Solicitud completada */}
              <section
                className={cn("flex flex-col gap-5", {
                  hidden: [0, 1, 2, 3].includes(formStep),
                })}
              >
                <div className="flex flex-col items-center justify-center p-4">
                  <p className="text-lg">
                    Muchas gracias, te enviaremos un mail con toda la
                    información...
                  </p>
                </div>
              </section>
              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-end">
                <Button
                  className={cn("bg-gray-800 text-lg", {
                    hidden: [0].includes(formStep),
                  })}
                  type="button"
                  onClick={() => {
                    setFormStep(formStep - 1);
                  }}
                >
                  Volver
                </Button>
                <Button
                  className={cn("bg-azul text-lg", {
                    hidden: [4].includes(formStep),
                  })}
                  type="button"
                  onClick={handleStepValidation}
                >
                  Siguiente <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
                <Button
                  className={cn("bg-azul text-lg", {
                    hidden: [0, 1, 2, 3].includes(formStep),
                  })}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
