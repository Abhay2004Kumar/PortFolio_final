import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast"; // Import react-hot-toast
import Particle from "../Particle";
import styles from "./Contact.module.css"; // Import the CSS module

const formId = process.env.REACT_APP_FORMSPREE;

function Contact() {
  const [state, handleSubmit] = useForm(formId);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit(e);
  };

  // Reset form and show toast on successful submission
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thanks for contacting!"); // Show toast on success
      setFormFields({ name: "", email: "", message: "" }); // Clear form fields
    }
  }, [state.succeeded]); // Dependency on state.succeeded to trigger effect

  return (
    <div className={styles["contact-page"]}> {/* Apply CSS module class */}
      <Container className={styles["contact-container"]}> {/* Apply CSS module class */}
        <Row className="justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <Col md={6} className={styles["form-wrapper"]}> {/* Apply CSS module class */}
            <h1 className={styles["contact-title"]}>Contact Me</h1> {/* Apply CSS module class */}
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name" // Formspree expects this name field
                  value={formFields.name}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email" // Formspree expects this email field
                  value={formFields.email}
                  onChange={handleFormChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>

              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your message"
                  name="message" // Formspree expects this message field
                  value={formFields.message}
                  onChange={handleFormChange}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className={styles["contact-btn"]} disabled={state.submitting}>
                Send Message
              </Button>
            </Form>
            <Particle />
            <Toaster /> {/* Toast container to display notifications */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
