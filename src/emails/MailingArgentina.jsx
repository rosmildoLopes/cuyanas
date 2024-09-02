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

const baseUrl = process.env.VERCEL_URL || "https://cuyanas.vercel.app";

export const AcademiaMailing = () => (
  <Tailwind>
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Titan+One&family=Ultra&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>#Academia Numen</Preview>
      <Body
        className="bg-gray-100 "
        tyle={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <Link
          href="https://www.academianumen.com.ar/marketingPolitico"
          target="_blank"
        >
          <Container className="relative lg:w-[648px] max-w-full bg-[#1D1B22] text-white flex flex-col gap-12">
            <Text className="text-center p-12 max-w-full ">
              <Link
                href="https://www.academianumen.com.ar"
                target="_blank"
                className="text-white cursor-pointer flex justify-center items-center"
              >
                <Img
                  className="w-2/3 mx-auto"
                  src="https://cuyanas.vercel.app/static/logoAcademia.png"
                  width={600}
                  alt="logo academia"
                />
              </Link>
            </Text>

            <Heading
              className={`flex flex-col mx-auto justify-center items-center w-full `}
            >
              <Text
                className="text-2xl lg:text-4xl text-center tracking-wider font-semibold"
                style={{ fontFamily: "'Ultra', serif" }}
              >
                DIPLOMATURA
              </Text>
              <Text
                className="text-2xl lg:text-4xl text-center tracking-wider font-semibold"
                style={{ fontFamily: "'Ultra', serif" }}
              >
                INTERNACIONAL
              </Text>
            </Heading>

            <Section className="flex flex-col justify-center mx-auto">
              <Text className="text-white cursor-pointer flex justify-center items-center mx-auto">
                <Img
                  className="w-10/12 mx-auto"
                  src="https://cuyanas.vercel.app/static/mktPolitico.png"
                  width={600}
                  alt="logoMktPolitico"
                />
              </Text>
              <Text className="w-10/12 mx-auto">
                <Img
                  className="w-full mx-auto"
                  src="https://cuyanas.vercel.app/static/logoProfesor.png"
                  width={200}
                  alt="logo Profesor"
                />
              </Text>
            </Section>
            <Section
              style={borderStyle}
              className="w-9/12 mx-auto py-2 mb-8 rounded-3xl"
            >
              <Text
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="text-xl lg:text-3xl text-center font-extrabold"
              >
                Inicio{" "}
                <span className="text-[#A673F7] font-extrabold">
                  7 de Octubre*
                </span>
              </Text>
              <Text
                style={{ fontFamily: "'Poppins', sans-serif" }}
                className="text-xl text-center italic text-[#A673F7] -mt-5"
              >
                *cupos limitados
              </Text>
            </Section>

            <Section className="w-10/12 mx-auto mb-12">
              <Text
                className="text-xl lg:text-3xl text-center font-semibold mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Estrategia de campaña
              </Text>

              <Text
                className="text-xl lg:text-3xl text-center font-semibold mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Comunicación de gestión
              </Text>

              <Text
                className="text-xl lg:text-3xl text-center font-semibold mb-5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Formación de candidatos y espacios políticos
              </Text>

              <Text
                className="text-xl lg:text-3xl text-center font-semibold "
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                El curso más completo y efectivo de Latinoamérica
              </Text>
            </Section>
            <Section className="w-10/12 mx-auto mb-12 flex justify-center">
              <Row className="flex justify-center mx-auto gap-5">
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    src="https://cuyanas.vercel.app/static/tiempo.png"
                    width={108}
                    alt="pointer"
                    className="w-full"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={{ fontFamily: "'Titan One', cursive" }}
                    className="text-2xl lg:text-3xl border rounded-3xl text-center"
                  >
                    Duración <span className="text-[#C1FFD7]">8 meses</span>
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section style={sectionStyle} className="mx-auto">
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    48 clases en vivo (Zoom) con presencialidad optativa y 24
                    clases grabadas.
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    +60 horas de videos explicativos
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    Acceso ilimitado
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    +50 presentaciones descargables
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    Campus virtual
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    className="text-left font-bold text-md lg:text-2xl"
                    style={paragraphStyle}
                  >
                    Orientación y guía del profesor
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
                    Acceso desde PC o Celular
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "16.666667%" }}>
                  <Img
                    style={imgStyle}
                    src="https://cuyanas.vercel.app/static/pointer.png"
                    width={108}
                    alt="pointer"
                  />
                </Column>
                <Column style={columnStyle}>
                  <Text
                    style={paragraphStyle}
                    className="text-left font-bold text-md lg:text-2xl"
                  >
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
              <Text
                style={{ fontFamily: "'Ultra', serif" }}
                className="text-2xl lg:text-4xl font-semibold text-[#A673F7] text-center "
              >
                Medios de pago
              </Text>
            </Section>
            <Section className="flex item-center justify-center mx-auto w-full">
              <Img
                src="https://cuyanas.vercel.app/static/pagosArgentina.png"
                width={400}
                alt="pointer"
                className="my-12 mx-auto w-2/3"
              />
            </Section>
            <Text className="text-center p-12 max-w-full mx-auto">
              <Link
                href="https://www.academianumen.com.ar"
                target="_blank"
                className="text-white cursor-pointer flex justify-center items-center"
              >
                <Img
                  className="w-2/3  mx-auto"
                  src="https://cuyanas.vercel.app/static/logoAcademia.png"
                  width={600}
                  alt="logo academia"
                />
              </Link>
            </Text>
          </Container>
        </Link>
      </Body>
    </Html>
  </Tailwind>
);

export default AcademiaMailing;

const paragraphStyle = {
  color: "#C1FFD7",
  fontFamily: "Poppins, Arial, sans-serif",
};

const imgStyle = {
  display: "block",
  margin: "0 auto",
  width: "32px",
};

const columnStyle = {
  width: "80%",
  margin: "0 auto",
  textAlign: "center",
};

const sectionStyle = {
  width: "83.333333%",
  margin: "0 auto",
};
const borderStyle = {
  border: "3px solid #C1FFD7",
};
