// import React from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import magazine1 from "../assets/images/magazine1.jpg";
// import magazine2 from "../assets/images/magazine2.jpg";
// import magazine3 from "../assets/images/magazine3.jpg";
// import "../styles.css";

// const magazineData = {
//     "236": { image: magazine1, title: "Issue 236 - January-February 2024", pdf: "/magazines/issue_236.pdf" },
//     "231": { image: magazine2, title: "Issue 231 - November-December 2023", pdf: "/magazines/issue_231.pdf" },
//     "223": { image: magazine3, title: "Issue 223 - September-October 2023", pdf: "/magazines/issue_223.pdf" },
//   };

// const MagazineDetails = () => {
//   const { id } = useParams();
//   const magazine = magazineData[id];

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = magazine?.pdf;
//     link.download = `ECS_Nepal_${id}.pdf`; // Custom file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//         <Container className="magazine-container mt-4">
//         <Row className="align-items-center">
//           <Col md={5} className="text-center">
//             <Card className="shadow-lg">
//               <Card.Img variant="top" src={magazine?.image} className="img-fluid rounded" />
//               <Card.Body className="text-center">
//                 <Button variant="success" className="download-btn" onClick={handleDownload}>
//                   Download the pdf
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={7}>
//             <div className="magazine-content p-4 shadow-sm">
//               <h4><strong>{magazine?.title}</strong></h4>
//               <p>Welcome to this issue of ECS Nepal! This edition brings you insightful stories, expert opinions, and fresh perspectives...</p>
//               <ul>
//                 <li>✨ Trends to Watch – What’s shaping the future?</li>
//                 <li>✨ Wellness & Productivity – Kickstart your journey.</li>
//                 <li>✨ Innovation Spotlight – Groundbreaking ideas redefining industries.</li>
//                 <li>✨ Personal Growth & Success – Strategies to fuel your ambitions.</li>
//               </ul>
//               <p>Join us as we embrace the opportunities ahead!</p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default MagazineDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import magazine1 from "../assets/images/magazine1.jpg";
import magazine2 from "../assets/images/magazine2.jpg";
import magazine3 from "../assets/images/magazine3.jpg";
import "../styles.css";

const magazineData = {
  "236": { image: magazine1, title: "Issue 236 - January-February 2024", pdf: "/magazines/issue_236.pdf" },
  "231": { image: magazine2, title: "Issue 231 - November-December 2023", pdf: "/magazines/issue_231.pdf" },
  "223": { image: magazine3, title: "Issue 223 - September-October 2023", pdf: "/magazines/issue_223.pdf" },
};

const MagazineDetails = () => {
  const { id } = useParams();
  const magazine = magazineData[id];
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authFlag = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authFlag);
  }, []);

  const handleDownload = () => {
    if (!isAuthenticated) {
      alert("You must be logged in to download this magazine.");
      return;
    }

    // Simulate PDF download
    const link = document.createElement("a");
    link.href = magazine?.pdf;
    link.download = `ECS_Nepal_${id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="magazine-container mt-4">
      <Row className="align-items-center">
        <Col md={5} className="text-center">
          <Card className="shadow-lg">
            <Card.Img variant="top" src={magazine?.image} className="img-fluid rounded" />
            <Card.Body className="text-center">
              {isAuthenticated ? (
                <Button variant="success" className="download-btn" onClick={handleDownload}>
                  Download the PDF
                </Button>
              ) : (
                <Alert variant="danger" className="mt-3">
                  Please <a href="/login">Login</a> to download the magazine.
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <div className="magazine-content p-4 shadow-sm">
            <h4><strong>{magazine?.title}</strong></h4>
            <p>Welcome to this issue of ECS Nepal! This edition brings you insightful stories, expert opinions, and fresh perspectives...</p>
            <ul>
              <li>✨ Trends to Watch – What’s shaping the future?</li>
              <li>✨ Wellness & Productivity – Kickstart your journey.</li>
              <li>✨ Innovation Spotlight – Groundbreaking ideas redefining industries.</li>
              <li>✨ Personal Growth & Success – Strategies to fuel your ambitions.</li>
            </ul>
            <p>Join us as we embrace the opportunities ahead!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MagazineDetails;
