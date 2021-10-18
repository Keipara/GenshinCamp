import { csrfFetch } from "./csrf";

const LOAD = 'comments/LOAD';
const ADD = 'comments/ADD';
const UPDATE = 'comments/UPDATE'
const REMOVE = 'comments/REMOVE';

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

  export const getComments = (songId) => async dispatch => {
    const response = await fetch(`/api/songs/song/${songId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list))
    }
  };

  const initialState = {
};

export const addComment = (payload) => async(dispatch) => {
    const {body, songId} = payload;
    const response = await csrfFetch(`/api/songs/song/${songId}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({body})
    })

    if (response.ok) {
        const newBody = await response.json();
        dispatch(update(newBody));
    }
}

export const updateComment = (payload) => async(dispatch) => {
    const {body, songId, commentId} = payload;
    const response = await csrfFetch(`/api/songs/song/${songId}/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({body})
    })

    if (response.ok) {
        const newCommentBody = await response.json();
        dispatch(update(newCommentBody));
        return newCommentBody;
    }
  }

export const removeComment = (commentId, songId) => async(dispatch) => {
    const response = await csrfFetch(`/api/songs/song/${songId}/${commentId}`, {
        method: 'delete'
    })

    if (response.ok) {
        const song = await response.json();
    }
}

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
