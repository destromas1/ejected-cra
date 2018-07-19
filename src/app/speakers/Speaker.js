import React, { Component } from "react";

class Speaker extends Component {

  render() {
    return <div onClick={()=> this.props.changeSpeakerData(this.props.data.id)}>{this.props.data.name}</div>;
  }
}

export default Speaker;
