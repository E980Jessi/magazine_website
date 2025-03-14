// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Nav, Navbar } from "react-bootstrap";
// function NavigationBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           ECS NEPAL
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About Us</Nav.Link>
//             <Nav.Link as={Link} to="/magazine">Magazine</Nav.Link>
//             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavigationBar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authFlag = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authFlag);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ECS NEPAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            {isAuthenticated && <Nav.Link as={Link} to="/magazine">Magazine</Nav.Link>}
            {isAuthenticated ? (
              <Button variant="light" onClick={handleLogout} className="ms-2">Logout</Button>
            ) : (
              <Button variant="light" as={Link} to="/login" className="ms-2">Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
