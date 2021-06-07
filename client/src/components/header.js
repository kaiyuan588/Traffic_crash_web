import { Container, Row, Col } from 'react-bootstrap';
import "./header.css";

export default function Header() {
  return (
    <Container fluid>
      <Row className="algin-left">
        <Col ><img alt="icon" src="../uf.png" width="60" height="60" /></Col>
        <Col className="margin-top" xs={11}><h2>Florida Traffic Crashes Dashboard</h2></Col>
      </Row>
    </Container>
  );
}