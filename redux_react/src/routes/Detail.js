import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({toDos}) => {
    const id = useParams();
    console.log(id);
    return(
        "hello"
    );
};


  
  export default Detail;
