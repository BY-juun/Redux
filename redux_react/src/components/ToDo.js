import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick, id}) => {
  const onClickBtn = useCallback(() => {
    onBtnClick();
  }, []);
  return (
    <li>
      <Link to = {`/${id}`}>
        {text} <button onClick={onClickBtn}>DEL</button>
      </Link>
    </li>
  );
};

function mapStateToProps(state) {
    return { toDos: state };
  }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
