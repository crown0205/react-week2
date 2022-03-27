import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { deleteCard } from "./redux/modules/card";
import { useDispatch } from "react-redux";

const DeleteBtn = props => {
  const dispatch = useDispatch();
  const num = props.num;
  // console.log(num);
  return (
    <>
      <span
        className="delete"
        onClick={() => {
          console.log("누른 버튼", num);
          dispatch(deleteCard(num));
        }}
      >
        <AiFillDelete />
      </span>
    </>
  );
};

export default DeleteBtn;
