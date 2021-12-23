import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({toDos}) => {
    const id = useParams();
    console.log(id);
    return(
        "hello"
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Detail);
