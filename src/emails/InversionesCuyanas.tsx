import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
// import { registerSchema } from "@/validators/auth";
// import { z } from "zod";

interface ContactMeEmailProps {
  nombre: string;
  apellido: string;
}
// type Input = z.infer<typeof registerSchema>;

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const InversionesCuyanas = ({
  nombre,
  apellido,
}: ContactMeEmailProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Detalles de tu Registro en Inversiones Cuyanas</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column className="flex justify-center items-center">
                <Img
                  src={`/static/logo-cuyanas.jpeg`}
                  width="340"
                  height="120"
                  alt="Logo Inversiones Cuyanas"
                />
              </Column>
            </Row>
          </Section>

          <Section>
            <h1 className="text-center">Bienvenido a Inversiones Cuyanas</h1>
          </Section>

          <Section className="p-12">
            <Hr style={hr} />
            <Text className="text-lg">
              Hola, {nombre} {apellido} muchas gracias por contactarnos
            </Text>
            <Text className="text-lg">
              Esto es un mail de prueba, deberíamos crear un mail definitivo
            </Text>
            <Text className="text-lg">
              Podríamos usar links que nos llevan a otras páginas si quieren,
              por ejemplo:{" "}
              <Link
                href="http://inversionescuyanas.com.ar/quienes-somos/"
                style={link}
              >
                ¡Quienes somos!
              </Link>
            </Text>
          </Section>

          <Section style={paragraphContent}>
            <Text style={paragraph}>
              Aca se podría poner la información del usuario:
            </Text>
            <Hr style={hr} />
          </Section>

          <Section
            style={{
              ...paragraphContent,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Text style={{ ...paragraph, fontSize: "20px" }}>
              Inversiones Cuyanas
            </Text>
          </Section>

          <Section style={containerContact}>
            <Row
              align="left"
              style={{
                width: "84px",
                float: "left",
              }}
            >
              <Column style={{ paddingRight: "4px" }}>
                <Link href="https://example.com/">
                  <Img
                    width="28"
                    height="28"
                    src={`/static/facebook.svg`}
                    alt="icono de facebook"
                  />
                </Link>
              </Column>
              <Column style={{ paddingRight: "4px" }}>
                <Link href="https://example.com/">
                  <Img
                    width="28"
                    height="28"
                    src={`/static/instagram.svg`}
                    alt="Google Play Academy"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              © 2024 Inversiones Cuyanas, AR
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: "12px",
                textAlign: "center",
                margin: 0,
              }}
            >
              Recibiste este correo porque completaste nuestro formulario de
              alta, etc.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default InversionesCuyanas;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "20px 20px 20px 20px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#7d7d7d",
  margin: 0,
};

const link = {
  color: "#007bff",
  textDecoration: "underline",
};

const hr = {
  border: "0",
  borderTop: "1px solid #eee",
  margin: "20px 0",
};

const paragraphContent = {
  padding: "10px 20px",
};
