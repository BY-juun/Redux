import {createStore} from 'redux';

const add = document.getElementById("Add");
const minus = document.getElementById("Minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countReducer = (count = 0, action) => {
  switch(action.type){
    case ADD :
        return count + 1;
    case MINUS :
        return count - 1;
    default :
        return count;
  }
};

const countStore = createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type : ADD});
}

const handleMinus = () => {
  countStore.dispatch({type : MINUS});
}

add.addEventListener("click",()=>{
  handleAdd();
})

minus.addEventListener("click",()=>{
  handleMinus();
})