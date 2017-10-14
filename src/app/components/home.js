import React, { Component } from 'react';
// import {concatStr} from "../../core/utilities/utils";
import {concatStr} from "Utilities/utils";

class Home extends Component {
  render() {
    return (
      <div>
        {concatStr("Shahjada")}
      </div>
    );
  }
}

export default Home;

