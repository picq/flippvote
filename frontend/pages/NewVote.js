import { Container, Form, Button } from "react-bootstrap";
import { useRef } from "react";

const NewVote = () => {
  const describeOption1 = useRef();
  const describeOption2 = useRef();
  const titlePoll = useRef();

  return (
    <Container sx={{ marginY: 30 }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Describe first option</Form.Label>
          <Form.Control
            ref={describeOption1}
            placeholder="Enter option #1"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Describe second option</Form.Label>
          <Form.Control
            ref={describeOption2}
            placeholder="Enter option #2"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            ref={titlePoll}
            placeholder="Enter title vote"
          ></Form.Control>
        </Form.Group>
        <Button variant="primary">Add vote</Button>
      </Form>
    </Container>
  );
};

export default NewVote;
