import { csrfFetch } from "./csrf";

const LOAD = 'songs/LOAD';
const ADD = 'songs/ADD';
const UPDATE = 'songs/UPDATE'
const REMOVE = 'songs/REMOVE';

const load = list => ({
  type: LOAD,
  list,
});

const add = song => ({
  type: ADD,
  song
})

const update = song => ({
  type: UPDATE,
  song
})

const remove = songId => ({
  type: REMOVE,
  songId
})

export const getSongs = () => async dispatch => {
  const response = await fetch(`/api/songs/discover`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
};

export const addSong = (data) => async (dispatch) => {
  const { title, songFile } = data;
  const formData = new FormData();
  formData.append('file', songFile);
  formData.append('title', title);

  // for single file
  const res = await csrfFetch(`/api/songs/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData
  });

  const newSong = await res.json();
  dispatch(add(newSong));
};

export const updateSong = (payload) => async(dispatch) => {
  const {title, songId} = payload;
  const response = await csrfFetch(`/api/songs/song/${songId}`, {
      method: 'PUT',
      body: JSON.stringify({title})
  })

  if (response.ok) {
      const newSongTitle = await response.json();
      dispatch(update(newSongTitle));
      return newSongTitle;
  }
}

export const removeSong = (songId) => async(dispatch) => {
  const response = await csrfFetch(`/api/song/song/${songId}`, {
      method: 'delete'
  });

  if (response.ok) {
      dispatch(removeSong(songId))
  }
}

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
      return { ...state, [action.song.id]:action.song};
    case UPDATE: {
        delete state[action.song.id];
        state[action.song.id] = action.song
        return state;
    }
    case REMOVE:{
            delete state[action.id];
            return state;
    }
      default:
      return state;
    }
  }

  export default songReducer;
