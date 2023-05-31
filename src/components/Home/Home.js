import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/img/chihiro waving.png";
import Type1 from "./Type1";
import { CgFileDocument } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type1/>  
              </div>
    
              <h1 className="heading-name">
                  <br/>
                  I'm
                  <strong className="main-name"> Anh Duong</strong>
                  ☘️
                </h1>
            </Col> 

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
