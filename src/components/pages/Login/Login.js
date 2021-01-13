import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import './Login.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/usuarios')        // redirección JS
            })
            .catch(err => console.log({ err }))
    }


    render() {

        return (
            
            <section className="login">
            <Container className="login-container">

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>Iniciar sesión</h1>
                        <hr className="login-hr"/>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="w-50" controlId="username">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group className="w-50" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button className="loginButton" variant="light" type="submit">Iniciar sesión</Button>
                        </Form>
                            <small>¿No registrad@? Hazlo <Link to="/registro" className="loginLink">aquí</Link></small>
                    </Col>
                </Row>
            </Container>
            </section>
        )
    }
}

export default Login