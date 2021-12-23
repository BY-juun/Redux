import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";
const UDPATE = "UPDATE";

const addToDo = (text) => {
    return {
        type : ADD,
        text,
    };
}

const deleteToDo = (id) => {
    return {
        type : DELETE,
        id 
    }
}

const updateToDo = (id,text)=>{
    return{
        type : UDPATE,
        id,
        text,
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [{text : action.text, id : Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
            
        default:
            return state;
    }
}
const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;