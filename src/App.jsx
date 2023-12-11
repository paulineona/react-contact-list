import Header from "./components/header/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactView from "./components/ContactView";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    // Generate a unique ID for the new contact
    const id = Date.now().toString();

    // Add the ID to the contact object
    const newContact = { id, ...contact };

    // Add the new contact to the list
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  
  return (
    <Router>
      <div>
        <Header />
        <Container>
          <Row>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Col xs={4} md={3}>
                      <ContactForm addContact={addContact} />
                    </Col>
                    <Col xs={8} md={9}>
                      <ContactList contacts={contacts} />
                    </Col>
                  </>
                }
              />
              <Route
                path='view/:id'
                element={<ContactView contacts={contacts} />}
              />
            </Routes>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
