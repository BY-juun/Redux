import React, { useCallback, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators, addToDo } from "../store";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);
  console.log(state);
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addToDo(text));
      setText("");
    },
    [text]
  );

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChangeText} />
        <button>Submit</button>
      </form>
      <ul>
        {state.map((toDo) => (
          <ToDo text = {toDo.text}  key = {toDo.id}/>
        ))}
      </ul>
    </>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(null, mapDispatchToProps)(Home);
