import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { deleteCardFB } from "./redux/modules/card";
import { useDispatch, useSelector } from "react-redux";

const DeleteBtn = props => {
  const dispatch = useDispatch();
  const num = props.num;
  const card_list = useSelector(state => state.card.list);
  
  return (
    <>
      <span
        className="delete"
        onClick={() => {
          dispatch(deleteCardFB(card_list[num].id));
        }}
      >
        <AiFillDelete />
      </span>
    </>
  );
};

export default DeleteBtn;
