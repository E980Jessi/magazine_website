// // import React, { useState } from "react";
// // import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import pathToParadise from "../assets/images/path-to-paradise.jpg";

// // function Login() {
// //   const [email, setEmail] = useState(""); // Use email instead of username
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate(); // Correct useNavigate

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear previous errors
// //     try {
// //       const response = await axios.post("http://localhost:5000/login", {
// //         email,  // Sending email instead of username
// //         password,
// //       });

// //       if (response.status === 200) {
// //         alert("Login successful! Redirecting to home...");
// //         navigate("/home"); // Redirect after login
// //       }
// //     } catch (err) {
// //       if (err.response && err.response.status === 404) {
// //         setError("User not found. Please check your email.");
// //       } else {
// //         setError("Invalid email or password");
// //       }
// //     }
// //   };

// //   return (
// //     <Container className="d-flex justify-content-center align-items-center vh-100">
// //       <Row className="w-100">
// //         <Col md={6} className="d-none d-md-block">
// //           <img
// //             src={pathToParadise}
// //             alt="Scenic View"
// //             className="img-fluid rounded"
// //           />
// //         </Col>
// //         <Col md={6}>
// //           <Card className="p-4 shadow">
// //             <Card.Body>
// //               <h2 className="text-center mb-4">Login</h2>
// //               {error && <div className="alert alert-danger">{error}</div>}
// //               <Form onSubmit={handleSubmit}>
// //                 <Form.Group className="mb-3" controlId="formBasicEmail">
// //                   <Form.Label>Email</Form.Label>
// //                   <Form.Control
// //                     type="email"
// //                     placeholder="Enter email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </Form.Group>

// //                 <Form.Group className="mb-3" controlId="formBasicPassword">
// //                   <Form.Label>Password</Form.Label>
// //                   <Form.Control
// //                     type="password"
// //                     placeholder="Password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                   />
// //                 </Form.Group>

// //                 <Button variant="danger" type="submit" className="w-100">
// //                   Login
// //                 </Button>
// //               </Form>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default Login;
// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // Import Link
// import pathToParadise from "../assets/images/path-to-paradise.jpg";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         alert("Login successful! Redirecting to home...");
//         navigate("/");
//       }
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         setError("User not found. Please check your email.");
//       } else {
//         setError("Invalid email or password");
//       }
//     }
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100">
//         <Col md={6} className="d-none d-md-block">
//           <img
//             src={pathToParadise}
//             alt="Scenic View"
//             className="img-fluid rounded"
//           />
//         </Col>
//         <Col md={6}>
//           <Card className="p-4 shadow">
//             <Card.Body>
//               <h2 className="text-center mb-4">Login</h2>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Button variant="danger" type="submit" className="w-100">
//                   Login
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 New to the website? <Link to="/signup">Sign Up</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import pathToParadise from "../assets/images/path-to-paradise.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", data.username);
        navigate("/");
        window.location.reload(); // Refresh navbar
      } else {
        setError(data.error || "Invalid credentials!");
      }
    } catch (error) {
      setError("Error connecting to the server!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        {/* Image Column - Hidden on small screens */}
        <Col md={6} className="d-none d-md-block">
          <img src={pathToParadise} alt="Scenic View" className="img-fluid rounded" />
        </Col>

        {/* Login Form Column */}
        <Col md={6}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100">
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                New to the website? <Link to="/signup">Sign Up</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

