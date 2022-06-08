import React from "react";
import Header from "./sections/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./sections/Home";
import About from "./sections/About";
import { Row, Col, Container } from "react-bootstrap";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Review from "./sections/Review";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <div style={{ background: "#F9F9F9", zIndex: "100" }}>
          <Container>
            <Row>
              <Col md={6}>
                <Education />
              </Col>
              <Col md={6}>
                <Experience />
              </Col>
            </Row>
          </Container>
          <Review />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
