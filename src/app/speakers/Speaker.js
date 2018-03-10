import React, { Component } from "react";

class Speaker extends Component {

  render() {
    return <div>{this.props.data.name}</div>;
  }
}

export default Speaker;
