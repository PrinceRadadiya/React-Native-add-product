import {ADD_DATA, REMOVE_PRO, USER_LIST,SELECT_USER} from './Constant';

export function addTOcart(item) {
  return {
    type: ADD_DATA,
    data: item,
  };
}

export function removeTOcart(item) {
  return {
    type: REMOVE_PRO,
    data: item,
  };
}
export function getuserList() {
  return {
    type: USER_LIST,
  };
}



