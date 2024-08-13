import {
  Body,
  Font,
  Container,
  Head,
  Heading,
  Column,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Tailwind,
} from "@react-email/components";

import * as React from "react";
import { Titan_One, Ultra } from "next/font/google";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AcademiaMailing = () => (
  <Tailwind>
    <Html>
      <Head>
        <Font
          fontFamily="Popppins"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>#Academia Numen</Preview>
      <Body className="bg-gray-100 font-sans">
        <Container className="relative w-[648px] max-w-full bg-[#1D1B22] text-white flex flex-col gap-12">
          <Text className="text-center p-12 max-w-full ">
            <Link className="text-white cursor-pointer flex justify-center items-center">
              <Img
                className="w-1/2"
                src={`${baseUrl}/static/logoAcademia.svg`}
                width={600}
                alt="logo academia"
              />
            </Link>
          </Text>

          <Heading
            className={`flex justify-center items-center flex-col w-full`}
          >
            <Text className="text-4xl text-center">DIPLOMATURA</Text>
            <Text className="text-4xl">INTERNACIONAL</Text>
          </Heading>

          <Section className="flex flex-col justify-center">
            <Text className="text-white cursor-pointer flex justify-center items-center">
              <Img
                className="w-10/12 mx-auto"
                src={`${baseUrl}/static/logoMktPolitico.svg`}
                width={600}
                alt="logo academia"
              />
            </Text>
            <Text className="w-10/12 mx-auto">
              <Img
                className="w-full"
                src={`${baseUrl}/static/fernandoCerimedo.svg`}
                width={200}
                alt="logo academia"
              />
            </Text>
            <Text className="w-10/12 mx-auto">
              <Img
                className="w-full"
                src={`${baseUrl}/static/inicio.svg`}
                width={200}
                alt="logo academia"
              />
            </Text>
          </Section>

          <Section className="text-3xl font-semibold w-10/12 mx-auto mb-12">
            <Text className="text-3xl text-center">Estrategia de campaña</Text>

            <Text className="text-3xl text-center">
              Comunicación de gestión
            </Text>

            <Text className="text-3xl text-center">
              Formación de candidatos y espacios políticos
            </Text>

            <Text className="text-3xl text-center">
              El curso más completo y efectivo de Latinoamérica
            </Text>
          </Section>
          <Section className="text-3xl font-semibold w-10/12 mx-auto mb-12 flex justify-around">
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  src={`${baseUrl}/static/tiempoIcon.svg`}
                  width={108}
                  alt="pointer"
                  className="w-full"
                />
              </Column>
              <Column style={columnStyle}>
                <Text className="text-5xl font-bold border">
                  Duración <span className="text-[#C1FFD7]">8 meses</span>
                </Text>
              </Column>
            </Row>
            <Text className="text-3xl text-center"></Text>
          </Section>
          <Section style={sectionStyle}>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  48 clases en vivo (Zoom) con presencialidad optativa y 24
                  clases grabadas.
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  +60 horas de videos explicativos
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  Acceso ilimitado
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  +50 presentaciones descargables
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  Campus virtual
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text className="text-xl font-bold" style={paragraphStyle}>
                  Orientación y guía del profesor
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  Acceso desde PC o Celular
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ width: "16.666667%" }}>
                <Img
                  style={imgStyle}
                  src={`${baseUrl}/static/itemIcon.svg`}
                  width={108}
                  alt="pointer"
                />
              </Column>
              <Column style={columnStyle}>
                <Text style={paragraphStyle} className="text-xl font-bold">
                  Certificación oficial: «Diplomatura en Marketing Político y
                  comunicación de gestión»
                </Text>
              </Column>
            </Row>
          </Section>
          <Section style={{ padding: "20px" }}>
            <Row>
              <Column>
                <div
                  className="w-9/12 mx-auto"
                  style={{
                    borderBottom: "2px dashed #C1FFD7",
                    margin: "40px 0",
                  }}
                />
              </Column>
            </Row>
          </Section>
          <Section>
            <Text className="text-6xl font-black text-[#A673F7] text-center ">
              Medios de pago
            </Text>
            
          </Section>
          <Section className="flex  justify-center">
                <Img
                  src={`${baseUrl}/static/mercadoPago.svg`}
                  width={400}
                  alt="pointer" className="my-12 block mx-auto w-1/2"
                />
                <Img
                  src={`${baseUrl}/static/payPal.svg`}
                  width={400}
                  alt="pointer" className="mb-12 mx-auto w-1/2"
                />
                <Img
                  src={`${baseUrl}/static/webPay.svg`}
                  width={200}
                  alt="pointer" className="mb-12 mx-auto w-1/3"
                />
                <Text className="text-4xl w-9/12 mx-auto font-black  text-center mb-12">
                Transferencia Bancaria Banco de Chile
            </Text>
              </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default AcademiaMailing;

const paragraphStyle = {
  color: "#C1FFD7",
};

const imgStyle = {
  display: "block",
  margin: "0 auto",
  width: "32px",
};

const columnStyle = {
  width: "80%",
  margin: "0 auto",
  textAlign: "left",
};

const sectionStyle = {
  width: "83.333333%",
  margin: "0 auto",
};
