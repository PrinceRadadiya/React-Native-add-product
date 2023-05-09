import {ADD_DATA, REMOVE_PRO, SELECT_USER} from './Constant';
const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.data];

    case REMOVE_PRO:
      let result = state.filter(item => {
        return item.id != action.data;
      });
      return [...result];
    case SELECT_USER:
      return [...state, action.data];
    default:
      return state;
  }
};
