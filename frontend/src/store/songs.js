import { csrfFetch } from "./csrf";

const LOAD = 'songs/LOAD';
const ADD = 'songs/ADD';

const load = list => ({
  type: LOAD,
  list,
});

const add = song => ({
  type: ADD,
  song
})

export const getSongs = () => async dispatch => {
  const response = await fetch(`/api/songs/discover`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
};

export const addSong = (file) => async (dispatch) => {
  const formData = new FormData();
  formData.append('file', file);
  console.log(file);

  // for single file
  const res = await csrfFetch(`/api/songs/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const newSong = await res.json();
  dispatch(add(newSong));
};

const initialState = {
};



const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSongs = {};
      action.list.forEach(song => {
        allSongs[song.id] = song;
      });
      return allSongs;
    }
    case ADD:
      return { ...state, user: action.payload };
      default:
      return state;
    }
  }

  export default songReducer;
