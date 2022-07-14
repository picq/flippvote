import { Navbar, Container, Nav } from "react-bootstrap";
import { login, logout } from "../assets/js/near/utils";

const MenuNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">FlippVote</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/new-vote">New Vote</Nav.Link>
          <Nav.Link onClick={window.accountId === "" ? login : logout}>
            {window.accountId === "" ? "Login" : window.accountId}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MenuNav;
