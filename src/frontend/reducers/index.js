const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
    { const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        myList: [...state.myList, action.payload],
      }; }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
        searchResult: [],
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item._id === action.payload) ||
          state.originals.find((item) => item._id === action.payload) ||
          [],
      };
    case 'GET_VIDEO_SEARCH':
    { if (action.payload === '') return { ...state, searchResult: [] };
      const list = [...state.trends, ...state.originals];

      return {
        ...state,
        searchResult: list.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      }; }
    default:
      return state;
  }
};

export default reducer;
