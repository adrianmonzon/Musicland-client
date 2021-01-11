import React, { Component } from "react";
import UsersService from "./../../../service/users.service";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import UserCard from './User-card';
import Filter from "./Filter";
import ListMap from './List-Map'

import "./Users-list.css";
import "./User-card.css";

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.usersService = new UsersService();
  }

  componentDidMount = () => {
    this.getAllUsers()
  };

  getAllUsers = () => {
    this.usersService
      .getUsers()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
  }

  filterByInstrument = (instrument) => {
    if (instrument === 'all') this.getAllUsers()
    else {
      this.usersService
        .filterByInstrument(instrument)
        .then((res) => this.setState({ users: res.data }))
        .catch((err) => console.log(err))
    }
  };

  render() {
    return (
      <section className="users-list">
        <Container className="list-container">
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="list-top">
              <Filter filterUsers={this.filterByInstrument} />
            </Col>
          </Row>
          <Row>
            {this.state.users ? (
              this.state.users.map((elm) => <UserCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />)
            ) : (
                <Spinner animation="border" variant="light" />
              )}
          </Row>
          <ListMap users={this.state.users} />
        </Container>
      </section>
    );
  }
}

export default UsersList;
