import Header from "./components/header/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={4} md={3}>
            <ContactForm />
          </Col>
          <Col xs={8} md={9}>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
