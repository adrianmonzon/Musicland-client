import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'

import Home from './pages/index/Home'
import UsersList from './pages/Users-list/Users-list'
import UserDetails from './pages/User-details/User-details'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Navigation from './shared/Navigation'
import EditForm from './pages/EditForm/EditForm'
import FooterPagePro from './layout/Footer';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: undefined }
    this.authServices = new AuthServices()
  }

  componentDidMount = () => {

    this.authServices   // comprobar si el usuario tenia sesion iniciada de antes
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

  render() {

    return (
      <>
        {this.state.loggedInUser ? <Navigation {...this.props} loggedUser={this.state.loggedInUser} storeUser={this.setTheUser} /> : <Navigation />}

        <Switch>

          <Route path="/" exact render={() => this.state.loggedInUser ? <Redirect to="/usuarios" /> : <Home />} />
          <Route path="/usuarios" exact render={() => <UsersList loggedUser={this.state.loggedInUser} />} />
          <Route path="/usuarios/:user_id" render={props => <UserDetails {...props} loggedUser={this.state.loggedInUser} />} />
          <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
          <Route path="/iniciar-sesion" render={props => <Login storeUser={this.setTheUser} {...props} />} />
          <Route path="/editar-perfil" render={props => this.state.loggedInUser ? <EditForm {...props} storeUser={this.setTheUser} user={this.state.loggedInUser} /> : <Redirect to="/iniciar-sesion" />} />

        </Switch>
        <FooterPagePro />
      </>
    );
  }
}

export default App;
