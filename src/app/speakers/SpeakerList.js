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
    const { speakers } = this.props;

    const elements =
      speakers &&
      speakers.map((speaker, i) => {
        return <Speaker key={speaker.id} data={speaker} />;
      });

    return <div>{elements}</div>;
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
