import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import magazine1 from "../assets/images/magazine1.jpg";
import magazine2 from "../assets/images/magazine2.jpg";
import magazine3 from "../assets/images/magazine3.jpg";
import "../styles.css";

const magazines = [
  { id: "236", image: magazine1, issue: "Issue 236" },
  { id: "231", image: magazine2, issue: "Issue 231" },
  { id: "223", image: magazine3, issue: "Issue 223" },
];

const Magazine = () => {
  return (
    <>
     
      <Container className="magazine-container text-center">
        <h2 className="magazine-title">ECS MEDIA</h2>
        <p className="magazine-subtitle">Travel &nbsp; | &nbsp; Craft &nbsp; | &nbsp; Culture</p>
        <Row className="justify-content-center">
          {magazines.map((mag) => (
            <Col key={mag.id} md={3} className="magazine-card">
              <Link to={`/magazine/${mag.id}`}>
                <Card className="shadow">
                  <Card.Img variant="top" src={mag.image} className="img-fluid rounded" />
                  <Card.Body>
                    <p>{mag.issue}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Magazine;
