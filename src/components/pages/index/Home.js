import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100 home-img"
            src="https://images.pexels.com/photos/4670880/pexels-photo-4670880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Container>
          <Carousel.Caption className="carousel-caption-a">
            <h1 className="home-title">MU𝄞ICLAND</h1>
            <h5 className="home-h5">Busca y encuentra músicos de tu alrededor</h5>
          </Carousel.Caption>
          </Container>
          <Carousel.Caption>
            <h3 className="home-h3">Echa un vistazo a la lista completa</h3>
            <Link to="/usuarios" className="btn btn-outline-light home-button">Ver lista</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <Carousel.Caption className="carousel-caption-a">
            <h1 className="home-title">MU𝄞ICLAND</h1>
            <h5 className="home-h5">Busca y encuentra músicos de tu alrededor</h5>
          </Carousel.Caption>
          <img
            className="d-block w-100 home-img"
            src="https://images.unsplash.com/photo-1506031186041-3af30076d87f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="home-h3">Regístrate y comienza tu aventura musical</h3>
            <Link to="/registro" className="btn btn-outline-light home-button">Registro</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <Carousel.Caption className="carousel-caption-a">
            <h1 className="home-title">MU𝄞ICLAND</h1>
            <h5 className="home-h5">Busca y encuentra músicos de tu alrededor</h5>
          </Carousel.Caption>
          <img
            className="d-block w-100 home-img"
            src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="home-h3">Inicia sesión y contacta con tus futuros compañeros</h3>
            <Link to="/iniciar-sesion" className="btn btn-outline-light home-button">Iniciar sesión</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Home
