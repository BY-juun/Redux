import { createStore } from "redux";

export const ADD = "ADD";
const DELETE = "DELETE";
const UDPATE = "UPDATE";

export const addToDo = (data) => {
  return {
    type: ADD,
    data,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
console.log("dd");
const updateToDo = (id, text) => {
  return {
    type: UDPATE,
    id,
    text,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.data, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);

    default:
      return state;
  }
};
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
