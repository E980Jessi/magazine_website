import React from "react";
import { Container, Row, Col,  Image } from "react-bootstrap";
import adobeImage from "../assets/images/adobe-tools.jpg"; // Adjust path as needed
// import weddingBellsLogo from "../assets/images/wedding-bells.png"; // Logo path
// import livingLogo from "../assets/images/living.png"; // Logo path
// import fridayLogo from "../assets/images/friday.png"; // Logo path
// import buildLogo from "../assets/images/build.png"; // Logo path
function About() {
  return (
    <Container className="mt-5">
      <h2 className="text-center">About Us</h2>
      <Row className="mt-4">
        <Col md={6}>
          <p>
            Welcome to <strong>ECS Nepal</strong>, the premier culture and
            lifestyle magazine of Nepal. As a pioneering publication, our core
            mission is to explore and celebrate the rich cultural heritage of
            Nepal. We share inspiring stories and showcase traditions of art,
            architecture, and way of life.
          </p>
          <p>
            Our magazine reaches a diverse audience including professionals,
            students, travelers, and tourists. We cover a range of topics such
            as Nepal's travel, hospitality, adventure, and unique cultural
            aspects.
          </p>
          <p>
            Join us in celebrating Nepal’s beauty and cultural richness!
          </p>
        </Col>
        <Col md={6}>
          <Image src={adobeImage} alt="Adobe Tools" fluid rounded />
        </Col>
      </Row>
      <h4 className="text-center mt-6 mb-5" style={{ marginTop: "90px" }}>Our Sister Publications</h4>
      <Row className="text-center mt-4">
        <Col><h5>Wedding Bells</h5></Col>
        <Col><h5>Living</h5></Col>
        <Col><h5>Friday</h5></Col>
        <Col><h5>Build</h5></Col>
      </Row>
    </Container>
  );
}

export default About;
