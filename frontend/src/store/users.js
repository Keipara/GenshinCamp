const LOAD = 'users/LOAD';

const load = list => ({
  type: LOAD,
  list,
});


export const getUsers = () => async dispatch => {
  const response = await fetch(`/api/users/discover`);

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list))
  }
};

const initialState = {
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allUsers = {};
      action.list.forEach(user => {
        allUsers[user.id] = user;
      });
      return allUsers;
    }
      default:
      return state;
    }
  }

  export default userReducer;
