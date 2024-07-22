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
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

interface ContactFormEmailProps {
  nombre: string;
  apellido: string;
}

export const InversionesCuyanas: React.FC<Readonly<ContactFormEmailProps>> = ({
  nombre,
  apellido,
}) => (
  <Html>
    <Head />
    <Preview>Detalles de tu Registro en Inversiones Cuyanas</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                style={sectionLogo}
                src={`${baseUrl}/static/logo-cuyanas.jpeg`}
                width="340"
                height="120"
                alt="Logo Inversiones Cuyanas"
              />
            </Column>
          </Row>
        </Section>

        <Section>
          <h1>Bienvenido a Inversiones Cuyanas</h1>
          <p>Estos son los detalles de su registro:</p>
          <ul>
            <li>Nombre: {nombre}</li>
            <li>Apellido: {apellido}</li>
          </ul>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>INVERSIONES CUYANAS</Text>
          <Text style={paragraph}>Hola, muchas gracias por contactarnos</Text>
          <Text style={paragraph}>
            Esto es un mail de prueba, deberíamos crear un mail definitivo
          </Text>
          <Text style={paragraph}>
            Podríamos usar links que nos llevan a otras páginas si quieren, por
            ejemplo:{" "}
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
            Aca voy a poner la información del usuario:
          </Text>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Muchas gracias,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>
            Inversiones Cuyanas
          </Text>
        </Section>

        <Section style={containerContact}>
          <Row>
            <Text style={paragraph}>Contactanos</Text>
          </Row>
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
                  src={`${baseUrl}/static/google-play-chat.png`}
                  alt="Google Play Chat"
                />
                instagram
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://example.com/">
                <Img
                  width="28"
                  height="28"
                  src={`${baseUrl}/static/google-play-academy.png`}
                  alt="Google Play Academy"
                />
                facebook
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
            Recibiste este correo porque completaste nuestro formulario de alta,
            etc.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default InversionesCuyanas;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "23px 0 0 0",
  display: "flex",
  justifyContent: "center",
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
  padding: "0 20px 20px 20px",
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
