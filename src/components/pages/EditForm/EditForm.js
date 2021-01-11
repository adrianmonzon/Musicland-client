import React, { Component } from "react";
import UsersService from "./../../../service/users.service";


import "./EditForm.css";

import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      name: this.props.user.name,
      description: this.props.user.description,
      instrument: this.props.user.instrument,
      age: this.props.user.age,
      email: this.props.user.email,
    };
    this.usersService = new UsersService();
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();

    this.usersService
      .updateUser(this.props.user._id, this.state)
      .then((theLoggedInUser) => {
        this.props.storeUser(theLoggedInUser.data);
        this.props.history.push("/usuarios");
      })
      .catch((err) => console.log("Error", err));
  };



  render() {
    return (
      <section className="edit">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Editar perfil</h1>
              <hr className="hr"/>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. amadeus1756"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Nombre y apellidos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej. Wolfgang Amadeus Mozart"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
               
                <Form.Group controlId="description">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="instrument">
                  <Form.Label>Instrumento</Form.Label>
                  <Form.Control
                    as="select"
                    name="instrument"
                    value={this.state.instrument}
                    onChange={this.handleInputChange}
                  >
                    <option>Seleccionar</option>
                    <option>Guitarra eléctrica</option>
                    <option>Guitarra española</option>
                    <option>Batería</option>
                    <option>Bajo</option>
                    <option>Piano</option>
                    <option>Voz</option>
                    <option>Trompeta</option>
                    <option>Acordeón</option>
                    <option>Saxofón</option>
                    <option>Trombón</option>
                    <option>Tuba</option>
                    <option>Gaita</option>
                    <option>Violín</option>
                    <option>Clarinete</option>
                    <option>Violonchelo</option>
                    <option>Contrabajo</option>
                    <option>Fagot</option>
                    <option>Ukelele</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="age">
                  <Form.Label>Edad</Form.Label> <small>(Mínimo 16 años)</small>
                  <Form.Control
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Button variant="light" type="submit">
                  Guardar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default EditForm;
