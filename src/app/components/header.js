import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
import logo from "../../logo.svg";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React.js & React Native Berlin Meetup at Home24
          </h1>
        </header>
        <div className="App-intro">
          <Navbar>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Link to="/speakers">Speakers</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;