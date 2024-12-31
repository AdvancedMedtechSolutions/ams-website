import React from "react";
import {
  Body,
  Column,
  Container,
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

const ContactOther = ({
  Country,
  Salutation,
  FirstName,
  LastName,
  Email,
  HospitalName,
  Message,
  ProductInterest,
  Speciality,
  TypeOfInterest,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Someone just filled contact details on AMS website.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={"https://amsdev01.vercel.app/assets/icons/ams-logo.png"}
            width="100"
            height="50"
            alt="Logo"
            style={logo}
          />
          <Text style={paragraph}>Hi,</Text>
          <Text style={paragraph}>
            You have a new contact form submission on the AMS website
            (other).
            <br />
            Below are the details.
          </Text>
          <Section>
            <Row style={row}>
              <Column style={columnHead}>Country</Column>
              <Column style={columnText}>{Country}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Salutation</Column>
              <Column style={columnText}>{Salutation}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>First Name</Column>
              <Column style={columnText}>{FirstName}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Last Name</Column>
              <Column style={columnText}>{LastName}</Column>
            </Row>

            <Row style={row}>
              <Column style={columnHead}>Email</Column>
              <Column
                style={{
                  ...columnText,
                  textDecoration: "underline",
                  color: "#067df7",
                }}
              >
                {Email}
              </Column>
            </Row>

            <Row style={row}>
              <Column style={columnHead}>HospitalName</Column>
              <Column style={columnText}>{HospitalName}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>ProductInterest</Column>
              <Column style={columnText}>{ProductInterest}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Speciality</Column>
              <Column style={columnText}>{Speciality}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Type of Interest</Column>
              <Column style={columnText}>{TypeOfInterest}</Column>
            </Row>
            <Row style={row}>
              <Column style={columnHead}>Message</Column>
              <Column style={columnText}>{Message}</Column>
            </Row>
          </Section>
          <Text style={footer}>
            This form is submitted from{" "}
            <Link href="/contact-us">Contact Page</Link>
          </Text>
          <Text style={paragraph}>- Team Ams</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Advanced MedTech Solutions
            <br /> P-21-22, 25-26 & 34-35, GIDC Manjusar, Tal – Savli, Dist. –
            Vadodara -391775 Gujarat, India
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactOther;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const row = {
  borderLeft: "1px solid #f2f2f2",
  borderRight: "1px solid #f2f2f2",
  borderTop: "1px solid #f2f2f2",
};

const columnHead = {
  textAlign: "left",
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "500",
  width: "120px",
  padding: "10px 15px",
  borderRight: "1px solid #f2f2f2",
};

const columnText = {
  textAlign: "left",
  fontSize: "15px",
  lineHeight: "26px",
  padding: "10px 15px",
  color: "#6a6a6a",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
