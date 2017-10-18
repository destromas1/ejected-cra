import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
import logo from "../logo.svg";
import "./App.css";
import Home from "./components/home";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
