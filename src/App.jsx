// Import necessary components and libraries
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

// Main App component
export default function App() {
  // State for storing contacts, initialized from local storage or as an empty array
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  // Effect hook to update local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Function to handle adding a new contact
  const handleAddContact = (contact) => {
    const id = contacts.length + 1;
    const newContact = { id, ...contact };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Function to handle updating an existing contact
  const handleUpdateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  // Function to handle deleting a contact
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Render the main app
  return (
    <Router>
      <div>
        <Header />
        <Container fluid>
          <Row>
            {/* Routes will be defined here */}
            <Routes>
              {/* The path for the home page is '/' */}
              <Route
                path='/'
                element={
                  <>
                    {/* The home page displays the ContactForm and ContactList components side by side' */}
                    <Col xs={4} md={3}>
                      <ContactForm handleAddContact={handleAddContact} />
                    </Col>
                    <Col xs={8} md={9}>
                      <ContactList contacts={contacts} />
                    </Col>
                  </>
                }
              />
              {/* ...VIEW-PAGE...*/}
              {/*  The path for the view page includes the id of the contact to be view.*/}
              {/*  The view page displays the details of a single contact */}
              <Route
                path='view/:id'
                element={<ContactView contacts={contacts} />}
              />
              {/* ...UPDATE-PAGE...*/}
              {/* The path for the update page includes the id of the contact to be updated*/}
              {/* The update page displays a form to update the details of a contact*/}
              <Route
                path='update/:id'
                element={
                  <ContactUpdate
                    contacts={contacts}
                    handleUpdateContact={handleUpdateContact}
                  />
                }
              />
              {/* The path for the delete page includes the id of the contact to be deleted*/}
              {/* The delete page asks for confirmation before deleting a contact*/}
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
