// import { csrfFetch } from "./csrf";

const LOAD = 'comments/LOAD';

const load = list => ({
    type: LOAD,
    list,
  });

  export const getComments = (songId) => async dispatch => {
    const response = await fetch(`/api/songs/song/${songId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list))
    }
  };

  const initialState = {
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const songComments = {};
        action.list.forEach(comment => {
          songComments[comment.id] = comment;
        });
        return songComments;
      }
        default:
        return state;
      }
    }

    export default commentReducer;
