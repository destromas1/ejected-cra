import React, { Component } from 'react';
import PropTypes from "prop-types";
// import {concatStr} from "../../core/utilities/utils";
import {concatStr} from "Utilities/utils";
import Header from "./header";

const data = "This is a string";

class Home extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        {concatStr("Shahjada")}
      </div>
    );
  }
}

export default Home;
