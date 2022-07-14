import { Container, Row, Col, Button } from "react-bootstrap";

const PollingStation = () => {
  return (
    <Container sx={{ marginY: 30 }}>
      <Row>
        <Col className="d-flex justify-content-center">
          <div>Option #1</div>
          <Button>Vote</Button>
        </Col>
        <Col className="d-flex justify-content-center">
          What's better option for you?
        </Col>
        <Col className="d-flex justify-content-center">
          <div>Option #2</div>
          <Button>Vote</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PollingStation;
