import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "../components/header";
import { getSpeakers } from "../../core/actions/speakers";
import Speaker from "./Speaker";

class SpeakerList extends Component {
  componentDidMount() {
    this.props.fetchSpeakers();
  }

  render() {
    let elements;

    if (this.props.speakers) {
      elements = this.props.speakers.map((speaker, i) => {
        return (
          <div>
            <Speaker key={speaker.id} data={speaker} />
          </div>
        );
      });
    }

    return (
      <div className="App">
        <Header />
        <h1>Today's Speakers</h1>
        {elements}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let speakers;
  if (state.speakers.list.length > 0) {
    speakers = state.speakers.list;
  }
  return {
    speakers
  };
}

const mapDispatchToProps = dispatch => ({
  fetchSpeakers: () => dispatch(getSpeakers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerList);
