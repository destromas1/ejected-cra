import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { find } from "lodash";
import Header from "../components/header";
import { getSpeakers } from "../../core/actions/speakers";
import Speaker from "./Speaker";

class SpeakerList extends Component {
  constructor(props) {
    super(props);
    this.changeSpeakerData = this.changeSpeakerData.bind(this);
  }

  componentDidMount() {
    this.props.fetchSpeakers();
  }

  changeSpeakerData(id) {
    console.log("id", id);

    const { speakers } = this.props;

    const speaker = find(speakers, { id: id });

    speaker.name = "Masoom";
    speaker.label = "Yes New label";

    console.log(speaker);
    console.log(this.props.speakers);

    

    // user = {
    //   ...user,
    //   type: objectTypes.user,
    //   label: user.fullName
    // };
    // users.push(user);
  }

  render() {
    const { speakers } = this.props;

    const elements =
      speakers &&
      speakers.map((speaker, i) => {
        return (
          <Speaker
            changeSpeakerData={this.changeSpeakerData}
            key={speaker.id}
            data={speaker}
          />
        );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeakerList);
