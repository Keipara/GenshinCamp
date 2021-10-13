const LOAD = 'songs/LOAD';

const load = list => ({
  type: LOAD,
  list,
});


export const getSongs = () => async dispatch => {
  const response = await fetch(`/api/songs/discover`);

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

const songReducer = (state = initialState, action) => {
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

  export default songReducer;
