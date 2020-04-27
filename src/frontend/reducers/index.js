const reducer = (state, action) => {
  const exists = state.favorites.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case 'SET_FAVORITE':
      return exists
        ? state
        : {
            ...state,
            favorites: [...state.favorites, action.payload],
          };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (items) => items.id !== action.payload
        ),
      };

    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'CREATE_PLAYER_REQUEST':
      return {
        ...state,
        player: action.payload,
      };

    case 'GET_PLAYER_SOURCE':
      return {
        ...state,
        playing:
          state.female.find((item) => item._id === action.payload) ||
          state.male.find((item) => item._id === action.payload) ||
          [],
      };

    case 'SEARCH_REQUEST':
      if (action.payload === '' || !action.payload)
        return { ...state, search: [] };
      return {
        ...state,
        search: state.female
          .concat(state.male)
          .filter((item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
      };

    default:
      return state;
  }
};

export default reducer;
