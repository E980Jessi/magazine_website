// // import React, { useState } from "react";
// // import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import pathToParadise from "../assets/images/path-to-paradise.jpg";

// // const Signup = () => {
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate(); // Corrected useNavigate

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear previous errors
// //     try {
// //       const response = await axios.post("http://localhost:5000/register", formData, {
// //         headers: {
// //           'Content-Type': 'application/json'
// //         }
// //       });

// //       if (response.status === 201) {
// //         alert("Registration successful! Redirecting to login...");
// //         navigate("/login"); // Corrected navigation
// //       }
// //     } catch (err) {
// //       setError(err.response?.data?.error || "Error registering user");
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
// //               <h2 className="text-center mb-4">Create an Account</h2>
// //               {error && <div className="alert alert-danger">{error}</div>}
// //               <Form onSubmit={handleSubmit}>
// //                 <Form.Group className="mb-3" controlId="formBasicUsername">
// //                   <Form.Label>Username</Form.Label>
// //                   <Form.Control
// //                     type="text"
// //                     name="username"
// //                     placeholder="Enter username"
// //                     value={formData.username}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </Form.Group>

// //                 <Form.Group className="mb-3" controlId="formBasicEmail">
// //                   <Form.Label>Email</Form.Label>
// //                   <Form.Control
// //                     type="email"
// //                     name="email"
// //                     placeholder="Enter email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </Form.Group>

// //                 <Form.Group className="mb-3" controlId="formBasicPassword">
// //                   <Form.Label>Password</Form.Label>
// //                   <Form.Control
// //                     type="password"
// //                     name="password"
// //                     placeholder="Enter password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     required
// //                   />
// //                 </Form.Group>

// //                 <Button variant="danger" type="submit" className="w-100">
// //                   Sign Up
// //                 </Button>
// //               </Form>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Signup;

// import React, { useState } from "react";
// import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom"; // Import Link
// import pathToParadise from "../assets/images/path-to-paradise.jpg";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const response = await axios.post("http://localhost:5000/register", formData, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.status === 201) {
//         alert("Registration successful! Redirecting to login...");
//         navigate("/login");
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || "Error registering user");
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
//               <h2 className="text-center mb-4">Create an Account</h2>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicUsername">
//                   <Form.Label>Username</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="username"
//                     placeholder="Enter username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     placeholder="Enter password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 <Button variant="danger" type="submit" className="w-100">
//                   Sign Up
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 Already have an account? <Link to="/login">Login</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import pathToParadise from "../assets/images/path-to-paradise.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/register", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Error registering user");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} className="d-none d-md-block">
          <img
            src={pathToParadise}
            alt="Scenic View"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Create an Account</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="danger" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
              <div className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;