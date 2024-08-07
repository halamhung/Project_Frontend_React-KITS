import React from "react";
import { Col, Container, Row, List } from "reactstrap";
import "./footer.css";
export default function Footer() {
  return <>

    <Container className="footer">
      <Row>
        <Col lg={3}>
          <List>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
          </List>
        </Col>
        <Col lg={3}>
          <List>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
          </List>
        </Col>
        <Col lg={3}>
          <List>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
          </List>
        </Col>
        <Col lg={3}>
          <List>
            <h3>Company</h3>
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Blog</li>
          </List>
        </Col>
      </Row>
    </Container>

  </>;
}
