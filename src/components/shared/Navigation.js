import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, /*Toast, Button*/ } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "./logo.png";
import swal from 'sweetalert'

import AuthService from "../../service/auth.service";
import UserService from "../../service/users.service";

import "./Navigation.css";
const Navigation = (props) => {

  const authService = new AuthService();
  const userService = new UserService();
  const history = useHistory()


  const logOut = () => {
    authService
      .logout()
      .then((res) => {
        props.storeUser(undefined)
        history.push('/')
      })
      .catch((err) => console.log(err));
  }


  const deleteTheUser = () => {
    userService.deleteUser(props.loggedUser._id)
      .then((res) => {
        props.storeUser(undefined)
        history.push("/")
      })
      .catch((err) => console.log(err))
  }

  const confirmDelete = () => {
    swal({
      title: "Mensaje de confirmación",
      text: "¿Estás segur@ de que quieres eliminar tu perfil?",
      icon: "warning",
      buttons: ["No", "Sí"]
    })
      .then(answer => {

        if (answer) {
          deleteTheUser()
          swal({
            text: "El usuario se ha eliminado con éxito",
            icon: "success"
          })
        }
      })
  }

  return (
    <Navbar variant="dark" expand="md" /*sticky="top"*/ className="nav-menu">
      <Link to="/">
        <Navbar.Brand>
          <img
            alt="Logotipo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          EncuentraUnMúsico
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link style={{ textDecoration: "none" }} to="/">
            <Nav.Link as="div">Inicio</Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/usuarios">
            <Nav.Link as="div">Músicos</Nav.Link>
          </Link>
          {props.loggedUser ? (
            <NavDropdown
              title={`Hola, ${props.loggedUser.username}`}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="nav-dropdown">
                <Link
                  to="/editar-perfil"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Editar perfil
                </Link>
              </NavDropdown.Item>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavDropdown.Item className="nav-dropdown" onClick={logOut}>
                  Cerrar sesión
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="nav-dropdown"
                onClick={confirmDelete}
                style={{ textDecoration: "none" }}
              >
                Eliminar perfil
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to="/registro">
                <Nav.Link as="div">Registro</Nav.Link>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/iniciar-sesion">
                <Nav.Link as="div">Iniciar sesión</Nav.Link>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default Navigation;

