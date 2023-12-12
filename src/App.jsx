import Header from "./components/header/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactView from "./components/ContactView";
import ContactUpdate from "./components/ContactUpdate";
import ContactDelete from "./components/ContactDelete";
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

  const handleAddContact = (contact) => {
    const id = contacts.length + 1;
    const newContact = { id, ...contact };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleUpdateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <Router>
      <div>
        <Header />
        <Container fluid>
          <Row>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Col xs={4} md={3}>
                      <ContactForm handleAddContact={handleAddContact} />
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
              <Route
                path='update/:id'
                element={
                  <ContactUpdate
                    contacts={contacts}
                    handleUpdateContact={handleUpdateContact}
                  />
                }
              />
              <Route
                path='delete/:id'
                element={
                  <ContactDelete
                    contacts={contacts}
                    handleDeleteContact={handleDeleteContact}
                  />
                }
              />
            </Routes>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
