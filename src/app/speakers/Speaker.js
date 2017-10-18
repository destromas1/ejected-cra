import React, { Component } from "react";
import PropTypes from "prop-types";

class Speaker extends Component {

  render() {
    return this.props.data.name;
  }
}

export default Speaker;
