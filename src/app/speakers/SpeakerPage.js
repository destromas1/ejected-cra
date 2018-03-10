import React, { Component } from "react";
import SpeakerList from "./SpeakerList";
import Header from "../components/header";
import ErrorBoundary from "../ErrorBoundary";

class SpeakerPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Today's Speakers</h1>
        <ErrorBoundary>
          <SpeakerList />
        </ErrorBoundary>
      </div>
    );
  }
}
export default SpeakerPage;
