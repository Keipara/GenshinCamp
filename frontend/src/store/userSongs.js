const LOAD = 'songs/LOAD';

const load = list => ({
  type: LOAD,
  list,
});


export const getUserSongs = (userId) => async dispatch => {
  const response = await fetch(`/api/songs/artist/${userId}`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
};

const initialState = {
};

// const sortList = (list) => {
//   return list.sort((pokemonA, pokemonB) => {
//     return pokemonA.no - pokemonB.no;
//   }).map((pokemon) => pokemon.id);
// };

const userSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allSongs = {};
      action.list.forEach(song => {
        allSongs[song.id] = song;
      });
      return allSongs;
    }
      default:
      return state;
    }
  }

  export default userSongsReducer;
