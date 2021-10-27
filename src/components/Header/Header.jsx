import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.scss';

export default function Header() {
  return (
    <Navbar as="header" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Test Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Questions list</Nav.Link>
            <Nav.Link href="#action2">Create new question</Nav.Link>
            <Nav.Link href="#" disabled>
              Some disabled link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search for questions..."
              className="me-2"
              aria-label="Search for questions..."
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
