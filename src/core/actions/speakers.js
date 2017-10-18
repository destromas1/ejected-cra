const API_SERVER = "http://localhost:9000";

export function saveSpeakers(speakers) {
  return {
    type: "SAVE_SPEAKERS",
    payload: speakers
  };
}

export const getSpeakers = () => (dispatch, getState) => {
  const state = getState();

  return fetch(`${API_SERVER}/speakers`)
    .then(
      response => response.json(),
      error => console.log("An error occured.", error)
    )
    .then(speakers => {
      console.log("speakers", speakers);
      dispatch(saveSpeakers(speakers));
    });
};
