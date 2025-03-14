// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <Container className="text-center mt-5">
//       <h1>Paths to Paradise</h1>
//       <p>Embracing places you have never been before.</p>
//       <Link to="/login">
//         <Button variant="primary">Read More</Button>
//       </Link>
//     </Container>
//   );
// }

// export default Home;
// import React from "react";
// import { Carousel } from "react-bootstrap";
// import naturalBliss from "../assets/images/natural-bliss.jpg";
// import pathToParadise from "../assets/images/path-to-paradise.jpg";



// const Home = () => {
//   return (
//     <div>
//       <Carousel fade>
//         {/* Slide 1 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carousel-img"
//             src={pathToParadise}// Replace with actual image path
//             alt="Paths to Paradise"
//           />
//           <Carousel.Caption>
//             <h3>Paths to Paradise</h3>
//             <p>Embracing places you have never been before.</p>
//             <button className="btn btn-light">Read More</button>
//           </Carousel.Caption>
//         </Carousel.Item>

//         {/* Slide 2 */}
//         <Carousel.Item>
//           <img
//             className="d-block w-100 carousel-img"
//             src={naturalBliss} // Replace with actual image path
//             alt="Explore Natural Bliss"
//           />
//           <Carousel.Caption>
//             <h3>Explore Natural Bliss</h3>
//             <p>Embracing places you have never been before.</p>
//             <button className="btn btn-light">Read More</button>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Carousel } from "react-bootstrap";
import naturalBliss from "../assets/images/natural-bliss.jpg";
import pathToParadise from "../assets/images/path-to-paradise.jpg";
import intotheWild from "../assets/images/into-to-wild.jpg";
import "../styles.css"; // Ensure to import the styles

const Home = () => {
  return (
    <div className="full-screen-container">
   
      <Carousel fade>
        
        {/* Slide 1 */}
        <Carousel.Item>
          
          <img
            className="d-block carousel-img"
            src={pathToParadise}
            alt="Paths to Paradise"
          />
          <Carousel.Caption>
          
            <h1>Paths to Paradise</h1>
            <p>Embracing places you have never been before.</p>
            <button className="btn btn-outline-light">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={intotheWild}
            alt="Explore Natural Bliss"
          />
          <Carousel.Caption>
            <h1>Into the Wild</h1>
            <p>Embracing places you have never been before.</p>
            <button className="btn btn-outline-light">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src={naturalBliss}
            alt="Into the wild"
          />
          <Carousel.Caption>
            <h1>Natural Bliss</h1>
            <p>Embracing places you have never been before.</p>
            <button className="btn btn-outline-light">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
