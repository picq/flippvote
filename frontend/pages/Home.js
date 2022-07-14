import { Table, Container, Button, Tab } from "react-bootstrap";

const Home = () => {
  const sampleData = ["Uep vs Uam", "Uep vs SGH"];

  return (
    <Container>
      <Table style={{ margin: 30 }} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((sample, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{sample}</td>
              <td>
                <Button>Go to vote</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
