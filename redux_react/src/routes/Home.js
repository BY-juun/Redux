import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addToDo(text);
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
        {toDos.map((toDo) => (
          <ToDo {...toDo}  key = {toDo.id}/>
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
